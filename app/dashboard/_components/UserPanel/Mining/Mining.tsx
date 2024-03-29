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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        <Card className="p-6 space-y-3">
          <h2>Total</h2>
          <p className="text-3xl font-bold">
            {wholeRigs?.length}{" "}
            <span className="font-normal text-md">Rigs</span>
          </p>
          <div className="flex justify-between my-1">
            <div className="flex items-center justify-start">
              <Icon
                icon="octicon:dot-fill-24"
                color="#2385BA"
                className="text-xl"
              />
              <span>Active {miningRigs?.length}</span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="octicon:dot-fill-24"
                color="#B8DEE9"
                className="text-xl"
              />
              <span>Inactive {inActiveRigs}</span>
            </div>
          </div>
          <Progress
            size="md"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            value={80}
            showValueLabel={false}
          />
        </Card>
        <Card className="p-6 space-y-3">
          <h2>Current Mining Balance</h2>
          <h3 className="text-4xl font-bold">
            {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
          </h3>
          <div className="flex gap-2 justify-between">
            {showStartAllButton && (
              <Button onClick={handleStartAllRigs} className="bg-primaryLight">
                <Icon icon="ph:play-fill" /> Start All Rigs
              </Button>
            )}
            {showPauseAllButton && (
              <Button onClick={handlePauseAllRigs} className="bg-[#f9e5e5]">
                <Icon icon="solar:pause-bold" /> Stop All Rigs
              </Button>
            )}
          </div>
        </Card>
        <Card className="p-6 grid grid-cols-2 gap-1">
          <div className="space-y-3">
            <h2>Power Consumed</h2>
            <h2 className="text-3xl font-bold">{totalConsumed} KWH</h2>
            <p>Better Than Last Month</p>
          </div>
          <div>
            <ResponsiveContainer width="100%">
              <BarChart
                width={500}
                height={200}
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
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
      <div className="mb-5">
        <Card className="p-6 space-y-3">
          <h3>Rig Hash Generated</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-4">
            {" "}
            {wholeRigs?.map((rig, index) => (
              <Button
                onClick={() => handleGraph(rig?._id)}
                className={`${isActive === rig?._id ? "btn-basic" : ""} px-1 `}
                variant="bordered"
                key={index}
              >
                {rig?.rigName}
              </Button>
            ))}
          </div>

          <p>
            Rig Hash Generated is the amount of data that transferred between in
            a hour.
          </p>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={selectedMiningData}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div>
        <Card className="p-6 space-y-3">
          <h3>Temperature</h3>
          <p>Total number of requests for the selected period</p>
          <h3>
            <span className="text-3xl font-bold mr-2">18° C</span> Average
            Temperature
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={300}
              height={400}
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis />
              <Line
                connectNulls
                type="monotone"
                dataKey="uv"
                stroke="#D00000"
                fill="#D00000"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
