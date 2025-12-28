"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
  type: "link" | "dropdown";
  subItems?: { name: string; href: string }[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", type: "link" },
    { name: "Features", href: "/features", type: "link" },
    {
      name: "Resources",
      href: "#",
      type: "dropdown",
      subItems: [
        { name: "Beginner's Guide", href: "/beginner-guide" },
        { name: "Market Insights & Analysis", href: "/market-insights" },
        { name: "Backtest Your Trading Strategy", href: "/backtest-strategy" },
        // { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
      ],
    },
    { name: "FAQ", href: "/faq", type: "link" },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  // --- DESKTOP DROPDOWN COMPONENT ---
  const DesktopDropdown = ({ item }: { item: NavItem }) => (
    <div className="relative group/parent h-full flex items-center">
      <button className="flex items-center gap-1 cursor-pointer text-lg uppercase tracking-wider font-semibold text-secondary/80 hover:text-primary-blue transition-colors relative h-full">
        {item.name}
        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover/parent:rotate-180" />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-blue transition-all duration-300 group-hover/parent:w-full shadow-blue-glow" />
      </button>

      {/* The Sub-Menu Container */}
      <div className="absolute top-[82px] right-0 pt-2 hidden group-hover/parent:block w-[420px] z-50 animate-fade-in">
        <div className="bg-primary/95 border border-white/10 rounded-2xl shadow-2xl p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {item.subItems?.map((sub) => (
              <Link
                key={sub.name}
                href={sub.href}
                className="relative group/item overflow-hidden rounded-xl border border-white/5 bg-black/40 transition-all hover:border-primary-blue/40 hover:shadow-blue-glow"
              >
                {/* Text Content */}
                <div className="relative z-10 flex items-center px-6 py-5">
                  <span className="text-lg font-bold text-white group-hover/item:text-primary-blue transition-colors">
                    {sub.name}
                  </span>
                </div>

                {/* Trading Chart Background Effect */}
                <div
                  className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-20 group-hover/item:opacity-40 transition-opacity bg-right bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url('/trading1.jpg')`, // Ensure this image exists in your public folder
                    maskImage:
                      "linear-gradient(to left, black 20%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to left, black 20%, transparent 100%)",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-primary/90 border-b border-white/5 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-[82px]">
            {/* LEFT SIDE: Logo */}
            <Link href="/" className="flex items-center z-50 shrink-0">
              <Image
                src="/quicktrade.png"
                alt="Logo"
                width={200}
                height={60}
                priority
              />
            </Link>

            {/* RIGHT SIDE: Navigation & Button */}
            <div className="flex items-center gap-8 h-full">
              <nav className="hidden lg:flex h-full">
                <ul className="flex items-center gap-7 h-full">
                  {navItems.map((item) => (
                    <li key={item.name} className="h-full flex items-center">
                      {item.type === "dropdown" ? (
                        <DesktopDropdown item={item} />
                      ) : (
                        <Link
                          href={item.href}
                          className="group relative flex items-center text-lg uppercase tracking-wider font-semibold text-secondary/80 hover:text-primary-blue transition h-full"
                        >
                          {item.name}
                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-blue transition-all duration-300 group-hover:w-full shadow-blue-glow" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <Link href="/contact" className="hidden md:block">
                  <Button className="rounded-full px-7 h-11 font-bold text-primary bg-primary-blue hover:bg-primary-blue/95 transition-all shadow-blue-glow uppercase tracking-wider text-lg">
                    Get Started
                  </Button>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-full text-secondary hover:bg-white/10 transition z-50"
                >
                  {isMenuOpen ? (
                    <X className="w-7 h-7" />
                  ) : (
                    <Menu className="w-7 h-7" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full sm:w-80 bg-primary border-l border-white/10 transform transition-transform duration-300 pt-24 px-6 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.type === "dropdown" ? (
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setActiveSubMenu(
                          activeSubMenu === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full py-3 text-secondary font-bold uppercase tracking-wider"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeSubMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`${
                        activeSubMenu === item.name ? "block" : "hidden"
                      } pl-4 space-y-3`}
                    >
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-secondary/60 hover:text-primary-blue py-1 text-lg uppercase"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-secondary font-bold uppercase tracking-wider hover:text-primary-blue"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button className="w-full h-12 rounded-full bg-primary-blue text-primary font-bold shadow-blue-glow uppercase tracking-wider">
                Get Started
              </Button>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
