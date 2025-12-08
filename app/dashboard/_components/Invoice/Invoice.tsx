"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Avatar, // Added Avatar to imports as it was used in the UI
} from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import moment from "moment";
import html2pdf from "html2pdf.js";
import { useSearchParams } from "next/navigation";

// Shadcn UI Imports
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// Interfaces
import { UserData } from "@/utils/interfaces";
import Pagination from "@/components/Pagination";

interface Invoice {
  _id: string;
  invoiceId: string;
  category: string;
  userid: UserData;
  information: Information[];
  createdAt: string;
  updatedAt: string;
}

interface Information {
  item: string;
  quantity: number;
  rate: string;
  tax: string;
  amount: string;
}

interface AllInvoicesResponse {
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

interface InvoiceProps {
  allInvoices: AllInvoicesResponse;
}

// Helpers
const calculateTotalAmount = (information: Information[]) => {
  return information
    .reduce((total, info) => total + parseFloat(info.amount), 0)
    .toFixed(2);
};

const generatePDF = () => {
  const element = document.getElementById("invoice");
  var options = {
    margin: 0,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "p" },
  };
  html2pdf(element, options);
};

const Invoice = ({ allInvoices }: InvoiceProps) => {
  // State for Dialog (Replaces useDisclosure)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const invoices = allInvoices?.data?.result;
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = allInvoices?.data?.meta?.totalPage;

  // Pagination Logic
  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    return nextPage > totalPages ? null : `/dashboard/admin/invoice?page=${nextPage}`;
  };

  const getPreviousPageHref = () => {
    return currentPage <= 1 ? null : `/dashboard/admin/invoice?page=${currentPage - 1}`;
  };

  // Filter Invoices
  const billInvoices = invoices?.filter((invoice) => invoice.category === "bill");
  const addonInvoices = invoices?.filter((invoice) => invoice.category === "addon");
  const rigsInvoices = invoices?.filter((invoice) => invoice.category === "rigs");

  // State for selected invoice
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Open Dialog handler
  const openModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsDialogOpen(true);
  };

  // Shared Table Render Function to keep code DRY
  const renderTable = (data: Invoice[] | undefined) => (
    <table className="w-full table-auto border-collapse text-sm">
      <thead className="bg-gray-50/50">
        <tr className="border-b">
          <th className="py-3 px-4 text-left font-medium text-gray-500">Invoice Number</th>
          <th className="py-3 px-4 text-left font-medium text-gray-500">Amount</th>
          <th className="py-3 px-4 text-left font-medium text-gray-500">User</th>
          <th className="py-3 px-4 text-left font-medium text-gray-500">Created On</th>
          <th className="py-3 px-4 text-left font-medium text-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((invoice, index) => (
          <tr key={index} className="border-b last:border-0 hover:bg-gray-50/50 transition-colors">
            <td className="py-3 px-4 text-gray-900 font-medium">#{invoice?.invoiceId}</td>
            <td className="py-3 px-4 text-gray-600">
              ${calculateTotalAmount(invoice?.information || [])}
            </td>
            <td className="py-3 px-4">
              <div className="flex items-center gap-3">
                <Avatar
                  className="w-8 h-8"
                  src={invoice?.userid?.personal_information?.photo}
                />
                <span className="text-gray-700">
                  {invoice?.userid?.personal_information?.firstName}{" "}
                  {invoice?.userid?.personal_information?.lastName}
                </span>
              </div>
            </td>
            <td className="py-3 px-4 text-gray-600">
              {moment(invoice?.createdAt).format("MMM DD, YYYY")}
            </td>
            <td className="py-3 px-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => openModal(invoice)}
                className="h-8 gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary"
              >
                <Icon icon="solar:eye-linear" className="text-lg" />
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="flex w-full flex-col space-y-6">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        classNames={{
          tabList: "bg-white p-0 rounded-md border border-gray-200",
          cursor: "bg-primary",
          tab: "max-w-fit px-6 h-10 text-gray-600 data-[selected=true]:text-white",
          tabContent: "group-data-[selected=true]:text-white"
        }}
      >
        <Tab key="bill" title="Bill Invoices">
          <Card className="shadow-sm border border-gray-100">
            <CardHeader className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">All Bill Invoices</h2>
              <Link href="/dashboard/admin/invoice/create">
                <Button className="gap-2">
                  <Icon icon="ic:round-plus" width={20} /> Create Invoice
                </Button>
              </Link>
            </CardHeader>
            <CardBody className="p-0 overflow-x-auto">
              {renderTable(billInvoices)}
            </CardBody>
          </Card>
        </Tab>

        <Tab key="addon" title="Add-ons Invoice">
          <Card className="shadow-sm border border-gray-100">
            <CardHeader className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Add On Invoices</h2>
              <Link href="/dashboard/admin/invoice/create">
                <Button className="gap-2">
                  <Icon icon="ic:round-plus" width={20} /> Create Invoice
                </Button>
              </Link>
            </CardHeader>
            <CardBody className="p-0 overflow-x-auto">
               {renderTable(addonInvoices)}
            </CardBody>
          </Card>
        </Tab>

        <Tab key="rigs" title="Rigs Invoice">
          <Card className="shadow-sm border border-gray-100">
            <CardHeader className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Rigs Invoices</h2>
              <Link href="/dashboard/admin/invoice/create">
                <Button className="gap-2">
                  <Icon icon="ic:round-plus" width={20} /> Create Invoice
                </Button>
              </Link>
            </CardHeader>
            <CardBody className="p-0 overflow-x-auto">
               {renderTable(rigsInvoices)}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>

      {/* Shadcn Dialog for Invoice Details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto sm:p-10 bg-gray-50/50">
          <DialogHeader className="sr-only">
             <DialogTitle>Invoice Details</DialogTitle>
          </DialogHeader>

          {/* Invoice Layout for PDF */}
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100" id="invoice">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
              <div>
                <img
                  src="/logo.png"
                  alt="company-logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="mt-6 md:mt-0">
                <div className="flex md:justify-end gap-8 text-sm">
                  <div className="border-r-2 border-primary pr-6">
                    <p className="text-gray-500 mb-1">Date</p>
                    <p className="font-medium">{moment(selectedInvoice?.createdAt).format("LL")}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Invoice No.</p>
                    <p className="font-medium">INV-{selectedInvoice?.invoiceId}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-100">
              <div>
                <p className="font-semibold text-gray-900 mb-2">From:</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <span className="font-medium text-gray-700">Algopips</span>
                  <br />
                  13th Street, 47 W 13th St,<br />
                  New York, NY 10011, USA
                </p>
              </div>

              <div className="md:text-right">
                <p className="font-semibold text-gray-900 mb-2">Bill To:</p>
                <div className="text-gray-500 text-sm leading-relaxed">
                  <p className="font-medium text-gray-700">
                    {selectedInvoice?.userid?.personal_information?.firstName}{" "}
                    {selectedInvoice?.userid?.personal_information?.lastName}
                  </p>
                  <p>
                    {selectedInvoice?.userid?.contact_information?.address},{" "}
                    {selectedInvoice?.userid?.contact_information?.city}
                  </p>
                  <p>{selectedInvoice?.userid?.contact_information?.country}</p>
                  <p className="mt-1">
                    Phone: {selectedInvoice?.userid?.personal_information?.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Items Table */}
            <div className="mt-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-sm font-semibold text-gray-900">Items</th>
                    <th className="py-3 text-sm font-semibold text-gray-900 text-right">Qty</th>
                    <th className="py-3 text-sm font-semibold text-gray-900 text-right">Rate</th>
                    <th className="py-3 text-sm font-semibold text-gray-900 text-right">Tax</th>
                    <th className="py-3 text-sm font-semibold text-gray-900 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {selectedInvoice?.information?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="py-4 text-sm text-gray-900 font-medium">{item?.item}</td>
                      <td className="py-4 text-sm text-gray-500 text-right">{item?.quantity}</td>
                      <td className="py-4 text-sm text-gray-500 text-right">${item?.rate}</td>
                      <td className="py-4 text-sm text-gray-500 text-right">{item?.tax}%</td>
                      <td className="py-4 text-sm text-gray-900 text-right font-medium">${item?.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="flex justify-end">
                <div className="w-full md:w-1/3 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${selectedInvoice && calculateTotalAmount(selectedInvoice?.information)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-semibold border-t border-gray-100 pt-3">
                    <span className="text-gray-900">Total Payment</span>
                    <span className="text-primary">
                      ${selectedInvoice && calculateTotalAmount(selectedInvoice?.information)}
                    </span>
                  </div>
                   <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Due</span>
                    <span className="font-medium text-gray-900">$0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
               <img
                  src="/logo.png"
                  alt="company-logo"
                  className="h-8 w-auto opacity-80"
                />
              <div className="flex gap-6 text-xs text-gray-400">
                <span>mining@algopips.net</span>
                <span>+1 929 230 1920</span>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-6 sm:justify-end gap-2">
             <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
             >
                Close
             </Button>
            <Button
              onClick={generatePDF}
              className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
            >
              <Icon icon="material-symbols-light:download" width={20} />
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="py-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPageHref={getPreviousPageHref()}
          nextPageHref={getNextPageHref()}
        />
      </div>
    </div>
  );
};

export default Invoice;