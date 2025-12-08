"use client";
import Axios from "@/utils/axios";
import { Icon } from "@iconify/react";
import {  Card, CardBody, Chip, Progress } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import Pagination from "./Pagination";
import { RigData } from "@/utils/interfaces";
import { useState } from "react";
import { Button } from "./ui/button";

interface rig {
  _id: string;
  userid: string;
  rigName: string;
  gpu: string;
  temp: string;
  fan: string;
  load: string;
  power: string;
  efficiency: number;
  proficiency: number;
  status: string;
}

interface RigResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: rig[];
}

interface RigsDetailsProps {
  response: RigResponse;
}

export const RigDetails = ({ response }: RigsDetailsProps) => {
  const router = useRouter();

  const rigs = response?.result;
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/rigs?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/rigs?page=${previousPage}`;
    }
  };

  const handleStartMining = (rig: rig) => {
    const url = `/history/start/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
      })
      .catch((error) => {
        // toast.error("Something went wrong!");
        router.refresh();
      });
  };

  const handlePauseMining = (rig: rig) => {
    const url = `/history/pause/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        router.refresh();
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  return (
  <>
    {rigs?.map((rig) => (
      <Card
        key={rig._id}
        className="mb-6 rounded-xl shadow-sm border border-default-200 hover:shadow-md transition-all"
      >
        <CardBody className="p-6 space-y-6">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                {rig.rigName}
              </h2>

              <Chip
                size="sm"
                className="uppercase font-bold"
                color={rig.status === "mining" ? "success" : "warning"}
              >
                {rig.status}
              </Chip>
            </div>

            {/* Action Button */}
            {rig.status === "mining" ? (
              <Button
                onClick={() => handlePauseMining(rig)}
                className="bg-success-50 text-success-600 border border-success-200 flex items-center gap-2 hover:bg-success-100"
              >
                <Icon icon="solar:pause-bold" className="text-lg" />
                Pause Mining
              </Button>
            ) : (
              <Button
                onClick={() => handleStartMining(rig)}
              >
                <Icon icon="ph:play-fill" className="text-lg" />
                Start Mining
              </Button>
            )}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">

            {/* Efficiency */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="ic:outline-energy-savings-leaf" />
              </div>
              <p className="text-base text-default-600">Efficiency</p>
              <h4 className="text-3xl font-semibold">
                {rig.efficiency} <span className="text-lg">MH/J</span>
              </h4>
            </Card>

            {/* Temperature */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="mdi:temperature-celsius" />
              </div>
              <p className="text-base text-default-600">Temperature</p>
              <div className="flex justify-between text-sm my-1">
                <span>{rig.temp}°C</span>
                <span>100°C</span>
              </div>
              <Progress
                size="md"
                value={Number(rig.temp)}
                maxValue={100}
                classNames={{
                  track: "border border-default-200",
                  indicator: "bg-gradient-to-r from-red-500 to-yellow-500",
                }}
              />
            </Card>

            {/* Fan */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="ph:fan" />
              </div>
              <p className="text-base text-default-600">Fan Speed</p>
              <div className="flex justify-between text-sm my-1">
                <span>{rig.fan}%</span>
                <span>100%</span>
              </div>
              <Progress
                size="md"
                value={Number(rig.fan)}
                maxValue={100}
                classNames={{
                  track: "border border-default-200",
                  indicator: "bg-gradient-to-r from-blue-500 to-green-500",
                }}
              />
            </Card>

            {/* Proficiency */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="material-symbols:join-right-rounded" />
              </div>
              <p className="text-base text-default-600">Actual Rig Proficiency</p>
              <h4 className="text-3xl font-semibold">
                {rig.proficiency} <span className="text-lg">BTC/24h</span>
              </h4>
            </Card>

            {/* Power */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="solar:bolt-linear" />
              </div>
              <p className="text-base text-default-600">Power</p>
              <div className="flex justify-between text-sm my-1">
                <span>{rig.power} W</span>
                <span>1000 W</span>
              </div>
              <Progress
                size="md"
                value={Number(rig.power)}
                maxValue={1000}
                classNames={{
                  track: "border border-default-200",
                  indicator: "bg-gradient-to-r from-purple-500 to-pink-500",
                }}
              />
            </Card>

            {/* Load */}
            <Card className="p-5 border border-default-200 rounded-xl shadow-xs">
              <div className="bg-primary-100 text-primary w-14 h-14 flex items-center justify-center rounded-xl text-3xl mb-4">
                <Icon icon="solar:server-path-broken" />
              </div>
              <p className="text-base text-default-600">Load</p>
              <div className="flex justify-between text-sm my-1">
                <span>{rig.load}%</span>
                <span>100%</span>
              </div>
              <Progress
                size="md"
                value={Number(rig.load)}
                maxValue={100}
                classNames={{
                  track: "border border-default-200",
                  indicator: "bg-gradient-to-r from-green-500 to-lime-500",
                }}
              />
            </Card>
          </div>
        </CardBody>
      </Card>
    ))}

    {/* PAGINATION */}
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      previousPageHref={getPreviousPageHref()}
      nextPageHref={getNextPageHref()}
    />
  </>
);

};
