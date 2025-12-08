"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "@/utils/axios";
import Cookies from "universal-cookie";

// --- SHADCN/UI Imports ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// -------------------------

// Custom components (assuming DeleteButton is already using shadcn/ui or is styled)
import DeleteButton from "@/components/DeleteButton"; 

// Define the type for a single wallet item
interface Wallet {
  _id: string;
  name: string;
  // Add other properties if needed
}

// Define the type for the prop containing an array of wallets
interface WalletDisplayProps {
  wallets: Wallet[];
}

const WalletDisplay: React.FC<WalletDisplayProps> = ({ wallets }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEdit = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setUpdatedName(wallet.name);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    if (!selectedWallet || !updatedName.trim()) {
      toast.error("Wallet name cannot be empty.");
      return;
    }

    setIsUpdating(true);
    try {
      const apiUrl = `/wallet/${selectedWallet._id}`;
      const response = await axios.patch(
        apiUrl,
        { name: updatedName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message || "Wallet updated successfully!");
      router.refresh();
      setIsModalOpen(false);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Error updating wallet";
      toast.error(errorMessage);
      console.error("Error updating wallet", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader className="p-4 border-b">
          <CardTitle className="text-xl font-semibold">
            <Icon icon="lucide:wallet" className="inline-block mr-2 h-5 w-5" />
            Wallet Names
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 overflow-x-auto">
          {/* Using a standard HTML table with Tailwind classes for shadcn aesthetic */}
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[80px]">
                  SN
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Name
                </th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {wallets?.length > 0 ? (
                wallets.map((wallet, index) => (
                  <tr
                    key={wallet._id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle font-medium">{index + 1}</td>
                    <td className="p-4 align-middle">{wallet.name}</td>
                    <td className="p-4 align-middle text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {/* Edit Button (Using shadcn Button) */}
                        <Button
                          onClick={() => handleEdit(wallet)}
                          variant="outline"
                          size="sm"
                          className="h-8"
                        >
                          <Icon icon="uil:edit" className="mr-1 h-4 w-4" />
                          Edit
                        </Button>
                        {/* Delete Button (Your custom component) */}
                        <DeleteButton label="wallet" id={wallet?._id} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <td colSpan={3} className="h-24 text-center text-muted-foreground">
                    No wallets found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* --- Shadcn Dialog (Modal) Component --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Wallet Name</DialogTitle>
            <DialogDescription>
              Make changes to the wallet name here. Click update when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="updatedName" className="text-right">
                Name
              </label>
              <Input
                id="updatedName"
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="col-span-3"
                disabled={isUpdating}
              />
            </div>
          </div>
          <DialogFooter>
            {/* Close Button */}
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              disabled={isUpdating}
            >
              Close
            </Button>
            {/* Update Button with Loading State */}
            <Button 
              onClick={handleUpdate} 
              disabled={isUpdating || !updatedName.trim()}
            >
              {isUpdating ? (
                <>
                  <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WalletDisplay;