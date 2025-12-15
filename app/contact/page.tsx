"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  Globe,
  ArrowRight,
  MessageSquare,
  MapPin,
  Clock,
  Building2,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  // --- DATA ---
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      address: "1 Canada Square, Canary Wharf, London",
      email: "uk@visara.com",
      phone: "+44 20 7123 4567",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Boulevard Plaza, Tower 1, Downtown Dubai",
      email: "uae@visara.com",
      phone: "+971 4 123 4567",
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "100 King St W, Toronto, ON M5X 1A9",
      email: "canada@visara.com",
      phone: "+1 416 555 0199",
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "100 Barangaroo Ave, Sydney NSW 2000",
      email: "aus@visara.com",
      phone: "+61 2 8000 1234",
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "For documentation and general inquiries.",
      action: "support@visara.com",
      link: "mailto:support@visara.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Consultation",
      description: "Speak directly with a legal consultant.",
      action: "+1 (800) 555-0199",
      link: "tel:+18005550199",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Client Portal",
      description: "Secure file upload and case tracking.",
      action: "Login to Portal",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-primary font-sans text-white selection:bg-gold selection:text-primary">
      <Header />

      <BreadCumb
        title="Contact Us"
        subtitle="Global reach, personal guidance. Start your journey today."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" // Corporate Building
      />

      {/* --- INTRO & QUICK CONTACT GRID --- */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-bold mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Discuss Your <span className="text-gold">Future</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Whether you are applying for a skilled worker visa, seeking corporate sponsorship, 
              or navigating complex appeals, our legal team is ready to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-sm p-8 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center mb-6 text-gold border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  className="mt-auto text-white font-medium inline-flex items-center text-sm  tracking-wider border-b border-gold/30 pb-1 hover:border-gold hover:text-gold transition-all"
                >
                  {method.action} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPLIT SECTION: FORM & OFFICES --- */}
      <section className="py-24 bg-primary ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-primary rounded-sm p-8 md:p-10 border border-white/10 relative shadow-2xl">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send us a <span className="text-gold">Message</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our legal intake team typically responds within 24 hours. All information is kept strictly confidential.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                         <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all appearance-none cursor-pointer">
                          <option value="" className="bg-primary text-gray-500">Select a topic...</option>
                          <option value="visa" className="bg-primary">New Visa Application</option>
                          <option value="corporate" className="bg-primary">Corporate Services</option>
                          <option value="appeal" className="bg-primary">Legal Appeal / Refusal</option>
                          <option value="citizenship" className="bg-primary">Citizenship by Investment</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gold/80 uppercase mb-2 tracking-widest">
                      Case Details
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all resize-none"
                      placeholder="Please provide a brief overview of your immigration goals..."
                    ></textarea>
                  </div>

                  <button className="w-full bg-gold hover:bg-white text-black hover:text-black font-bold text-sm uppercase tracking-widest py-4 rounded-sm transition-all duration-300">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Global Presence */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="mb-10">
                <div className="inline-flex items-center space-x-2 text-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20 bg-gold/5">
                  <Globe className="w-3 h-3" />
                  <span>Global Offices</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Visit our <span className="text-gold">Locations</span>
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Visara operates registered legal offices in major global financial hubs, ensuring regulatory compliance and accessible support for our multinational clients.
                </p>
              </div>

              <div className="grid gap-4 flex-grow">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-6 rounded-sm border border-white/5 flex items-start space-x-5 hover:border-gold/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="flex-shrink-0 pt-1">
                        <MapPin className="w-5 h-5 text-gray-500 group-hover:text-gold transition-colors" />
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                          {office.city}
                        </h4>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide border border-white/10 px-2 py-0.5 rounded-sm">
                          {office.country}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        {office.address}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs pt-3 border-t border-white/5 text-gray-500">
                        <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                          {office.email}
                        </a>
                        <span className="hidden sm:inline text-white/10">|</span>
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* VIP/Emergency Banner */}
              <div className="mt-8 bg-gradient-to-r from-gold/20 to-transparent rounded-sm p-6 border border-gold/20 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gold text-black rounded-full">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Urgent Legal Assistance?</h4>
                        <p className="text-xs text-gold/80">Priority line for existing clients</p>
                    </div>
                </div>
                <div className="text-lg font-bold text-white tracking-widest hidden sm:block">
                    1-800-VISARA
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}