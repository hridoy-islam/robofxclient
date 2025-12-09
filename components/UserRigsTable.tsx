"use client";

import { RigData } from "@/utils/interfaces";
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

interface UserRigsTableProps {
  rigs: RigData[];
}

// Helper function for clean status chip styling
const getStatusClasses = (status: string) => {
  if (status === "mining") {
    return "bg-emerald-100 text-emerald-700 border-emerald-200";
  }
  return "bg-amber-100 text-amber-700 border-amber-200";
};

const UserRigsTable = ({ rigs }: UserRigsTableProps) => {
  const router = useRouter();

  return (
    <Card className="shadow-sm border border-gray-100">
      {/* --- Card Header: Title and Action --- */}
      <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6 border-b">
        <CardTitle className="text-xl font-bold tracking-tight text-gray-800">
          Recent Active Rigs
        </CardTitle>
        <Link href="/dashboard/user/rigs" passHref>
          <Button 
            variant="outline" 
            size="sm"
            className="text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            View All Rigs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>

      {/* --- Table Content --- */}
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50/70">
              {/* Added min-w classes for better column control */}
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">Rig Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPU</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temp</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Load</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">Status</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {rigs?.map((rig, index) => (
              <tr 
                key={index} 
                className="border-b transition-colors hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/dashboard/user/rigs/${rig?._id}`)} // Assuming rig has an ID
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{rig?.rigName}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.efficiency}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.gpu}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.temp}°C</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.fan}%</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.load}%</td>
                <td className="px-4 py-3 text-sm text-gray-700">{rig?.power} W</td>
                <td className="px-4 py-3">
                  {/* Styled Status Chip */}
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full uppercase border ${getStatusClasses(rig?.status)}`}
                  >
                    {rig?.status === "mining" ? "Mining" : "Stopped"}
                  </span>
                </td>
              </tr>
            ))}
            {/* Fallback for empty data */}
            {(!rigs || rigs.length === 0) && (
                 <tr>
                    <td colSpan={8} className="text-center py-6 text-gray-500 text-sm">
                        No active rigs found.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default UserRigsTable;