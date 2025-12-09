"use client";

import Image from "next/image";
import React from "react";
import btc from "../public/btc.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { currencyConvert } from "@/utils/currencyConvert";
import { UserData, settingsData } from "@/utils/interfaces";

// Shadcn UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface UserDashBalanceProps {
  currentUser: UserData;
  settings: settingsData[];
}

const BalanceRow = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3">
      {icon}
      <span className="text-lg font-medium">{children}</span>
    </div>
  );
};

export const UserDashBalance = ({
  currentUser,
  settings,
}: UserDashBalanceProps) => {
  const btcRate = settings?.[0]?.btc || 0;

  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    
    {/* Live Balance Card */}
    <Card className="shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          Live Balance
        </CardTitle>
        {/* Icon wrapper for polish */}
        <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
             <Icon icon="uil:wallet" className="text-blue-600 h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
                {currencyConvert(currentUser?.balance, btcRate)}
            </span>
            <span className="text-sm font-semibold text-slate-600">BTC</span>
        </div>
        <p className="text-lg text-slate-500 mt-1">
          ≈ {(currentUser?.balance ?? 0).toFixed(2)} USD
        </p>
      </CardContent>
    </Card>

    {/* Gross Balance Card */}
    <Card className="shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          Gross Balance
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
             <Icon icon="uil:money-stack" className="text-slate-600 h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
                {currencyConvert(currentUser?.grossBalance, btcRate)}
            </span>
            <span className="text-sm font-semibold text-slate-600">BTC</span>
        </div>
         <p className="text-xs text-slate-400 mt-1">Total accumulated</p>
      </CardContent>
    </Card>

    {/* Profit Card */}
    <Card className="shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          Net Profit
        </CardTitle>
        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
            (currentUser?.profit || 0) >= 0 ? 'bg-emerald-50' : 'bg-red-50'
        }`}>
             <Icon 
                icon="uil:graph-bar" 
                className={`h-4 w-4 ${
                    (currentUser?.profit || 0) >= 0 ? 'text-emerald-600' : 'text-red-600'
                }`} 
             />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
            <span className={`text-2xl font-bold tracking-tight ${
                (currentUser?.profit || 0) >= 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
                { (currentUser?.profit || 0) > 0 ? "+" : ""}
                {currencyConvert(currentUser?.profit, btcRate)}
            </span>
            <span className={`text-sm font-semibold ${
                (currentUser?.profit || 0) >= 0 ? 'text-emerald-600/80' : 'text-red-600/80'
            }`}>BTC</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">All time earnings</p>
      </CardContent>
    </Card>

  </div>
  );
};
