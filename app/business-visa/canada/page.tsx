"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Clock, 
  Wallet, 
  FileCheck, 
  Map, 
  Briefcase, 
  Users, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Clock,
    title: "It's Fast",
    desc: "Come to Canada right away with your family and start a business. The process is streamlined for quicker entry compared to other investor programs."
  },
  {
    icon: Wallet,
    title: "It's Affordable",
    desc: "No specific minimum or upfront personal investment amount is required by the government for the Start-Up Visa program itself."
  },
  {
    icon: FileCheck,
    title: "It's Easy",
    desc: "We assist in preparing the paperwork and submitting it for you. The structure is simpler than traditional provincial nominee entrepreneur streams."
  },
  {
    icon: Map,
    title: "It's Flexible",
    desc: "When you arrive in Canada, you have the flexibility to pivot your business plans without restrictive performance agreements holding you back."
  }
];

// --- DATA: Process Steps (SUV) ---
const suvSteps = [
  {
    step: "01",
    title: "Business Plan",
    desc: "Develop a qualifying business plan for an innovative venture that can compete globally and create local jobs."
  },
  {
    step: "02",
    title: "Designated Org",
    desc: "Identify and pitch to a designated organization: Business Incubator, Angel Investor, or Venture Capitalist."
  },
  {
    step: "03",
    title: "Letter of Support",
    desc: "Secure a Letter of Support from the organization. This is the critical document required to apply."
  },
  {
    step: "04",
    title: "Immigration App",
    desc: "Submit your application for Permanent Residence (PR). You may also apply for a work permit to arrive sooner."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "What is the Essential Person rule?",
    answer: "In a group application, the 'Essential Person' is critical to the business. If the Essential Person's application is rejected, all other partners' applications in the group are automatically disqualified."
  },
  {
    question: "Do I need to invest my own money?",
    answer: "For the Start-Up Visa, the government does not require a minimum personal investment. However, you must secure investment from a designated organization (e.g., $75k from Angel Investors or $200k from VCs) or be accepted into a business incubator."
  }
];

export default function CanadaBusinessVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Canada Business Visa"
        subtitle="Innovate, Invest, and Build Your Future in the North."
        backgroundImage="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop" // Canadian Lake/Nature or City
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Pathways to Residency
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Canada <span className="text-gold">Start-Up Visa</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Canadian government encourages investors, business managers, and entrepreneurs to apply to the Canada Business Visa Pathway. 
              The most prominent route is the <strong>Start-Up Visa (SUV)</strong> Program.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Designed for immigrant entrepreneurs with the skill to build innovative businesses, this program targets ventures capable of creating jobs for Canadians and competing on a global scale.
            </p>
            
            <div className="flex gap-4">
               <div className="bg-white/5 px-6 py-3 rounded-full border border-gold/30 text-gold text-sm font-bold uppercase tracking-wider">
                  Direct PR Pathway
               </div>
               <div className="bg-white/5 px-6 py-3 rounded-full border border-gold/30 text-gold text-sm font-bold uppercase tracking-wider">
                  Family Inclusive
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[450px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop" 
               alt="Toronto Business District" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-gold">Canada?</span></h2>
            <p className="text-gray-400">A streamlined approach for global entrepreneurs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary border border-white/10 p-6 rounded-sm hover:border-gold/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUV PROCESS --- */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
           
           <div className="mb-16 md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">The Start-Up Visa <span className="text-gold">Process</span></h2>
              <p className="text-gray-300">
                 From concept to residency, navigating the requirements of Designated Organizations.
              </p>
           </div>

           <div className="grid md:grid-cols-4 gap-8">
              {suvSteps.map((step, idx) => (
                 <div key={idx} className="relative">
                    {/* Connector Line (Desktop) */}
                    {idx < suvSteps.length - 1 && (
                       <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-white/10" />
                    )}
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                       <div className="w-12 h-12 bg-gold text-black font-bold text-lg flex items-center justify-center rounded-sm mb-6 shadow-lg shadow-gold/20">
                          {step.step}
                       </div>
                       <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                 </div>
              ))}
           </div>

        </div>
      </section>

      {/* --- HOW VISARA HELPS & FAQ --- */}
      <section className="py-20 bg-primary border-t border-white/10">
        <div className="container mx-auto  flex flex-col lg:flex-row gap-16">
          
          {/* How we help */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">How <span className="text-gold">Visara</span> Facilitates Success</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We work with global partners to facilitate the Canada investor visa program, handling the complex coordination between you and the designated organizations.
            </p>
            <div className="space-y-4 mb-8">
               <div className="bg-white/5 p-4 rounded-sm flex gap-4">
                  <FileCheck className="w-6 h-6 text-gold shrink-0" />
                  <div>
                     <h4 className="font-bold text-white text-sm mb-1">Business Plan Creation</h4>
                     <p className="text-xs text-gray-400">We help craft a strong qualifying business plan that meets innovation criteria.</p>
                  </div>
               </div>
               <div className="bg-white/5 p-4 rounded-sm flex gap-4">
                  <Users className="w-6 h-6 text-gold shrink-0" />
                  <div>
                     <h4 className="font-bold text-white text-sm mb-1">Designated Org Liaison</h4>
                     <p className="text-xs text-gray-400">Identifying and securing a Letter of Support from Incubators, Angel Investors, or VCs.</p>
                  </div>
               </div>
               <div className="bg-white/5 p-4 rounded-sm flex gap-4">
                  <Briefcase className="w-6 h-6 text-gold shrink-0" />
                  <div>
                     <h4 className="font-bold text-white text-sm mb-1">Essential Person Strategy</h4>
                     <p className="text-xs text-gray-400">Strategically nominating the essential person to avoid group disqualification.</p>
                  </div>
               </div>
            </div>
            <Link href="/contact" className="inline-block bg-gold text-black font-bold py-4 px-8 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm">
               Start Your Application
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