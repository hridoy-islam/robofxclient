"use client";
import { currencyConvert } from "@/utils/currencyConvert";
import { UserData, settingsData } from "@/utils/interfaces";
import moment from "moment";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

// Shadcn UI Imports
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Interfaces (using provided structure)
interface payout {
  _id: string;
  rigid: {
    _id: string;
    rigName: string;
  };
  amount: number;
  userid: UserData;
  createdAt: string;
}

// NOTE: Renaming the prop interface for clarity, though you can keep the original name if needed:
// interface UserPayoutTableProps { ... }
interface UserRigsTableProps { 
  payouts: payout[];
  settings: settingsData[];
}

const UserPayoutTable = ({ payouts, settings }: UserRigsTableProps) => {
  const router = useRouter();
  const btcRate = settings[0]?.btc || 1; // Default rate to prevent error

  return (
    <Card className="mt-5 shadow-sm border border-gray-100">
      {/* --- Card Header: Title and Action --- */}
      <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6 border-b">
        <CardTitle className="text-xl font-bold tracking-tight text-gray-800">
          Payout History
        </CardTitle>
        <Link href="/dashboard/user/payouts" passHref>
          <Button 
            variant="outline" 
            size="sm"
            className="text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>

      {/* --- Table Content --- */}
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50/70">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">Rig Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">Amount</th>
              <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px] text-right">Time</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {payouts?.map((payout, index) => (
              <tr 
                key={index} 
                className="border-b transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {payout?.rigid?.rigName || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  {/* Styled BTC Payout Chip */}
                  <span className="px-3 py-1 text-xs font-semibold rounded-full uppercase border border-blue-200 bg-blue-50 text-blue-700">
                    {currencyConvert(payout?.amount, btcRate)} BTC
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-right">
                  {moment(payout?.createdAt).format("MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            ))}
            {/* Fallback for empty data */}
            {(!payouts || payouts.length === 0) && (
                 <tr>
                    <td colSpan={3} className="text-center py-6 text-gray-500 text-sm">
                        No recent payout records found.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default UserPayoutTable;