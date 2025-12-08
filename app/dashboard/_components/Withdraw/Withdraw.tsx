"use client";
import Pagination from "@/components/Pagination";
import { UserData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardBody, CardHeader, Card, Chip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface WithdrawObject {
  _id: string;
  amount: number;
  btc: string;
  requestDate: string;
  status: string;
  userid: UserData;
}

interface WithdrawData {
  success: boolean;
  message: string;
  data: WithdrawDataDetails;
}

interface WithdrawDataDetails {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: WithdrawObject[];
}

interface WithdrawProps {
  allWithdraws: WithdrawData;
}

const Withdraw = ({ allWithdraws }: WithdrawProps) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = Math.ceil(allWithdraws?.data?.meta?.total / 10);

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/withdraw?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/withdraw?page=${previousPage}`;
    }
  };

  const withdraws = allWithdraws?.data?.result;
  // Filter withdraws based on status
  const pendingRequests = withdraws?.filter(
    (withdraw) => withdraw?.status === "pending"
  );
  const approvedRequests = withdraws?.filter(
    (withdraw) => withdraw?.status === "approved"
  );

  // Get the lengths of filtered arrays
  const pendingRequestLength = pendingRequests?.length || 0;
  const approvedRequestLength = approvedRequests?.length || 0;

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

 return (
  <div className="space-y-8">

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Pending Requests */}
  <Card shadow="sm" className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-orange-600 font-medium">Pending Requests</p>
        <h3 className="text-4xl font-bold mt-2 text-orange-700">
          {pendingRequestLength}
        </h3>
      </div>
      <div className="p-3 bg-white rounded-xl shadow-md">
        <Icon icon="solar:clock-circle-linear" className="text-orange-600" width={32} />
      </div>
    </div>
  </Card>

  {/* Approved Withdrawals */}
  <Card shadow="sm" className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-green-700 font-medium">Approved Withdrawals</p>
        <h3 className="text-4xl font-bold mt-2 text-green-700">
          {approvedRequestLength}
        </h3>
      </div>
      <div className="p-3 bg-white rounded-xl shadow-md">
        <Icon icon="solar:check-circle-linear" className="text-green-600" width={32} />
      </div>
    </div>
  </Card>

</div>

    {/* Table Section */}
    <Card shadow="sm" className="overflow-hidden">
      <CardHeader className="border-b px-6 py-4 bg-gray-50">
        <h2 className="text-xl font-semibold">Withdraw Requests</h2>
      </CardHeader>

      <CardBody className="p-0">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Requested By
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                BTC Address
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Requested Date
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {withdraws?.map((withdraw, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {withdraw?.userid?.personal_information?.firstName}{" "}
                  {withdraw?.userid?.personal_information?.lastName}
                </td>

                <td className="px-6 py-4">
                  <Chip
                    color={
                      withdraw?.status === "approved"
                        ? "success"
                        : withdraw?.status === "pending"
                        ? "warning"
                        : "danger"
                    }
                    className="uppercase text-xs font-semibold"
                  >
                    {withdraw?.status}
                  </Chip>
                </td>

                <td className="px-6 py-4">{withdraw?.btc}</td>

                <td className="px-6 py-4 font-semibold">
                  ${withdraw?.amount}
                </td>

                <td className="px-6 py-4">{withdraw?.requestDate}</td>

                <td className="px-6 py-4">
                  <Link
                    href={`/dashboard/admin/withdraw/${withdraw?._id}`}
                  >
                    <Button
                      size="sm"
                    >
                      <Icon icon="solar:eye-linear" width={18} />
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>

    {/* Pagination */}
    <div className="pt-4">
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

export default Withdraw;
