"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

const contactInfo = [
  {
    title: "Give us a call",
    lines: ["(+1) 400-630 123", "(+2) 500-950 456"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="24" fill="#EEF2FF" />
        <path
          d="M16.5 19.5c0 9.4 7.6 17 17 17l2-4.3-4-1.7-1.5 2a12.1 12.1 0 01-5-3 12.1 12.1 0 01-3-5l2-1.5-1.7-4-4.3 2c-.3.8-.5 1.6-.5 2.5z"
          fill="#3B82F6"
        />
      </svg>
    ),
  },
  {
    title: "Drop us a line",
    lines: ["info@techwixtheme.com", "mail@techwix-tech.com"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="24" fill="#FEF9C3" />
        <rect x="12" y="16" width="24" height="16" rx="2" fill="#FACC15" />
        <path d="M12 18l12 8 12-8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Visit our office",
    lines: ["New York, 112 W 34th St", "caroline, USA"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="24" fill="#FEE2E2" />
        <path
          d="M24 12c-4.4 0-8 3.6-8 8 0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"
          fill="#EF4444"
        />
      </svg>
    ),
  },
];

function ContactInfoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-gray-500 text-sm">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={ref} className="relative">
      {/* Map background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1618317471!5m2!1sen!2s"
          className="w-full h-full grayscale opacity-60"
          loading="lazy"
          title="Map"
          style={{ border: 0, minHeight: "600px" }}
          allowFullScreen
        />
      </div>

      {/* Form card */}
      <div className="relative z-10 container mx-auto  py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10"
        >
          <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 text-center">
            REQUEST A QUOTE
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            How May We Help You!
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject *"
              className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write A Message"
              rows={4}
              className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent resize-none"
            />
            <button
              className="w-full py-3.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
              style={{ background: "linear-gradient(90deg, #3b82f6, #38bdf8)" }}
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <BreadCrumb title="Contact Us" />
      <ContactInfoSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
