"use client";

import {
  Cpu,
  BookOpen,
  Bell,
  Wallet,
  Headset,
  ArrowRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Fully Automated Trading",
    description:
      "Trade 24/7, effortlessly. Our software is ready for quick installation—just double-click the wizard and let the AI do the rest.",
    icon: Cpu,
    colSpan: "md:col-span-2",
    gradient: "from-cyan-500/10 to-blue-500/5",
  },
  {
    title: "Quick Strategy Guide",
    description:
      "A detailed guide walking you through setup and techniques to maximize software performance.",
    icon: BookOpen,
    colSpan: "md:col-span-1",
    gradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Stay updated daily on your portfolio's performance with instant real-time notifications.",
    icon: Bell,
    colSpan: "md:col-span-1",
    gradient: "from-yellow-500/10 to-orange-500/5",
  },
  {
    title: "Optimal Money Management",
    description:
      "Smart algorithms track your trading positions and automatically close them at optimal profit levels to secure gains.",
    icon: Wallet,
    colSpan: "md:col-span-2",
    gradient: "from-green-500/10 to-emerald-500/5",
  },
  {
    title: "24/7 Quick Support",
    description:
      "Our support desk is available around the clock to assist you, ensuring your trading never stops. Typical response time is under one business day.",
    icon: Headset,
    colSpan: "md:col-span-3",
    gradient: "from-zinc-700/30 to-zinc-800/30",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main >
        <BreadCumb
          title="Features"
          subtitle="Discover the powerful technology behind our automated trading solution"
        />

        <section className="py-24 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-lg font-bold tracking-widest uppercase mb-6">
                <Zap size={12} fill="currentColor" /> Powerful Core
              </div>
              <h2 className="text-4xl  font-bold mb-6 text-white tracking-tight">
                Features of {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  AI Trading Software
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Experience the next generation of trading with tools designed
                for speed, accuracy, and full automation.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`${feature.colSpan} group relative rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all duration-500`}
                >
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-zinc-800/50 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <feature.icon className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-lg font-bold text-cyan-500/50 group-hover:text-cyan-400 transition-colors mt-auto cursor-pointer">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
