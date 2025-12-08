"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { UserData } from "@/utils/interfaces";
import LogoutButton from "./LogoutButton";

interface AdminNavbarProps {
  currentUser: UserData;
}

export default function AdminNavbar({ currentUser }: AdminNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const sidebarmenu = [
    { path: "/dashboard/admin", name: "Dashboard", icon: <Icon icon="solar:pie-chart-outline" width={20} /> },
    { path: "/dashboard/admin/user", name: "User", icon: <Icon icon="solar:user-linear" width={20} /> },
    { path: "/dashboard/admin/withdraw", name: "Withdraw", icon: <Icon icon="solar:banknote-2-linear" width={20} /> },
    { path: "/dashboard/admin/product", name: "Product", icon: <Icon icon="solar:bag-heart-linear" width={20} /> },
    { path: "/dashboard/admin/invoice", name: "Invoice", icon: <Icon icon="ri:currency-fill" width={20} /> },
    { path: "/dashboard/admin/order", name: "Order", icon: <Icon icon="akar-icons:cart" width={20} /> },
    { path: "/dashboard/admin/vendor", name: "Vendor", icon: <Icon icon="iconoir:bank" width={20} /> },
    { path: "/dashboard/admin/settings", name: "Settings", icon: <Icon icon="solar:settings-linear" width={20} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="h-16 flex items-center justify-between px-4 lg:px-6">
        {/* Left: Mobile Menu Toggle & Title */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <span className="font-bold text-gray-900 truncate max-w-[150px]">
            {currentUser?.personal_information?.firstName}
          </span>
        </div>

        {/* Desktop: Title */}
        <div className="hidden lg:flex items-center">
          <span className="font-bold text-gray-900">
            {currentUser?.personal_information?.firstName}{" "}
            {currentUser?.personal_information?.lastName}
          </span>
        </div>

        {/* Right: Logout */}
        <div className="flex items-center gap-4">
          <LogoutButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 top-16 w-full h-full bg-white border-t border-gray-100 shadow-xl overflow-y-auto z-40">
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
                  <span className={isActive ? "text-blue-600" : "text-gray-400"}>{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
