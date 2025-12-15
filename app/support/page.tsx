"use client";

import { 
  FileCheck, 
  Scale, 
  Briefcase, 
  Clock, 
  Users, 
  Globe2, 
  ChevronRight, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  FileArchive
} from "lucide-react";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <FileArchive className="w-6 h-6" />,
      title: "New Applications",
      description: "Eligibility assessments, visa categories, and starting your journey.",
      action: "Start Assessment",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Case Status",
      description: "Track the progress of your ongoing visa or residency application.",
      action: "Check Status",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal & Appeals",
      description: "Assistance with visa refusals, appeals, and complex legal matters.",
      action: "Legal Support",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Services",
      description: "Business immigration, employee sponsorship, and investor visas.",
      action: "Business Inquiry",
    },
  ];

  const supportStats = [
    {
      label: "Avg. Response Time",
      value: "24 Hours",
      icon: <Clock className="w-5 h-5 text-gold" />,
    },
    {
      label: "Client Satisfaction",
      value: "99.2%",
      icon: <Users className="w-5 h-5 text-gold" />,
    },
    {
      label: "Global Offices",
      value: "12+",
      icon: <Globe2 className="w-5 h-5 text-gold" />,
    },
  ];

  return (
    // Main background set to your darkest primary color
    <div className="min-h-screen bg-primary font-sans text-white selection:bg-gold selection:text-primary">
      <Header />

      <BreadCumb
        title="Contact Support"
        subtitle="Expert guidance for your global mobility journey."
      />

      {/* Stats Bar - Darkened to primary-light with subtle gold borders */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary-light rounded-xl shadow-2xl shadow-black/20 border border-gold/20 p-6 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {supportStats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 py-4 md:py-0"
              >
                <div className="p-3 bg-primary rounded-full border border-white/5 shadow-inner shadow-black/20">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-gold leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gold-light font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - Categories & Info */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs">
                  How can we help?
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-white">
                  Select your <span className="font-semibold text-gold">Inquiry Type</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Whether you are starting a new application or need updates on an existing case,
                  directing your inquiry helps us serve you faster.
                </p>
                

[Image of visa application process flowchart]

              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {supportCategories.map((category, index) => (
                  <div
                    key={index}
                    // Cards set to primary-light (lighter than bg) to pop
                    className="group bg-primary-light p-6 rounded-xl border border-white/5 shadow-lg shadow-black/10 hover:border-gold/50 hover:shadow-gold/5 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
                    
                    <div className="w-12 h-12 bg-primary-lighter text-gold rounded-lg flex items-center justify-center mb-5 shadow-inner shadow-white/5 group-hover:bg-gold group-hover:text-primary transition-colors duration-300 relative z-10">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-gold font-medium text-sm group-hover:translate-x-2 transition-transform">
                      {category.action} <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact Info Block */}
              {/* Used primary-lighter gradient to distinguish from main bg */}
              <div className="bg-gradient-to-br from-primary-light to-primary-lighter border border-white/10 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl shadow-black/20">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-10 -mr-16 -mt-16 pointer-events-none"></div>
                 
                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white">Urgent Assistance?</h3>
                        <p className="text-gray-300 text-sm font-light">
                          Our support team is available Mon-Fri, 9am - 6pm EST.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <a href="mailto:support@visara.com" className="flex items-center space-x-3 bg-black/20 hover:bg-black/40 px-5 py-3 rounded-lg transition-all border border-white/10 backdrop-blur-sm group">
                            <Mail className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                            <span className="font-light text-sm">support@visara.com</span>
                        </a>
                        <a href="tel:+18005550123" className="flex items-center space-x-3 bg-black/20 hover:bg-black/40 px-5 py-3 rounded-lg transition-all border border-white/10 backdrop-blur-sm group">
                            <Phone className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                            <span className="font-light text-sm">+1 (800) 555-0123</span>
                        </a>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5">
              {/* Form container matches card style (primary-light) */}
              <div className="bg-primary-light rounded-2xl shadow-2xl shadow-black/30 border border-white/10 p-8 sticky top-8">
                <div className="mb-8 border-b border-white/10 pb-6">
                  <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-gold/20">
                    <MessageSquare className="w-3 h-3" />
                    <span>Secure Request</span>
                  </div>
                  <h3 className="text-2xl font-light text-white">
                    Submit a <span className="font-semibold text-gold">Request</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 font-light">
                    Provide your details below and a consultant will review your case.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Priority</label>
                        <div className="relative">
                            {/* Inputs set to deepest bg (primary) to look recessed */}
                            <select className="w-full px-4 py-3 bg-primary border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all appearance-none cursor-pointer">
                                <option value="standard">Standard</option>
                                <option value="urgent">Urgent</option>
                                <option value="consultation">Paid Consultation</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Topic</label>
                          <div className="relative">
                              <select className="w-full px-4 py-3 bg-primary border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all appearance-none cursor-pointer">
                                <option value="visa">Visa Application</option>
                                <option value="citizenship">Citizenship</option>
                                <option value="corporate">Corporate</option>
                                <option value="other">Other</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3.5 pointer-events-none" />
                          </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                        Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-primary border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all"
                      placeholder="client@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                        Case Reference (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-primary border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all"
                      placeholder="e.g. VIS-2024-001"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                        Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-primary border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all resize-none"
                      placeholder="Please describe your inquiry..."
                    ></textarea>
                  </div>

                  {/* Button uses Gold background for high contrast on dark theme */}
                  <button className="w-full bg-gold hover:bg-gold-light text-primary font-bold py-6 rounded-lg shadow-lg shadow-black/20 transition-all duration-300 mt-2">
                    Submit Request
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-500 mt-4 leading-tight">
                    By submitting this form, you agree to our Privacy Policy. Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}