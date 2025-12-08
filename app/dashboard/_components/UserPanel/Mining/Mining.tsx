"use client";
import { Button, Card, Progress, Tabs, CardBody, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

import RigHashChart from "@/components/RigHashChart";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import {
  DecodedToken,
  RigData,
  UserData,
  settingsData,
} from "@/utils/interfaces";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { currencyConvert } from "@/utils/currencyConvert";
import {
  miningData1,
  miningData2,
  miningData3,
  miningData4,
  miningData5,
  miningData6,
} from "@/utils/constants";

const chartData = [
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

interface MiningProps {
  settings: settingsData[];
  currentUser: UserData;
  rigs: RigData[];
  wholeRigs: RigData[];
}

interface MiningDataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export default function Mining({
  settings,
  currentUser,
  rigs,
  wholeRigs,
}: MiningProps) {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decode = jwtDecode(token) as DecodedToken;
  const [selectedMiningData, setSelectedMiningData] =
    useState<MiningDataItem[]>(miningData1); // Initialize with miningData1

  const graphArr: MiningDataItem[][] = [
    miningData1,
    miningData2,
    miningData3,
    miningData4,
    miningData5,
    miningData6,
  ];

  const handleGraph = (id: string) => {
    setIsActive(id);

    const randomIndex = Math.floor(Math.random() * graphArr.length);
    setSelectedMiningData(graphArr[randomIndex]);
  };

  const [isActive, setIsActive] = useState("");

  const [showStartAllButton, setShowStartAllButton] = useState(true);
  const [showPauseAllButton, setShowPauseAllButton] = useState(false);

  useEffect(() => {
    const storedShowStartAllButton = localStorage.getItem("showStartAllButton");
    const storedShowPauseAllButton = localStorage.getItem("showPauseAllButton");

    if (
      storedShowStartAllButton !== null &&
      storedShowPauseAllButton !== null
    ) {
      setShowStartAllButton(storedShowStartAllButton === "true");
      setShowPauseAllButton(storedShowPauseAllButton === "true");
    }
  }, []);

  const handleStartAllRigs = async () => {
    const url = `/history/startall/${decode?._id}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(false);
          setShowPauseAllButton(true);
          localStorage.setItem("showStartAllButton", "false");
          localStorage.setItem("showPauseAllButton", "true");
          toast.success(response?.data?.message);
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error starting rigs:", error);
      });
  };

  const handlePauseAllRigs = async () => {
    const url = `/history/pauseall/${decode?._id}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(true);
          setShowPauseAllButton(false);
          localStorage.setItem("showStartAllButton", "true");
          localStorage.setItem("showPauseAllButton", "false");
          toast.success(response?.data?.message);
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error pausing rigs:", error);
      });
  };

  const miningRigs = wholeRigs?.filter((rig) => rig?.status === "mining");
  let totalConsumed = 0;
  miningRigs?.map((rig) => (totalConsumed += Number(rig?.power)));

  const inActiveRigs = wholeRigs?.length - miningRigs?.length;

  return (
  <div className="space-y-8">

    {/* Top Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Total Rigs */}
      <Card className="p-6 space-y-4 shadow-md border border-default-200">
        <h2 className="text-lg font-semibold">Total Rigs</h2>

        <p className="text-4xl font-bold tracking-tight">
          {wholeRigs?.length}
          <span className="text-base font-normal ml-2">units</span>
        </p>

        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-1">
            <Icon icon="octicon:dot-fill-24" color="#2385BA" className="text-xl" />
            <span className="font-medium">Active {miningRigs?.length}</span>
          </div>

          <div className="flex items-center gap-1">
            <Icon icon="octicon:dot-fill-24" color="#B8DEE9" className="text-xl" />
            <span className="font-medium">Inactive {inActiveRigs}</span>
          </div>
        </div>

        <Progress
          size="md"
          className="mt-3"
          classNames={{
            base: "w-full",
            track: "drop-shadow-sm border border-default-300 rounded-full",
            indicator: "bg-gradient-to-r from-purple-500 to-yellow-400",
          }}
          value={80}
          showValueLabel={false}
        />
      </Card>

      {/* Mining Balance */}
      <Card className="p-6 space-y-5 shadow-md border border-default-200">
        <h2 className="text-lg font-semibold">Current Mining Balance</h2>

        <h3 className="text-4xl font-bold text-primary tracking-tight">
          {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
        </h3>

        <div className="flex gap-3 justify-between">
          {showStartAllButton && (
            <Button
              onClick={handleStartAllRigs}
              className="bg-primaryLight font-medium"
              fullWidth
            >
              <Icon icon="ph:play-fill" className="mr-1" /> Start All Rigs
            </Button>
          )}

          {showPauseAllButton && (
            <Button
              onClick={handlePauseAllRigs}
              className="bg-red-100 text-red-600 font-medium"
              fullWidth
            >
              <Icon icon="solar:pause-bold" className="mr-1" /> Stop All Rigs
            </Button>
          )}
        </div>
      </Card>

      {/* Power Consumed */}
      <Card className="p-6 shadow-md border border-default-200 grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-between space-y-2">
          <h2 className="font-semibold text-lg">Power Consumed</h2>

          <h2 className="text-4xl font-bold tracking-tight">{totalConsumed} KWH</h2>
          <p className="text-sm text-default-500">Better than last month</p>
        </div>

        <div className="h-24 mt-2">
          <ResponsiveContainer width="100%">
            <BarChart data={chartData}>
              <Bar
                dataKey="pv"
                fill="#2C929C"
                activeBar={<Rectangle fill="#e3eeef" stroke="#2C929C" />}
              />
              <Bar
                dataKey="uv"
                fill="#e3eeef"
                activeBar={<Rectangle fill="#2C929C" stroke="#e3eeef" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>

    {/* Rig Hash Chart */}
    <Card className="p-6 space-y-5 shadow-md border border-default-200">
      <h3 className="text-lg font-semibold">Rig Hash Generated</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-3">
        {wholeRigs?.map((rig, index) => (
          <Button
            key={index}
            onClick={() => handleGraph(rig?._id)}
            className={`${isActive === rig?._id ? "btn-basic" : ""}`}
            variant="bordered"
            size="sm"
          >
            {rig?.rigName}
          </Button>
        ))}
      </div>

      <p className="text-sm text-default-500">
        Rig hash generated is the amount of data transferred in one hour.
      </p>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={selectedMiningData} margin={{ top: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#3b82f6"
              fill="#3b82f6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>

    {/* Temperature Chart */}
    <Card className="p-6 space-y-4 shadow-md border border-default-200">
      <h3 className="text-lg font-semibold">Temperature</h3>
      <p className="text-sm text-default-500">
        Total number of requests for the selected period
      </p>

      <h3 className="text-3xl font-bold">
        18° C
        <span className="text-base ml-2 text-default-500">Average Temperature</span>
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis />
            <Line
              connectNulls
              type="monotone"
              dataKey="uv"
              stroke="#D00000"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>

  </div>
);

}
