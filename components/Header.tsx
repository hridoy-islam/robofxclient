"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Mobile: Main menu state
  const [activeNestedMenu, setActiveNestedMenu] = useState(null); // Mobile: Nested menu state

  // --- 1. UPDATED DATA: PARENTS NOW HAVE HREFS ---
  const navItems = [
    { name: "Home", href: "/", type: "link" },
    {
      name: "Migrate",
      href: "/migrate", // UPDATED from '#'
      type: "dropdown",
      subItems: [
        { name: "Migrate to UK", href: "/migrate/migrate-to-uk" },
        { name: "Migrate to Australia", href: "/migrate/migrate-to-australia" },
        { name: "Migrate to Canada", href: "/migrate/migrate-to-canada" },
        { name: "Migrate to USA", href: "/migrate/migrate-to-usa" },
        { name: "Migrate to New Zealand", href: "/migrate/migrate-to-nz" },
      ],
    },
    {
      name: "Work",
      href: "/work", // UPDATED from '#'
      type: "dropdown",
      subItems: [
        { name: "Work in UK", href: "/work/work-in-uk" },
        { name: "Work in USA", href: "/work/work-in-usa" },
        { name: "Work in Europe", href: "/work/work-in-europe" },
        {
          name: "Work in Canada",
          href: "/work/work-in-canada", // UPDATED
          type: "nested",
          subItems: [
            { name: "LMIA Work Permit", href: "/work/work-in-canada/lmia" },
            { name: "Open Work Permit", href: "/work/work-in-canada/open-permit" },
            { name: "Chefs, Cooks & Bakers", href: "/work/work-in-canada/chefs-cooks-bakers" },
          ],
        },
      ],
    },
    {
      name: "Business",
      href: "/business-visa", // UPDATED from '#'
      type: "dropdown",
      subItems: [
        {
          name: "Business in Canada",
          href: "/business-visa/canada", // UPDATED
          type: "nested",
          subItems: [
            { name: "Start-up Visa", href: "/business-visa/canada/startup" },
            { name: "Investor Visa", href: "/business-visa/canada/investor" },
            { name: "Angel Investor Program", href: "/business-visa/canada/angel-investor" },
            { name: "Intra-Company Transfer", href: "/business-visa/canada/ict" },
          ],
        },
        { name: "Business in UK", href: "/business-visa/uk" },
        { name: "Business in USA", href: "/business-visa/usa" },
      ],
    },
    {
      name: "Study Abroad",
      href: "/study-abroad", // UPDATED from '#'
      type: "dropdown",
      subItems: [
        { name: "Study in UK", href: "/study-abroad/uk" },
        { name: "Study in Australia", href: "/study-abroad/australia" },
        { name: "Study in Canada", href: "/study-abroad/canada" },
        { name: "Study in USA", href: "/study-abroad/usa" },
      ],
    },
    { name: "Visit Visa", href: "/visit-visa", type: "link" },
    {
      name: "Resources",
      href: "/resources", // UPDATED from '#'
      type: "dropdown",
      subItems: [
        { name: "FAQ", href: "/faq" },
        { name: "Success Stories", href: "/success-stories" },
      ],
    },
    { name: "Contact Us", href: "/contact", type: "link" },
  ];

  // --- MOBILE HANDLERS ---
  const handleMobileMenuToggle = (itemName) => {
    if (activeSubMenu === itemName) {
      setActiveSubMenu(null);
      setActiveNestedMenu(null);
    } else {
      setActiveSubMenu(itemName);
      setActiveNestedMenu(null);
    }
  };

  const handleMobileNestedToggle = (e, itemName) => {
    e.stopPropagation();
    e.preventDefault(); // Stop link navigation for the chevron click
    if (activeNestedMenu === itemName) {
      setActiveNestedMenu(null);
    } else {
      setActiveNestedMenu(itemName);
    }
  };

  // --- DESKTOP DROPDOWN COMPONENT ---
  const DesktopDropdown = ({ item }) => (
    <div className="relative group/parent h-full flex items-center">
      {/* 2. UPDATED DESKTOP: This is now a Link, not just a div */}
      <Link 
        href={item.href}
        className="flex items-center gap-1 cursor-pointer text-sm font-semibold text-white/80 hover:text-gold transition-colors relative h-full"
      >
        {item.name}
        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/parent:rotate-180" />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover/parent:w-full" />
      </Link>

      {/* Main Dropdown Container */}
      <div className="absolute top-full left-0 pt-0 hidden group-hover/parent:block w-64 z-50">
        <div className="bg-primary-light border border-white/10 rounded-lg shadow-xl shadow-black/40 overflow-visible mt-2 py-2">
          {item.subItems?.map((sub) => (
            <div key={sub.name} className="relative group/child">
              {sub.type === "nested" ? (
                // --- Item with 3rd Level ---
                <div className="block">
                    {/* Make the text part a link */}
                    <div className="flex items-center justify-between px-5 py-3 text-sm text-white/90 hover:bg-primary-lighter hover:text-gold transition-colors cursor-pointer">
                        <Link href={sub.href} className="flex-1">
                             {sub.name}
                        </Link>
                        <ChevronRight className="w-3 h-3 ml-2" />
                    </div>

                    {/* 3rd Level Dropdown */}
                    <div className="absolute top-0 left-full pl-2 hidden group-hover/child:block w-60">
                        <div className="bg-primary-light border border-white/10 rounded-lg shadow-xl shadow-black/40 overflow-hidden py-2">
                        {sub.subItems.map((nested) => (
                            <Link
                                key={nested.name}
                                href={nested.href}
                                className="block px-5 py-3 text-sm text-white/90 hover:bg-primary-lighter hover:text-gold transition-colors"
                            >
                                {nested.name}
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
              ) : (
                // --- Standard Link ---
                <Link
                  href={sub.href}
                  className="block px-5 py-3 text-sm text-white/90 hover:bg-primary-lighter hover:text-gold transition-colors"
                >
                  {sub.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- MOBILE MENU COMPONENT ---
  const MobileSubMenu = ({ item }) => (
    <>
      <div className="flex items-center justify-between px-4 py-2 rounded-lg text-white/90 hover:bg-white/5 transition select-none">
        
        {/* 3. UPDATED MOBILE: Split Button Logic */}
        
        {/* LEFT: Click to Navigate (Main Link) */}
        <Link 
            href={item.href}
            onClick={() => {
                setIsMenuOpen(false);
                setActiveSubMenu(null);
            }}
            className="flex-1 py-2 font-semibold hover:text-gold"
        >
            {item.name}
        </Link>

        {/* RIGHT: Click to Toggle Dropdown (Arrow) */}
        <div 
            onClick={() => handleMobileMenuToggle(item.name)}
            className="p-2 cursor-pointer border-l border-white/10 ml-2 hover:text-gold"
        >
            <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
                activeSubMenu === item.name ? "rotate-180" : "rotate-0"
            }`}
            />
        </div>
      </div>

      {/* Level 2 Container */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeSubMenu === item.name
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-4 pt-1 pb-4 space-y-1 bg-black/10 rounded-b-lg">
          {item.subItems?.map((sub) => (
            <li key={sub.name}>
              {sub.type === "nested" ? (
                // --- Level 2 with Nested Children ---
                <div className="block">
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-gold">
                    
                    {/* Level 2 Split Button */}
                    <Link 
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex-1 py-1"
                    >
                        {sub.name}
                    </Link>

                    <div 
                        onClick={(e) => handleMobileNestedToggle(e, sub.name)}
                        className="p-2 cursor-pointer border-l border-white/10 ml-2"
                    >
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeNestedMenu === sub.name ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  {/* Level 3 Container */}
                  <div className={`overflow-hidden transition-all duration-300 border-l border-white/10 ml-6 ${activeNestedMenu === sub.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {sub.subItems.map((nested) => (
                          <Link
                            key={nested.name}
                            href={nested.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-gold transition-colors"
                          >
                            — {nested.name}
                          </Link>
                      ))}
                  </div>
                </div>
              ) : (
                // --- Standard Level 2 Link ---
                <Link
                  href={sub.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-gold hover:bg-white/5 transition-colors rounded-md"
                >
                  {sub.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-primary/90 border-b border-white/5 backdrop-blur-md supports-[backdrop-filter]:bg-primary/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <Image
                src="/visara-white.png"
                alt="Visara Company Logo"
                width={110}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center h-full">
              <ul className="flex items-center gap-6 xl:gap-8 h-full">
                {navItems.map((item) => (
                  <li key={item.name} className="h-full flex items-center">
                    {item.type === "dropdown" ? (
                      <DesktopDropdown item={item} />
                    ) : (
                      <Link
                        href={item.href}
                        className="group relative flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-gold transition h-full"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:block">
                <Button className="rounded-full px-6 h-10 font-semibold text-primary bg-gold hover:bg-gold-light transition-all shadow-md shadow-black/20 hover:translate-y-[-1px]">
                  Get Consultation
                </Button>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition z-50 relative"
                aria-label="Toggle Menu"
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

      {/* Spacer */}
      <div className="h-[72px]" />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-[72px] h-[calc(100vh-72px)] w-full sm:w-80 bg-primary border-l border-white/10 transform transition-transform duration-300 overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.type === "dropdown" ? (
                  <MobileSubMenu item={item} />
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                    className="flex items-center gap-4 px-4 py-4 rounded-lg text-white/90 hover:text-gold hover:bg-white/5 font-semibold transition"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10 mt-4 pb-10">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full h-12 rounded-full bg-gold text-primary font-bold hover:bg-gold-light transition shadow-lg shadow-black/20">
                Get Consultation
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}