"use client";

import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
  backgroundImage?: string; // Option to pass specific images
}

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
  backgroundImage = "/b1.jpg", // Default image
}: BreadCumbProps) {
  
  // Animation Variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Custom ease for "luxury" feel
    },
  };

  return (
    <section className="relative h-[350px] flex items-center overflow-hidden font-sans">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. Image with Slow Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <img 
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. Primary Gradient Overlay (Left to Right & Bottom to Top) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary via-transparent to-transparent" />

      {/* 3. Modern Grid Pattern Overlay (CSS only) */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* 1. Glassmorphism Breadcrumb Pill */}
          {showBreadcrumb && (
            <motion.div variants={itemVariants} className="inline-block mb-8">
                <nav className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/70 hover:text-gold transition-colors"
                  >
                    <Home className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Home</span>
                  </Link>
                  
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white/30" />
                  
                  <span className="text-xs md:text-sm font-semibold text-gold tracking-wide">
                    {title}
                  </span>
                </nav>
            </motion.div>
          )}

          {/* 2. Main Title Block */}
          <div className="relative pl-6 md:pl-8 border-l-4 border-gold">
            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-4 tracking-tight drop-shadow-xl"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

        </motion.div>
      </div>
      
      {/* Decorative Floating Element (Right side) */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] z-[5] pointer-events-none"
      />

    </section>
  );
}