"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Globe2, 
  Users, 
  FileText, 
  Briefcase, 
  DollarSign, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  File,
  
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Visa Types ---
const visaTypes = [
  {
    title: "B-1 Business Visitor",
    desc: "The standard visa for short-term business trips, conferences, contract negotiations, and settling estates.",
    icon: File
  },
  {
    title: "E-1 Treaty Trader",
    desc: "For nationals of countries with a commerce treaty with the US who wish to engage in substantial international trade.",
    icon: Globe2
  },
  {
    title: "E-2 Treaty Investor",
    desc: "For nationals of treaty countries who are investing a substantial amount of capital in a US business.",
    icon: DollarSign
  }
];

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Users,
    title: "Networking Opportunities",
    desc: "Connect with industry professionals to gain insights, best practices, and stay updated with the latest technologies."
  },
  {
    icon: Building2,
    title: "Market Access",
    desc: "Gain entry to the world's largest consumer market. Explore opportunities to expand your business in a diverse environment."
  },
  {
    icon: Globe2,
    title: "Global Expansion",
    desc: "A valuable tool for companies looking to establish a global presence, negotiate international contracts, and grow their brand."
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Determine Category",
    desc: "Assess whether you need a B-1, E-1, or E-2 visa based on your investment level and purpose of visit."
  },
  {
    step: "02",
    title: "Submit Application",
    desc: "Complete the online application forms (e.g., DS-160) and pay the relevant visa fees."
  },
  {
    step: "03",
    title: "Interview & Docs",
    desc: "Schedule a visa interview at the US Embassy and present supporting documentation proving your intent."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "What types of USA business visas are available?",
    answer: "There are several types available depending on your purpose. The B-1 is for short-term business visitors (conferences, meetings). The E-1 is for Treaty Traders engaged in substantial trade, and the E-2 is for Treaty Investors investing significant capital."
  },
  {
    question: "Can I work in the USA on a business visa?",
    answer: "Generally, no. A B-1 visa allows you to conduct business activities (meetings, negotiations) but does not allow you to enter the US labor market or receive a salary from a US source. E-Series visas allow you to work specifically for the business you are trading with or investing in."
  }
];

export default function USABusinessVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="USA Business Visa"
        subtitle="Gateway to the World's Largest Economy."
        backgroundImage="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop" // NYC Skyline
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Business in the USA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Expand Your <span className="text-gold">Enterprise</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong>B-1 Visa</strong> is the primary business visa for the U.S. that permits foreign individuals to visit temporarily for business reasons such as attending conferences, negotiating contracts, and meeting with associates.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Whether you are looking to tap into the American consumer market or seeking investment opportunities under the E-1/E-2 treaty programs, securing the right visa is the first step toward global expansion.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
               {visaTypes.map((visa, idx) => (
                 <div key={idx} className="bg-white/5 p-4 rounded-sm border border-white/10 hover:border-gold/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <visa.icon className="w-5 h-5 text-gold" />
                        <h4 className="font-bold text-white text-sm">{visa.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{visa.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2670&auto=format&fit=crop" 
               alt="Business Meeting USA" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Immigration <span className="text-gold">Benefits</span></h2>
            <p className="text-gray-400">Why entrepreneurs choose the United States.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary border border-white/10 p-8 rounded-sm hover:bg-white/5 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-primary border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-gold/50 transition-colors">
                    <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
           <div className="grid md:grid-cols-2 gap-12">
              
              {/* Documentation */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                   <FileText className="text-gold" /> Required Documentation
                </h3>
                <p className="text-gray-300 mb-6">
                  The applicant must have a clear purpose for the visit and should be able to provide documentation to support it. Common requirements include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Invitation letters from US business partners or conference organizers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Proof of business ownership or employment in home country.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Itinerary of meetings and contact details of US associates.</span>
                  </li>
                </ul>
              </div>

              {/* Funds */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                   <DollarSign className="text-gold" /> Funds Required
                </h3>
                <p className="text-gray-300 mb-6">
                  Unlike immigrant visas, there is no fixed investment amount for a B-1 visa, but you must prove financial stability.
                </p>
                <div className="bg-black/40 p-6 rounded-sm border-l-2 border-gold">
                    <p className="text-gray-400 text-sm italic mb-4">
                       "You must demonstrate sufficient funds to cover all expenses during the trip, including travel, accommodation, and living costs, without seeking unauthorized employment."
                    </p>
                    <p className="text-white font-bold text-sm">— Visa Requirement</p>
                </div>
              </div>

           </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white">Application <span className="text-gold">Process</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-[1px] bg-white/10 -z-0" />
             
             {processSteps.map((step, idx) => (
               <div key={idx} className="relative z-10 text-center bg-primary p-4">
                 <div className="w-16 h-16 bg-primary border border-gold text-gold font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-gold/10">
                   {step.step}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- HELP & FAQ --- */}
      <section className="py-20 bg-primary border-t border-white/10">
        <div className="container mx-auto  flex flex-col lg:flex-row gap-16">
          
          {/* How we help */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">How <span className="text-gold">Visara</span> Can Help</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We assist you in the business visa application process by assessing your personal circumstances to determine the best route (B-1, E-1, or E-2). 
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our licensed consultants provide accurate advice, guide you through DS-160 forms, and help prepare you for the often-intimidating consular interview. Throughout the process, your dedicated case manager will monitor progress and liaise with relevant authorities.
            </p>
            <Link href="/contact" className="inline-block bg-gold text-black font-bold py-4 px-8 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm">
               Book a Consultation
            </Link>
          </div>

          {/* FAQ */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/10 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
                  >
                    <span className="font-bold text-gray-200 pr-4">{faq.question}</span>
                    {openFaq === idx ? <ChevronUp className="text-gold shrink-0" /> : <ChevronDown className="text-gold shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 bg-black/20 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}