"use client";

import { Button } from "@/components/ui/button";
import Axios from "@/utils/axios";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

type Inputs = {
  email: string;
  password: string;
};

export default function Page() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const router = useRouter();
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const onSubmit = async (data: Inputs) => {
    try {
      const res = await Axios.post("/auth/create-user", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res?.data?.message);
      reset();
      router.push("/dashboard/admin/user");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className=" mx-auto mt-10">
      <Card className="shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <CardHeader className="bg-gray-50 p-6 flex flex-col justify-start items-start">
          <h2 className="text-2xl font-bold text-gray-800">Add New User</h2>
          
          <p className="text-gray-500 mt-1 text-sm">
            Fill in the details to create a new user account.
          </p>
        </CardHeader>
        <CardBody className="p-6 bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
                  {...register("email", { required: true })}
                  placeholder="Enter user email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2 font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
                  {...register("password", { required: true })}
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Create User
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
