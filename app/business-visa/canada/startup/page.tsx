"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Globe2, 
  Users, 
  DollarSign, 
  FileText, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Landmark,
  Languages,
  Wallet
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Key Benefits ---
const benefits = [
  {
    icon: Landmark,
    title: "Path to Permanent Residency",
    desc: "A direct pathway to Canadian PR for up to 5 co-founders and their families, leading ultimately to citizenship."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    desc: "Join a vibrant ecosystem that fosters growth, sustainability, and global competitiveness for scalable startups."
  },
  {
    icon: DollarSign,
    title: "Investment Access",
    desc: "Unlock capital from world-class Venture Capitalists and Angel Investors eager to fund new technology."
  },
  {
    icon: Users,
    title: "Family Migration",
    desc: "Secure the future of your loved ones with access to Canada's top-tier healthcare and education systems."
  }
];

// --- DATA: Investment Tiers ---
const investmentTiers = [
  {
    title: "Venture Capital",
    amount: "$200,000 CAD",
    detail: "Minimum investment required from a designated Venture Capital Fund."
  },
  {
    title: "Angel Investor",
    amount: "$75,000 CAD",
    detail: "Minimum investment required from a designated Angel Investor Group."
  },
  {
    title: "Business Incubator",
    amount: "$0 Investment",
    detail: "No investment required, but you must be accepted into a designated program."
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Eligibility Check",
    desc: "Assess your business concept against innovation criteria and ensure you meet the CLB 5 language requirement."
  },
  {
    step: "02",
    title: "Secure Commitment",
    desc: "Pitch to a designated organization. If successful, you will receive a Letter of Support (LOS)."
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Apply for Permanent Residence. You may also apply for a short-term work permit to start working immediately."
  },
  {
    step: "04",
    title: "Final Decision",
    desc: "Undergo medical and security checks while your business scales. Receive your PR card upon approval."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "What are the eligibility criteria for the Canada Start-up Visa program?",
    answer: "To be eligible, you must have a qualifying business (min 10% voting rights), obtain a Letter of Support from a designated organization, prove language proficiency (CLB 5), and demonstrate sufficient settlement funds for yourself and your family."
  },
  {
    question: "How much money do I need to invest in my business?",
    answer: "The government does not require you to invest your own personal funds into the business. However, you must secure a minimum investment from the designated organization: $200,000 from a Venture Capital fund or $75,000 from an Angel Investor group. Incubators do not require a specific investment amount."
  },
  {
    question: "What happens if my business fails?",
    answer: "The Start-Up Visa is designed to share the risk. If your business fails after you have received your Permanent Resident status, you will NOT lose your PR status, provided you met all the conditions of the 'active management' requirement initially."
  }
];

export default function CanadaStartupVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Canada Start-Up Visa"
        subtitle="Launch Your Innovative Venture in North America."
        // backgroundImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2670&auto=format&fit=crop" // Entrepreneur/Laptop/Workspace
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              The SUV Program
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Build a Global <span className="text-gold">Future</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Canada Start-Up Visa program is the premier option for entrepreneurs wishing to establish a fresh business in Canada. 
              Unlike other visas, it connects you directly with the private sector—giving you access to capital, mentorship, and investment options.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              It is designed for innovative entrepreneurs who have the potential to build a business that is innovative, can create jobs for Canadians, 
              and can compete on a global scale.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {investmentTiers.map((tier, idx) => (
                <div key={idx} className="flex-1 min-w-[140px] bg-primary-light p-4 rounded-sm border border-white/10 text-center hover:border-gold/30 transition-colors">
                   <h4 className="text-gold font-bold text-sm mb-1">{tier.title}</h4>
                   <p className="text-white font-bold text-lg">{tier.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" 
               alt="Start Up Meeting" 
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
            <h2 className="text-3xl font-bold mb-4">Immigration <span className="text-gold">Benefits</span></h2>
            <p className="text-gray-400">Why the world's best founders choose Canada.</p>
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
      <section className="py-20 container mx-auto  relative">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Language */}
            <div className="bg-primary-light p-8 rounded-sm border-l-4 border-gold">
               <div className="flex items-center gap-4 mb-6">
                  <Languages className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl font-bold text-white">Language Proficiency</h3>
               </div>
               <p className="text-gray-300 mb-4 leading-relaxed">
                 The ability to communicate and work in English, French, or both is essential. You must take a language test from an approved agency (like IELTS or CELPIP) and meet the minimum level.
               </p>
               <div className="bg-primary p-4 rounded-sm flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Required Level</span>
                  <span className="text-gold font-bold text-lg">CLB 5</span>
               </div>
            </div>

            {/* Funds */}
            <div className="bg-primary p-8 rounded-sm border-l-4 border-gold">
               <div className="flex items-center gap-4 mb-6">
                  <Wallet className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl font-bold text-white">Settlement Funds</h3>
               </div>
               <p className="text-gray-300 mb-4 leading-relaxed">
                 You must show that you have enough money to support yourself and your family after you arrive in Canada. These funds must be your own, transferable, and free of debts.
               </p>
               <div className="bg-primary p-4 rounded-sm flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Single Applicant (Est.)</span>
                  <span className="text-gold font-bold text-lg">~$13,757 CAD</span>
               </div>
            </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white">Visa Application <span className="text-gold">Process</span></h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
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
              The SUV program is complex, involving both business strategy and immigration law. We bridge the gap.
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Assessing personal circumstances to determine eligibility.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Reviewing pitch decks for Designated Organizations.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Monitoring "Essential Person" status to prevent group refusal.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Liaising with relevant authorities on your behalf.</span>
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