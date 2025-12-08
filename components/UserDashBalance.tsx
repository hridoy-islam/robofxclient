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
      {/* Live Balance */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Live Balance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <BalanceRow
            icon={<Image src={btc} alt="btc" width={32} height={32} />}
          >
            {currencyConvert(currentUser?.balance, btcRate)} BTC
          </BalanceRow>

          <BalanceRow icon={<Icon icon="uil:usd-circle" width={36} />}>
            {(currentUser?.balance ?? 0).toFixed(2)} USD
          </BalanceRow>
        </CardContent>
      </Card>

      {/* Gross Balance */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Gross Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BalanceRow
            icon={<Image src={btc} alt="btc" width={32} height={32} />}
          >
            {currencyConvert(currentUser?.grossBalance, btcRate)} BTC
          </BalanceRow>
        </CardContent>
      </Card>

      {/* Profit */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <BalanceRow
            icon={<Image src={btc} alt="btc" width={32} height={32} />}
          >
            {currencyConvert(currentUser?.profit, btcRate)} BTC
          </BalanceRow>
        </CardContent>
      </Card>
    </div>
  );
};
