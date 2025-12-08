"use client";
import ViewButton from "@/components/ViewButton";
import { Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderInterface, RigData, UserData } from "@/utils/interfaces";
import moment from "moment";
import Logo from "@/public/robofxicon.png";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DashboardProps {
  allUsers: UserData[];
  wholeUsers: UserData[];
  allOrders: OrderInterface[];
  allRigs: RigData[];
  wholeRigsAdmin: RigData[];
}

const Dashboard = ({
  allUsers,
  allOrders,
  allRigs,
  wholeRigsAdmin,
  wholeUsers,
}: DashboardProps) => {
  const router = useRouter();
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const user = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const rigs = [
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <Card className="shadow-md border border-gray-200">
          <CardHeader className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-3xl font-semibold">{wholeUsers?.length}</h2>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart
                data={data}
                syncId="anyId"
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#3b82f6"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardHeader>
        </Card>

        {/* New Users */}
        <Card className="shadow-md border border-gray-200">
          <CardHeader className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">New Users</p>
            <h2 className="text-3xl font-semibold">{wholeUsers?.length}</h2>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart
                data={user}
                syncId="anyId"
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#3b82f6"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardHeader>
        </Card>

        {/* Total Rigs */}
        <Card className="shadow-md border border-gray-200">
          <CardHeader className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Total Rigs</p>
            <h2 className="text-3xl font-semibold">{wholeRigsAdmin?.length}</h2>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart
                data={rigs}
                syncId="anyId"
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                 stroke="#3b82f6"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardHeader>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Users</h2>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/admin/user")}
          >
            View All
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Phone
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  City
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Country
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allUsers?.slice(0, 3)?.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      {user?.personal_information?.photo ? (
                        <AvatarImage
                          src={user.personal_information.photo}
                          alt={`${user.personal_information.firstName} ${user.personal_information.lastName}`}
                          className="object-cover"
                        />
                      ) : (
                        <AvatarFallback className="bg-gray-300 text-gray-700 text-sm font-medium">
                          {user?.personal_information?.firstName?.charAt(0)}
                          {user?.personal_information?.lastName?.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span>
                      {user?.personal_information?.firstName}{" "}
                      {user?.personal_information?.lastName}
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    {user?.personal_information?.phone}
                  </td>
                  <td className="px-4 py-2">{user?.email}</td>
                  <td className="px-4 py-2">
                    {user?.contact_information?.city}
                  </td>
                  <td className="px-4 py-2">
                    {user?.contact_information?.country}
                  </td>
                  <td className="px-4 py-2">
                    <ViewButton userId={user?._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Orders Table */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Orders</h2>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/admin/order")}
          >
            View All
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  User
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allOrders?.slice(0, 3)?.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{order?.productid?.title}</td>

                  <td className="px-4 py-2 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      {order?.userid?.personal_information?.photo ? (
                        <AvatarImage
                          src={order.userid.personal_information.photo}
                          alt={`${order.userid.personal_information.firstName} ${order.userid.personal_information.lastName}`}
                          className="object-cover"
                        />
                      ) : (
                        <AvatarFallback className="bg-gray-300 text-gray-700 text-sm font-medium">
                          {order?.userid?.personal_information?.firstName?.charAt(
                            0
                          )}
                          {order?.userid?.personal_information?.lastName?.charAt(
                            0
                          )}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span>
                      {order?.userid?.personal_information?.firstName}{" "}
                      {order?.userid?.personal_information?.lastName}
                    </span>
                  </td>

                  <td className="px-4 py-2">${order?.productid?.price}</td>
                  <td className="px-4 py-2">{order?.status}</td>
                  <td className="px-4 py-2">
                    {moment(order?.createdAt).format("LL")}
                  </td>
                  <td className="px-4 py-2">
                    <Link href={`/dashboard/admin/order/${order?._id}`}>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Icon icon="solar:eye-linear" className="text-lg" />
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
