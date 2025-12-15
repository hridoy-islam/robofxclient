"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  Building2,
  Clock,
  Globe,
  ArrowRight,
  MessageSquare,
  MapPin,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  // Updated offices for a Global Immigration Firm context
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
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: "Email Support",
      description: "For documentation and case inquiries.",
      action: "support@visara.com",
      link: "mailto:support@visara.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: "Phone Consultation",
      description: "Speak directly with a legal consultant.",
      action: "+1 (800) 555-0199",
      link: "tel:+18005550199",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-gold" />,
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
      />

      {/* Intro & Quick Contact Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-light rounded-full blur-[100px] -z-10 opacity-60" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Get in touch with <span className="text-gold font-semibold">Visara</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Whether you are applying for a skilled worker visa, seeking corporate sponsorship, 
              or navigating complex appeals, our legal team is ready to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-primary-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-gold/50 hover:bg-primary-light transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary rounded-xl shadow-inner shadow-black/20 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 text-gold">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm font-light">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  className="text-gold font-medium hover:text-white inline-flex items-center transition-colors text-sm uppercase tracking-wide"
                >
                  {method.action} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Split: Form & Offices */}
      <section className="py-20 bg-primary-light border-t border-white/5">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
           
            <div className="bg-primary rounded-2xl shadow-2xl shadow-black/30 p-8 md:p-10 border border-white/10 relative">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-white mb-2">
                  Send us a <span className="font-semibold text-gold">Message</span>
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  Our legal intake team typically responds within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Select a topic...</option>
                        <option value="visa">New Visa Application</option>
                        <option value="corporate">Corporate Services</option>
                        <option value="appeal">Legal Appeal / Refusal</option>
                        <option value="citizenship">Citizenship by Investment</option>
                    </select>
                    {/* Custom Arrow for Select */}
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none transition-all resize-none"
                    placeholder="Please provide details about your case..."
                  ></textarea>
                </div>

                <button className="w-full bg-gold hover:bg-gold-light text-primary font-bold py-4 rounded-lg shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Global Presence */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-gold/20">
                  <Globe className="w-3 h-3" />
                  <span>Global Offices</span>
                </div>
                <h3 className="text-3xl font-light text-white mb-4">
                  Visit our <span className="font-semibold">Locations</span>
                </h3>
                
              
                
                <p className="text-gray-300 leading-relaxed font-light">
                  Visara operates registered legal offices in major global financial hubs, ensuring regulatory compliance and accessible support for our multinational clients.
                </p>
              </div>

              <div className="grid gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-primary p-6 rounded-xl border border-white/5 shadow-sm flex items-start space-x-4 hover:border-gold/30 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-gold border border-white/5 group-hover:bg-gold group-hover:text-primary transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-medium text-white">
                          {office.city}
                        </h4>
                        <span className="text-[10px] font-bold text-gold uppercase tracking-wide border border-gold/20 px-2 py-0.5 rounded bg-gold/5">
                          {office.country}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3 font-light">
                        {office.address}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm pt-2 border-t border-white/5">
                        <a href={`mailto:${office.email}`} className="text-white hover:text-gold transition-colors font-light">
                          {office.email}
                        </a>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <span className="text-gray-400">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* VIP/Emergency Banner */}
              <div className="bg-gradient-to-r from-primary-lighter to-primary rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white border border-gold/20 shadow-lg shadow-black/20">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gold/10 rounded-full border border-gold/20">
                        <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gold">Urgent Legal Assistance?</h4>
                        <p className="text-sm text-gray-300 font-light">Priority line for existing clients</p>
                    </div>
                </div>
                <div className="text-lg font-mono text-white tracking-widest">
                    +1 (800) 000-0000
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