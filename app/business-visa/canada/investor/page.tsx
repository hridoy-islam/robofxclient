"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Coins,
  FileCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Globe2,
    title: "Live Anywhere",
    desc: "While the program is Quebec-based, permanent residents have the freedom to live, work, and study anywhere in Canada."
  },
  {
    icon: Heart,
    title: "Universal Healthcare",
    desc: "Access Canada's world-renowned healthcare system. Coverage is available to all citizens and permanent residents."
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    desc: "Children of Investor Visa holders gain access to exceptional public education and subsidized university rates."
  },
  {
    icon: Landmark,
    title: "Path to Citizenship",
    desc: "Investors may apply for Canadian citizenship after residing in Canada for three years (1,095 days) within a five-year period."
  }
];

// --- DATA: Requirements ---
const requirements = [
  {
    title: "Net Worth",
    value: "$2.0 Million CAD",
    detail: "You must demonstrate a legally acquired personal net worth of at least CAD $2 million (alone or with a spouse).",
    icon: Coins
  },
  {
    title: "Management Experience",
    value: "2 Years",
    detail: "At least two years of senior managerial experience within the last five years in a specific industry or qualifying business.",
    icon: Briefcase
  },
  {
    title: "Investment",
    value: "$1.2 Million CAD",
    detail: "A five-year risk-free investment guaranteed by the government (Quebec). The amount is returned in full after 5 years (0% interest).",
    icon: Landmark
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Eligibility & EOI",
    desc: "Confirm net worth and experience. Submit an Expression of Interest (EOI) to the Quebec government."
  },
  {
    step: "02",
    title: "Selection Certificate",
    desc: "Once invited, apply for the Quebec Selection Certificate (CSQ). This involves a thorough financial audit."
  },
  {
    step: "03",
    title: "Make Investment",
    desc: "Upon approval of your application, you must make the required guaranteed investment within 110 days."
  },
  {
    step: "04",
    title: "Federal Application",
    desc: "With your CSQ, apply to the federal government (IRCC) for Permanent Residency, including medical/security checks."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Can my family accompany me to Canada?",
    answer: "Yes. The Canada Investor Visa Program allows you to include your spouse or common-law partner and dependent children (under age 22) in your application. They receive the same Permanent Resident status."
  },
  {
    question: "How long does the process take?",
    answer: "The process is thorough and can take up to 36 months or more, depending on the volume of applications and the complexity of the financial audit. It involves both provincial (Quebec) and federal processing stages."
  },
  {
    question: "Is the investment refundable?",
    answer: "Yes. The investment (typically $1.2M CAD) is guaranteed by the government and is returned in full after five years, without interest. Financing options are often available through authorized financial intermediaries."
  }
];

export default function CanadaInvestorVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Canada Investor Visa"
        subtitle="Secure Your Future Through Strategic Investment."
        // backgroundImage="https://images.unsplash.com/photo-1532560378873-1499a9b9a4c5?q=80&w=2670&auto=format&fit=crop" // Montreal or High-end architecture
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              The Immigrant Investment Program (IIP)
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Invest in <span className="text-gold">Canada</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong>Canada Investor Visa Program</strong> (often administered through Quebec) is designed to attract high-net-worth individuals who can contribute significantly to the Canadian economy.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              In exchange for a government-guaranteed investment, successful applicants and their families are granted unconditional Permanent Residency, offering a safe, stable, and prosperous environment for the future.
            </p>
            
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-sm text-gold font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" /> Passive Investment
               </div>
               <div className="flex items-center gap-2 text-sm text-gold font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" /> Guaranteed Return
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[450px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop" 
               alt="Investment Planning" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-20 bg-primary-light border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Immigration <span className="text-gold">Benefits</span></h2>
            <p className="text-gray-400">Why high-net-worth families choose Canada.</p>
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
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                   <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
           <div className="grid lg:grid-cols-3 gap-8">
              {requirements.map((req, idx) => (
                 <div key={idx} className="bg-primary-light p-8 rounded-sm border border-white/5 hover:border-gold/30 transition-colors">
                    <req.icon className="w-10 h-10 text-gold mb-6" />
                    <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">{req.title}</h3>
                    <div className="text-3xl font-bold text-white mb-4">{req.value}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{req.detail}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-primary-light border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white">Application <span className="text-gold">Process</span></h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-white/10 -z-0" />
             
             {processSteps.map((step, idx) => (
               <div key={idx} className="relative z-10 text-center bg-primary-light p-4">
                 <div className="w-16 h-16 bg-primary border border-gold text-gold font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-gold/10">
                   {step.step}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
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
              The Investor Visa requires rigorous financial documentation ("Source of Funds"). Any gap in your financial history can lead to a refusal.
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Assessing your net worth and management experience eligibility.</span>
               </li>
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Preparing the complex narrative of your asset accumulation.</span>
               </li>
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Coordinating with authorized financial intermediaries for the investment.</span>
               </li>
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Monitoring your application through Quebec and Federal stages.</span>
               </li>
            </ul>
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
                    className="w-full flex justify-between items-center p-4 bg-primary-light hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="font-bold text-gray-200 pr-4">{faq.question}</span>
                    {openFaq === idx ? <ChevronUp className="text-gold shrink-0" /> : <ChevronDown className="text-gold shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 bg-primary text-gray-400 text-sm leading-relaxed border-t border-white/5">
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