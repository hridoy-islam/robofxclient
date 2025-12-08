"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { Icon } from "@iconify/react/dist/iconify.js";

// --- SHADCN/UI Imports ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// -------------------------

const AddExchange = () => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const [exchangeName, setExchangeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSave = () => {
    if (!exchangeName.trim()) {
      toast.error("Exchange name cannot be empty.");
      return;
    }

    const apiUrl = "/exchange";
    setIsLoading(true);

    axios
      .post(
        apiUrl,
        { name: exchangeName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response?.data?.message || "Exchange added successfully!");
        router.refresh();
        setExchangeName("");
      })
      .catch((error) => {
        const errorMessage = error?.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="p-6 border-b">
        <CardTitle className="text-xl font-semibold">
          <Icon icon="lucide:arrow-left-right" className="inline-block mr-2 h-5 w-5" />
          Add New Exchange
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          {/* Using Label and Input for better form structure */}
          <label htmlFor="exchange-name">Exchange Name</label>
          <Input
            id="exchange-name"
            type="text"
            placeholder="e.g., Binance, Coinbase"
            value={exchangeName}
            onChange={(e) => setExchangeName(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Shadcn Button with loading state */}
        <Button 
          onClick={handleSave} 
          className="w-full sm:w-24"
        >
          {isLoading ? (
            <>
              <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddExchange;