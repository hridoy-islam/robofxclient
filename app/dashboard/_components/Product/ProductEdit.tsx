"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {  Card, CardBody, CardHeader } from "@nextui-org/react";
import Axios from "@/utils/axios";
import { Product } from "@/utils/interfaces";
import toast from "react-hot-toast";
import ImageUpload from "@/components/ImageUpload";
import Cookies from "universal-cookie";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductEditProps {
  product: Product;
}

const ProductEdit: React.FC<ProductEditProps> = ({ product }) => {
  // Use state to manage form inputs
  const [formData, setFormData] = useState<Product>({
    _id: product._id,
    title: product.title,
    powerdby: product.powerdby,
    price: product.price,
    motherboard: product.motherboard,
    processor: product.processor,
    ram: product.ram,
    smps: product.smps,
    graphicscard: product.graphicscard,
    photo: product.photo,
  });

  const [photo, setPhoto] = useState("");

  const cookies = new Cookies();
  const token = cookies.get("jwt");

  // Handle input changes for all fields
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure that the price is a number
    const numericPrice = parseFloat(product.price as any);

    // Update the product state with the numeric price and photo
    setFormData({
      ...formData,
      price: numericPrice,
      photo,
    });

    try {
      // Perform submission logic here using the formData state
      // For example, using Axios to make a PUT request
      const response = await Axios.patch(`/products/${product._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);

      // Optionally, reset the form or perform any other necessary actions
      // setFormData({ ...initialProductState });
    } catch (error) {
      toast.error("Something went wrong!");
      //   console.error("Error updating product:", error);
    }
  };

  return (
    <Card className="md:mx-20">
      <CardHeader className="tableHeader">
        <h3>Edit Product</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              name="title"
              id="title"
              className="roboinput"
              value={formData.title}
              onChange={(e) => handleInputChange(e, "title")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="powerdby">Powerd By</label>
            <Input
              type="text"
              name="powerdby"
              id="powerdby"
              className="roboinput"
              value={formData.powerdby}
              onChange={(e) => handleInputChange(e, "powerdby")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <Input
              type="text"
              name="price"
              id="price"
              className="roboinput"
              value={formData.price}
              onChange={(e) => handleInputChange(e, "price")}
            />
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="roboinput"
              value={formData.photo}
              onChange={(e) => handleInputChange(e, "photo")}
            />
          </div> */}
          <div className="flex flex-col">
            <label htmlFor="photo">Upload Photo</label>
            <ImageUpload
              value={formData.photo}
              onChange={(value) => setPhoto(value)}
            />
          </div>
          <h2 className="tex-xl font-semibold my-2">Configurations</h2>
          <div className="grid grid-cols-2 gap-3 space-y-3">
            <div className="flex flex-col">
              <label htmlFor="motherboard">Motherboard</label>
              <Input
                type="text"
                name="motherboard"
                id="motherboard"
                className="roboinput"
                value={formData.motherboard}
                onChange={(e) => handleInputChange(e, "motherboard")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="processor">Processor</label>
              <Input
                type="text"
                name="processor"
                id="processor"
                className="roboinput"
                value={formData.processor}
                onChange={(e) => handleInputChange(e, "processor")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ram">Ram</label>
              <Input
                type="text"
                name="ram"
                id="ram"
                className="roboinput"
                value={formData.ram}
                onChange={(e) => handleInputChange(e, "ram")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="smps">SMPS</label>
              <Input
                type="text"
                name="smps"
                id="smps"
                className="roboinput"
                value={formData.smps}
                onChange={(e) => handleInputChange(e, "smps")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="graphicscard">Graphics Card</label>
              <Input
                type="text"
                name="graphicscard"
                id="graphicscard"
                className="roboinput"
                value={formData.graphicscard}
                onChange={(e) => handleInputChange(e, "graphicscard")}
              />
            </div>
          </div>
          <div className=" py-2 flex justify-end">
            <Button className="bg-primary text-white rounded-sm" type="submit">
              Update
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default ProductEdit;
