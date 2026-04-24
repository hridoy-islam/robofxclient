"use client";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

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
  hidden: { y: 16, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.75,
    },
  },
};

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
}: BreadCumbProps) {
  return (
    <section className="relative py-20 overflow-hidden supports-[overflow:clip]:overflow-clip min-h-[320px] flex items-center">
      {/* ── Background Photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/breadcrumb.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* dark teal overlay — matches the image's blueish-dark wash */}
        <div className="absolute inset-0 bg-[#0d2233]/70 mix-blend-multiply" />
        {/* <div className="absolute inset-0 bg-teal-900/40" /> */}
      </div>

      {/* ── Abstract Shape — TOP LEFT ── */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: -60, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -top-24 -left-24 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 10 C120 10, 150 40, 150 80 C150 110, 130 148, 90 152 C55 156, 15 130, 10 90 C4 50, 40 10, 80 10Z"
            fill="url(#blobGradientLeft)"
            opacity="0.92"
          />
          <defs>
            <linearGradient
              id="blobGradientLeft"
              x1="0"
              y1="0"
              x2="160"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor="hsl(var(--primary-foreground, 199 89% 48%))"
              />
              <stop offset="100%" stopColor="#1e9fd4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ── Abstract Shape — BOTTOM RIGHT ── */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="absolute -bottom-24 -right-24 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 260 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40"
            y="30"
            width="310"
            height="230"
            rx="28"
            fill="url(#rectGradientRight)"
            opacity="0.90"
          />
          <defs>
            <linearGradient
              id="rectGradientRight"
              x1="10"
              y1="10"
              x2="120"
              y2="140"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor="hsl(var(--secondary, 224 71% 55%))"
              />
              <stop offset="100%" stopColor="#9b5de5" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {/* ── Main Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 relative z-20 w-full"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
          >
            {title}
          </motion.h1>

          {/* Breadcrumb Navigation */}
          {showBreadcrumb && (
            <motion.nav
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 text-sm text-white/70"
              aria-label="Breadcrumb"
            >
              <a
                href="/"
                className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </a>
              <span className="text-white/50">/</span>
              <span className="text-white/90 font-medium">{title}</span>
            </motion.nav>
          )}

          {/* Optional Subtitle */}
          {/* {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )} */}
        </div>
      </motion.div>
    </section>
  );
}
