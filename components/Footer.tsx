"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  
  // Links aligned with your Header structure
  const serviceLinks = [
    { name: "Migrate", href: "/migrate" },
    { name: "Work", href: "/work" },
    { name: "Business Visa", href: "/business-visa" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Visit Visa", href: "/visit-visa" },
  ];

  const supportLinks = [
    { name: "Resources & FAQ", href: "/faq" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact Us", href: "/contact" },

  ];

  return (
    <footer className="bg-primary border-t border-white/10 font-sans relative overflow-hidden">
      {/* Optional: Background decoration similar to header theme if needed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto py-16 px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          {/* 1. Company Info & Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/visara-white.png" 
                alt="Visara Migration" 
                width={160} 
                height={60} 
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-white/70 leading-relaxed mb-6 text-sm font-medium">
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
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2.5 rounded-full hover:bg-gold hover:text-primary transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:border-gold hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Our Services (Aligned with Header) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold hover:pl-2 transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support & Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold hover:pl-2 transition-all duration-300 text-sm font-medium block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gold relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
            </h3>
            <div className="space-y-5">
              
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-gold/20 transition-colors border border-white/5 group-hover:border-gold/30">
                   <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div className="text-white/70 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                  530 Fifth Ave, <br /> New York, NY 10036
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-gold/20 transition-colors border border-white/5 group-hover:border-gold/30">
                    <Mail className="w-4 h-4 text-gold" />
                </div>
                <a
                  href="mailto:support@visara.com"
                  className="text-white/70 hover:text-gold transition-colors text-sm font-medium"
                >
                  support@visara.com
                </a>
              </div>

               {/* Phone (Added for completeness) */}
               <div className="flex items-center space-x-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-gold/20 transition-colors border border-white/5 group-hover:border-gold/30">
                    <Phone className="w-4 h-4 text-gold" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-gold transition-colors text-sm font-medium"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 group pt-2 border-t border-white/10 mt-4">
                 <div className="mt-1">
                    <Clock className="w-4 h-4 text-gold/50" />
                 </div>
                 <div className="text-white/50 text-xs font-medium">
                   <p>Mon - Fri : 9 AM - 6 PM</p>
                   <p>Sat : 10 AM - 4 PM</p>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center ">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} <span className="text-gold font-semibold">Visara Migration</span>. All Rights Reserved.
          </p>
          {/* <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-gold transition-colors">Privacy</Link>
              <Link href="/terms" className="text-xs text-white/40 hover:text-gold transition-colors">Terms</Link>
              <Link href="/sitemap" className="text-xs text-white/40 hover:text-gold transition-colors">Sitemap</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}