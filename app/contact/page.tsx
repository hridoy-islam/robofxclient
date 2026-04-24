"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import { CheckCircle, Send } from "lucide-react";

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
    title: "Drop us a line",
    lines: ["info@rivaantech.ae"],
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
    lines: ["Dubai, UAE"],
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const [adminRes, userRes] = await Promise.allSettled([
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
          cache: "no-store",
          body: JSON.stringify(formData),
        }),
        fetch("/api/send-user-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
          cache: "no-store",
          body: JSON.stringify(formData),
        }),
      ]);

      const adminSuccess = adminRes.status === "fulfilled" && adminRes.value.ok;
      const userSuccess = userRes.status === "fulfilled" && userRes.value.ok;

      if (adminSuccess || userSuccess) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);

        if (!adminSuccess) console.warn("Admin email failed");
        if (!userSuccess) console.warn("User email failed");
      } else {
        console.error("Both email requests failed");
        // alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} className="relative">
      {/* Map background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115325.98429373862!2d55.171279!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4346a7b0c3b5%3A0x1c2b7f7b6e3a0f0!2sDubai!5e0!3m2!1sen!2sae!4v1713940000000!5m2!1sen!2sae"
          className="w-full h-full grayscale opacity-60"
          loading="lazy"
          title="Dubai Map"
          style={{ border: 0, minHeight: "600px" }}
          allowFullScreen
        />
      </div>

      {/* Form card */}
      <div className="relative z-10 container mx-auto py-20 px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <p className="text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase mb-2 text-center">
            REQUEST A QUOTE
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            How May We Help You!
          </h2>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-500">
                We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name *"
                  className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-foreground transition-colors bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email *"
                  className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-foreground transition-colors bg-transparent"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject *"
                className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-foreground transition-colors bg-transparent"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write A Message"
                rows={4}
                className="w-full border-b border-gray-200 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-foreground transition-colors bg-transparent resize-none"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed mt-2 flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #3b82f6, #38bdf8)" }}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
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