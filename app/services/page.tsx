"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  {
    title: "IT Consultancy",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="20" cy="14" r="7" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <path d="M26 10l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Data Science",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="20" cy="10" rx="14" ry="5" />
        <path d="M6 10v8c0 2.761 6.268 5 14 5s14-2.239 14-5v-8" />
        <path d="M6 18v8c0 2.761 6.268 5 14 5s14-2.239 14-5v-8" />
      </svg>
    ),
  },
  {
    title: "IT Security",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 4l14 5v10c0 8-6 14-14 17C12 33 6 27 6 19V9l14-5z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Blockchain System",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="14" y="4" width="12" height="10" rx="2" />
        <rect x="4" y="26" width="12" height="10" rx="2" />
        <rect x="24" y="26" width="12" height="10" rx="2" />
        <path d="M20 14v6M10 26v-6h20v6" />
      </svg>
    ),
  },
  {
    title: "IT Infrastructure",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="10" width="32" height="7" rx="2" />
        <rect x="4" y="23" width="32" height="7" rx="2" />
        <circle cx="9" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="9" cy="26.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Data Management",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="6" width="28" height="8" rx="2" />
        <rect x="6" y="18" width="28" height="8" rx="2" />
        <rect x="6" y="30" width="28" height="5" rx="2" />
        <circle cx="11" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="11" cy="22" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "IT Management",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="20" cy="20" r="4" />
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4M7.76 7.76l2.83 2.83M29.41 29.41l2.83 2.83M7.76 32.24l2.83-2.83M29.41 10.59l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Data Securet",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 4l14 5v10c0 8-6 14-14 17C12 33 6 27 6 19V9l14-5z" />
        <circle cx="20" cy="18" r="3" />
        <path d="M20 21v5" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    author: "Mike Holder",
    role: "CEO, Harland inc",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    author: "Mike Farmalin",
    role: "CEO, Harland inc",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=100&q=80",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    features: [
      "Community Support",
      "Dedicated Tech Experts",
      "Unlimited Storage",
      "Custom Domains",
    ],
    highlighted: false,
  },
  {
    name: "Starter",
    price: "10",
    features: [
      "Community Support",
      "Dedicated Tech Experts",
      "Unlimited Storage",
      "Custom Domains",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "30",
    features: [
      "Community Support",
      "Dedicated Tech Experts",
      "Unlimited Storage",
      "Custom Domains",
    ],
    highlighted: false,
  },
];

const partners = ["fampay", "SWIGG", "MIGHTY BUILDING", "Jupiter", "dyte"];

