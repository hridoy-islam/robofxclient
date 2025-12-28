"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Users,
  Coins,
  Cpu,
  Clock,
  Radar,
  BarChart2,
  ShieldAlert,
  LayoutDashboard,
  Bitcoin,
  DollarSign,
  CandlestickChart,
  Gem,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function MarketInsightPage() {
  // --- DATA: Why Momentum? ---
  const trends = [
    {
      title: "Increased Volatility",
      desc: "Modern markets move fast. Auto trading reacts instantly to price spikes that humans often miss.",
      icon: Activity,
    },
    {
      title: "Retail Investor Rise",
      desc: "Millions of individuals are entering the market, seeking tools that level the playing field against pros.",
      icon: Users,
    },
    {
      title: "Passive Income",
      desc: "The demand for 'set-and-forget' income streams has never been higher.",
      icon: Coins,
    },
    {
      title: "Algorithmic Dominance",
      desc: "Over 70% of global trades are now executed by algorithms. Don't trade against them; trade with them.",
      icon: Cpu,
    },
    {
      title: "24/7 Markets",
      desc: "Crypto never sleeps. Software ensures you don't miss opportunities while you rest.",
      icon: Clock,
    },
  ];

  // --- DATA: How It Works ---
  const analysisFeatures = [
    {
      title: "Real-Time Scanning",
      desc: "Our engine scans thousands of pairs per second to identify breakout patterns.",
      icon: Radar,
    },
    {
      title: "Technical Indicators",
      desc: "Built-in RSI, MACD, and Bollinger Bands analysis without the manual chart work.",
      icon: BarChart2,
    },
    {
      title: "Risk & Trend Analysis",
      desc: "AI evaluates market sentiment and volatility to adjust trade sizing dynamically.",
      icon: ShieldAlert,
    },
    {
      title: "Performance Dashboard",
      desc: "Visualise your growth with a comprehensive, easy-to-read analytics hub.",
      icon: LayoutDashboard,
    },
  ];

  // --- DATA: Markets ---
  const markets = [
    { title: "Crypto", icon: Bitcoin, sub: "BTC, ETH, Altcoins" },
    { title: "Forex", icon: DollarSign, sub: "Major & Minor Pairs" },
    { title: "Stocks", icon: CandlestickChart, sub: "Indices & Equities" },
    { title: "Commodities", icon: Gem, sub: "Gold, Oil, Silver" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Market Insights"
        subtitle="Stay Ahead of the Curve with Smart, Data-Driven Trading"
        backgroundImage="/b1.jpg"
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-lg font-bold tracking-widest uppercase mb-6">
              <TrendingUp size={12} /> Data-Driven Decisions
            </span>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Analysis in <span className="text-primary-blue">Action</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Experience real-time market scanning and strategy-based
              automation. Our Auto Trading Software doesn’t just execute
              trades—it helps you make informed decisions backed by real-time
              data and comprehensive trend analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WHY MOMENTUM (Grid) --- */}
      <section className="py-24 bg-zinc-900/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Why Automated Trading Is Gaining Momentum
            </h2>
            <p className="text-gray-400">
              The shift from manual to algorithmic trading is driven by five key
              market factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-black border border-white/10 hover:border-primary-blue/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-primary-blue group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT DELIVERS (Feature Row) --- */}
      <section className="py-24 relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Heading & Description */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How Our Software Delivers <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
                  Smart Analysis
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stop guessing. Our software processes millions of data points
                instantly, giving you an institutional-grade edge without the
                institutional price tag.
              </p>

              <Link
                href="/features"
                className="text-primary-blue font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Explore all features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {analysisFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-zinc-900/40 border border-white/10 hover:bg-zinc-900/60 transition-colors"
                >
                  <feat.icon className="w-8 h-8 text-primary-blue mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MARKETS SECTION --- */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Insights Across Markets</h2>
            <p className="text-gray-400">
              One powerful engine, endless trading possibilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {markets.map((m, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-white/5 hover:border-primary-blue/30 transition-all cursor-default"
              >
                <m.icon className="w-10 h-10 text-white mb-4 group-hover:text-primary-blue" />
                <h3 className="text-xl font-bold text-white">{m.title}</h3>
                <p className="text-lg text-primary-blue mt-1 uppercase tracking-wider">
                  {m.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-primary-blue rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Trade Smarter?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Join the revolution of data-driven investors. Set up your
                account today and let the algorithms work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="px-8 py-3.5 bg-white text-primary-blue font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
