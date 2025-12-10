"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logintriangle from "../../public/logintriangle.png";
import Link from "next/link";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { Check, Mail } from "lucide-react";

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

        const decodedToken = jwt.decode(accessToken) as DecodedToken | null;
        setDecodedToken(decodedToken);

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        cookies.set("jwt", accessToken, {
          expires: expirationDate,
        });

        setRedirecting(true);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] min-h-[600px]">
        
        {/* Left Side - Crypto Image & Branding */}
        <div className="relative hidden md:flex md:w-1/2 flex-col justify-end p-12 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
               // Placeholder Crypto Image - Replace with your local asset if needed
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
              alt="Crypto Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-indigo-900/30"></div>
          </div>

          {/* Content over image */}
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Icon */}
              
              <h2 className="font-bold text-2xl tracking-wide text-white">
                CRYPTOMINERX
              </h2>
            </div>

            <h1 className="font-bold text-4xl leading-tight">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Digital Economy
              </span>
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Seamlessly manage your mining operations and track real-time metrics with our advanced dashboard.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center relative">
          
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-3xl text-gray-900">Welcome Back 👋</h1>
              <p className="text-gray-500 mt-2 text-sm">
                Please enter your details to access your dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Email Input */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && <span className="text-xs text-red-500 mt-1">Email is required</span>}
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" /> */}
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200`}
                    {...register("password", { required: true })}
                  />
                </div>
                 {errors.password && <span className="text-xs text-red-500 mt-1">Password is required</span>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      id="remember"
                    />
                    <div className="h-5 w-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                    <Check className="h-3 w-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="ml-2 text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                </label>
                
                <Link href="/" className="font-medium text-primary hover:text-indigo-700 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-bold text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </form>

            {/* <div className="mt-6 text-center">
               <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link href="/register" className="font-semibold text-primary hover:text-indigo-700">
                    Create account
                  </Link>
               </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}