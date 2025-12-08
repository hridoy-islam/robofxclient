"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

// --- SHADCN/UI Imports ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// -------------------------

// Custom imports (assuming these paths are correct)
import { Product, UserData } from "@/utils/interfaces";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import moment from "moment";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

interface SingleOrderViewProps {
  order: {
    _id: string;
    createdAt: any;
    status: string;
    productid: Product;
    userid: UserData;
  };
}

const SingleOrderView = ({ order }: SingleOrderViewProps) => {
  const router = useRouter();
  const cookies = new Cookies();
  // Define the possible statuses
  const DecisionStatus = ["pending", "approved", "decline"];

  const { _id, createdAt, productid, status } = order;

  // Destructure product details for readability
  const {
    motherboard,
    graphicscard,
    price,
    powerdby,
    processor,
    ram,
    smps,
    title,
  } = productid;

  const [selectedStatus, setSelectedStatus] = useState(status);
  const [isUpdating, setIsUpdating] = useState(false); // State for loading

  /**
   * Function to determine Tailwind CSS classes for status background/color
   * instead of using the shadcn Badge component.
   */
  const getStatusClasses = (currentStatus: string): string => {
    switch (currentStatus.toLowerCase()) {
      case "approved":
        // Success color (Green)
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case "pending":
        // Warning color (Yellow/Orange)
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
      case "decline":
        // Danger color (Red)
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      default:
        // Default/Neutral color
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100";
    }
  };

  const handleStatusChange = async () => {
    if (selectedStatus.toLowerCase() === status.toLowerCase()) {
      toast("Status is already set to the selected value.", { icon: "ℹ️" });
      return;
    }
    setIsUpdating(true);
    try {
      const token = cookies.get("jwt");

      const response = await Axios.patch(
        `/orders/${_id}`,
        {
          status: selectedStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message || "Order status updated successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update status. Please try again.");
      console.error("Error updating status:", error);
      // Revert status on failure
      setSelectedStatus(status);
    } finally {
      setIsUpdating(false);
    }
  };

  // Helper component for uniform detail rows (Order Details)
  const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex justify-between py-2 border-b last:border-b-0">
      <span className="text-sm font-medium text-muted-foreground w-1/3">{label}</span>
      <span className="text-sm font-semibold w-2/3 text-right">{value}</span>
    </div>
  );
  
  // Helper component for product feature rows (using HTML table structure)
  const ProductFeatureRow = ({ label, value }: { label: string; value: string }) => (
    <tr className="border-b last:border-b-0">
      <td className="w-12 py-3">
        {/* Checkmark icon consistent with modern UI */}
        <Icon
          icon="mdi:check-bold"
          className="h-5 w-5 p-0.5 text-primary bg-primary/10 rounded-full"
        />
      </td>
      <td className="w-30 text-sm py-3 text-muted-foreground">{label}</td>
      <td className="text-sm font-medium py-3">{value}</td>
    </tr>
  );


  return (
    <div className="flex flex-col md:flex-row md:gap-8 p-4 md:p-6 lg:p-8">
      {/* Left Column (Order & Product Details) */}
      <div className="w-full md:w-9/12 space-y-8">
        {/* Order Details Card */}
        <div>
          <h2 className="mb-4 font-bold text-2xl tracking-tight">Order Information</h2>
          <Card>
            <CardContent className="p-6">
              <DetailRow label="Order ID" value={_id} />
              <DetailRow label="Date" value={moment(createdAt).format("LL")} />
              <DetailRow
                label="Status"
                value={
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase rounded-full ${getStatusClasses(status)}`}
                  >
                    {status}
                  </span>
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* Product Details Card */}
        <div>
          <h2 className="my-4 font-bold text-2xl tracking-tight">Product Summary</h2>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                {/* Styled div for processor (replaces Chip) */}
                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-primary border border-primary bg-primary/10 rounded-lg">
                  {processor}
                </span>
                <p className="text-2xl font-bold text-primary">${price}</p>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Standard HTML table for product features */}
              <table className="w-full">
                <tbody>
                  <ProductFeatureRow label="Name" value={title} />
                  <ProductFeatureRow label="Motherboard" value={motherboard} />
                  <ProductFeatureRow label="Processor" value={processor} />
                  <ProductFeatureRow label="Ram" value={ram} />
                  <ProductFeatureRow label="Graphics Card" value={graphicscard} />
                  <ProductFeatureRow label="Powered By" value={powerdby} />
                  <ProductFeatureRow label="SMPS" value={smps} />
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Column (Summary & Status Update) */}
      <div className="w-full md:w-3/12 space-y-6">
        {/* Order Summary Card */}
        <Card className="mt-8 md:mt-16">
          <CardHeader>
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Basic Mining</span>
              <span className="font-medium">$500</span>
            </div>

            <div className="flex justify-between border-t pt-4 text-base font-bold">
              <span>Total</span>
              <span>$500</span>
            </div>
          </CardContent>
        </Card>

        {/* Change Order Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Change Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Shadcn Select component */}
            <Select
              value={selectedStatus}
              onValueChange={setSelectedStatus}
              disabled={isUpdating}
            >
              <SelectTrigger aria-label="Select Order Status">
                <SelectValue placeholder="Change Status" />
              </SelectTrigger>
              <SelectContent>
                {DecisionStatus.map((statusOption) => (
                  <SelectItem key={statusOption} value={statusOption}>
                    {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Shadcn Button component */}
            <Button
              onClick={handleStatusChange}
              className="w-full my-4"
              disabled={isUpdating}
            >
              {isUpdating ? (
                <>
                  <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Status"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SingleOrderView;