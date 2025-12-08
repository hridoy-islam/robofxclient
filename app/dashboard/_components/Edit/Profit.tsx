"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PersonalInfoProps {
  id: string;
}

const Profit: React.FC<PersonalInfoProps> = ({ id }) => {
  const [profit, setProfit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [grossBalance, setGrossBalance] = useState(0);

  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  useEffect(() => {
    axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setProfit(response.data.data.profit);
          setBalance(response.data.data.balance);
          setGrossBalance(response.data.data.grossBalance);
        }
      })
      .catch(() => console.log("Failed to fetch user data"));
  }, [id, token]);

  const handleSave = () => {
    if (!id) return;

    axios
      .patch(
        `/users/${id}`,
        { profit, balance, grossBalance },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => toast.success(response?.data?.message))
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <Card className="shadow-md border border-gray-200">
      <CardHeader>
        <h2 className="text-xl font-semibold">Profile Information</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="profit" className="mb-1 font-medium text-gray-700">
              Profit
            </label>
            <Input
              type="number"
              id="profit"
              value={profit}
              onChange={(e) => setProfit(Number(e.target.value))}
              placeholder="Enter profit"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="balance" className="mb-1 font-medium text-gray-700">
              Balance
            </label>
            <Input
              type="number"
              id="balance"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              placeholder="Enter balance"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="grossBalance" className="mb-1 font-medium text-gray-700">
              Gross Balance
            </label>
            <Input
              type="number"
              id="grossBalance"
              value={grossBalance}
              onChange={(e) => setGrossBalance(Number(e.target.value))}
              placeholder="Enter gross balance"
            />
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button className="bg-primary text-white" onClick={handleSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profit;
