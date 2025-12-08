"use client";

import { UserData } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";
// Shadcn UI Imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";

interface WelcomeBannerProps {
  currentUser: UserData;
}

export const WelcomeBanner = ({ currentUser }: WelcomeBannerProps) => {
  // Extract initials for fallback
  const firstNameInitial = currentUser?.personal_information?.firstName?.charAt(0);
  const lastNameInitial = currentUser?.personal_information?.lastName?.charAt(0);

  return (
    // Updated Container: Clean Gradient background and shadow
    <div className="flex flex-col md:flex-row w-full p-6 md:p-8 justify-between items-center rounded-2xl text-white bg-gradient-to-br from-indigo-700 to-blue-600 shadow-xl">
      {/* --- Greeting & Avatar --- */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Shadcn Avatar Implementation */}
        <Avatar className="w-24 h-24 ring-4 ring-white/50 bg-indigo-500 flex-shrink-0">
          <AvatarImage
            src={currentUser?.personal_information?.photo}
            alt={currentUser?.personal_information?.firstName}
            className="object-cover"
          />
          <AvatarFallback className="text-3xl font-bold bg-indigo-500 text-white/90">
            {firstNameInitial}
            {lastNameInitial}
          </AvatarFallback>
        </Avatar>

        <div className="text-center md:text-left">
          <p className="text-sm font-light opacity-80">Welcome back to the dashboard</p>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
            👋 {currentUser?.personal_information?.firstName}{" "}
            {currentUser?.personal_information?.lastName}
          </h1>
        </div>
      </div>

      {/* --- Action Button --- */}
      <div className="mt-6 md:mt-0 flex-shrink-0">
        <Link href="/dashboard/user/profile" passHref>
          {/* Shadcn Button with Secondary variant for high contrast */}
          <Button 
            variant="secondary" 
            className="h-10 px-6 font-semibold text-base shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Manage Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};