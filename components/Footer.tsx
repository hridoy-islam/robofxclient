"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="logo" width={250} height={100} />
              {/* <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Robo</span>
                <div className="text-emerald-400 font-medium text-sm">
                  FX TRADER
                </div>
              </div> */}
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Algopips Software website is a software provider company for forex
              trading. Offering automatic robot setup with expert managed
              trading accounts.
            </p>

            {/* Business Hours */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Mon - Fri - 09:00AM - 06:00PM</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Saturday - 09:00AM - 05:00PM</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-2 text-slate-300">
                <a
                  href="https://www.facebook.com/profile.php?id=61578374857330"
                  target="_blank"
                >
                  <BiLogoFacebook className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/algopipstrading/"
                  target="_blank"
                >
                  <BiLogoInstagram className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="features"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="faq"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="pricing"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Other Links
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="support"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Privacy and Policy
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    <div>Park Lane Tower </div>
                    <div>Business Bay, Dubai</div>
                    <div>UAE</div>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <a
                    href="tel:971542819321"
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    +971542819321
                  </a>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <a
                    href="mailto:support@algopips.net"
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    support@algopips.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Copyrights © 2024 All Rights Reserved by Algopips Software.
          </p>
        </div>
      </div>
    </footer>
  );
}
