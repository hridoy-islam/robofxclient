"use client";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react/dist/iconify.js";

// --- SHADCN/UI Imports ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// -------------------------

interface SettingsProps {
  settingsData: {
    _id: string;
    usd: number;
    inr: number;
    btc: number;
    euro: number;
    usdt: number;
  }[];
}

interface SettingsState {
  _id: string;
  usd: number | string;
  inr: number | string;
  btc: number | string;
  euro: number | string;
  usdt: number | string;
}

const Settings: React.FC<SettingsProps> = ({ settingsData }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  // Assuming DecodedToken is correctly defined, but not directly used in render
  // const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  const initialSettings: SettingsState = {
    ...settingsData[0],
    // Ensure numbers are initialized, but string is okay for temporary input state
    usd: settingsData[0]?.usd ?? "",
    inr: settingsData[0]?.inr ?? "",
    btc: settingsData[0]?.btc ?? "",
    euro: settingsData[0]?.euro ?? "",
    usdt: settingsData[0]?.usdt ?? "",
  };

  const [updatedSettings, setUpdatedSettings] =
    useState<SettingsState>(initialSettings);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof SettingsState
  ) => {
    // Allows empty string input, but tries to parse to float otherwise
    const value = e.target.value;
    const parsedValue = parseFloat(value);
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value === "" ? "" : isNaN(parsedValue) ? value : parsedValue,
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);

    // Filter out _id and convert non-empty strings/numbers to numbers for the API payload
    const payload = Object.entries(updatedSettings)
      .filter(([key]) => key !== "_id")
      .reduce((acc, [key, value]) => {
        const numericValue = typeof value === 'string' && value.trim() !== '' ? parseFloat(value) : value;
        // Only include keys with valid numbers or 0 (if intended)
        if (typeof numericValue === 'number' && !isNaN(numericValue)) {
          acc[key as keyof Omit<SettingsState, '_id'>] = numericValue;
        } else if (numericValue === "") {
          // You might want to send 0 if the field is empty, depending on API design
          acc[key as keyof Omit<SettingsState, '_id'>] = 0;
        }
        return acc;
      }, {} as Partial<Omit<SettingsState, '_id'>>);

    try {
      // Hardcoded ID might be okay for singleton settings doc, but usually passed via prop/env
      const apiUrl = `/settings/6593eb10d44ad1c5f006ce48`; 
      const response = await axios.patch(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(response?.data?.message || "Settings updated successfully!");

      // Update the local state with the changes made (API should return the updated object)
      setUpdatedSettings((prevSettings) => ({
        ...prevSettings,
        // Assuming API response data contains the updated currency fields
        ...(response.data.data || response.data),
      }));
    } catch (error) {
      toast.error("Something went wrong while saving settings!");
      // console.error("Error saving data", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper component for each currency input field
  const CurrencyField = ({ name, value, onChange, disabled }: {
    name: string,
    value: number | string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
  }) => (
    <div className="flex flex-col space-y-2">
      {/* Using a span for the label as requested */}
      <span className="text-sm font-medium text-muted-foreground">{name.toLocaleUpperCase()}</span>
      <Input
        type="text"
        name={name}
        placeholder={`Enter value for ${name.toLocaleUpperCase()}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        // Basic pattern validation for numeric input (allowing float/integer)
        pattern="[0-9]*[.]?[0-9]*" 
      />
    </div>
  );

  return (
    <Card className="w-full mx-auto shadow-lg">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-xl font-semibold">
          <Icon icon="lucide:settings-2" className="inline-block mr-2 h-5 w-5" />
          Global Currency Values
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CurrencyField
            name="btc"
            value={updatedSettings.btc}
            onChange={(e) => handleInputChange(e, "btc")}
            disabled={isLoading}
          />
          <CurrencyField
            name="usd"
            value={updatedSettings.usd}
            onChange={(e) => handleInputChange(e, "usd")}
            disabled={isLoading}
          />
          <CurrencyField
            name="euro"
            value={updatedSettings.euro}
            onChange={(e) => handleInputChange(e, "euro")}
            disabled={isLoading}
          />
          <CurrencyField
            name="inr"
            value={updatedSettings.inr}
            onChange={(e) => handleInputChange(e, "inr")}
            disabled={isLoading}
          />
          <CurrencyField
            name="usdt"
            value={updatedSettings.usdt}
            onChange={(e) => handleInputChange(e, "usdt")}
            disabled={isLoading}
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleSave} 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Settings;