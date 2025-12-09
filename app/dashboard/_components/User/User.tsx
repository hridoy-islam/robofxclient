"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "universal-cookie";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Icons / Assets
import robofxicon from "../../../../public/robofxicon.png";

// Interfaces & Custom Components
import { UserData } from "@/utils/interfaces";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
import Pagination from "@/components/Pagination";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ApiResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: UserData[];
}

interface UserProps {
  allUsers: ApiResponse;
}

export default function User({ allUsers }: UserProps) {
  const usersList = allUsers?.result;
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = allUsers?.meta?.totalPage;

  // Pagination Logic
  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/user?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/user?page=${previousPage}`;
    }
  };

  // State Management
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get("jwt");

  // Handlers
  const handleOpen = (user: UserData) => {
    setSelectedUserId(user?._id);
    setMessage(user?.message || "");
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    if (!message || message === "") {
      toast.error("Message is required!");
      return;
    }

    const url = `/users/${selectedUserId}`;

    Axios.patch(
      url,
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        handleClose();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  const handleStatus = (user: UserData) => {
    if (isLoading) return;

    setIsLoading(true);

    const token = cookies.get("jwt");
    const url = `/users/${user?._id}`;
    const newStatus = user.status === "approved" ? "pending" : "approved";

    Axios.patch(
      url,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <div className="space-y-6 p-4">
      <Card className="w-full shadow-sm border-gray-200 bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <CardTitle className="text-2xl font-bold text-gray-800">All Users</CardTitle>
          <Button  className="bg-primary text-white hover:bg-primary/90">
            <Link href="/dashboard/admin/user/create">Add User</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            {/* Standard HTML Table */}
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersList?.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={user?.personal_information?.photo} alt={user?.personal_information?.firstName} />
                          <AvatarFallback className="bg-gray-100 text-gray-600 uppercase">
                            {user?.personal_information?.firstName?.[0]}
                            {user?.personal_information?.lastName?.[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-semibold">
                            {user?.personal_information?.firstName} {user?.personal_information?.lastName}
                          </span>
                          <span className="text-gray-400">
                            +987438438
                          </span>
                          <span className="text-gray-400">
                            {user?.email}
                          </span>
                        </div>
                        
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/* Standard DIV for Status */}
                      <div
                        onClick={() => handleStatus(user)}
                        className={`
                          inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold capitalize cursor-pointer select-none transition-colors
                          ${
                            user?.status === "approved"
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : user?.status === "pending"
                              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                          }
                        `}
                      >
                        {user?.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <EditButton userId={user?._id} />
                        <ViewButton userId={user?._id} />
                        <DeleteButton label="users" id={user?._id} />
                        
                        <Button
                          variant="secondary"
                          size="sm"
                          className="border border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200"
                        >
                          <Link href={`/dashboard/admin/user/${user?._id}/rigs`}>
                            Rigs
                          </Link>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleOpen(user)}
                          className="border-purple-500 text-purple-600 hover:bg-purple-50"
                        >
                          Message
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Shadcn Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Send Message</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <ReactQuill
              theme="snow"
              value={message}
              onChange={setMessage}
              placeholder="Write your message here..."
              modules={User.modules}
              formats={User.formats}
              className="h-[250px] mb-12"
            />
          </div>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-primary text-white">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPageHref={getPreviousPageHref()}
          nextPageHref={getNextPageHref()}
        />
      </div>
    </div>
  );
}

// Quill Configuration
User.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
  clipboard: {
    matchVisual: false,
  },
};

User.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];