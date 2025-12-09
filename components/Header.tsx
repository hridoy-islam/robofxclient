"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  Send,
  Zap,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navItems = [
    { name: "Home", href: "/", icon: <LayoutDashboard className="w-4 h-4" /> },
    {
      name: "Features",
      href: "features",
      icon: <Lightbulb className="w-4 h-4" />,
    },
    { name: "FAQ", href: "faq", icon: <Layers className="w-4 h-4" /> },
    {
      name: "Pricing",
      href: "pricing",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "Support",
      href: "support",
      icon: <LifeBuoy className="w-4 h-4" />,
    },
    { name: "Contact", href: "contact", icon: <Send className="w-4 h-4" /> },
  ];

  return (
    <>
     
      <header className="bg-white border-b border-slate-100 fixed top-0 w-full z-50 font-sans transition-all duration-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left Section: Logo */}
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image src="/logo.png" alt="" width={200} height={100} />
              </Link>
            </div>

            {/* Center Section: Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-grow">
              <div className="flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#0052FF] transition-colors"
                  >
                    <span className="text-slate-500 group-hover:text-[#0052FF]">
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Section: Actions */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="hidden md:flex rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-5 h-10"
                >
                  Sign in
                </Button>
              </Link>

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

      {/* IMPORTANT:
         Since the header is now 'fixed', it is removed from the document flow. 
         This spacer div pushes your page content down so it doesn't get hidden behind the header.
      */}
      <div className="h-[72px] w-full bg-white"></div>

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

        {/* Menu Panel */}
        {/* Added 'pt-0' to ensure clean alignment */}
        <div
          className={`absolute right-0 top-[72px] h-[calc(100vh-72px)] w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
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
                </Link>
              ))}
            </nav>

            <div className="mt-auto p-6 space-y-3 border-t border-slate-100 pb-10">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
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
                  openModal();
                }}
                className="w-full rounded-full bg-[#0052FF] hover:bg-[#0040CC] text-white font-bold h-12"
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