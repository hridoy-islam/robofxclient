"use client";

import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import axios from "@/utils/axios";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/app/login/page";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { countries } from "@/utils/constants";
import { Button } from "@/components/ui/button";

interface BillingInfoData {
  address: string;
  state: string;
  country: string;
  city: string;
  zipcode: string;
}

interface BillingInfoProps {
  id: string;
}

const BillingInfo: React.FC<BillingInfoProps> = ({ id }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const [value, setValue] = React.useState("");

  const [billingInfo, setBillingInfo] = useState<BillingInfoData>({
    address: "",
    state: "",
    country: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response?.data?.data?.billing_information) {
          setBillingInfo(response?.data?.data?.billing_information);
          setValue(response?.data?.data?.billing_information?.country);
        }
      })
      .catch((err) => console.log(""));
  }, []);

  const handleSave = () => {
    // const userId = decoded?.id;
    if (!id) {
      console.error("User ID not available");
      return;
    }

    const formattedData = {
      billing_information: {
        address: billingInfo.address,
        state: billingInfo.state,
        city: billingInfo.city,
        zipcode: billingInfo.zipcode,
        country: value,
      },
    };

    const url = `/users/${id}`;

    axios
      .patch(url, formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // console.error("Error saving data", error);
      });
  };

  const handleClear = () => {
    setBillingInfo({
      address: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
    });
  };

  const handleChange = (key: keyof BillingInfoData, value: string) => {
    setBillingInfo((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCountryChange = (selectedCountry: string | any) => {
    setBillingInfo((prevData) => ({
      ...prevData,
      country: selectedCountry, // Assuming selectedCountry is the correct value
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Billing Information</h2>
      </CardHeader>
      <CardBody className="p-6 bg-white space-y-6">
  {/* Address */}
  <div className="flex flex-col">
    <label htmlFor="address" className="text-gray-700 font-medium mb-1">
      Address
    </label>
    <input
      type="text"
      name="address"
      id="address"
      value={billingInfo.address}
      onChange={(e) => handleChange("address", e.target.value)}
      className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      placeholder="Enter your address"
    />
  </div>

  {/* State, Country, City, Zipcode */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column */}
    <div className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="state" className="text-gray-700 font-medium mb-1">
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={billingInfo.state}
          onChange={(e) => handleChange("state", e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Enter state"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="country" className="text-gray-700 font-medium mb-1">
          Country
        </label>
        <Autocomplete
          label=""
          variant="bordered"
          defaultItems={countries}
          placeholder="Search a country"
          className="mt-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary h-[38px] flex items-center px-2"
          selectedKey={value}
          onSelectionChange={(newValue) => setValue(String(newValue))}
        >
          {(item) => <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="city" className="text-gray-700 font-medium mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={billingInfo.city}
          onChange={(e) => handleChange("city", e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Enter city"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="zipcode" className="text-gray-700 font-medium mb-1">
          Zip Code
        </label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          value={billingInfo.zipcode}
          onChange={(e) => handleChange("zipcode", e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Enter zip code"
        />
      </div>
    </div>
  </div>
</CardBody>

      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <Button className="btn-basic rounded-md" onClick={handleSave}>
          Save
        </Button>
        <Button
          className="bg-gray-100 border border-stroke rounded-md shadow-sm text-black hover:bg-gray-200"
          onClick={handleClear}
        >
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillingInfo;
