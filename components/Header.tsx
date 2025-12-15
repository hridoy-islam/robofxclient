"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  LayoutDashboard,
  LifeBuoy,
  Send,
  Layers,
  Info,
  Home,
  Building2,
  HelpCircle,
  Mail,
  ScrollText,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const navItems = [
  { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { name: "FAQ", href: "/faq", icon: <HelpCircle className="w-4 h-4" /> }, // FAQ or common questions
  { name: "Support", href: "/support", icon: <ScrollText className="w-4 h-4" /> }, // Reflects documentation or legal text
  { name: "About Us", href: "/about-us", icon: <Building2 className="w-4 h-4" /> }, // Reflects corporate/firm identity
  { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> }, // Standard contact method
];
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-primary/80 border-b border-white/5 backdrop-blur-sm">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/visara-white.png"
                alt="Company Logo"
                width={110}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group relative flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold transition"
                    >
                      <span className="text-gold-light group-hover:text-gold transition">
                        {item.icon}
                      </span>
                      {item.name}
                      <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:block">
                <Button className="rounded-full px-6 h-10 font-semibold text-primary bg-gradient-gold hover:shadow-gold-glow transition-all">
                  Get Consultation
                </Button>
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[72px]" />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-[72px] h-[calc(100vh-72px)] w-full sm:w-80 bg-gradient-dark border-l border-white/10 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-4 rounded-lg text-gold-light hover:text-gold hover:bg-white/5 font-semibold transition"
              >
                <span className="text-gold">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6 border-t border-white/10">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full h-12 rounded-full bg-gradient-gold text-primary font-bold hover:shadow-gold-glow-lg transition">
                Get Consultation
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
