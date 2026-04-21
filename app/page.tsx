"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={className} data-inview={inView}>
      {children}
    </section>
  );
}

// ─── Service Cards Data ────────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10 text-[#3B82F6]"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
        <path d="M12 10v12M8 16h8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M18 6l3-3M6 6L3 3" />
      </svg>
    ),
    title: "Infrastructure Technology",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10 text-[#3B82F6]"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M12 12v1" />
      </svg>
    ),
    title: "IT Consultancy & solution",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10 text-[#3B82F6]"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <path d="M12 12v6M9 15h6" />
      </svg>
    ),
    title: "Cloud managed services",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10 text-[#3B82F6]"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Blockchain technology",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
  },
];

// ─── Stats Data ────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "1790",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18" />
        <path d="M3 9h18" />
      </svg>
    ),
    value: "491",
    label: "Finished Projects",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    value: "245",
    label: "Skilled Experts",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    value: "1090",
    label: "Media Posts",
  },
];

// ─── Solution Cards ────────────────────────────────────────────────────────────
const solutions = [
  {
    title: "Information Management System",
    bg: "from-primary/80 to-primary/40",
  },
  {
    title: "Information Database Security",
    bg: "from-secondary/80 to-secondary/40",
  },
  {
    title: "Multifunctional Technology",
    bg: "from-primary/60 to-secondary/60",
  },
];

// ─── Skills Data ──────────────────────────────────────────────────────────────
const skills = [
  { label: "IT Management", value: 80 },
  { label: "Data Security", value: 95 },
  { label: "Information Technology", value: 82 },
  { label: "Technology Consultant", value: 66 },
];

// ─── Case Studies Data ────────────────────────────────────────────────────────
const caseStudies = [
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "IT Management",
    title: "Structure of Mainufication",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    category: "Database Security",
    title: "Database Security Solutions",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    category: "Cloud Services",
    title: "Cloud Infrastructure Setup",
    description:
      "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your.",
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────
const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    name: "Mike Holder",
    role: "CEO, Harland Inc.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    name: "Mike Fernalin",
    role: "CEO, Harland Inc.",
  },
];

// ─── Team Data ────────────────────────────────────────────────────────────────
const team = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    name: "Andrew Max Fetcher",
    role: "CEO, techwix",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    name: "Arnold human",
    role: "CEO, techwix",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
    name: "Mike Holder",
    role: "CEO, techwix",
  },
  {
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
    name: "Joakim Ken",
    role: "CEO, techwix",
  },
];

// ─── Blog Data ────────────────────────────────────────────────────────────────
const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "June 05, 2024",
    category: "IT Management",
    title: "How IT Management Can Save Your Business from Chaos",
    author: "Alex Smith",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    date: "June 08, 2024",
    category: "Data Security",
    title: "Top 10 Data Security Strategies for Modern Enterprises",
    author: "Mike Holder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    date: "June 12, 2024",
    category: "Cloud Services",
    title: "Cloud Computing: The Future of Business Infrastructure",
    author: "Sarah Williams",
  },
];

// ─── Partners / Logos ─────────────────────────────────────────────────────────
const partners = ["Fampay", "SWIGG", "MIGHTY BUILDING", "Jupiter", "Dyte"];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex flex-col overflow-hidden bg-[#0a1526]">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0B1A2A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0B1A2A]/50" />
        <div className="absolute top-0 left-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-[#8A2BE2] to-[#3B82F6] rounded-br-full opacity-95 -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-gradient-to-tl from-[#8A2BE2] to-[#3B82F6] rounded-tl-full opacity-90 translate-x-1/4 translate-y-1/4" />
        <svg
          className="absolute right-[10%] top-1/4 w-1/3 h-full opacity-20 pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M500 0 C 200 150, 100 350, -50 500"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-20 container mx-auto pb-72 w-full flex-grow flex flex-col justify-center">
        <motion.div className="">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-xs font-semibold tracking-widest uppercase text-white/90 mb-4"
          >
            TECHNOLOGY RELATED CONSULTANCY
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            We transform ideas
            <br />
            into technology
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/80 text-base leading-relaxed mb-8 max-w-md"
          >
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <button className="px-8 py-3.5 btn-gradient rounded-md font-semibold text-sm text-white shadow-lg transition-colors">
              Read More
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="">
        <ServiceCardsOverlay />
      </div>
    </section>
  );
}

