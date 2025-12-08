"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import SingleProductView from "@/app/dashboard/_components/UserPanel/Product/SingleProductView";
import { OrderInterface, Product } from "@/utils/interfaces";
import Order from "../Order/Order";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ProductResponsePros {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: Product[];
}

interface OrderResponseProps {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: OrderInterface[];
}

interface ProductInterface {
  productResponse: ProductResponsePros;
  orderResponse: OrderResponseProps;
}

const Product = ({ productResponse, orderResponse }: ProductInterface) => {
  const products = productResponse?.result;
  const orders = orderResponse?.result;

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = productResponse?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/product?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/product?page=${previousPage}`;
    }
  };

  return (
  <div>
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        classNames={{
          tabList: "bg-white p-0 rounded-0",
          cursor: "w-full bg-primary",
          tab: "max-w-fit px-8 h-10",
          tabContent:
            "group-data-[selected=true]:text-white group-data-[selected=true]:font-semibold",
        }}
      >
        <Tab key="items" title="Items">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products?.map((product, index) => (
              <SingleProductView key={index} product={product} />
            ))}
          </div>
        </Tab>

        <Tab key="orders" title="Orders">
          <Order
            orders={orders}
            totalPage={orderResponse?.meta?.totalPage}
          />
        </Tab>
      </Tabs>
    </div>

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      previousPageHref={getPreviousPageHref()}
      nextPageHref={getNextPageHref()}
    />
  </div>
);

};

export default Product;
