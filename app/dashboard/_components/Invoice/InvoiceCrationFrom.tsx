"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { UserData } from "@/utils/interfaces";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface InvoiceCrationFromProps {
  allUsers: UserData[];
}

const InvoiceCrationFrom = ({ allUsers }: InvoiceCrationFromProps) => {
  const [informations, setInformations] = useState([
    {
      item: "",
      quantity: 0,
      rate: "",
      tax: "",
      amount: 0,
    },
  ]);
  const router = useRouter();

  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedUser, setSelectedUser] = useState("");
  const [invoiceType, setInvoiceType] = useState("");

  const addClick = () => {
    const newInfo = {
      item: "",
      quantity: 0,
      rate: "",
      tax: "",
      amount: 0,
    };

    setInformations((prevInformations: any) => {
      const newInfo = {
        item: "",
        quantity: 0,
        rate: "",
        tax: "",
        amount: 0,
      };
      return [...prevInformations, newInfo];
    });
  };

  const removeClick = (index: any) => {
    let restInformations = informations.filter(
      (item: any, idx) => idx !== index
    );
    setInformations([...restInformations]);
  };

  const handleChange = (index: any, data: any) => {
    const { name, value } = data.target;
    let info = [...informations];

    // Update the specific field in the current information object
    info[index] = { ...info[index], [name]: value };

    // Convert quantity to a number
    if (name === "quantity") {
      info[index] = { ...info[index], [name]: Number(value) };
    }
    if (name === "rate") {
      info[index] = { ...info[index], [name]: Number(value) };
    }
    if (name === "tax") {
      info[index] = { ...info[index], [name]: Number(value) };
    }

    // Calculate amount based on rate, quantity, and tax
    const rate = parseFloat(info[index].rate) || 0;
    const quantity = Number(info[index].quantity) || 0;
    const tax = parseFloat(info[index].tax) || 0;

    // Calculate amount with tax included
    const amount = parseFloat(
      ((rate * quantity * (100 + tax)) / 100).toFixed(2)
    );

    // Update the amount field in the current information object
    info[index] = { ...info[index], amount: amount };

    // Update the state with the modified information
    setInformations(info);
  };

  // Calculate total amount from the informations array
  const calculateTotalAmount = () => {
    let totalAmount = 0;

    informations.forEach((info) => {
      totalAmount += info.amount || 0;
    });

    return totalAmount.toFixed(2);
  };

  // Calculate discounted amount based on discountType and discountAmount
  const calculateDiscountedAmount = (totalAmount: number) => {
    let discountedAmount = totalAmount;

    if (discountType === "percentage") {
      discountedAmount = totalAmount - totalAmount * (discountAmount / 100);
    } else if (discountType === "raw_amount") {
      discountedAmount = totalAmount - discountAmount;
    }

    return discountedAmount;
  };

  useEffect(() => {
    const totalAmount = calculateTotalAmount();
    const newDiscountedAmount = calculateDiscountedAmount(Number(totalAmount));
    setTotalAmount(Number(totalAmount));
    setDiscountedAmount(newDiscountedAmount);
  }, [discountType, discountAmount, informations]);

  const handleCreate = async () => {
    const cookie = new Cookies();
    const token = cookie.get("jwt");
    if (!token) {
      return toast.error("Authentication failed. Please login again.");
    }
    if (
      invoiceType === "" ||
      invoiceType === "Select Invoice Type" ||
      selectedUser === "" ||
      selectedUser === "Select User" ||
      !informations
    )
      return toast.error("Provide all the informations!");

    const formattedData = {
      category: invoiceType,
      userid: selectedUser,
      information: informations,
    };

    try {
      const response = await Axios.post("/invoices", formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);
      router.push("/dashboard/admin/invoice");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Create Invoice</h2>
        </CardHeader>

        <CardBody className="space-y-6">
          {/* User Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">User Information</h2>
            <div className="flex flex-col gap-2">
              <label>User Name</label>
              <Select
                onValueChange={(value) => setSelectedUser(value)}
                defaultValue="Select User"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select User" />
                </SelectTrigger>
                <SelectContent>
                  {allUsers?.map((user, index) => (
                    <SelectItem key={index} value={user._id}>
                      {user.personal_information?.firstName}{" "}
                      {user.personal_information?.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label>Invoice Type</label>
              <Select
                onValueChange={(value) => setInvoiceType(value)}
                defaultValue="Select Invoice Type"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Invoice Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bill">Bill Invoice</SelectItem>
                  <SelectItem value="addon">Add On Invoice</SelectItem>
                  <SelectItem value="rigs">Rig Invoice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Items Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium border-b pb-2">Informations</h2>
            {informations.map((element, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Item {index + 1}</h3>
                  <Icon
                    onClick={() => removeClick(index)}
                    icon="streamline:delete-1-solid"
                    className={`cursor-pointer text-white bg-red-500 w-8 h-8 p-2 rounded-full ${
                      informations.length < 2 ? "hidden" : ""
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label>Description</label>
                  <Input
                    value={element.item || ""}
                    onChange={(e) => handleChange(index, e)}
                    name="item"
                    placeholder="Enter item description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>Rate</label>
                    <Input
                      type="number"
                      value={element.rate || ""}
                      onChange={(e) => handleChange(index, e)}
                      name="rate"
                      placeholder="0.00"
                    />
                    <label>Tax %</label>
                    <Input
                      type="number"
                      value={element.tax || ""}
                      onChange={(e) => handleChange(index, e)}
                      name="tax"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Quantity</label>
                    <Input
                      type="number"
                      value={element.quantity}
                      onChange={(e) => handleChange(index, e)}
                      name="quantity"
                      placeholder="0"
                    />
                    <label>Amount</label>
                    <Input type="text" value={element.amount || ""} readOnly />
                  </div>
                </div>
              </div>
            ))}

            <div>
              <Button
                onClick={addClick}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Icon icon="ic:baseline-plus" /> Add Item
              </Button>
            </div>
          </div>

          {/* Discount and Total */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Discount Type</label>
                <Select
                  onValueChange={(value) => setDiscountType(value)}
                  defaultValue=""
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="raw_amount">Raw Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label>Discount Amount</label>
                <Input
                  type="number"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(Number(e.target.value))}
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label>Total Amount</label>
                <Input type="text" value={totalAmount} readOnly />
              </div>
              <div className="space-y-2">
                <label>Sub-Total</label>
                <Input type="text" value={discountedAmount} readOnly />
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex justify-end gap-4">
          <Button onClick={handleCreate}>Create</Button>
          <Button variant="outline">Clear</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvoiceCrationFrom;
