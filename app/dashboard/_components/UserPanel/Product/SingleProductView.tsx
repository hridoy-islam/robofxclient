"use client";
import React from "react";
// import DeleteButton from "@/components/DeleteButton";
import { Button, Card, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DecodedToken, Product } from "@/utils/interfaces";
import Image from "next/image";
import intel from "/public/intel.png";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";

interface SingleProductViewProps {
  product: Product;
}

const SingleProductView = ({ product }: SingleProductViewProps) => {
  const {
    motherboard,
    graphicscard,
    photo,
    powerdby,
    price,
    processor,
    ram,
    smps,
    title,
    _id,
  } = product;

  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;
  const userId = decoded?._id;

  const handleAddToCart = async () => {
    try {
      const response = await Axios.post(
        "/orders",
        {
          userid: userId,
          productid: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

 return (
  <Card className="p-6 space-y-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
    {/* Product Type */}
    <Chip className="bg-primaryLight text-primary font-semibold px-4 py-1 rounded-full">
      Basic Mining
    </Chip>

    {/* Price & Powered By */}
    <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-inner">
      <p className="text-4xl font-bold text-gray-800">${price}</p>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-1">Powered By</span>
        <Image
          width={80}
          height={80}
          className="h-16 w-auto object-contain"
          src={photo || intel}
          alt="poweredby"
        />
      </div>
    </div>

    {/* Product Details Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <tbody className="divide-y divide-gray-200">
          {[
            ["Name", title],
            ["Motherboard", motherboard],
            ["Processor", processor],
            ["RAM", ram],
            ["Graphics Card", graphicscard],
            ["Powered By", powerdby],
            ["SMPS", smps],
          ].map(([label, value]) => (
            <tr key={label} className="bg-gray-50 rounded-lg">
              <td className="p-3">
                <Icon
                  icon="mdi:check-bold"
                  className="h-5 w-5 text-primary bg-white rounded-full p-1"
                />
              </td>
              <td className="p-3 font-medium text-gray-700">{label}</td>
              <td className="p-3 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Add To Cart Button */}
    <Button
      onClick={handleAddToCart}
      className="w-full bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded-lg transition-colors duration-300"
    >
      Add To Cart
    </Button>
  </Card>
);

};

export default SingleProductView;