// ─── SERVICE CARDS OVERLAY ────────────────────────────────────────────────────
function ServiceCardsOverlay() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-2xl group hover:-translate-y-2 transition-all duration-300 flex flex-col border border-white/20"
          >
            <div className="mb-5">{s.icon}</div>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">
              {s.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow">
              {s.description}
            </p>
            <a
              href="#"
              className="mt-auto flex items-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-900 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-[#EEF4FF] text-[#3B82F6] flex items-center justify-center text-lg shadow-sm">
                +
              </span>
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT / VIDEO SECTION ────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Who We Are
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Highly Tailored IT Design,
            <br />
            Management & Support
            <br />
            Services.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            Accelerate innovation with workflows tech meets. We'll teach you to
            achieve things. Start incredible freelance solutions for all your
            software development needs.
          </p>

          <div className="flex items-center gap-8">
            <div>
              <div className="font-bold text-gray-800 text-sm mb-0.5">
                Alex Sp.
              </div>
              <div className="text-xs text-gray-500">Alex Feronda</div>
              <div className="text-xs text-gray-400">CEO, Advisor</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-0.5">
                Call us with any question
              </div>
              <a
                href="tel:01234567890"
                className="text-primary-foreground font-bold text-sm"
              >
                0123-456-7890
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative h-80 lg:h-96">
            <div className="absolute right-0 top-0 w-4/5 h-full rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Office Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-2/5 h-2/5 rounded-sm border-4 border-white overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-[30%] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg shadow-primary/40 flex items-center justify-center z-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-foreground fill-current ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STATS SECTION ─────────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="border border-primary-foreground rounded-sm bg-white px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-primary-foreground flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <div
                  className="text-2xl font-bold text-primary-foreground leading-none"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SOLUTIONS SECTION ────────────────────────────────────────────────────────
function SolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Reasons to Choose Us
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            We provide truly prominent
            <br />
            IT solutions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: "Information Management System",
              img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Information Database Security",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Multifunctional Technology",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            },
          ].map((sol, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="relative h-64 rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={sol.img}
                alt={sol.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gray-800/50 group-hover:bg-gray-800/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {sol.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500">
            Learn more about{" "}
            <a
              href="#"
              className="text-primary-foreground font-semibold underline underline-offset-2"
            >
              More reason →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SKILLS / PROGRESS SECTION ────────────────────────────────────────────────
function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gray-50 py-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Preparing for your success,
            <br />
            we provide truly prominent
            <br />
            IT solutions
          </h2>

          <div className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-28 h-28 rounded-md bg-gradient-to-br from-[#3B82F6] to-[#8A2BE2] flex flex-col items-center justify-center text-white shadow-lg">
              <span className="text-4xl font-bold leading-none">25</span>
              <span className="text-[10px] mt-1 font-medium opacity-90">
                Years of
              </span>
              <span className="text-[10px] font-medium opacity-90">
                experience
              </span>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Accelerate innovation with world-class tech teams We'll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
              <a
                href="#"
                className="text-primary-foreground font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More About Us →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Skill bars */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {skill.label}
                </span>
                <span className="text-xs font-bold text-white bg-primary-foreground px-2 py-0.5 rounded-sm">
                  {skill.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  className="bg-primary-foreground h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Create extended array for infinite loop effect (duplicate items)
  const extendedCaseStudies = [...caseStudies, ...caseStudies, ...caseStudies];
  const totalItems = caseStudies.length;
  const extendedTotal = extendedCaseStudies.length;
  const [currentIndex, setCurrentIndex] = useState(totalItems); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
    setActive((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
    setActive((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Handle infinite loop reset
  const handleTransitionEnd = () => {
    if (currentIndex >= extendedTotal - totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems);
      setTimeout(() => setIsTransitioning(true), 50);
    } else if (currentIndex < totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(extendedTotal - totalItems * 2);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsDragging(false);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section ref={ref} className="bg-[#0B1A2A] py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            From Our Case Studies
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            We delivered best solution
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 ml-2 transition-all"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 mr-2 transition-all"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCaseStudies.map((cs, i) => {
                const originalIndex = i % totalItems;
                const isActive =
                  originalIndex === active &&
                  Math.floor(currentIndex / totalItems) ===
                    Math.floor(i / totalItems) &&
                  Math.abs(i - currentIndex) < totalItems;

                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="min-w-[33.333%] px-3"
                  >
                    <div
                      className={`h-[500px] relative cursor-pointer transition-all duration-300 rounded-xl overflow-hidden group
                        ${isActive ? "ring-2 ring-blue-500 shadow-2xl scale-105" : "opacity-60 hover:opacity-80 scale-95"}
                      `}
                      onClick={() => {
                        const newIndex = i;
                        setCurrentIndex(newIndex);
                        setActive(originalIndex);
                      }}
                    >
                      {/* IMAGE */}
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div
                        className={`absolute inset-0 transition-all duration-500
                          ${isActive ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent" : "bg-black/60"}
                        `}
                      />

                      {/* CONTENT */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500
                        ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                      `}
                      >
                        <span className="text-xs font-bold uppercase text-blue-400 tracking-widest">
                          {cs.category}
                        </span>

                        <h3 className="text-white font-bold text-2xl mt-2 mb-3">
                          {cs.title}
                        </h3>

                        <p className="text-white/80 text-sm mt-2 line-clamp-3 max-w-md">
                          {cs.description}
                        </p>

                        {isActive && (
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm font-semibold transition-colors"
                          >
                            Learn More →
                          </motion.button>
                        )}
                      </div>

                      {/* Badge */}
                      
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center gap-2 mt-8 mb-4">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(currentIndex - (active - i));
                setActive(i);
              }}
              className="group relative"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300
                ${active === i ? "bg-white w-8" : "bg-white/30 group-hover:bg-white/50"}
              `}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter */}
       
      </div>
    </section>
  );
}


// ─── TESTIMONIALS SECTION ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Testimonial
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            20k+ satisfied clients worldwide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="bg-white border border-gray-300 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <svg
                    viewBox="0 0 32 24"
                    className="w-8 h-6 text-primary-foreground mb-2"
                    fill="currentColor"
                  >
                    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.2 6.4 6.4 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0l1.6 2.4c-5.6 1.2-8.8 4-9.6 8H32V24H20z" />
                  </svg>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <span className="font-bold text-gray-800 text-sm">
                  {t.name}
                </span>
                <span className="text-gray-400 text-xs ml-1">/ {t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${active === i ? "bg-primary-foreground w-6 h-2.5" : "bg-gray-300 w-2.5 h-2.5"}`}
            />
          ))}
        </div>

        {/* Partners Logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {partners.map((p, i) => (
            <span
              key={i}
              className="text-gray-400 font-bold text-3xl tracking-wide hover:text-gray-600 transition-colors cursor-pointer uppercase"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── TEAM SECTION ─────────────────────────────────────────────────────────────
function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="bg-gray-50 py-24">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Our Expert Team
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            We have world expert team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-sm">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i}
                className="relative group overflow-hidden"
              >
                <div className="relative h-72 lg:h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B1A2A]/40 group-hover:bg-[#0B1A2A]/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
                      <h3 className="text-white font-bold text-sm leading-snug">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-white/70 text-xs ml-4">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${active === i ? "bg-primary-foreground w-6 h-2.5" : "bg-gray-300 w-2.5 h-2.5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BLOG SECTION ─────────────────────────────────────────────────────────────
function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Latest Blog
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Read our latest news &amp;
            <br />
            blog from our experts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm mb-5 h-52">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-foreground text-white text-xs font-bold px-3 py-1 rounded-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {blog.date}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {blog.author}
                  </span>
                </div>
                <h3
                  className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {blog.title}
                </h3>
                <a
                  href="#"
                  className="text-primary-foreground text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#0B1A2A]/85" />
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-br from-[#8A2BE2]/50 to-[#3B82F6]/50 rounded-br-full -translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-3">
            Get In Touch
          </p>
          <h2
            className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Ready to grow your business
            <br />
            with our IT solutions?
          </h2>
          <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            Accelerate innovation with world-class tech teams. We'll match you
            to an entire remote team of incredible freelance talent for all your
            needs.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3.5 bg-primary-foreground text-white rounded-md font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-3.5 border border-white/40 text-white rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ROOT ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SolutionsSection />
      <SkillsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
