"use client";

import { useState } from "react";
import type React from "react";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Send,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      // Send both requests in parallel
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

      // Check if at least one succeeded
      const adminSuccess = adminRes.status === "fulfilled" && adminRes.value.ok;
      const userSuccess = userRes.status === "fulfilled" && userRes.value.ok;

      if (adminSuccess || userSuccess) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);

        // Optional: log failures for debugging
        if (!adminSuccess) console.warn("Admin email failed");
        if (!userSuccess) console.warn("User email failed");
      } else {
        console.error("Both email requests failed");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Contact Us"
        subtitle="Get in touch with our support team for assistance with your AI Trading Software."
      />

      {/* --- INTRO & CONTACT INFO GRID --- */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Glow (Primary Blue) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-blue text-xs tracking-[0.2em] uppercase font-bold mb-4 block">
              Support & Inquiries
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We are here to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-blue/80">
                Help
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Whether you need help with installation, have questions about
              strategies, or require technical assistance, our team is ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
            {/* 1. Email Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary-blue/40 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 text-primary-blue border border-primary-blue/20 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Email Support
              </h3>

              <p className="text-gray-400 mb-6 text-sm">
                For general inquiries and technical support.
              </p>

              <a
                href="mailto:support@quicktradefx.com"
                className="mt-auto text-primary-blue font-medium inline-flex items-center text-lg border-b border-primary-blue/30 pb-1 hover:border-primary-blue hover:text-white transition-all"
              >
                support@quicktradefx.com
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* 2. Office Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary-blue/40 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 text-primary-blue border border-primary-blue/20 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Office Location
              </h3>

              <p className="text-gray-400 mb-6 text-sm">
                Visit our headquarters in Dubai.
              </p>

              <div className="mt-auto text-gray-300 font-medium text-base leading-relaxed">
                21st Latifa Tower,
                <br />
                Sheikh Zayed Road, Dubai, UAE
              </div>
            </div>

            {/* 3. Phone Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary-blue/40 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 text-primary-blue border border-primary-blue/20 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Phone Support
              </h3>

              <p className="text-gray-400 mb-6 text-sm">
                Reach out to our support team directly.
              </p>

              <a
                href="tel:+447411552751"
                className="mt-auto text-primary-blue font-medium inline-flex items-center text-lg border-b border-primary-blue/30 pb-1 hover:border-primary-blue hover:text-white transition-all"
              >
                +44 7411 552751
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-white/10 relative shadow-2xl">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send us a <span className="text-primary-blue">Message</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our team typically responds within one business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary-blue mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-400">
                      We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all"
                        placeholder="Street, City, Postal Code"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary-blue uppercase mb-2 tracking-widest">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-4 bg-black border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue focus:outline-none transition-all resize-none"
                        placeholder="How can we assist you today?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary-blue to-blue-700 hover:to-primary-blue text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Submit Inquiry
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Support Note */}
              <div className="mt-8 text-center flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>Support Team available 24/7 via Email</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
