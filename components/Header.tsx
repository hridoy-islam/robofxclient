"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        { name: "About", href: "/about" },
      ],
    },
    { name: "FAQ", href: "/faq", type: "link" },
    { name: "Contact", href: "/contact", type: "link" },
  ];

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   if (isLoading) return;

   setIsLoading(true);

   try {
     // Send both requests in parallel
     const [adminRes, userRes] = await Promise.allSettled([
       fetch("/api/send-email", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Cache-Control": "no-cache, no-store, must-revalidate",
           Pragma: "no-cache",
         },
         cache: "no-store",
         body: JSON.stringify(formData),
       }),
       fetch("/api/send-user-email", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Cache-Control": "no-cache, no-store, must-revalidate",
           Pragma: "no-cache",
         },
         cache: "no-store",
         body: JSON.stringify(formData),
       }),
     ]);

     // Check if at least one succeeded
     const adminSuccess = adminRes.status === "fulfilled" && adminRes.value.ok;
     const userSuccess = userRes.status === "fulfilled" && userRes.value.ok;

     if (adminSuccess || userSuccess) {
       setIsSubmitted(true);
       setFormData({
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         address: "",
         message: "",
       });
       setTimeout(() => setIsSubmitted(false), 5000);

       // Optional: log failures for debugging
       if (!adminSuccess) console.warn("Admin email failed");
       if (!userSuccess) console.warn("User email failed");
     } else {
       console.error("Both email requests failed");
       alert("Something went wrong. Please try again later.");
     }
   } catch (error) {
     console.error("Error submitting form:", error);
     alert("Network error. Please check your connection.");
   } finally {
     setIsLoading(false);
   }
 };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- DESKTOP DROPDOWN COMPONENT ---
  const DesktopDropdown = ({ item }: { item: NavItem }) => (
    <div className="relative group/parent h-full flex items-center">
      <button className="flex items-center gap-1 cursor-pointer text-lg tracking-wider font-semibold text-secondary/80 hover:text-primary-blue transition-colors relative h-full">
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
                    backgroundImage: `url('/trading1.jpg')`,
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
          <div className="flex items-center justify-between h-[100px]">
            {/* LEFT SIDE: Logo */}
            <Link href="/" className="flex items-center z-50 shrink-0">
              <Image
                src="/quicktrade.png"
                alt="Logo"
                width={300}
                height={100}
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
                          className="group relative flex items-center text-lg tracking-wider font-semibold text-secondary/80 hover:text-primary-blue transition h-full"
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
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="hidden md:block"
                >
                  <Button className="rounded-full px-7 h-11 font-bold text-primary bg-primary-blue hover:bg-primary-blue/95 transition-all shadow-blue-glow tracking-wider text-lg">
                    Get Started
                  </Button>
                </button>

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
                          activeSubMenu === item.name ? null : item.name,
                        )
                      }
                      className="flex items-center justify-between w-full py-3 text-secondary font-bold tracking-wider"
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
                          className="block text-secondary/60 hover:text-primary-blue py-1 text-lg"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-secondary font-bold tracking-wider hover:text-primary-blue"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDialogOpen(true);
                }}
                className="w-full h-12 rounded-full bg-primary-blue text-primary font-bold shadow-blue-glow tracking-wider"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </aside>
      </div>

      {/* Dialog/Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => !isLoading && setIsDialogOpen(false)}
          />

          {/* Modal Content - No Scroll */}
          <div className="relative bg-black rounded-3xl border border-white/10 shadow-2xl max-w-4xl w-full overflow-hidden">
            <div className="sticky top-0 right-0 flex justify-end p-4 bg-black/95 backdrop-blur-sm z-10 border-b border-white/10">
              <button
                onClick={() => !isLoading && setIsDialogOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                disabled={isLoading}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get Started with{" "}
                  <span className="text-primary-blue">QuickTradeFX</span>
                </h2>
                <p className="text-gray-400 text-sm">
                  Fill out the form below and our team will contact you shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary-blue mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 2-Column Grid for all fields except message */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="Street, City, Postal Code"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-primary-blue uppercase mb-1 tracking-widest">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all resize-none"
                      placeholder="How can we assist you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary-blue to-blue-700 hover:to-primary-blue text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Submit Inquiry
                      </span>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-4 text-center flex items-center justify-center gap-2 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>Support Team available 24/7 via Email</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