function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx * 0.08}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0b1a2a 0%, #0d2040 100%)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-1 self-stretch rounded-full flex-shrink-0"
              style={{
                background: "linear-gradient(180deg, #4f46e5, #38bdf8)",
              }}
            />
            <h2 className="text-white font-bold text-2xl leading-snug">
              To make requests for
              <br />
              further information,
              <br />
              contact us
            </h2>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-white/60 text-xs mb-1">
                Call Us For Any Inquiry
              </div>
              <a
                href="tel:+44920090505"
                className="text-blue-400 font-bold text-xl"
              >
                +44 920 090 505
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            TESTIMONIAL
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            20k+ satisfied clients worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="flex gap-5 p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <img
                src={t.img}
                alt={t.author}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <svg
                  className="w-8 h-8 text-blue-400 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm mb-3">{t.text}</p>
                <div className="text-sm font-semibold text-gray-800">
                  {t.author}{" "}
                  <span className="text-gray-400 font-normal">/ {t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-4 h-2 rounded-full bg-blue-500" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            PRICING PLANS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Affordable pricing for all
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className={`rounded-xl p-8 ${plan.highlighted ? "text-white shadow-xl" : "bg-white border border-gray-200"}`}
              style={
                plan.highlighted
                  ? {
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #2563eb 60%, #38bdf8 100%)",
                    }
                  : {}
              }
            >
              <div
                className={`text-sm font-semibold mb-4 ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}
              >
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-6">
                <span
                  className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-gray-800"}`}
                >
                  $
                </span>
                <span
                  className={`text-5xl font-extrabold leading-none ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mb-1 ${plan.highlighted ? "text-white/70" : "text-gray-500"}`}
                >
                  /Month
                </span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Try It Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((p, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="text-gray-400 font-bold text-lg uppercase tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-xl px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #2563eb 60%, #38bdf8 100%)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl leading-tight">
              We're Delivering the best customer Experience
            </h2>
          </div>
          <a
            href="tel:+44920090505"
            className="flex-shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-sm hover:bg-blue-50 transition-colors"
          >
            +44 920 090 505
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <BreadCrumb title="Our Services" />
      <ServicesGrid />
      <ContactCTABanner />
      <TestimonialSection />
      <PricingSection />
      <PartnersSection />
      <ServicesCTASection />
      <Footer />
    </main>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
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

// ─── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "354+", label: "Completed Projects" },
  { value: "119+", label: "Robotic Automation" },
  { value: "99%", label: "Web Site Analyze" },
  { value: "321+", label: "Clients Support Done" },
];

const checklist = [
  { text: "We always focus on technical excellence", checked: true },
  {
    text: "Wherever you're going, we bring ideas and excitement",
    checked: true,
  },
  { text: "We're consultants, guides, and partners for brands", checked: true },
];

const partners = [
  { name: "fampay", logo: null },
  { name: "SWIGG", logo: null },
  { name: "MIGHTY BUILDING", logo: null },
  { name: "Jupiter", logo: null },
  { name: "dyte", logo: null },
];

const solutionsItems = [
  {
    title: "Infrastructure Technology",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="10" width="32" height="7" rx="2" />
        <rect x="4" y="23" width="32" height="7" rx="2" />
        <circle cx="9" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="9" cy="26.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Highly professional team members",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="14" cy="14" r="5" />
        <circle cx="26" cy="14" r="5" />
        <path d="M4 34c0-5.523 4.477-10 10-10h12c5.523 0 10 4.477 10 10" />
      </svg>
    ),
  },
  {
    title: "Security Management",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 4l14 5v10c0 8-6 14-14 17C12 33 6 27 6 19V9l14-5z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Desktop Computing",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="6" width="32" height="22" rx="2" />
        <path d="M14 34h12M20 28v6" />
      </svg>
    ),
  },
  {
    title: "Infrastructure Technology",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="10" width="32" height="7" rx="2" />
        <rect x="4" y="23" width="32" height="7" rx="2" />
        <circle cx="9" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="9" cy="26.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Ideas for high return investment",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entirely.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="20" cy="16" r="10" />
        <path d="M20 26v10M15 32h10" />
        <path d="M16 13l4-4 4 4M20 9v10" />
      </svg>
    ),
  },
  {
    title: "Fully high IT Management",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entire.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="20" cy="20" r="4" />
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4M7.76 7.76l2.83 2.83M29.41 29.41l2.83 2.83M7.76 32.24l2.83-2.83M29.41 10.59l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Data secure & Management",
    desc: "Accelerate innovation with world-class tech teams. We'll match you to an entirely.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="20" cy="10" rx="14" ry="5" />
        <path d="M6 10v8c0 2.761 6.268 5 14 5s14-2.239 14-5v-8" />
        <path d="M6 18v8c0 2.761 6.268 5 14 5s14-2.239 14-5v-8" />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Andrew Max Fetcher",
    role: "CFO, Technax",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arnold Human",
    role: "CEO, Technax",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mike Holder",
    role: "CEO, Technax",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Joachim Ken",
    role: "CEO, Technax",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  },
];

const testimonials = [
  {
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    author: "Mike Holder",
    role: "CEO, Harland inc",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this wow manatee",
    author: "Mike Holder",
    role: "CEO, Harland inc",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80",
  },
];

