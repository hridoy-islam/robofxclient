"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  Globe,
  Home,
  Settings,
  HelpCircle,
  DollarSign,
  Headphones,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  // Restored your specific Nav Items
  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Features",
      href: "features",
      icon: <Settings className="w-4 h-4" />,
    },
    { name: "FAQ", href: "faq", icon: <HelpCircle className="w-4 h-4" /> },
    {
      name: "Pricing",
      href: "pricing",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      name: "Support",
      href: "support",
      icon: <Headphones className="w-4 h-4" />,
    },
    { name: "Contact", href: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 font-sans">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Left Section: Logo & Nav */}
            <div className="flex items-center gap-8 lg:gap-12">
              {/* Logo - Blue 'C' */}
              <Link href={"/"} className="flex-shrink-0">
                             <Image src="/logo.png" alt="" width={200} height={100} />

              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#0052FF] transition-colors"
                  >
                    {/* Render Icon */}
                    <span className="text-slate-500 group-hover:text-[#0052FF]">
                        {item.icon}
                    </span>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              
              

              {/* Sign In (Replaces Live Trading) */}
              <Link href="/login">
                <Button
                    variant="ghost"
                    className="hidden md:flex rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-5 h-10"
                >
                    Sign in
                </Button>
              </Link>

              {/* Sign Up Button */}
              <Button
                onClick={() =>
                  openModal({
                    title: "Create your account",
                    subtitle: "Join the world's largest crypto exchange",
                    buttonText: "Sign Up",
                  })
                }
                className="hidden md:flex rounded-full bg-[#0052FF] hover:bg-[#0040CC] text-white font-semibold px-5 h-10 shadow-none border-none"
              >
                Sign up
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel (Light Theme) */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100 h-[72px]">
             <div className="w-8 h-8 bg-[#0052FF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg pb-[2px] pr-[1px]">C</span>
             </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col h-[calc(100%-72px)] overflow-y-auto">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-4 rounded-lg text-slate-900 hover:bg-slate-50 font-semibold group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 group-hover:text-[#0052FF]">
                        {item.icon}
                    </span>
                    <span className="text-base">{item.name}</span>
                  </div>
                  {/* <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" /> */}
                </Link>
              ))}
            </nav>

            {/* Mobile Footer Buttons */}
            <div className="mt-auto p-6 space-y-3 border-t border-slate-100">
               <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-slate-300 text-slate-900 font-bold h-12 hover:bg-slate-50"
                  >
                    Sign in
                  </Button>
               </Link>
              
              <Button
                onClick={() => {
                   setIsMenuOpen(false);
                   openModal()
                }}
                className="btn-gradient"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}