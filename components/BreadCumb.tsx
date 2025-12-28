"use client";

import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
  backgroundImage?: string;
}

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
  backgroundImage = "/trading1.jpg", // Ensure this file exists in your public folder
}: BreadCumbProps) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[400px] flex items-center overflow-hidden bg-zinc-900 pt-20">
      {/* ================= BACKGROUND LAYERS ================= */}

      {/* 1. Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      )}

      {/* 2. Tech Grid Pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* 3. Ambient Blue Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none z-[1]" />

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Breadcrumb Pill */}
          {showBreadcrumb && (
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <nav className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>

                <ChevronRight className="w-3 h-3 text-gray-600" />

                <span className="text-lg font-semibold text-primary-blue tracking-wide">
                  {title}
                </span>
              </nav>
            </motion.div>
          )}

          {/* Title Block */}
          <div className="relative">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-6 tracking-tighter"
            >
              {title}
              <span className="text-primary-blue">.</span>
            </motion.h1>

            {subtitle && (
              <motion.div
                variants={itemVariants}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className="w-1 h-14 bg-gradient-to-b from-primary-blue to-transparent rounded-full hidden md:block shrink-0" />
                <p className="text-lg text-gray-300 font-light max-w-xl leading-relaxed">
                  {subtitle}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
