"use client";

import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 font-sans relative overflow-hidden">
      <div className="container mx-auto pt-16 pb-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                {/* Logo Image */}
                <Image
                  src="/quicktrade.png"
                  alt="QuickTradeFX Logo"
                  width={280}
                  height={100}
                  className=" h-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg max-w-md">
              At QuickTradeFX, we specialize in AI-driven trading software
              designed to optimize trading performance with cutting-edge
              technology.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {[
                BiLogoFacebook,
                BiLogoInstagram,
                BiLogoLinkedin,
                BiLogoTwitter,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-zinc-900 p-2.5 rounded-lg hover:bg-primary-blue hover:text-black text-gray-400 transition-all duration-300 border border-white/10"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-blue transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary-blue mt-0.5 shrink-0" />
                <div className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
                  21st latifa tower,
                  <br />
                  Sheikh Zayed road, Dubai, UAE
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-primary-blue shrink-0" />
                <a
                  href="mailto:support@quicktradefx.com"
                  className="text-gray-400 hover:text-primary-blue transition-colors text-lg"
                >
                  support@quicktradefx.com
                </a>
              </div>

             
            </div>
          </div>
        </div>

        {/* 4. Disclaimers Section */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <div className="grid gap-6 text-sm text-gray-500 leading-relaxed">
            <div>
              <h4 className="text-gray-300 font-bold mb-2">Disclaimer:</h4>
              <p>
                QuickTradeFX and its employees are not officially qualified to
                provide financial advice and are not registered as financial
                advisors. The only purpose of everything offered on this server,
                on the QuickTradeFX website, or by QuickTradeFX and its staff is
                education. Any losses or damages are not the responsibility or
                liability of QuickTradeFX or its employees. Every risk you take
                is your responsibility. This website's content should not be
                interpreted as financial advice.
              </p>
            </div>
            <div>
              <h4 className="text-gray-300 font-bold mb-2">Risk Warning:</h4>
              <p>
                Trading carries a high level of risk and may not be suitable for
                all investors. Profit and loss all depend upon the market
                movement. As this is automated software, there is no need for
                human interruption. In the event of market volatility, there is
                a possibility to lose your capital. Trading is subject to market
                risk; as you buy this software with your own interest, the
                Company won't be liable for any kind of Profit & Loss of the
                client.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} QuickTradeFX Software
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">
              Designed and developed by QuickTradeFX
            </span>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
