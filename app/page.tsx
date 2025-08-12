"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logintriangle from "../public/logintriangle.png";
import favicon from "../public/favicon.png";
import Link from "next/link";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

type TLogInput = {
  email: string;
  password: string;
};

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  role: string;
}

export default function Home() {
  const [isRedirecting, setRedirecting] = useState(false);
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  const cookies = new Cookies();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInput>();

  ("use server");
  const onSubmit = async (data: TLogInput) => {
    axios
      .post("/auth/login", data)
      .then((res) => {
        toast.success(res?.data?.message);
        const accessToken = res?.data?.data?.accessToken;

        // Decode the token
        const decodedToken = jwt.decode(accessToken) as DecodedToken | null;
        setDecodedToken(decodedToken);

        const role = decodedToken?.role;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        cookies.set("jwt", accessToken, {
          expires: expirationDate,
          // httpOnly: true,
        });

        // Set the redirecting state to trigger a re-render
        setRedirecting(true);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  // Use useEffect to navigate after the state is updated
  useEffect(() => {
    if (isRedirecting && decodedToken) {
      const role = decodedToken.role;

      if (role === "admin") {
        router.push("/dashboard/admin");
      } else if (role === "user") {
        router.push("/dashboard/user");
      }
    }
  }, [isRedirecting, decodedToken]);

  return (
    <div className="bg-[url('../public/login_bg.jpg')]">
      {/* <div className="grid grid-cols-2 gap-16"> */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-16">
        {/* left side */}
        <div className="md:w-[55%] py-8 md:px-16 md:ml-20 px-4 flex flex-col justify-center">
          <div className="bg-primary px-16 py-10 shadow-2xl">
            <div className="flex">
              <Image
                src={logintriangle}
                alt="loginarrow"
                className="w-8 h-8 mt-3 mr-2 space-x-2"
              />
              <h2 className="text-white font-semibold text-4xl">Transform</h2>
            </div>
            <h2 className="text-white font-semibold text-4xl mb-6">
              your business <br /> with digital{" "}
              <span className="text-secondary">branding.</span>
            </h2>

            <p className="text-white my-5 font-nunito text-lg font-light">
              Enhance operational efficiency with real-time metrics and
              streamlined user management.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-[45%] bg-white py-8 px-4 md:px-20 md:h-screen flex flex-col justify-center">
          <Image src={favicon} alt="Robofx" className="mb-3 w-20 h-20" />
          <h1 className="font-semiBold text-3xl my-2">Hey, hello 👋</h1>
          <p className="font-bold text-sm text-textlight mb-5">
            Enter the information of your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="w-full border border-stroke rounded-lg h-12 px-2 bg-[#F1F5F9] focus:border-primary focus:ring-0 focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="password"
                className="w-full border border-stroke rounded-lg h-12 px-2 bg-[#F1F5F9] focus:border-primary focus:ring-0 focus:outline-none"
                {...register("password", { required: true })}
              />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}

            <div className="flex my-3 items-center">
              <input
                type="checkbox"
                className="mr-2 accent-primary"
                id="remember"
              />
              <label htmlFor="remember" className="flex-auto">
                Remember me
              </label>
              <Link href={"/"} className="text-primary">
                Forget Password?
              </Link>
            </div>

            <input
              type="submit"
              value={`login`}
              className="bg-primary text-white w-full font-semiBold text-lg h-12 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
