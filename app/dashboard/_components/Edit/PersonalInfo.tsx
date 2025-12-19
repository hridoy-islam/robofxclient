"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/utils/interfaces";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  photo: string | null;
  phone: string;
  password?: string;
}

interface PersonalInfoProps {
  id: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ id }) => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    phone: "",
    password: "",
  });

  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  useEffect(() => {
    axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response?.data?.data?.personal_information) {
          setUserData(response?.data?.data?.personal_information);
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

    const formattedData: any = {
      personal_information: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        photo: userData.photo,
      },
    };
    if (userData.password?.trim()) {
      formattedData.password = userData.password;
    }
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
      });
  };

  const handleClear = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
      phone: "",
    });
  };

  const handleChange = (key: keyof UserData, value: string | null) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value || "", // Set to an empty string if value is null or undefined
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Profile Information</h2>
      </CardHeader>
      <CardBody className="p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-gray-700 font-medium mb-1"
                >
                  First Name
                </label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter first name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-gray-700 font-medium mb-1"
                >
                  Last Name
                </label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                value={userData.password || ""}
                onChange={(e) => handleChange("password", e.target.value)}
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter new password"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="photo" className="text-gray-700 font-medium mb-1">
                Upload Photo
              </label>
              <ImageUpload
                value={userData.photo}
                onChange={(value) => handleChange("photo", value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={userData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter phone number"
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

export default PersonalInfo;
