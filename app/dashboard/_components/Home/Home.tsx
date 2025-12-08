"use client";

import { UserDashBalance } from "@/components/UserDashBalance";
import UserRigsTable from "@/components/UserRigsTable";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import {
  RigData,
  UserData,
  WithdrawData,
  settingsData,
} from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import UserPayoutTable from "@/components/UserPayoutTable";

interface payout {
  _id: string;
  rigid: {
    _id: string;
    rigName: string;
  };
  amount: number;
  userid: UserData;
  createdAt: string;
}

interface HomeProps {
  currentUser: UserData;
  rigs: RigData[];
  withdraws: WithdrawData[];
  payouts: payout[];
  settings: settingsData[];
}

const Home = ({ currentUser, rigs, payouts, settings }: HomeProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (currentUser?.status === "pending") {
      onOpen();
    }
  }, [currentUser]);
  return (
    <div className="">
      <WelcomeBanner currentUser={currentUser} />
      <UserDashBalance settings={settings} currentUser={currentUser} />
      <UserRigsTable rigs={rigs} />

      <UserPayoutTable payouts={payouts} settings={settings} />

      <Modal
        backdrop="blur"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="rounded-lg relative max-w-sm">
                  <div className="p-6 pt-0 text-center">
                    <svg
                      className="w-20 h-20 text-white mx-auto"
                      fill="red"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <h3
                      className="text-xl font-normal text-gray-500 mt-5 mb-6"
                      dangerouslySetInnerHTML={{ __html: currentUser?.message }}
                    />
                    <div className="flex gap-4 justify-center">
                      <Button
                        variant="bordered"
                        size="lg"
                        className="bg-white"
                        as={Link}
                        href="mailto:support@algopips.net"
                      >
                        Contact Support
                      </Button>
                      <LogoutButton />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center"></div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