// ─── INTRO / WHO WE ARE ──────────────────────────────────────────────────────
function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: overlapping images */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-[380px]"
          >
            {/* Dot pattern decoration */}
            <div
              className="absolute -left-4 top-8 w-32 h-32 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #a0aec0 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team working"
              className="absolute left-0 top-0 w-[56%] h-[72%] object-cover rounded-lg shadow-lg z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=500&q=80"
              alt="Professional"
              className="absolute right-0 bottom-0 w-[50%] h-[65%] object-cover rounded-lg shadow-lg z-20"
            />
            {/* Dot pattern decoration bottom-right */}
            <div
              className="absolute right-0 bottom-8 w-24 h-24 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #a0aec0 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              WHO WE ARE
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Highly Tailored IT Design, Management & Support Services.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Accelerate innovation with world-class tech teams We'll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </p>
            <hr className="border-gray-200 mb-6" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-500 text-sm">
                  Accelerate innovation with world-class tech teams. We help
                  businesses elevate their value.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Custom Code
                </h3>
                <p className="text-gray-500 text-sm">
                  Accelerate innovation with world-class tech teams. We help
                  businesses elevate their value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS SECTION ───────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-0">
      <div className="container mx-auto ">
        <div
          className="rounded-xl py-10 px-8"
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #2563eb 50%, #38bdf8 100%)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i}
              >
                <div className="text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROMINENT IT SOLUTIONS ──────────────────────────────────────────────────
function ProminentSolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-20 mt-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 50%, rgba(99,102,241,0.05) 0%, transparent 60%), radial-gradient(circle at 20% 50%, rgba(56,189,248,0.05) 0%, transparent 60%)",
      }}
    >
      <div className="container mx-auto ">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutionsItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx * 0.08}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PREPARING FOR SUCCESS ───────────────────────────────────────────────────
function PreparingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
              Preparing for your success,
              <br />
              we provide truly prominent
              <br />
              IT solutions
            </h2>
            <div className="space-y-4 mb-10">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-start gap-12 pt-6 border-t border-gray-200">
              <div>
                <div
                  className="font-bold text-2xl mb-1"
                  style={{ fontFamily: "cursive", color: "#1e293b" }}
                >
                  Alex Song
                </div>
                <div className="text-xs text-gray-500">Alex Mama aim</div>
                <div className="text-sm font-semibold text-gray-800">
                  CEO, Technax
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  Call to ask any question
                </div>
                <a
                  href="tel:01234567890"
                  className="text-blue-500 font-bold text-xl"
                >
                  0123-456-7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Accelerate innovation with world-class tech teams. We'll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs. Building cloud, infrastructure,
              network, etc. We put a strong focus on the needs of your business
              to figure out solutions that best fits your demand and nail it.
            </p>

            <div className="space-y-6">
              {[
                { label: "IT Management", pct: 80 },
                { label: "Data Security", pct: 95 },
                { label: "Information Technology", pct: 80 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">
                      {bar.label}
                    </span>
                    <span className="text-gray-500">{bar.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <motion.div
                      className="h-1.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #4f46e5, #38bdf8)",
                        width: inView ? `${bar.pct}%` : "0%",
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.3 + i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERT TEAM SECTION ─────────────────────────────────────────────────────
function ExpertTeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050e1f 0%, #0b1a2a 60%, #0d1f3c 100%)",
      }}
    >
      {/* Network dots background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f8ef7' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            OUR EXPERT TEAM
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            We have world expert team
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-64">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1 h-6 bg-blue-500 rounded-sm" />
                    <div>
                      <div className="text-white font-bold text-xs leading-tight">
                        {member.name}
                      </div>
                      <div className="text-white/60 text-xs">{member.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mb-16">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-400 w-4" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIAL SECTION ─────────────────────────────────────────────────────
function TestimonialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            TESTIMONIAL
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            20k+ satisfied clients worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="flex gap-5 p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <img
                src={t.img}
                alt={t.author}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <svg
                  className="w-8 h-8 text-blue-400 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm mb-3">{t.text}</p>
                <div className="text-sm font-semibold text-gray-800">
                  {t.author}{" "}
                  <span className="text-gray-400 font-normal">/ {t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex items-center justify-end gap-3 mb-14">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap items-center justify-center gap-10 pt-8 border-t border-gray-100">
          {partners.map((p, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="text-gray-400 font-bold text-lg uppercase tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              {p.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 bg-white">
      <div className="container mx-auto ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-xl px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #2563eb 60%, #38bdf8 100%)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl leading-tight">
              We're Delivering the best customer Experience
            </h2>
          </div>
          <a
            href="tel:+44920090505"
            className="flex-shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-sm hover:bg-blue-50 transition-colors"
          >
            +44 920 090 505
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE EXPORT ─────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <BreadCrumb title="Services" />

      <ProminentSolutionsSection />

      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
