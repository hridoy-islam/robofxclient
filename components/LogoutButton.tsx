"use client";
import { Icon } from "@iconify/react";
import Cookies from "universal-cookie";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const cookies = new Cookies();

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Remove the cookie
    cookies.remove("jwt", { path: "/" }); // Ensure path is defined to strictly remove it

    // Small delay for visual feedback before redirect
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={`
        group flex items-center gap-2 px-4 py-3 rounded-full text-sm font-bold transition-all duration-200 border
        ${
          isLoggingOut
            ? "bg-red-50 text-red-400 border-transparent cursor-wait"
            : "bg-white text-gray-600 border-gray-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-sm"
        }
      `}
    >
      <Icon
        icon={isLoggingOut ? "line-md:loading-loop" : "solar:logout-2-outline"}
        className={`text-lg transition-transform duration-200 ${
          !isLoggingOut && "group-hover:-translate-x-0.5"
        }`}
      />
      <span>{isLoggingOut ? "Signing out..." : "Logout"}</span>
    </button>
  );
}