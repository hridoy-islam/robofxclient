"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { RigData, UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";
import { useSearchParams } from "next/navigation";
import {
  FaCogs,
  FaClock,
  FaChartLine,
  FaCoins
} from "react-icons/fa";

interface RigResponse {
  meta: { page: number; limit: number; total: number; totalPage: number };
  result: RigData[];
}

interface UserRigBalanceProps {
  rigs: RigResponse;
  wholeRigs: RigResponse;
  currentUser: UserData;
  settings: settingsData[];
}

export const UserRigBalance = ({
  rigs,
  currentUser,
  settings,
  wholeRigs,
}: UserRigBalanceProps) => {
  const miningRigs = wholeRigs?.result?.filter((rig) => rig?.status === "mining");
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = rigs?.meta?.totalPage;

  const calculateTimeRemaining = () => {
    const now = new Date();
    const newYorkTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const endOfDay = new Date(newYorkTime);
    endOfDay.setHours(24, 0, 0, 0);

    return endOfDay.getTime() - now.getTime();
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

      {/* Rigs Mining */}
      <Card
        className="p-5 shadow-md border border-green/30 bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-black"
        radius="lg"
      >
        <CardHeader className="flex items-center gap-3 pb-1">
          <FaCogs className="text-3xl text-green-600" />
          <h1 className="font-semibold text-green-700 dark:text-green-300">Rigs Mining</h1>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-green-700 dark:text-green-300">
            {miningRigs?.length}
          </p>
          <span className="text-sm opacity-70">Running Rigs</span>
        </CardBody>
      </Card>

      {/* Next Payout */}
      <Card
        className="p-5 shadow-md border border-blue/30 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-black"
        radius="lg"
      >
        <CardHeader className="flex items-center gap-3 pb-1">
          <FaClock className="text-3xl text-blue-600" />
          <h1 className="font-semibold text-blue-700 dark:text-blue-300">Next Payout</h1>
        </CardHeader>
        <CardBody>
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-300 flex gap-1">
            <span>{hours.toString().padStart(2, "0")}</span>:
            <span>{minutes.toString().padStart(2, "0")}</span>:
            <span>{seconds.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm opacity-70">Remaining</span>
        </CardBody>
      </Card>

      {/* Current Profitability */}
      <Card
        className="p-5 shadow-md border border-purple/30 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-black"
        radius="lg"
      >
        <CardHeader className="flex items-center gap-3 pb-1">
          <FaChartLine className="text-3xl text-purple-600" />
          <h1 className="font-semibold text-purple-700 dark:text-purple-300">
            Current Profitability
          </h1>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-purple-700 dark:text-purple-300">
            {currencyConvert(currentUser?.profit, settings[0]?.btc)} BTC
          </p>
          <span className="text-sm opacity-70">${currentUser?.profit}</span>
        </CardBody>
      </Card>

      {/* Unpaid Balance */}
      <Card
        className="p-5 shadow-md border border-orange/30 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950 dark:to-black"
        radius="lg"
      >
        <CardHeader className="flex items-center gap-3 pb-1">
          <FaCoins className="text-3xl text-orange-600" />
          <h1 className="font-semibold text-orange-700 dark:text-orange-300">
            Unpaid Mining Balance
          </h1>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-orange-700 dark:text-orange-300">
            {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
          </p>
          <span className="text-sm opacity-70">${currentUser?.balance.toFixed(2)}</span>
        </CardBody>
      </Card>
    </div>
  );
};
