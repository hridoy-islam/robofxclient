"use client";

import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-gradient-to-br from-primary via-primary/95 to-primary">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary-foreground/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto pt-20 pb-0 relative">
        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* COMPANY */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M4 18V4L18 18V4"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">
                Nirvaan Tech
              </span>
            </div>

            <p className="text-sm text-white leading-relaxed max-w-xs mb-6">
              Accelerate innovation with world-class tech solutions. We craft
              cutting-edge software, scalable infrastructure, and intelligent
              systems for tomorrow's businesses.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[
                <BiLogoFacebook key="fb" size={20} />,
                <BiLogoTwitter key="tw" size={20} />,
                <BiLogoLinkedin key="ln" size={20} />,
                <BiLogoInstagram key="ig" size={20} />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-foreground text-white hover:text-primary-foreground hover:border-primary-foreground hover:bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Useful Links
            </h3>

            <ul className="space-y-3">
              {[
                "Terms & Conditions",
                "About Company",
                "Payment Gateway",
                "Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-primary-foreground transition-all flex items-center gap-2 hover:pl-1"
                  >
                    <span className="text-primary text-xs">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">
              {[
                "Data Security",
                "IT Management",
                "Outsourcing",
                "Networking",
                "Cloud Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-primary-foreground transition-all flex items-center gap-2 hover:pl-1"
                  >
                    <span className="text-primary text-xs">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {[
                {
                  text: "+91 458 654 528",
                  href: "tel:+91458654528",
                },
                {
                  text: "info@nirvaantech.com",
                  href: "mailto:info@nirvaantech.com",
                },
                {
                  text: "60 East 65th Street, NY",
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-white hover:text-primary-foreground transition"
                >
                 
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-primary-foreground mt-14 py-6 flex items-center justify-center relative">
          <p className="text-xs text-primary-foreground">
            © {new Date().getFullYear()} Nirvaan Tech. All rights reserved.
          </p>

          {/* SCROLL TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-0 w-10 h-10 flex items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground text-primary hover:bg-secondary/70 hover:-translate-y-1 hover:shadow-lg transition"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
