"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import WalletTab from "./WalletTab";
import AccountTab from "./AccountTab";
import { UserData, Wallet } from "@/utils/interfaces";

interface UserSettingsProps {
  allWallets: { _id: string; name: string; __v: number }[];
  allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const UserSettings = ({
  allWallets,
  allExchanges,
  currentUser,
}: UserSettingsProps) => {
 return (
  <div className="flex w-full flex-col gap-6">
    <Tabs
      aria-label="User Settings Tabs"
      color="primary"
      variant="bordered"
      className=" rounded-md "
      classNames={{
        tabList: "bg-gray-50 p-1 rounded-md flex gap-2",
        tab: "px-6 py-2 rounded-md font-medium text-black data-[selected=true]:bg-primary data-[selected=true]:text-white",
      }}
    >
      <Tab key="account" title="Account Settings">
        <div className="mt-4">
          <AccountTab currentUser={currentUser} />
        </div>
      </Tab>

      <Tab key="wallet" title="Wallet">
        <div className="mt-4">
          <WalletTab
            allWallets={allWallets}
            allExchanges={allExchanges}
            currentUser={currentUser}
          />
        </div>
      </Tab>
    </Tabs>
  </div>
);

};

export default UserSettings;
