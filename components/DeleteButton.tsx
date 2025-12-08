"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import Cookies from "universal-cookie";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface DeleteButtonProps {
  id?: string;
  label?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, label }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
const [open, setOpen] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const apiUrl = `/${label}/${id}`;
      let response;
      if (label === "users") {
        response = await axios.patch(
          apiUrl,
          {
            isDeleted: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (label === "products") {
        response = await axios.patch(
          apiUrl,
          {
            isDeleted: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (label === "rigs") {
        response = await axios.patch(
          apiUrl,
          {
            isDeleted: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (label === "orders") {
        response = await axios.patch(
          apiUrl,
          {
            isDeleted: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        response = await axios.delete(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      toast.success(response?.data?.message);
      router.refresh();
      onOpenChange();
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("Error deleting exchange", error);
    }
  };

 return (
   <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button
      className="text-red-500 border-red-500 border-1 bg-white ml-2 px-3 text-md hover:bg-red-500 hover:text-white"
      onClick={() => setOpen(true)}
    >
      <Icon icon="system-uicons:trash" className="text-lg" /> <span>Delete</span>
    </Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete this {label?.slice(0, -1)}?
      </DialogDescription>
    </DialogHeader>

    <DialogFooter className="flex gap-2">
      <Button
        variant="outline"
        color="secondary"
        onClick={() => setOpen(false)} // ✅ Close dialog properly
      >
        Cancel
      </Button>
      <Button
        color="destructive"
        onClick={async () => {
          await handleDelete();
          setOpen(false); // close after delete
        }}
        className="bg-red-500 text-white hover:bg-red-500/90"
      >
        Yes, Delete
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

  );
};

export default DeleteButton;
