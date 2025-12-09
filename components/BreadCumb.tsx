"use client";

import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

// Define Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
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
    <section className="relative py-24 overflow-hidden border-b border-slate-200 supports-[overflow:clip]:overflow-clip">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/breadcumb.jpg"
          alt="Technical Background"
          className="w-full h-full object-cover"
        />
        
       
        <div className="absolute inset-0 bg-black/45 " />
        
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Background Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 blur-[100px]"
        ></motion.div>
      </div>

      {/* --- Main Content --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Breadcrumb Navigation */}
          {showBreadcrumb && (
            <motion.div variants={itemVariants}>
              <nav className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/60 shadow-sm mb-8 transition-all hover:scale-105 hover:shadow-md duration-200">
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
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-gray-200 to-gray-50 bg-clip-text text-transparent pb-1"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-50 leading-relaxed font-medium max-w-3xl mx-auto"
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