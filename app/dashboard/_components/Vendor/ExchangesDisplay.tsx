"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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

interface Exchange {
  _id: string;
  name: string;
  __v: number;
}

interface ExchangesDisplayProps {
  exchanges: Exchange[];
}

const ExchangesDisplay: React.FC<ExchangesDisplayProps> = ({ exchanges }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selectedExchange, setSelectedExchange] = useState<Exchange | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEdit = (exchange: Exchange) => {
    setSelectedExchange(exchange);
    setUpdatedName(exchange.name);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    if (!selectedExchange || !updatedName.trim()) {
      toast.error("Exchange name cannot be empty.");
      return;
    }

    setIsUpdating(true);
    try {
      const apiUrl = `/exchange/${selectedExchange._id}`;
      const response = await axios.patch(
        apiUrl,
        { name: updatedName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message || "Exchange updated successfully!");
      router.refresh();
      setIsModalOpen(false);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Error updating exchange";
      toast.error(errorMessage);
      console.error("Error updating exchange", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader className="p-4 border-b">
          <CardTitle className="text-xl font-semibold">
            <Icon icon="lucide:list-ordered" className="inline-block mr-2 h-5 w-5" />
            Exchange Names
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
              {exchanges?.length > 0 ? (
                exchanges.map((exchange, index) => (
                  <tr
                    key={exchange._id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle font-medium">{index + 1}</td>
                    <td className="p-4 align-middle">{exchange.name}</td>
                    <td className="p-4 align-middle text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {/* Edit Button (Using shadcn Button) */}
                        <Button
                          onClick={() => handleEdit(exchange)}
                          variant="outline"
                          size="sm"
                          className="h-8"
                        >
                          <Icon icon="uil:edit" className="mr-1 h-4 w-4" />
                          Edit
                        </Button>
                        {/* Delete Button (Your custom component) */}
                        <DeleteButton label="exchange" id={exchange?._id} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <td colSpan={3} className="h-24 text-center text-muted-foreground">
                    No exchanges found.
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
            <DialogTitle>Edit Exchange Name</DialogTitle>
            <DialogDescription>
              Make changes to the exchange name here. Click update when you're done.
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

export default ExchangesDisplay;