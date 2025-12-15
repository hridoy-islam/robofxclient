"use client";

import { motion } from "framer-motion";
import { 
  FileCheck, 
  Briefcase, 
  TrendingUp, 
  AlertCircle,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Key Benefits ---
const benefits = [
  {
    title: "Get Hired With Ease",
    description: "It is possible to hire a foreign worker who is exempt from needing an LMIA, or who is exempt from requiring a work permit in specific cases.",
    icon: CheckCircle2
  },
  {
    title: "Unlock Employment",
    description: "All streams of Canada’s Temporary Foreign Worker Program (TFWP) require that an employer obtain an LMIA to hire talent from outside Canada.",
    icon: Briefcase
  },
  {
    title: "Boost Express Entry",
    description: "A positive LMIA can add significant points (50 or 200) to your Express Entry profile, greatly increasing your chances of receiving an ITA.",
    icon: TrendingUp
  }
];

// --- DATA: Popular Roles ---
const roles = [
  "IT Professionals",
  "Healthcare Workers",
  "Skilled Trades",
  "Engineers",
  "Hospitality & Tourism",
  "Sales & Service",
  "Financial Experts",
  "Agricultural Workers"
];

export default function LMIAPage() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="LMIA Work Permit"
        subtitle="Labour Market Impact Assessment: The Key to Hiring Global Talent."
        // backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop" // Meeting/Office
      />

      {/* --- WHAT IS LMIA SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Overview
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              What is a Canada <span className="text-gold">LMIA?</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A <strong>Labour Market Impact Assessment (LMIA)</strong> is a document issued by Employment and Social Development Canada (ESDC) assessing the impact of hiring a foreign national in Canada.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-sm border-l-2 border-green-500">
                    <h4 className="font-bold text-white mb-1">Positive LMIA</h4>
                    <p className="text-sm">Indicates no Canadian citizen or permanent resident is available to fill the position.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-sm border-l-2 border-red-500">
                    <h4 className="font-bold text-white mb-1">Negative LMIA</h4>
                    <p className="text-sm">Indicates the position should be filled by a Canadian citizen or permanent resident.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="grid gap-6">
               {benefits.map((item, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-primary-light border border-white/10 p-6 rounded-sm flex gap-4 hover:border-gold/30 transition-all"
                 >
                   <div className="bg-gold/10 p-3 h-fit rounded-full">
                     <item.icon className="w-6 h-6 text-gold" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* --- POPULAR JOB ROLES --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Job <span className="text-gold">Roles</span></h2>
            <p className="text-gray-400">
              The job titles generally in demand in Canada requiring an LMIA vary by sector. Common occupations include:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-sm text-center hover:bg-gold hover:text-black transition-all group cursor-default"
              >
                <Briefcase className="w-8 h-8 mx-auto mb-3 text-gold group-hover:text-black transition-colors" />
                <span className="font-bold text-sm md:text-base">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE PROCESS SECTION --- */}
      <section className="py-20 bg-primary-light relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-8">The Process of <span className="text-gold">LMIA</span></h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-10 h-10 shrink-0 bg-gold text-black font-bold flex items-center justify-center rounded-sm">1</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Employer Application</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       A foreign national cannot apply for an LMIA directly. It must be applied for by a Canadian employer.
                       Applications can be submitted as early as 6 months prior to the start date.
                     </p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 shrink-0 bg-gold text-black font-bold flex items-center justify-center rounded-sm">2</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Wage Categories</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Employers must determine if the position is "High-wage" or "Low-wage" based on the provincial median.
                       Low-wage positions require meeting additional criteria (e.g., housing, transportation).
                     </p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 shrink-0 bg-gold text-black font-bold flex items-center justify-center rounded-sm">3</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Recruitment Efforts</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Before applying, employers usually must prove they have advertised the job across Canada and could not find a qualified local candidate.
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white/5 border border-white/10 p-8 rounded-sm">
               <h3 className="text-2xl font-bold text-white mb-6">How Visara Can Help</h3>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 Navigating the LMIA process is complex for both employers and workers. 
                 We assist Canadian employers in preparing compliant applications and help workers identify valid job offers.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-5 h-5 text-gold" /> Assessment of High/Low Wage Streams
                 </li>
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-5 h-5 text-gold" /> Guidance on Recruitment Requirements
                 </li>
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-5 h-5 text-gold" /> Work Permit Application upon Approval
                 </li>
               </ul>
               <Link href="/contact" className="w-full bg-gold text-black font-bold py-3 rounded-sm block text-center hover:bg-white transition-colors">
                 Book a Consultation
               </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}