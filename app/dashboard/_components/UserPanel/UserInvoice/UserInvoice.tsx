"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import DownloadInvoiceButton from "@/components/DownloadInvoiceButton";
import moment from "moment";
import html2pdf from "html2pdf.js";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "/public/logo.png";
import { UserData } from "@/utils/interfaces";
import ReactDOMServer from "react-dom/server";
import { PDFViewer } from "@react-pdf/renderer";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";

interface Invoice {
  _id: string;
  category: string;
  userid: UserData;
  invoiceId: string;
  information: Information[];
  createdAt: string;
  updatedAt: string;
}

interface Information {
  item: string;
  quantity: number;
  rate: string;
  tax: string;
  ammount: string;
}

interface InvoiceData {
  success: boolean;
  message: string;
  data: {
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
    result: Invoice[];
  };
}

interface UserInvoiceProps {
  invoices: InvoiceData;
}

const calculateTotalAmount = (information: Information[]) => {
  return information
    .reduce((total, info) => total + parseFloat(info.ammount), 0)
    .toFixed(2);
};

const UserInvoice = ({ invoices }: UserInvoiceProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = invoices?.data?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/invoice?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/invoice?page=${previousPage}`;
    }
  };

  // Separate invoices based on categories
  const billInvoices = invoices?.data?.result?.filter(
    (invoice) => invoice.category === "bill"
  );
  const addonInvoices = invoices?.data?.result?.filter(
    (invoice) => invoice.category === "addon"
  );
  const rigsInvoices = invoices?.data?.result?.filter(
    (invoice) => invoice.category === "rigs"
  );

  // State variables for the selected invoice
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Function to open the modal and set the selected invoice
  const openModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    onOpen();
  };

  const generatePDF = () => {
    const element = document.getElementById("invoice");

    var options = {
      margin: 0,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.2 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "p" },
    };

    html2pdf(element, options);
  };

  return (
  <div className="flex w-full flex-col gap-6">
    <Tabs
      aria-label="Invoice Categories"
      color="primary"
      variant="bordered"
      className=" rounded-md "
      classNames={{
        tabList: "bg-gray-50 p-1 rounded-md flex gap-2",
        tab: "px-6 py-2 rounded-md font-medium text-black data-[selected=true]:bg-primary data-[selected=true]:text-white",
      }}
    >
      <Tab key="bill" title="Bill Invoices">
        <Card className="shadow-sm rounded-md">
          <CardHeader className="bg-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">All Bill Invoices</h2>
          </CardHeader>
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Invoice Number
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Created On
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {billInvoices?.map((invoice, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {invoice?.invoiceId}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        ${calculateTotalAmount(invoice?.information || [])}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span className="text-gray-800">
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {moment(invoice?.createdAt).format("LL")}
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 bg-primary text-white hover:bg-primary/90"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          View
                        </Button>
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 border border-purple text-purple hover:bg-purple/10"
                        >
                          <Icon icon="material-symbols-light:download" width={20} />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Tab>

      <Tab key="addon" title="Add-ons Invoice">
        <Card className="shadow-sm rounded-md">
          <CardHeader className="bg-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">Add-on Invoices</h2>
          </CardHeader>
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Invoice Number
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Created On
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {addonInvoices?.map((invoice, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {invoice?.invoiceId}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        ${calculateTotalAmount(invoice?.information || [])}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span className="text-gray-800">
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {moment(invoice?.createdAt).format("LL")}
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 bg-primary text-white hover:bg-primary/90"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          View
                        </Button>
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 border border-purple text-purple hover:bg-purple/10"
                        >
                          <Icon icon="material-symbols-light:download" width={20} />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Tab>

      <Tab key="rigs" title="Rigs Invoice">
        <Card className="shadow-sm rounded-md">
          <CardHeader className="bg-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">Rigs Invoices</h2>
          </CardHeader>
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Invoice Number
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Created On
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rigsInvoices?.map((invoice, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {invoice?.invoiceId}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        ${calculateTotalAmount(invoice?.information || [])}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span className="text-gray-800">
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {moment(invoice?.createdAt).format("LL")}
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 bg-primary text-white hover:bg-primary/90"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          View
                        </Button>
                        <Button
                          onClick={() => openModal(invoice)}
                          size="sm"
                          className="flex items-center gap-1 border border-purple text-purple hover:bg-purple/10"
                        >
                          <Icon icon="material-symbols-light:download" width={20} />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      previousPageHref={getPreviousPageHref()}
      nextPageHref={getNextPageHref()}
    />
  </div>
);

};

export default UserInvoice;
