"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  PoundSterling, 
  Landmark, 
  BookOpen, 
  Heart, 
  Briefcase, 
  FileCheck,
  Globe2,
  ChevronDown,
  ChevronUp,
  Scale
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Visa Types (Modernized for accuracy while respecting prompt) ---
const visaTypes = [
  {
    title: "Standard Visitor Visa",
    desc: "For short-term visits (up to 6 months) to attend meetings, conferences, or negotiate contracts without entering the labor market.",
    icon: Globe2
  },
  {
    title: "Innovator Founder",
    desc: "For experienced business people seeking to establish a business in the UK. Requires an innovative, scalable, and viable business idea.",
    icon: PoundSterling
  },
  {
    title: "Skilled Worker (Tier 2)",
    desc: "For individuals who have been offered a skilled job in the UK by a licensed sponsor. Replaces the old Tier 2 (General) work visa.",
    icon: Briefcase
  }
];

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Briefcase,
    title: "Expand or Start Business",
    desc: "Establish your own business or take over an existing one. Invest funds and create employment opportunities in a top financial center."
  },
  {
    icon: BookOpen,
    title: "World-Class Education",
    desc: "Enroll in business-related courses, including prestigious MBA programs at top UK universities while you manage your business."
  },
  {
    icon: Heart,
    title: "Excellent Living Standards",
    desc: "Access high-quality healthcare (NHS), education, and social welfare benefits, ensuring a high quality of life for you and your family."
  },
  {
    icon: Landmark,
    title: "Diverse Prospects",
    desc: "The UK market offers diverse employment prospects, allowing visa holders to work for their own business or partner with other companies."
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Determine Visa Type",
    desc: "Identify if you need a Visitor visa for meetings or an Innovator visa to set up a company."
  },
  {
    step: "02",
    title: "Online Application",
    desc: "Complete the rigorous online application forms and pay the Immigration Health Surcharge if applicable."
  },
  {
    step: "03",
    title: "Biometrics & Interview",
    desc: "Provide biometric data (fingerprints/photo) and attend an interview to prove the genuineness of your intent."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "What types of UK business visas are available?",
    answer: "There are several types of UK business visas available, including the Standard Visitor Visa (for meetings/conferences), the Innovator Founder Visa (formerly Tier 1 Entrepreneur) for setting up businesses, and the Skilled Worker Visa (formerly Tier 2) for employment."
  },
  {
    question: "How do I apply for a UK business visa?",
    answer: "To apply, you must first determine the appropriate visa category. You then complete an online application, pay the fee, and provide supporting documents (business plans, bank statements). You will likely need to attend a biometric appointment and potentially a credibility interview."
  }
];

export default function UKBusinessVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="UK Business Visa"
        subtitle="Access a Global Hub for Finance, Innovation, and Entrepreneurship."
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop" // London Big Ben
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Business in the United Kingdom
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A Center for <span className="text-gold">Innovation</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The United Kingdom is a prominent worldwide financial center as well as a hub for technology and entrepreneurship. 
              Securing a business visa here opens doors to one of the most stable and prestigious markets in the world.
            </p>
            
            <div className="grid gap-4">
               {visaTypes.map((visa, idx) => (
                 <div key={idx} className="bg-white/5 p-4 rounded-sm border-l-2 border-gold hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white text-lg mb-1">{visa.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{visa.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[550px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2671&auto=format&fit=crop" 
               alt="London Financial District" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Immigration <span className="text-gold">Benefits</span></h2>
            <p className="text-gray-400">Why global leaders choose the UK.</p>
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

      {/* --- GENUINE ENTREPRENEUR TEST --- */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
           <div className="max-w-4xl mx-auto bg-black/40 border border-gold/30 p-10 rounded-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                 <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Genuine Entrepreneur Test</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                 "Applicants must pass a genuine entrepreneur test, which evaluates their business plan, expertise, and financial background."
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
                 <div className="bg-white/5 p-4 rounded-sm">
                    <h4 className="text-gold font-bold mb-2">Innovation</h4>
                    <p className="text-xs text-gray-400">Does the business plan offer a new, inventive service or product?</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-sm">
                    <h4 className="text-gold font-bold mb-2">Viability</h4>
                    <p className="text-xs text-gray-400">Is the plan realistic based on the applicant's skills and market conditions?</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-sm">
                    <h4 className="text-gold font-bold mb-2">Scalability</h4>
                    <p className="text-xs text-gray-400">Does the business have potential for growth and job creation?</p>
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
             <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-white/10 -z-0" />
             
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
        <div className="container mx-auto primary flex flex-col lg:flex-row gap-16">
          
          {/* How we help */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">How <span className="text-gold">Visara</span> Can Help</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We assist you in the business visa application process by assessing your personal circumstances to determine the best route (Entrepreneur vs. Investor vs. Sole Rep).
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Reviewing business plans for the "Genuine Entrepreneur" test.</span>
               </li>
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Preparing documentation to prove access to investment funds.</span>
               </li>
               <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Liaising with Home Office authorities to keep you updated.</span>
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