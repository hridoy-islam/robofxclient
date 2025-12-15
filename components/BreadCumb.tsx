"use client";

import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
}: BreadCumbProps) {
  
  // Staggered animation for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash Image: Modern Corporate Architecture */}
        <img 
          src="/b1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay: Heavy on left for text readability, transparent on right */}
        <div className="absolute inset-0 bg-primary/50" />
        
        {/* Optional: Subtle Texture Overlay */}
        {/* <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 mix-blend-overlay"></div> */}
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb Navigation */}
          {showBreadcrumb && (
            <motion.nav 
              variants={itemVariants}
              className="flex items-center space-x-2 text-sm text-gold/80 mb-6 font-medium"
            >
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white pointer-events-none">{title}</span>
            </motion.nav>
          )}

          {/* Title with decorative line */}
          <motion.div variants={itemVariants} className="relative">
             <motion.h1 
                className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
             >
              {title}
            </motion.h1>
            {/* Gold Underline Decoration */}
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-gold mb-6 rounded-full"
            />
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}