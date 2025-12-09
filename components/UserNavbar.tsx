"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";
import LogoutButton from "./LogoutButton";

interface UserNavbarProps {
  currentUser: UserData;
  settings: settingsData[];
}

export default function UserNavbar({ currentUser, settings }: UserNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const sidebarmenu = [
    {
      path: "/dashboard/user",
      name: "Dashboard",
      icon: <Icon icon="solar:pie-chart-outline" width={20} />,
    },
    {
      path: "/dashboard/user/mining",
      name: "Mining",
      icon: <Icon icon="solar:layers-linear" width={20} />,
    },
    {
      path: "/dashboard/user/rigs",
      name: "Rigs",
      icon: <Icon icon="solar:cpu-outline" width={20} />,
    },
    {
      path: "/dashboard/user/withdraw",
      name: "Withdraw",
      icon: <Icon icon="ri:currency-fill" width={20} />,
    },
    {
      path: "/dashboard/user/settings",
      name: "Settings",
      icon: <Icon icon="solar:settings-linear" width={20} />,
    },
    {
      path: "/dashboard/user/invoice",
      name: "Invoice",
      icon: <Icon icon="basil:invoice-outline" width={20} />,
    },
    {
      path: "/dashboard/user/product",
      name: "Product",
      icon: <Icon icon="solar:bag-heart-linear" width={20} />,
    },
  ];

  return (
  <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 h-16">
    <div className="h-full p-4 lg:p-6 flex items-center justify-between">
      {/* --- Left Side: Mobile Toggle & Title --- */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <span className="font-bold text-gray-900 truncate max-w-[150px]">
          {currentUser?.personal_information?.firstName}
        </span>
      </div>

      {/* --- Right Side: Balances & Logout --- */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Gross Balance Pill (Desktop) */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full transition-all hover:bg-amber-100 cursor-default">
          <div className="p-1 bg-amber-100 rounded-full text-amber-600">
            <Icon icon="solar:wallet-outline" width={16} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] uppercase font-bold text-amber-600/70 tracking-wider">
              Gross
            </span>
            <span className="text-sm font-bold text-gray-900">
              {currencyConvert(
                currentUser?.grossBalance,
                settings?.[0]?.btc ?? 0
              )}{" "}
              <span className="text-xs font-normal text-gray-500">BTC</span>
            </span>
          </div>
        </div>

        {/* Live Balance Pill (Desktop) */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full transition-all hover:bg-emerald-100 cursor-default">
          <div className="p-1 bg-emerald-100 rounded-full text-emerald-600">
            <Icon icon="solar:chart-2-linear" width={16} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] uppercase font-bold text-emerald-600/70 tracking-wider">
              Live
            </span>
            <span className="text-sm font-bold text-gray-900">
              {currencyConvert(
                currentUser?.balance,
                settings?.[0]?.btc ?? 0
              )}{" "}
              <span className="text-xs font-normal text-gray-500">BTC</span>
            </span>
          </div>
        </div>

        {/* Logout Button */}
        <LogoutButton />
      </div>
    </div>

    {/* --- Mobile Dropdown Menu --- */}
    {isMobileMenuOpen && (
      <div className="lg:hidden fixed left-0 w-full h-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto">
        <nav className="flex flex-col p-4 gap-1">
          {sidebarmenu.map((item) => {
            const isActive = pathname.includes(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span
                  className={isActive ? "text-blue-600" : "text-gray-400"}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}

          {/* Wallet Overview */}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase px-2">
              Wallet Overview
            </p>

            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <Icon icon="solar:wallet-outline" className="text-amber-500" />
                  Gross Balance
                </span>
                <span className="font-bold text-gray-900 text-sm">
                  {currencyConvert(
                    currentUser?.grossBalance,
                    settings?.[0]?.btc ?? 0
                  )}{" "}
                  BTC
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <Icon icon="solar:chart-2-linear" className="text-emerald-500" />
                  Live Earnings
                </span>
                <span className="font-bold text-gray-900 text-sm">
                  {currencyConvert(
                    currentUser?.balance,
                    settings?.[0]?.btc ?? 0
                  )}{" "}
                  BTC
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )}
  </header>
);

}
