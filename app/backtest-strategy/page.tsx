"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  History,
  TrendingUp,
  Sliders,
  BarChart3,
  BrainCircuit,
  PlayCircle,
  Bitcoin,
  DollarSign,
  CandlestickChart,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function BacktestStrategyPage() {
  // --- DATA: Benefits ---
  const benefits = [
    {
      title: "Data-Driven Confidence",
      desc: "Evaluate profitability, risk, and consistency using years of historical data before risking a single cent.",
      icon: TrendingUp,
    },
    {
      title: "Strategy Optimisation",
      desc: "Fine-tune your stop-loss, take-profit, and entry parameters to maximize performance outcomes.",
      icon: Sliders,
    },
    {
      title: "Performance Metrics",
      desc: "Get deep insights into ROI, win/loss ratios, maximum drawdowns, and Sharpe ratios.",
      icon: BarChart3,
    },
    {
      title: "Avoid Overfitting",
      desc: "Test across different market conditions (bull, bear, ranging) to ensure your strategy is robust, not just lucky.",
      icon: BrainCircuit,
    },
    {
      title: "Test Before You Deploy",
      desc: "Mitigate significant financial risk by identifying potential flaws or weaknesses in a safe simulation.",
      icon: PlayCircle,
    },
  ];

  // --- DATA: Markets ---
  const markets = [
    { title: "Cryptocurrencies", sub: "24/7 Trading Data", icon: Bitcoin },
    {
      title: "Forex Pairs",
      sub: "High Liquidity & Volatility",
      icon: DollarSign,
    },
    { title: "Stocks & ETFs", sub: "Global Equities", icon: CandlestickChart },
    { title: "Indices & Commodities", sub: "Market Wide Trends", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-black  text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Backtest Strategy"
        subtitle="Validate Before You Trade. Optimize with Confidence."
      />

      {/* --- SECTION 1: INTRO & WHAT IS IT? --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 text-primary-blue px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary-blue/20 bg-primary-blue/5">
                <History className="w-3 h-3" />
                <span>Simulation Engine</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Validate Before You <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
                  Trade Live
                </span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Before deploying any strategy in live markets, it’s essential to
                understand how it would have performed under real historical
                conditions.
              </p>

              <div className="p-6 rounded-xl bg-zinc-900/50 border-l-4 border-primary-blue">
                <h3 className="text-white font-bold text-lg mb-2">
                  What Is Backtesting?
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Backtesting is the process of testing a trading strategy using
                  historical market data to evaluate its effectiveness. It
                  allows traders to simulate performance over past conditions
                  without risking actual capital.
                </p>
              </div>
            </motion.div>

            {/* Right: Visual/Abstract Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Mockup UI Elements */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-lg text-gray-500 font-mono">
                    Simulating Strategy v1.02...
                  </div>
                </div>

                {/* Simulated Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <div className="text-gray-500 text-lg uppercase mb-1">
                      Total Return
                    </div>
                    <div className="text-green-400 text-2xl font-bold">
                      +124.5%
                    </div>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <div className="text-gray-500 text-lg uppercase mb-1">
                      Max Drawdown
                    </div>
                    <div className="text-red-400 text-2xl font-bold">
                      -12.3%
                    </div>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <div className="text-gray-500 text-lg uppercase mb-1">
                      Trades Executed
                    </div>
                    <div className="text-white text-2xl font-bold">1,402</div>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <div className="text-gray-500 text-lg uppercase mb-1">
                      Win Rate
                    </div>
                    <div className="text-primary-blue text-2xl font-bold">
                      68.2%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                  <div className="bg-primary-blue h-2 rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-wider">
                  <span>Testing...</span>
                  <span>85% Complete</span>
                </div>
              </div>

              {/* Back Glow behind card */}
              <div className="absolute inset-0 bg-primary-blue/20 blur-3xl -z-10 rounded-full transform translate-y-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KEY BENEFITS (Cards) --- */}
      <section className="py-24 bg-zinc-900/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Why professional traders never go live without backtesting first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-black border border-white/10 rounded-2xl hover:border-primary-blue/40 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <benefit.icon className="w-16 h-16 text-primary-blue" />
                </div>

                <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6 text-primary-blue border border-primary-blue/20">
                  <benefit.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SUPPORTED MARKETS --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Supported Markets
              </h2>
              <p className="text-gray-400">
                Test your strategies across diverse global assets.
              </p>
            </div>
            <Link
              href="/markets"
              className="hidden md:flex items-center text-primary-blue font-bold hover:text-white transition-colors"
            >
              View All Assets <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {markets.map((market, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 hover:bg-zinc-900/50 transition-all cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/5 rounded-full text-white">
                    <market.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white">{market.title}</h4>
                </div>
                <div className="flex items-center text-lg text-primary-blue font-medium">
                  <CheckCircle2 className="w-3 h-3 mr-2" />
                  {market.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}
