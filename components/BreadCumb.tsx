"use client";

import { ChevronRight, Home } from "lucide-react";
// 1. Import framer-motion
import { motion } from "framer-motion";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

// 2. Define Animation Variants
// This controls the staggered entrance of the text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item appearing
      delayChildren: 0.2, // Initial delay before starting
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" }, // Start slightly down and blurry
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)", // Remove blur on entry
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
}: BreadCumbProps) {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-200 supports-[overflow:clip]:overflow-clip">
      {/* Professional Technical Background */}
      <div className="absolute inset-0 z-0 opacity-[0.4]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* 3. Animated Background Glow Blob */}
        {/* We use motion.div here to make the background blob slowly "breathe" */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10, // Very slow, subtle animation
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 blur-[100px]"
        ></motion.div>
      </div>

      {/* 4. Main Content Container wrapping the animated elements */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Refined Breadcrumb - Pill Style */}
          {showBreadcrumb && (
            // We wrap individual items in motion.div to apply the itemVariants staggered effect
            <motion.div variants={itemVariants}>
              <nav className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/60 shadow-sm mb-8 transition-all hover:scale-105 hover:shadow-md duration-200">
                <a
                  href="/"
                  className="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                </a>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                  {title}
                </span>
              </nav>
            </motion.div>
          )}

          <div className="space-y-6">
            {/* 5. Beautiful Gradient Title */}
            <motion.h1
              variants={itemVariants}
              // Added a subtle gradient to the text itself for a premium feel
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent pb-1"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}