"use client";

import React, { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import axios from "@/utils/axios";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { countries } from "@/utils/constants";
import { Button } from "@/components/ui/button";

interface ContactInfoProps {
  id: string;
}

const ContactInfo = ({ id }: ContactInfoProps) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  // const decoded: DecodedToken = jwtDecode(token) as DecodedToken;
  const [value, setValue] = React.useState("");


  const [contactData, setContactData] = useState({
    address: "",
    state: "",
    country: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    // Assuming `id` is defined somewhere in your component

    axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response?.data?.data?.contact_information) {
          setContactData(response?.data?.data?.contact_information);
          setValue(response?.data?.data?.contact_information?.country);
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
      contact_information: {
        address: contactData.address,
        state: contactData.state,
        city: contactData.city,
        zipcode: contactData.zipcode,
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
    // Clear the contact information locally
    setContactData({
      address: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
    });
  };

  // const handleCountryChange = (selectedCountry: any) => {
  //   setContactData((prevData) => ({
  //     ...prevData,
  //     country: selectedCountry?.name,
  //   }));
  // };

  const handleChange = (key: string, value: string) => {
    setContactData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Contact Information</h2>
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
      value={contactData.address}
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
          value={contactData.state}
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
          value={contactData.city}
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
          value={contactData.zipcode}
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

export default ContactInfo;
