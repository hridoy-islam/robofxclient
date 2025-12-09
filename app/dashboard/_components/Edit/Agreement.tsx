"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import ImageUpload from "@/components/ImageUpload";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AgreementProps {
  id: string;
}

const Agreement = ({ id }: AgreementProps) => {
  const [agreementFile, setAgreementFile] = useState<File | null>(null);

  const cookies = new Cookies();
  const token = cookies.get("jwt");

  useEffect(() => {
    Axios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response?.data?.data?.agreement) {
          setAgreementFile(response?.data?.data?.agreement);
        }
      })
      .catch((err) => console.log(""));
  }, []);

  const handleSave = async () => {
    if (!id) {
      console.error("User ID not available");
      return;
    }

    if (!agreementFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", agreementFile);

    try {
      const response = await Axios.post(`/users/upload/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error("Failed to upload the file");
    }
  };

  const API_URL = "https://api.cryptominerx.com/api";

  const downloadLink = `${API_URL + "/" + agreementFile}`;

  return (
    <Card>
      <CardHeader>
        <h2>Agreement</h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col">
          <label htmlFor="agreement">Upload Agreement (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="border p-2 rounded-md"
            onChange={(e) =>
              setAgreementFile(e.target.files ? e.target.files[0] : null)
            }
          />

          {agreementFile ? (
            <Button
              as={Link}
              href={downloadLink}
              target="_blank"
              className={`border border-primary bg-transparent text-primary w-64 flex items-center mt-3 `}
            >
              <Icon icon="material-symbols-light:download" width={26} />
              Download Agreenment
            </Button>
          ) : (
            ""
          )}
        </div>
      </CardBody>
      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <>
          <Button onClick={handleSave} className="btn-basic rounded-md">
            Save
          </Button>
          <Button className="bg-white border border-stroke rounded-md shadow-sm">
            Clear
          </Button>
        </>
      </CardFooter>
    </Card>
  );
};

export default Agreement;
