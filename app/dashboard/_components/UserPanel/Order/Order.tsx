"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Link from "next/link";
import ViewButton from "@/components/ViewButton";
import { OrderInterface } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface OrderProps {
  orders: OrderInterface[];
  totalPage: any;
}

const Order = ({ orders, totalPage }: OrderProps) => {
 return (
  <Card className="shadow-lg rounded-lg overflow-hidden">
    <CardHeader className="bg-gray-100 px-6 py-4">
      <h2 className="text-xl font-semibold text-gray-800">Orders</h2>
    </CardHeader>
    <CardBody className="p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders?.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                  {order?.productid?.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {order?.userid?.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {moment(order?.createdAt).format("ll")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Chip
                    color={
                      order?.status === "approved"
                        ? "success"
                        : order?.status === "pending"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {order?.status}
                  </Chip>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <Link href={`/dashboard/user/order/${order?._id}`}>
                    <Button size="sm" className="flex items-center gap-1">
                      <Icon icon="solar:eye-linear" className="text-lg" />
                      <span>View</span>
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardBody>
    {/* Example: Pagination component if needed */}
    {/* <Pagination totalPage={totalPage} /> */}
  </Card>
);

};

export default Order;
