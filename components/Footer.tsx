"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-primary text-gold border-t border-gold/10 font-sans">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          {/* 1. Company Info & Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/visara-white.png" 
                alt="Visara Migration" 
                width={160} 
                height={60} 
               
              />
            </Link>

            <p className="text-gold-light leading-relaxed mb-6 text-sm font-medium opacity-90">
              Visara Migration provides expert visa processing and immigration services. 
              We simplify your journey across borders with our professional and reliable ecosystem.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {[BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  className="bg-gold/10 p-2.5 rounded-full hover:bg-gold hover:text-primary transition-all duration-300 group backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-gold group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Support", "Contact","FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : item.toLowerCase().replace(" ", "-")}
                    className="text-gold-light hover:text-gold hover:translate-x-1 transition-all duration-200 text-sm font-medium inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold">
              Support
            </h3>
            <ul className="space-y-3">
              {[
               
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gold-light hover:text-gold hover:translate-x-1 transition-all duration-200 text-sm font-medium inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold">Get in Touch</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-gold/10 p-1.5 rounded-md">
                   <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div className="text-gold-light text-sm font-medium leading-relaxed">
                  530 Fifth Ave, <br /> New York, NY 10036
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="bg-gold/10 p-1.5 rounded-md">
                    <Mail className="w-4 h-4 text-gold" />
                </div>
                <a
                  href="mailto:support@visara.com"
                  className="text-gold-light hover:text-gold transition-colors text-sm font-medium"
                >
                  support@visara.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                 <div className="mt-1 bg-gold/10 p-1.5 rounded-md">
                    <Clock className="w-4 h-4 text-gold" />
                 </div>
                 <div className="text-gold-light text-sm font-medium">
                    <p>Mon - Fri : 9 AM - 6 PM</p>
                    <p>Sat : 10 AM - 4 PM</p>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-14 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Copyright © {new Date().getFullYear()} <span className="text-gold font-semibold">Visara Migration</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}