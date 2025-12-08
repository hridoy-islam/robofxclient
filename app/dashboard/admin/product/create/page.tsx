"use client";

// Import necessary types from React and Next UI
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import InputField from "@/app/dashboard/_components/Product/InputField";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";

// Define an interface for your product data
interface Product {
  title: string;
  powerdby: string;
  price: number;
  photo: string; // Updated type to handle both File and string
  motherboard: string;
  processor: string;
  ram: string;
  smps: string;
  graphicscard: string;
}

export default function Page() {
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  // Use the Product interface for the state
  const [product, setProduct] = useState<Product>({
    title: "",
    powerdby: "",
    price: 0,
    photo: "",
    motherboard: "",
    processor: "",
    ram: "",
    smps: "",
    graphicscard: "",
  });

  // Reset the form fields
  const resetForm = () => {
    setProduct({
      title: "",
      powerdby: "",
      price: 0,
      photo: "",
      motherboard: "",
      processor: "",
      ram: "",
      smps: "",
      graphicscard: "",
    });
    setPhoto("");
  };

  // Handle input changes for all fields
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    setProduct({ ...product, [field]: e.target.value });
  };

  const [photo, setPhoto] = useState("");

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure that the price is a number
    // const numericPrice = parseFloat(product.price as any);

    // Update the product state with the numeric price and photo
    setProduct({
      ...product,
    });

    const formattedData = {
      ...product,
      price: Number(product.price),
      photo,
    };


    // Perform submission logic here using the product state
    Axios.post("/products", formattedData, {
      headers: {
        Authorization: `Bearrer ${token}`,
      },
    })
      .then((res) => {
        toast.success(res?.data?.message);
        resetForm();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        } else {
          toast.error("Something went wrong!");
        }
      });

    // Reset the form after submission if needed
    // setProduct({ ...initialProductState });
  };

  return (
    <>
      <Card className="md:mx-20">
        <CardHeader className="tableHeader">
          <h3>Add New Product</h3>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Title"
              id="title"
              value={product.title}
              onChange={(e) => handleInputChange(e, "title")}
            />
            <InputField
              label="Powerd By"
              id="powerdby"
              value={product.powerdby}
              onChange={(e) => handleInputChange(e, "powerdby")}
            />
            <InputField
              label="Price"
              id="price"
              type="number" // Ensure input type is number
              value={product.price.toString()} // Convert number to string for input value
              onChange={(e) => handleInputChange(e, "price")}
            />
            {/* <InputField
              label="Upload Powerd By Image"
              id="photo"
              type="file"
              onChange={handleImageChange}
            /> */}
            <div className="flex flex-col">
              <label htmlFor="photo">Upload Photo</label>
              <ImageUpload
                value={photo}
                onChange={(value) => setPhoto(value)}
              />
            </div>
            <h2 className="text-xl font-semibold my-2">Configurations</h2>
            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="Motherboard"
                id="motherboard"
                value={product.motherboard}
                onChange={(e) => handleInputChange(e, "motherboard")}
              />
              <InputField
                label="Processor"
                id="processor"
                value={product.processor}
                onChange={(e) => handleInputChange(e, "processor")}
              />
              <InputField
                label="RAM"
                id="ram"
                value={product.ram}
                onChange={(e) => handleInputChange(e, "ram")}
              />
              <InputField
                label="SMPS"
                id="smps"
                value={product.smps}
                onChange={(e) => handleInputChange(e, "smps")}
              />
              <InputField
                label="Graphics Card"
                id="graphicscard"
                value={product.graphicscard}
                onChange={(e) => handleInputChange(e, "graphicscard")}
              />
            </div>
            <div className=" flex justify-end">
              <Button
                className="bg-primary text-white rounded-sm"
                type="submit"
              >
                Create
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
