"use client";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import ViewButton from "@/components/ViewButton";
import Axios from "@/utils/axios";
import { currencyConvert } from "@/utils/currencyConvert";
import { DecodedToken, UserData, settingsData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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
  withdrawsData: WithdrawData;
  currentUser: UserData;
  settings: settingsData[];
}

const Withdraw = ({ withdrawsData, currentUser, settings }: WithdrawProps) => {
  const withdrawData = withdrawsData?.data?.result;

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = withdrawsData?.data?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/withdraw?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/withdraw?page=${previousPage}`;
    }
  };

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [btc, setBtc] = useState(0);
  const [amount, setAmount] = useState(0);
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const handleSubmit = async () => {
    let decoded;

    if (!amount || !btc) {
      return toast.error("Please fill all the fields!");
    }

    if (btc > currentUser?.balance) {
      return toast.error("Insufficient balance!");
    }

    if (token) {
      decoded = jwtDecode(token) as DecodedToken;
    }

    try {
      const response = await Axios.post(
        "/withdraws",
        {
          userid: decoded?._id,
          btc: String(btc),
          amount,
          requestDate: moment().format("LL"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    const calculateBTC = currencyConvert(amount, settings[0]?.btc);
    setBtc(calculateBTC);
  }, [amount]);

  return (
    <>
      <Card className="mb-6">
        <CardHeader className="tableHeader flex justify-start gap-4 items-center">
          <div>
            <h2>Recent Withdraw</h2>
          </div>
          <div>
          <Dialog>
  <DialogTrigger asChild>
    <Button>Request Withdraw</Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Request Withdraw</DialogTitle>
    </DialogHeader>

    <div className="flex flex-col gap-4 py-4">
      {/* BTC Input */}
      <div className="flex flex-col">
        <label htmlFor="btc" className="text-primary">
          BTC*
        </label>
        <Input
          id="btc"
          name="btc"
          value={btc}
          readOnly
          className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Amount Input */}
      <div className="flex flex-col">
        <label htmlFor="amount" className="text-primary">
          Amount*
        </label>
        <Input
          id="amount"
          name="amount"
          type="number"
          required
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>

    <DialogFooter className="flex justify-between gap-2">
      {/* Cancel Button */}
      <DialogClose asChild>
        <Button variant="outline" className="w-1/2">
          Cancel
        </Button>
      </DialogClose>

      {/* Save Button */}
      <Button className="w-1/2" onClick={handleSubmit}>
        Save
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

          </div>
        </CardHeader>
        <CardBody className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Requested By</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">BTC</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Amount</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Requested Date</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {withdrawData?.map((withdraw, index) => (
        <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-4 py-3 text-sm text-gray-800">
            {withdraw?.userid?.personal_information?.firstName}{" "}
            {withdraw?.userid?.personal_information?.lastName}
          </td>
          <td className="px-4 py-3">
            <Chip
              color={
                withdraw?.status === "pending"
                  ? "warning"
                  : withdraw?.status === "approved"
                  ? "success"
                  : "danger"
              }
              className="text-white uppercase text-xs font-medium px-2 py-1 rounded-full"
            >
              {withdraw?.status}
            </Chip>
          </td>
          <td className="px-4 py-3 text-sm text-gray-700">{withdraw?.btc}</td>
          <td className="px-4 py-3 text-sm text-gray-700">${withdraw?.amount}</td>
          <td className="px-4 py-3 text-sm text-gray-700">{withdraw?.requestDate}</td>
          <td className="px-4 py-3">
            <Link href={`/dashboard/user/withdraw/${withdraw?._id}`}>
              <Button className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 hover:bg-blue-50 text-sm rounded-md">
                <Icon icon="solar:eye-linear" className="text-base" />
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
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Request Withdraw
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <label htmlFor="btc" className="text-primary">
                    BTC*
                  </label>
                  <input
                    readOnly
                    type="number"
                    name="btc"
                    className="roboinput"
                    id="btc"
                    value={btc}
                    // onChange={(e) => {
                    //   setBtc(e.target.value);
                    // }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="amount" className="text-primary">
                    Amount*
                  </label>
                  <input
                    required
                    type="text"
                    name="amount"
                    className="roboinput"
                    id="amount"
                    onChange={(e) => {
                      setAmount(Number(e.target.value));
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full text-white"
                  color="primary"
                  onClick={() => {
                    handleSubmit();
                    onClose();
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};

export default Withdraw;
