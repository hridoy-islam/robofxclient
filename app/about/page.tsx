"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Code2,
  Trophy,
  ArrowUpRight,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="About Us"
        subtitle="The leader in market analysis. Learn why we do what we do."
        backgroundImage="/b1.jpg"
      />

      {/* --- SECTION 1: MARKETS ILLUMINATED --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 text-primary-blue mb-6"
              >
                <Lightbulb className="w-5 h-5" />
                <span className="text-lg font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl  font-bold mb-6 leading-tight"
              >
                Markets, <span className="text-primary-blue">Illuminated.</span>
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="space-y-6 text-lg text-gray-400 leading-relaxed"
              >
                <p>
                  We are <strong className="text-white">QuickTradeFX</strong> —
                  The world’s largest provider of trading indicators. Whether
                  it’s through our free indicators, exclusive tools, or AI
                  assistant, our mission is to give clarity to traders &
                  investors.
                </p>
                <p>
                  In an industry that’s often opaque and awash with false
                  claims, we demystify markets. We don’t tease, mislead, or
                  complicate — we come at our audience with a genuine desire to
                  share what we know as developers & traders.
                </p>
                <p className="border-l-4 border-primary-blue pl-6 italic text-white/90">
                  "We aim to give you a clear read on the markets, insights at
                  the highest level, and help you find your own edge."
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Visual Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              <div className="p-8 bg-zinc-900/40 border border-white/10 rounded-2xl hover:border-primary-blue/30 transition-all group">
                <ShieldCheck className="w-10 h-10 text-primary-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Transparency First
                </h3>
                <p className="text-gray-400 text-lg">
                  We stand against the "black box" mentality. No hidden tricks,
                  just powerful code.
                </p>
              </div>
              <div className="p-8 bg-zinc-900/40 border border-white/10 rounded-2xl hover:border-primary-blue/30 transition-all group ml-0 lg:ml-12">
                <Code2 className="w-10 h-10 text-primary-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Open Source Core
                </h3>
                <p className="text-gray-400 text-lg">
                  We open-source 95% of what we do, providing hundreds of free
                  indicators for the community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: STATS BANNER --- */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="p-4">
              <div className="text-4xl  font-bold text-white mb-2">
                2020
              </div>
              <div className="text-blue-200 text-lg font-medium uppercase tracking-wider">
                Established
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl  font-bold text-white mb-2">
                500k+
              </div>
              <div className="text-blue-200 text-lg font-medium uppercase tracking-wider">
                Community
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl  font-bold text-white mb-2">
                95%
              </div>
              <div className="text-blue-200 text-lg font-medium uppercase tracking-wider">
                Open Source
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl  font-bold text-white mb-2">
                #1
              </div>
              <div className="text-blue-200 text-lg font-medium uppercase tracking-wider">
                Pine Script Wizard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRADING'S ANOMALY (Story) --- */}
      <section className="py-24 bg-zinc-900/20 border-t border-white/10">
        <div className="container mx-auto  max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-primary-blue text-lg font-bold uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Trading's Biggest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
                Anomaly
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8 text-left bg-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Decorative Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 p-4 rounded-full border border-white/10">
              <TrendingUp className="w-6 h-6 text-primary-blue" />
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Our contributive approach is how we became the largest brand for
              trading software plug-ins & scripts. Instead of promising
              overnight success rates or acting like we have some magic black
              box,{" "}
              <span className="text-white font-semibold">
                we took a stance against the decades-old taint to the industry.
              </span>
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Since 2020, we've dedicated ourselves to providing the greatest
              tools possible to various charting platforms with our team of the
              most reputable script developers in the world.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our efforts grew to massive achievements over the years, such as
              growing a following of <strong>500,000+ on TradingView</strong>,
              the biggest on the platform.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-blue/10 to-transparent border border-primary-blue/20 rounded-xl flex items-start gap-4">
              <Trophy className="w-8 h-8 text-primary-blue shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">
                  Hall of Fame Recognition
                </h4>
                <p className="text-lg text-gray-400">
                  We were nominated by TradingView as{" "}
                  <span className="text-primary-blue font-bold">
                    Pine Script Wizard in 2024
                  </span>
                  , the first & only company to make it into their hall of fame.
                  This honors the consistent volume, quality, and utility of our
                  indicators for traders.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL REACH --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6">
                Built for the Global Community
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We open-source 95% of what we do; hundreds of indicators, free
                for anyone to use and improve, while saving the best for our
                subscribers who support our work the most.
              </p>
              <a
                href="/features"
                className="inline-flex items-center text-primary-blue font-bold hover:text-white transition-colors border-b border-primary-blue pb-1"
              >
                Explore Our Tools <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Abstract Global Visual */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                <Globe className="w-32 h-32 text-zinc-800" />
                <div className="absolute top-0 right-10 w-4 h-4 bg-primary-blue rounded-full blur-[2px]" />
                <div className="absolute bottom-10 left-5 w-3 h-3 bg-blue-500 rounded-full blur-[2px]" />
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full blur-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
