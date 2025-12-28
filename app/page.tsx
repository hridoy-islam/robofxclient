"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  ShieldCheck,
  TrendingUp,
  Zap,
  Smartphone,
  BarChart3,
  Cpu,
  Clock,
  PlayCircle,
  Users,
  Star,
  Quote,
  Activity,
  Layers,
  Lock,
  PieChart,
  RefreshCw,
  Server,
  Wifi,
  DollarSign,
  CreditCard,
  Bitcoin,
  Wallet,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- Components (Inline for easy copy/paste) ---

export default function Home() {
  // Carousel Setup
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [emblaRefPayment] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // Optional: Pause when hovering
    }),
  ]);

  const [testimonialsRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const testimonials = [
    {
      name: "Alex M.",
      role: "Pro Trader",
      text: "Honestly speaking this is the best forex program I have met so far. The automation is flawless.",
      stars: 5,
    },
    {
      name: "Sarah J.",
      role: "Crypto Investor",
      text: "I was skeptical at first, but the results speak for themselves. ROI has been consistent for months.",
      stars: 5,
    },
    {
      name: "Michael B.",
      role: "Day Trader",
      text: "The support team is incredible, and the bot executes trades faster than I ever could manually.",
      stars: 4,
    },
    {
      name: "Jessica L.",
      role: "Forex Novice",
      text: "Set it and forget it. Perfect for someone who has a full-time job but wants to trade.",
      stars: 5,
    },
  ];

  // Payment Data (Repeated to ensure infinite feel before loop kicks in)
  const paymentMethods = [
    { name: "Bitcoin", icon: Bitcoin, color: "text-yellow-500" },
    { name: "Visa", icon: CreditCard, color: "text-blue-500" },
    { name: "Mastercard", icon: CreditCard, color: "text-red-500" },
    { name: "USDT", icon: DollarSign, color: "text-green-500" },
    { name: "Apple Pay", icon: Smartphone, color: "text-white" },
    { name: "Skrill", icon: Wallet, color: "text-purple-500" },
    { name: "Neteller", icon: Globe, color: "text-green-400" },
    { name: "Binance Pay", icon: Bitcoin, color: "text-yellow-400" },
  ];

  const slides = [
    {
      image: "/trading1.jpg",
      title: "Automated AI Trading",
      subtitle:
        "Maximize profits and minimize risks with state-of-the-art automation.",
    },
    {
      image: "/trading2.jpg",
      title: "Real-Time Analytics",
      subtitle:
        "Seize market shifts the moment they happen with precision data.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop",
      title: "Secure & Reliable",
      subtitle: "Bank-grade encryption ensuring your assets are always safe.",
    },
  ];

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) =>
    setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      q: "Do I need trading knowledge?",
      a: "No. The bot handles everything. You just check your earnings!",
    },
    {
      q: "How do I know my trading amount is growing?",
      a: "Login with your credentials to check real-time growth insights.",
    },
    {
      q: "Can I trade from my phone?",
      a: "Yes. You only need a smartphone with internet to manage your account.",
    },
    {
      q: "Does the robot trade every day?",
      a: "It acts only under profitable conditions — buy/sell when the market is right.",
    },
    {
      q: "Is customer support available?",
      a: "Yes, 24/7 multilingual support to assist you.",
    },
    {
      q: "What are the fees involved?",
      a: "There are no hidden charges. Transparent commission structure applies.",
    },
  ];

  return (
    <div className="bg-black text-white selection:bg-primary-blue selection:text-black overflow-hidden">
      <Header />

      {/* ================= 1. HERO CAROUSEL SECTION ================= */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="embla overflow-hidden h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {slides.map((slide, index) => (
              <div
                className="embla__slide flex-[0_0_100%] relative h-full min-w-0"
                key={index}
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto h-full flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    {/* CHANGED: text-lg -> text-sm for a normal tag size */}
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-blue/20 text-primary-blue text-sm font-bold mb-6 border border-primary-blue/30 backdrop-blur-sm uppercase tracking-wider">
                      Next Gen Technology
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    {/* CHANGED: text-xl -> text-lg (Fixed normal size) */}
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-primary-blue text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-blue-glow">
                        Get Started Now
                      </button>
                      <button className="border border-white/20 hover:border-white text-white font-bold py-4 px-10 rounded-full backdrop-blur-md transition-all duration-300">
                        View Demo
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. TRUST / 8 YEARS SECTION ================= */}
      <section
        className="py-24 bg-zinc-950 relative overflow-hidden"
        id="about"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-gradient-to-br from-zinc-900 to-black p-10 rounded-2xl border border-white/10 shadow-2xl">
              {/* The Big 8 Background */}
              <span className="text-[12rem] md:text-[16rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-transparent absolute -top-16 -left-10 select-none -z-10 opacity-30">
                8
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 leading-tight">
                Trusted Auto Trading <br />
                Solutions for Over{" "}
                <span className="text-primary-blue">8 Years</span>
              </h2>
              <p className="text-gray-400 mb-8 relative z-10 text-lg leading-relaxed">
                With over 8 years of experience in the financial markets, our
                company has been at the forefront of automated trading
                solutions. We specialize in providing reliable, profit-driven
                trading systems powered by advanced algorithms and expert
                oversight.
              </p>
              <div className="flex gap-8 relative z-10">
                <Link
                  href="#"
                  className="flex items-center text-primary-blue font-semibold hover:text-white transition-colors group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-white font-semibold hover:text-primary-blue transition-colors group"
                >
                  Read news{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary-blue/20 rounded-2xl -z-10" />
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-primary-blue/50 transition-all hover:-translate-y-1">
                <ShieldCheck className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-400 text-lg">
                  Solid performance history ensuring client satisfaction.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-primary-blue/50 transition-all hover:-translate-y-1">
                <Cpu className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Algorithms</h3>
                <p className="text-gray-400 text-lg">
                  Systems powered by cutting-edge AI technology.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-primary-blue/50 transition-all hover:-translate-y-1">
                <Users className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Oversight</h3>
                <p className="text-gray-400 text-lg">
                  Managed by professionals with deep market knowledge.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-primary-blue/50 transition-all hover:-translate-y-1">
                <Activity className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Hands-Free</h3>
                <p className="text-gray-400 text-lg">
                  Seamless experience for new and veteran traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. PRO TOOLKITS (MODERNIZED) ================= */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
        {/* Abstract Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-blue/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-lg font-bold tracking-widest uppercase mb-6">
              <Cpu size={12} /> Pro Toolkits
            </div>

            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">
              State of the art trading tools
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Automate complicated price action, get easy signals, and detect
              reversals by smart money. Our world-class toolkits are the best
              way to level up your TradingView charts.
            </p>
          </motion.div>

          {/* Interactive Visual Area */}
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Main Glass Container */}
              <div className="relative rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-2 shadow-2xl ring-1 ring-white/10 overflow-hidden">
                {/* Browser/Window Header Decoration */}
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 mb-1 rounded-t-xl">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>

                {/* Main Chart Image */}
                <img
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2000&auto=format&fit=crop"
                  alt="TradingView Charts"
                  className="w-full h-auto rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* FLOATING WIDGET 1: Buy Signal (Top Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 md:right-10 md:top-10 bg-zinc-900/90 backdrop-blur-md border border-green-500/30 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-lg text-gray-400 uppercase font-bold">
                    Signal
                  </div>
                  <div className="text-white font-bold">Strong Buy</div>
                </div>
              </motion.div>

              {/* FLOATING WIDGET 2: Smart Money (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 md:left-10 md:bottom-20 bg-zinc-900/90 backdrop-blur-md border border-primary-blue/30 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center text-primary-blue">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-lg text-gray-400 uppercase font-bold">
                    Smart Money
                  </div>
                  <div className="text-white font-bold">Reversal Detected</div>
                </div>
              </motion.div>

              {/* FLOATING WIDGET 3: Accuracy (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="hidden md:flex absolute -bottom-10 right-20 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-20 items-center gap-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-[10px] text-gray-400 uppercase">
                    Accuracy
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-gray-500"
                    >
                      <Users size={12} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-blue text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(100,186,228,0.4)]"
              >
                <span className="relative z-10">Level Up Your Charts</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. EMPOWER WORKFORCE (GRID) ================= */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Empower Your Workforce</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI-driven advantages for your trading portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Precision",
                desc: "Enhance your trading accuracy with AI-driven insights.",
                icon: CheckCircle2,
              },
              {
                title: "Opportunity",
                desc: "Seize market shifts the moment they happen.",
                icon: Zap,
              },
              {
                title: "Innovation",
                desc: "Lead the way with state-of-the-art AI solutions.",
                icon: Star,
              },
              {
                title: "Security",
                desc: "AI safeguards your trades with robust security.",
                icon: Lock,
              },
              {
                title: "Efficiency",
                desc: "Streamline your trading process with AI automation.",
                icon: TrendingUp,
              },
              {
                title: "Growth",
                desc: "AI evolves with the market to support ongoing success.",
                icon: BarChart3,
              },
              {
                title: "Confidence",
                desc: "Trade boldly with insights powered by AI intelligence.",
                icon: ShieldCheck,
              },
              {
                title: "Consistency",
                desc: "AI maintains your trading strategy around the clock.",
                icon: RefreshCw,
              },
              {
                title: "Performance",
                desc: "AI’s smart algorithms strive for peak results.",
                icon: Activity,
              },
              {
                title: "Flexibility",
                desc: "Adjust AI settings to match your trading style.",
                icon: Layers,
              },
              {
                title: "Learning",
                desc: "Tap into AI’s constant market monitoring.",
                icon: Server,
              },
              {
                title: "Risk Mgmt",
                desc: "AI actively works to minimize risks as they emerge.",
                icon: PieChart,
              },
              {
                title: "Accessibility",
                desc: "AI-powered auto trading is easy for everyone.",
                icon: Wifi,
              },
              {
                title: "Scalability",
                desc: "AI adjusts seamlessly to different trade sizes.",
                icon: Users,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-black border border-white/5 p-6 rounded-xl hover:border-primary-blue/50 hover:bg-zinc-900 transition-all group hover:shadow-lg"
              >
                <item.icon className="w-8 h-8 text-primary-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. HOW IT WORKS (LIST + MOCKUP) ================= */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-primary-blue font-bold tracking-widest uppercase text-lg">
                Features
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4">
                How AI Trading <br />
                <span className="text-primary-blue">Software Works</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Our AI-powered Forex Trading Robot is a fully automated trading
                system designed to execute buy and sell trades on your behalf.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Fully Automated Operation",
                  desc: "Set it up once, and the system runs on autopilot, ensuring profitability.",
                },
                {
                  title: "Available on MT4 & MT5",
                  desc: "Compatible with the most popular Forex platforms.",
                },
                {
                  title: "Automatic Trade Execution",
                  desc: "Opens and closes trades autonomously based on precise market data.",
                },
                {
                  title: "Error-Free Execution",
                  desc: "Eliminates order entry mistakes for flawless execution.",
                },
                {
                  title: "Emotion-Free Trading",
                  desc: "Free from human emotions like fear or greed.",
                },
                {
                  title: "Non-Tiring, 24/5 Operation",
                  desc: "Works tirelessly, even when you're offline.",
                },
                {
                  title: "No Risky Strategies",
                  desc: "Avoids Martingale; uses Profit Average Method for steady growth.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-5 group items-start">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-blue transition-colors mt-1">
                    <ArrowRight className="w-3 h-3 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary-blue transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-lg mt-1 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Mobile Phone Mockup Container */}
            <div className="relative w-full max-w-[320px] md:max-w-[350px]">
              {/* Blue Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary-blue/20 rounded-full blur-[80px]" />

              {/* Video Element */}
              <video
                src="/mobilepreview.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative z-10 w-full h-auto rounded-[2.5rem] border-[8px] border-zinc-800 shadow-2xl object-cover bg-black"
              />

              {/* Floating Profit Card */}
              <div className="absolute bottom-12 -left-4 md:-left-10 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl z-20 shadow-2xl animate-bounce delay-700">
                <div className="text-primary-blue text-lg font-bold uppercase mb-1 flex items-center gap-1">
                  <Zap size={12} fill="currentColor" /> Live Profit
                </div>
                <div className="text-2xl font-bold text-white">+ $1,240.50</div>
                <div className="text-green-500 text-lg flex items-center mt-1 font-semibold">
                  <TrendingUp size={12} className="mr-1" /> 12.5% Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. PRICING PLANS ================= */}
      <section className="py-24 bg-zinc-950" id="pricing">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-blue tracking-widest font-bold uppercase text-lg">
              Pricing Packages
            </span>
            <h2 className="text-4xl font-bold mt-3">
              Plans for every style of trading
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-primary-blue hover:shadow-[0_0_30px_rgba(100,186,228,0.15)] transition-all duration-300 relative group flex flex-col">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-2">Currency Trading</h3>
              <p className="text-gray-500 text-lg mb-6 border-b border-white/10 pb-6">
                Perfect for forex majors.
              </p>
              <ul className="space-y-4 mb-8 text-lg text-gray-300 flex-1">
                {[
                  "Real-Time Market Analysis",
                  "Auto Buy/Sell Signals",
                  "News Filter Integration",
                  "Support MT4/MT5",
                  "24/7 Trading Capabilities",
                  "Low Latency Execution",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-zinc-900 border border-white/10 font-bold hover:bg-primary-blue hover:text-black transition-all">
                Subscribe <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Plan 2 - Highlighted */}
            <div className="bg-zinc-900 border border-primary-blue rounded-3xl p-8 shadow-[0_0_40px_rgba(100,186,228,0.2)] transform md:-translate-y-6 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-primary-blue text-black text-lg font-bold px-4 py-1.5 rounded-bl-xl">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Gold Trading
              </h3>
              <p className="text-primary-blue text-lg mb-6 border-b border-white/10 pb-6">
                Optimized for Gold (XAUUSD).
              </p>
              <ul className="space-y-4 mb-8 text-lg text-gray-300 flex-1">
                {[
                  "Optimized for Volatile Markets",
                  "Real-Time Price Tracking",
                  "Smart Trading Bot",
                  "Advanced Risk Control",
                  "Multi-Timeframe Strategy",
                  "Minimal Drawdown Strategy",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary-blue text-black font-bold hover:bg-white transition-all shadow-lg">
                Subscribe <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-primary-blue hover:shadow-[0_0_30px_rgba(100,186,228,0.15)] transition-all duration-300 relative group flex flex-col">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-2">Crypto Trading</h3>
              <p className="text-gray-500 text-lg mb-6 border-b border-white/10 pb-6">
                24/7 Digital Asset Markets.
              </p>
              <ul className="space-y-4 mb-8 text-lg text-gray-300 flex-1">
                {[
                  "24/7 Crypto Market Coverage",
                  "Volatility-Optimized Signals",
                  "AI-Based Trade Logic",
                  "Auto-Recovery Feature",
                  "Supports All Major Coins",
                  "Cold Wallet Alerts",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-zinc-900 border border-white/10 font-bold hover:bg-primary-blue hover:text-black transition-all">
                Subscribe <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. FAQ SECTION ================= */}
      <section className="py-24 bg-black border-t border-white/10" id="faq">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-zinc-900/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-primary-blue shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-500 shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 border-t border-white/5 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-block text-primary-blue border-b border-primary-blue pb-1 hover:text-white hover:border-white transition-colors"
            >
              View More FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 8. TESTIMONIALS & PAYMENTS ================= */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
        <div className="container mx-auto">
          <div className="mb-32">
            <div className="text-center mb-16 px-6">
              <h2 className="text-4xl font-bold mb-4 text-white">
                What people are saying
              </h2>
              <p className="text-gray-400">
                Trusted by over 10,000 traders worldwide
              </p>
            </div>

            <div className="relative">
              {/* Fade Gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />

              <div
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                ref={testimonialsRef}
              >
                <div className="flex -ml-4">
                  {/* Loop the data 3 times to create enough length for infinite scrolling */}
                  {[...testimonials, ...testimonials, ...testimonials].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex-[0_0_85%] md:flex-[0_0_350px] min-w-0 pl-4"
                      >
                        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative hover:border-primary-blue/30 transition-all hover:-translate-y-1 duration-300 h-full flex flex-col justify-between">
                          <div>
                            <Quote className="absolute top-6 right-6 text-zinc-800 w-8 h-8" />
                            <div className="flex gap-1 mb-4 text-yellow-500">
                              {[...Array(item.stars)].map((_, s) => (
                                <Star key={s} size={14} fill="currentColor" />
                              ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed text-lg md:text-base">
                              "{item.text}"
                            </p>
                          </div>
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-full border border-white/10 flex items-center justify-center text-gray-400">
                              <User size={20} />
                            </div>
                            <div>
                              <div className="font-bold text-white text-lg">
                                {item.name}
                              </div>
                              <div className="text-lg text-primary-blue">
                                {item.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- Infinite Draggable Payment Marquee --- */}
          <div className="border-t border-white/10 pt-16 relative">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-2 text-white">
                Local & Global Payment Options
              </h3>
              <p className="text-gray-500 text-lg">
                Secure transactions supported by major providers
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
              {/* Left Fade Gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
              {/* Right Fade Gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

              <div
                className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                ref={emblaRefPayment}
              >
                <div className="flex touch-pan-y">
                  {/* Rendering the list twice ensures smooth looping on wide screens */}
                  {[
                    ...paymentMethods,
                    ...paymentMethods,
                    ...paymentMethods,
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_auto] min-w-[200px] flex justify-center items-center mx-6"
                    >
                      <div className="flex items-center gap-3 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 group">
                        <div
                          className={`p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors`}
                        >
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <span className="font-bold text-xl text-gray-300 group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
