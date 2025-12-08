"use client";
// Import necessary types and components
import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";
import { Product } from "@/utils/interfaces";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";

interface ProductData {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: Product[];
}

// Define the props type for the ProductDisplay component
interface ProductDisplayProps {
  response: ProductData;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ response }) => {
  const allProducts = response?.result;

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/product?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/product?page=${previousPage}`;
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="tableHeader flex justify-start gap-4">
          <div>
            <h2>Products</h2>
          </div>
          <div>
            <Link href="/dashboard/admin/product/create">
              <Button className="btn-basic rounded-md">
                <Icon icon="ic:round-plus" width={24} /> Add Product
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardBody>
          <div className="">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Powered By
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allProducts?.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {product.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {product.powerdby}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <div className="flex flex-row items-center justify-end w-full gap-2">

                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded flex items-center gap-1"
                        onClick={() =>
                          router.push(
                            `/dashboard/admin/product/edit/${product._id}`
                          )
                        }
                        >
                        <Icon icon="uil:edit" className="text-lg" />
                        Edit
                      </Button>

                      <Button
                        onClick={() =>
                          router.push(`/dashboard/admin/product/${product._id}`)
                        }
                        className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 text-sm px-4 py-2 rounded flex items-center gap-1"
                        >
                        <Icon icon="solar:eye-linear" className="text-lg" />
                        View
                      </Button>

                      <DeleteButton label="products" id={product._id} />
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};

export default ProductDisplay;
