"use client";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { UserData } from "@/utils/interfaces";

interface AdminSidebarProps {
  currentUser: UserData;
}

export default function AdminSidebar({ currentUser }: AdminSidebarProps) {
  const pathname = usePathname();

  const sidebarmenu = [
    { path: "/dashboard/admin", name: "Dashboard", icon: <Icon icon="solar:pie-chart-outline" width="20" height="20" /> },
    { path: "/dashboard/admin/user", name: "User", icon: <Icon icon="solar:user-linear" width="20" height="20" /> },
    { path: "/dashboard/admin/withdraw", name: "Withdraw", icon: <Icon icon="solar:banknote-2-linear" width="20" height="20" /> },
    { path: "/dashboard/admin/product", name: "Product", icon: <Icon icon="solar:bag-heart-linear" width="20" height="20" /> },
    { path: "/dashboard/admin/invoice", name: "Invoice", icon: <Icon icon="ri:currency-fill" width="20" height="20" /> },
    { path: "/dashboard/admin/order", name: "Order", icon: <Icon icon="akar-icons:cart" width="20" height="20" /> },
    { path: "/dashboard/admin/vendor", name: "Vendor", icon: <Icon icon="iconoir:bank" width="20" height="20" /> },
    { path: "/dashboard/admin/settings", name: "Settings", icon: <Icon icon="solar:settings-linear" width="20" height="20" /> },
  ];

  return (
    <aside className="hidden lg:flex w-72 flex-col h-screen bg-white border-r border-gray-100 sticky top-0 z-50">
      
      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b border-gray-50 w-full">
        <Link href="/">
          <Image src={logo} alt="Admin Panel" className="h-auto w-full" priority />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {sidebarmenu.map((item) => {
          const isActive = item.path === pathname;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
              }`}
            >
              <span className={`transition-colors ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-100">
        <Link
          href="/dashboard/admin/profile"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
        >
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarImage
              src={currentUser?.personal_information?.photo || `https://ui-avatars.com/api/?name=${currentUser?.personal_information?.firstName || "User"}&background=random`}
              alt={currentUser?.personal_information?.firstName}
              className="object-cover"
            />
            <AvatarFallback className="bg-blue-600 text-white font-medium text-sm">
              {currentUser?.personal_information?.firstName?.charAt(0)}
              {currentUser?.personal_information?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold text-gray-900 truncate">
              {currentUser?.personal_information?.firstName}{" "}
              {currentUser?.personal_information?.lastName}
            </span>
            <span className="text-xs text-gray-500 truncate">
              {currentUser?.email || "Admin Account"}
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
