"use client";
import { UserData, settingsData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Card,
  CardBody,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { currencyConvert } from "@/utils/currencyConvert";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";

interface UpdateWithdrawProps {
  withdraw: {
    _id: string;
    userid: UserData;
    btc: string;
    amount: number;
    requestDate: string;
    status: string;
  };
  admin?: string;
  id: string;
  settings: settingsData[];
}

const UpdateWithdraw = ({
  withdraw,
  admin = "false",
  id,
  settings,
}: UpdateWithdrawProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const localStatus = ["pending", "approved", "decline"];
  const [selectedStatus, setSelectedStatus] = useState("");
  const currentUser = withdraw?.userid;
  const [updatedAmount, setUpdatedAmount] = useState(withdraw?.amount);
  const router = useRouter();
  const cookies = new Cookies();
  const [btc, setBtc] = useState(0);

  const wallet = currentUser?.wallets?.find(
    (wallet) => wallet?._id === currentUser?.primary_account
  );

  const handleUpdate = async () => {
    // const userId = decoded?.id;
    const token = cookies.get("jwt");

    const url = `/withdraws/${id}`;

    await Axios.patch(
      url,
      {
        amount: updatedAmount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  const handleStatus = () => {
    // if (isLoading) return;

    const token = cookies.get("jwt");

    const url = `/withdraws/${withdraw?._id}/${withdraw?.userid?._id}`;

    Axios.post(
      url,
      { status: selectedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
        // setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    const calculateBTC = currencyConvert(withdraw?.amount, settings[0]?.btc);
    setBtc(calculateBTC);
  }, [withdraw?.amount]);

return (
  <Card className="p-8 rounded-2xl shadow-lg border border-default-200 bg-white space-y-10">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* USER INFORMATION */}
      <Card className="rounded-2xl border border-default-200 shadow-sm bg-gradient-to-br from-default-50 to-default-100">
        <CardBody className="space-y-5 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon icon="uil:money-withdrawal" width={28} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">User Information</h2>
          </div>

          <div className="space-y-1.5 text-default-600 leading-relaxed">
            <p><strong>Name:</strong> {currentUser?.personal_information?.firstName} {currentUser?.personal_information?.lastName}</p>
            <p><strong>Email:</strong> {currentUser?.email}</p>
            <p><strong>Phone:</strong> {currentUser?.personal_information?.phone}</p>
          </div>
        </CardBody>
      </Card>

      {/* WALLET INFORMATION */}
      <Card className="rounded-2xl border border-default-200 shadow-sm bg-gradient-to-br from-default-50 to-default-100">
        <CardBody className="space-y-5 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon icon="ri:bank-fill" width={28} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Receiving Wallet Details</h2>
          </div>

          <div className="space-y-1.5 text-default-600 leading-relaxed">
            <p><strong>Payment Method:</strong> Bank</p>
            <p><strong>Wallet Type:</strong> {currentUser?.currency?.toUpperCase()}</p>
            <p><strong>Exchange:</strong> {wallet?.exchange}</p>
            <p><strong>Account Address:</strong> {wallet?.account}</p>
          </div>
        </CardBody>
      </Card>

      {/* AMOUNT DETAILS */}
      <Card className="rounded-2xl border border-default-200 shadow-sm bg-gradient-to-br from-default-50 to-default-100">
        <CardBody className="space-y-5 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon icon="lucide:file-pen" width={28} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Withdraw Amount Details</h2>
          </div>

          {/* Amount */}
          <div className="flex items-center gap-4">
            <p className="text-default-600 font-medium"><strong>Amount:</strong></p>
            <Chip className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm">
              ${withdraw?.amount}
            </Chip>

            {withdraw?.status !== "approved" && (
              <Button
                size="sm"
                onClick={onOpen}
                className="bg-primary text-white rounded-lg"
              >
                Update Amount
              </Button>
            )}
          </div>

          {/* BTC */}
          <div className="flex items-center gap-4">
            <p className="text-default-600 font-medium"><strong>Bitcoin:</strong></p>
            <Chip className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm">
              {btc} BTC
            </Chip>
          </div>

          {/* Status */}
          <div className="flex items-center gap-4">
  <p className="text-default-600 font-medium">
    <strong>Status:</strong>
  </p>

  <span
    className={`
      px-4 py-1.5 rounded-lg text-xs font-semibold uppercase
      text-white shadow-sm
      ${
        withdraw?.status === "approved"
          ? "bg-green-600"
          : withdraw?.status === "pending"
          ? "bg-yellow-500"
          : "bg-red-600"
      }
    `}
  >
    {withdraw?.status}
  </span>
</div>

        </CardBody>
      </Card>

      {/* ADMIN STATUS UPDATE */}
      {admin === "true" && withdraw?.status !== "approved" && (
        <Card className="rounded-2xl border border-default-200 shadow-sm bg-gradient-to-br from-default-50 to-default-100 p-6 space-y-4">
          <label className="text-sm font-medium text-default-700">
            Change Withdrawal Status
          </label>

          <select
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full p-3 border border-default-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-primary"
          >
            <option>Select Status</option>
            {localStatus.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <Button
            onClick={handleStatus}
            className="bg-primary text-white rounded-lg w-fit"
          >
            Update Status
          </Button>
        </Card>
      )}

    </div>

    {/* UPDATE AMOUNT DIALOG (SHADCN) */}
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Update Withdraw Amount</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <label className="text-sm font-medium text-default-700">
            Enter New Amount
          </label>

          <input
            required
            type="number"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(Number(e.target.value))}
            className="w-full p-3 border border-default-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary"
          />
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button
            className="bg-primary text-white"
            onClick={() => {
              onOpenChange(false);
              handleUpdate();
            }}
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  </Card>
);



};

export default UpdateWithdraw;
