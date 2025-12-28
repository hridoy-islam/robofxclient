"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  Zap,
  LineChart,
  Settings,
  ShieldCheck,
  ArrowRight,
  UserPlus,
  Link as LinkIcon,
  PlayCircle,
  BarChart3,
  Layers,
} from "lucide-react";

export default function BeginnerGuidePage() {
  // --- DATA: Features ---
  const features = [
    {
      title: "Fully Automated",
      description:
        "Set your strategy and let the system trade 24/7 without manual interference.",
      icon: Bot,
    },
    {
      title: "Fast Execution",
      description:
        "Capture market opportunities instantly, with millisecond execution speeds.",
      icon: Zap,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Backtest your strategy with historical data to ensure viability before trading.",
      icon: LineChart,
    },
    {
      title: "Custom Strategies",
      description:
        "Use professional templates or customize your own parameters.",
      icon: Settings,
    },
    {
      title: "Robust Risk Controls",
      description:
        "Apply stop-loss, take-profit, and capital protection settings automatically.",
      icon: ShieldCheck,
    },
  ];

  // --- DATA: Steps ---
  const steps = [
    {
      id: "01",
      title: "Register Your Account",
      description:
        "Fast, secure sign-up process to create your QuickTradeFX profile.",
      icon: UserPlus,
    },
    {
      id: "02",
      title: "Connect Your Broker",
      description:
        "Seamlessly link with major trading platforms (MT4/MT5) via API.",
      icon: LinkIcon,
    },
    {
      id: "03",
      title: "Choose Your Strategy",
      description:
        "Pick from expert-built templates or customize one yourself using our wizard.",
      icon: Layers,
    },
    {
      id: "04",
      title: "Go Live or Simulate",
      description:
        "Practice safely in demo mode or switch to live trading when ready.",
      icon: PlayCircle,
    },
    {
      id: "05",
      title: "Track & Optimise",
      description:
        "Monitor performance in real-time and fine-tune settings anytime.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Get Started"
        subtitle="Your Step-by-Step Guide to Smarter, Automated Investing"
      />

      {/* --- SECTION 1: WHAT IS AUTO TRADING? --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1">
              <span className="text-primary-blue text-lg tracking-[0.2em] uppercase font-bold mb-4 block">
                Introduction
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                What Is <span className="text-primary-blue">Auto Trading?</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Auto Trading Software executes trades on your behalf using
                advanced algorithms and real-time market data.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                It reduces emotional decision-making, increases efficiency, and
                allows you to capitalise on market movements—automatically, 24
                hours a day.
              </p>
            </div>

            {/* Visual/Features Grid */}
            <div className="flex-1 w-full">
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start p-4 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-primary-blue/50 transition-all duration-300"
                  >
                    <div className="p-2 bg-primary-blue/10 rounded-lg mr-4 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-lg text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: HOW IT WORKS (5 STEPS) --- */}
      <section className="py-24 bg-zinc-900/20 border-t border-white/10">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400">
              Simple 5-Step Setup to launch your automated portfolio.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Connecting Line (Desktop) */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-blue/20 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="flex-1 pl-16 md:pl-0 w-full">
                    <div
                      className={`p-6 rounded-2xl bg-black border border-white/10 hover:border-primary-blue/40 transition-all duration-300 relative ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <div
                        className={`hidden md:flex flex-col gap-2 ${
                          index % 2 === 0 ? "items-start" : "items-end"
                        }`}
                      >
                        <step.icon className="w-8 h-8 text-primary-blue mb-2" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        <span className="md:hidden text-primary-blue mr-2">
                          {step.id}.
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (Number) */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    <div className="w-full h-full rounded-full bg-primary-blue flex items-center justify-center text-white font-bold text-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
}
