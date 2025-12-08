import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import EditButton from "@/components/EditButton";
import { UserData } from "@/utils/interfaces";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Axios from "@/utils/axios";
import Cookies from "universal-cookie";
import { Button } from "@/components/ui/button";

interface AccountTabProps {
  // allWallets: { _id: string; name: string; __v: number }[];
  // allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const AccountTab = ({ currentUser }: AccountTabProps) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  // const [selectedCurrency, setSelectedCurrency] = useState(
  //   currentUser?.currency || ""
  // );

  const [selectedPrimaryAccount, setSelectedPrimaryAccount] = useState(
    currentUser?.primary_account || ""
  );

  const router = useRouter();

  const submitForm = async () => {
    try {
      const response = await Axios.patch(
        `/users/${currentUser?._id}`,
        {
          primary_account: selectedPrimaryAccount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message);
      router.refresh();

      // // Clear the form values
      // setSelectedCurrency("");
      // setSelectedPrimaryAccount("");
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("API Error:", error);
    }
  };

  return (
  <Card className="shadow-md rounded-lg border border-gray-200">
    <CardHeader className="bg-primary text-white py-3 px-6 rounded-t-lg">
      <h2 className="text-lg font-semibold">Primary Account Settings</h2>
    </CardHeader>

    <CardBody className="px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200 pb-6">
        <label className="flex flex-col md:flex-row items-center gap-4">
          <span className="w-full md:w-1/3 text-gray-700 font-medium text-center md:text-left">
            Select Wallet
          </span>
          <select
            className="w-full md:w-2/3 h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            value={selectedPrimaryAccount}
            onChange={(e) => setSelectedPrimaryAccount(e.target.value)}
          >
            <option value="">Choose Primary Account</option>
            {currentUser?.wallets?.map((wallet, index) => (
              <option key={index} value={wallet?._id}>
                {wallet?.wallet} - {wallet?.account} - {wallet?.exchange}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex justify-end mt-6">
        <Button
          onClick={submitForm}
          className="bg-primary text-white hover:bg-primary-dark px-6 py-2 rounded-lg font-medium transition"
        >
          Save Changes
        </Button>
      </div>
    </CardBody>
  </Card>
);

};

export default AccountTab;
