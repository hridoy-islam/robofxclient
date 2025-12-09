"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto py-16 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* Replaced Logo Image with Gradient Text for demo, or keep Image if you have the file */}
              {/* <Image src="/logo.png" alt="logo" width={250} height={100} /> */}

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 text-gradient rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <img src="/cryptominerx.png" alt=""  className="p-1"/>{" "}
                </div>
                <div>
                  <h2 className="font-black text-2xl text-gradient bg-clip-text text-transparent">
                    CRYPTOMINERX
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 max-w-md font-medium">
              CryptoMinerX provides cutting-edge cloud mining solutions and
              automated trading infrastructure. maximize your digital asset
              growth with our expert-managed ecosystem.
            </p>

            {/* Business Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">
                  Mon - Fri : 09:00AM - 06:00PM
                </span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">
                  Saturday : 09:00AM - 05:00PM
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  target="_blank"
                  className="bg-white p-2 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform duration-200 group"
                >
                  <BiLogoFacebook className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white p-2 rounded-full shadow-sm border border-slate-100 hover:scale-110 transition-transform duration-200 group"
                >
                  <BiLogoInstagram className="w-6 h-6 text-slate-600 group-hover:text-pink-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gradient bg-clip-text text-transparent inline-block">
              Company
            </h3>
            <ul className="space-y-4">
              {["Features", "FAQ", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item.toLowerCase()}
                    className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 font-medium inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gradient bg-clip-text text-transparent inline-block">
              Other Links
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Support",
                "Terms and Conditions",
                "Refund Policy",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 font-medium inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-slate-600 text-sm font-medium">
                    <div>530 Fifth Ave,</div>
                    <div>New York, NY 10036</div>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a
                    href="tel:971542819321"
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    +971 54 281 9321
                  </a>
                </div> */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a
                    href="mailto:support@cryptominerx.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    support@cryptominerx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Copyright © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="text-blue-600 font-bold">CryptoMinerX</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
