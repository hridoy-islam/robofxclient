"use client";

// OrdersDisplay.tsx

// Import shadcn/ui components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import DeleteButton from "@/components/DeleteButton"; // Assuming this is your custom component
import { OrderInterface } from "@/utils/interfaces"; // Assuming this interface is correct
import Pagination from "@/components/Pagination"; // Assuming this is your custom component

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import * as React from "react"; // Explicit import for React

// --- Type Definitions (kept as is) ---
interface responseProps {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: OrderInterface[];
}

interface OrdersDisplayProps {
  response: responseProps;
}

// --- Component Start ---
const OrdersDisplay: React.FC<OrdersDisplayProps> = ({ response }) => {
  const allOrders = response?.result;

  const searchParams = useSearchParams();

  // Initialize currentPage from URL search param, default to 1
  const pageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(
    Number(pageParam) > 0 ? Number(pageParam) : 1
  );

  const totalPages = response?.meta?.totalPage;

  /**
   * Function to determine the badge variant/color based on order status.
   * Maps statuses to shadcn Badge variants.
   */
  const getStatusVariant = (status: string | undefined): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "approved":
        // 'default' often renders as primary color, good for success/approved
        return "default";
      case "pending":
        // 'secondary' works well for neutral/pending
        return "secondary";
      case "rejected":
      case "cancelled":
        // 'destructive' for failed/rejected
        return "destructive";
      default:
        return "outline";
    }
  };

  // Pagination helper functions (kept as is)
  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/order?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/order?page=${previousPage}`;
    }
  };

  return (
    <div className="space-y-4"> {/* Added a wrapper div for spacing */}
      {/* Used shadcn Card for the container */}
      <Card>
        {/* Custom header styled to match shadcn CardHeader look */}
        <div className="p-5 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Orders</h2>
        </div>

        {/* Card Body content */}
        <div className="p-0 overflow-x-auto">
          {/* Using a standard HTML table with Tailwind classes for shadcn aesthetic */}
          <table className="w-full caption-bottom text-sm">
            {/* Table Header */}
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[200px]">
                  Product Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  User
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[120px]">
                  Date
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[100px]">
                  Status
                </th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="[&_tr:last-child]:border-0">
              {allOrders && allOrders.length > 0 ? (
                allOrders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  >
                    <td className="p-4 align-middle font-medium">
                      {order?.productid?.title}
                    </td>
                    <td className="p-4 align-middle">
                      {order?.userid?.email}
                    </td>
                    <td className="p-4 align-middle">
                      {moment(order?.createdAt).format("ll")}
                    </td>
                    <td className="p-4 align-middle">
                      {/* Using shadcn Badge */}
                      <div>
                        {order?.status}
                      </div>
                    </td>
                    <td className="p-4 align-middle text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {/* View Button (Using shadcn Button) */}
                        <Link href={`/dashboard/admin/order/${order?._id}`} passHref>
                          <Button variant="outline" size="sm" className="h-8">
                            <Icon icon="solar:eye-linear" className="mr-1 h-4 w-4" />
                            View
                          </Button>
                        </Link>
                        {/* Delete Button (Your custom component) */}
                        <DeleteButton label="orders" id={order._id} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td colSpan={5} className="p-4 h-24 text-center text-muted-foreground">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination component (kept as your custom component) */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </div>
  );
};

export default OrdersDisplay;