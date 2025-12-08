"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { DecodedToken, UserData } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface WalletTabProps {
  allWallets: { _id: string; name: string; __v: number }[];
  allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const WalletTab: React.FC<WalletTabProps> = ({
  allWallets,
  allExchanges,
  currentUser,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const decode: DecodedToken = jwtDecode(token) as DecodedToken;
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    exchange: allExchanges?.[0]?.name || "",
    wallet: allWallets?.[0]?.name || "",
    account: "",
  });

  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editedWalletIndex, setEditedWalletIndex] = useState<number | null>(
    null
  );

  const userWallets = currentUser?.wallets;

  const submitForm = async () => {
    const formattedValue = {
      exchange: formValues?.exchange,
      wallet: formValues?.wallet,
      account: formValues?.account,
      _id: currentUser?._id,
    };

    try {
      let addFormattedValue;

      if (currentUser?.wallets.length > 0) {
        addFormattedValue = [
          ...currentUser?.wallets,
          {
            exchange: formValues?.exchange,
            wallet: formValues?.wallet,
            account: formValues?.account,
          },
        ];
      } else {
        addFormattedValue = {
          exchange: formValues?.exchange,
          wallet: formValues?.wallet,
          account: formValues?.account,
        };
      }

      if (modalMode === "add") {
        // Add new wallet
        const response = await Axios.patch(
          `/users/${decode?._id}`,
          {
            wallets: addFormattedValue,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(response?.data?.message);
        router.refresh();
      } else if (modalMode === "edit" && editedWalletIndex !== null) {
        // Edit existing wallet
        const updatedUserWallets = [...userWallets];
        updatedUserWallets[editedWalletIndex] = formattedValue;
        const response = await Axios.patch(
          `/users/${decode?._id}`,
          {
            wallets: updatedUserWallets,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(response?.data?.message);
        router.refresh();
        setEditedWalletIndex(null);
      }

      // Clear the form values
      setFormValues({
        exchange: allExchanges?.[0]?.name || "",
        wallet: allWallets?.[0]?.name || "",
        account: "",
      });
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("API Error:", error);
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const openAddModal = () => {
    setModalMode("add");
    onOpen();
  };

  const openEditModal = (index: number) => {
    setModalMode("edit");
    setEditedWalletIndex(index);
    setFormValues({
      exchange: userWallets[index]?.exchange || "",
      wallet: userWallets[index]?.wallet || "",
      account: userWallets[index]?.account || "",
    });
    onOpen();
  };

 return (
  <>
    <Card className="shadow-md rounded-lg">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Wallets</h2>
        <Button onClick={openAddModal} className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
          <Icon icon="ic:round-plus" width={20} /> Add New
        </Button>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b">Exchange</th>
                <th className="py-2 px-4 border-b">Wallet</th>
                <th className="py-2 px-4 border-b">Account Address</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userWallets?.map((wallet, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{wallet?.exchange}</td>
                  <td className="py-2 px-4 border-b">{wallet?.wallet}</td>
                  <td className="py-2 px-4 border-b break-all">{wallet?.account}</td>
                  <td className="py-2 px-4 border-b">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditModal(index)}
                      className="flex items-center gap-1"
                    >
                      <Icon icon="uil:edit" width={16} />
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>

    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg w-full p-6">
        <DialogHeader>
          <DialogTitle>{modalMode === "add" ? "Add Wallet" : "Edit Wallet"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label htmlFor="exchange" className="text-sm font-medium text-gray-700">Exchange*</label>
            <select
              id="exchange"
              className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formValues.exchange}
              onChange={(e) => handleInputChange("exchange", e.target.value)}
            >
              {allExchanges?.map((exchange, idx) => (
                <option key={idx} value={exchange.name}>{exchange.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="wallet" className="text-sm font-medium text-gray-700">Wallet*</label>
            <select
              id="wallet"
              className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formValues.wallet}
              onChange={(e) => handleInputChange("wallet", e.target.value)}
            >
              {allWallets?.map((wallet, idx) => (
                <option key={idx} value={wallet.name}>{wallet.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="account" className="text-sm font-medium text-gray-700">Account Address*</label>
            <input
              type="text"
              id="account"
              className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formValues.account}
              onChange={(e) => handleInputChange("account", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button
        variant="outline"
        className=" w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
        onClick={() => onOpenChange(false)}
      >
        Cancel
      </Button>
          <Button
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              submitForm();
              onOpenChange(false);
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>
);

};

export default WalletTab;
