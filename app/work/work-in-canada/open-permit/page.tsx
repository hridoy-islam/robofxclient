"use client";

import { motion } from "framer-motion";
import { 
  Unlock, 
  Globe2, 
  Users, 
  GraduationCap, 
  Heart, 
  Briefcase, 
  FileCheck,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Eligibility Categories ---
const eligibilityList = [
  {
    icon: Heart,
    title: "Spouses & Partners",
    desc: "Spouses or common-law partners of Canadian citizens, permanent residents, or skilled foreign workers."
  },
  {
    icon: Users,
    title: "Dependent Children",
    desc: "Dependent children of Canadian citizens or permanent residents may be eligible in specific situations."
  },
  {
    icon: GraduationCap,
    title: "International Graduates",
    desc: "Graduates from designated learning institutions (PGWP) who apply within 180 days of completing their program."
  },
  {
    icon: Briefcase,
    title: "Temporary Workers",
    desc: "Workers in Canada awaiting PR decisions or those vulnerable to abuse in their current specific employment."
  },
  {
    icon: Globe2,
    title: "IEC Applicants",
    desc: "Candidates under the International Experience Canada (Working Holiday) program."
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Confirm Eligibility",
    desc: "Determine which category fits your situation (e.g., PGWP, Spousal Open Work Permit, Bridging Open Work Permit)."
  },
  {
    step: "02",
    title: "Gather Documents",
    desc: "Collect proofs such as marriage certificates, graduation letters, or existing work permit copies."
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Create an IRCC account, upload documents, and pay the relevant fees (Work Permit fee + Open Permit Holder fee)."
  }
];

export default function OpenWorkPermitPage() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Open Work Permit"
        subtitle="Work for almost any employer, anywhere in Canada."
        // backgroundImage="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2670&auto=format&fit=crop" // Diverse group / Freedom
      />

      {/* --- WHAT IS IT SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Flexible Employment
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              What is a Canada <span className="text-gold">Open Work Permit?</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                An <strong>Open Work Permit</strong> is an immigration document that allows foreign nationals to work in Canada for almost any employer, in any location.
              </p>
              <p>
                Unlike a standard "closed" work permit, it is not job-specific. You do not need a positive Labour Market Impact Assessment (LMIA) or a specific job offer to apply. This gives you the freedom to change employers, move cities, and explore different career paths without needing new government authorizations.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-sm text-gold font-bold uppercase tracking-wider">
                <Unlock className="w-5 h-5" /> No Employer Restrictions
              </div>
              <div className="flex items-center gap-2 text-sm text-gold font-bold uppercase tracking-wider">
                <Globe2 className="w-5 h-5" /> Any Location
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[400px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
               alt="Team Working" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>

        </div>
      </section>

      {/* --- WHO CAN APPLY --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Who can <span className="text-gold">Apply?</span></h2>
            <p className="text-gray-400">
              Eligibility is restricted to specific situations. You may be eligible if you fall into one of the following categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityList.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-8">The Application <span className="text-gold">Process</span></h2>
              <div className="space-y-8">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 bg-gold text-black font-bold text-lg flex items-center justify-center rounded-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-primary border border-white/10 p-8 rounded-sm flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-white mb-6">How Visara Can Help</h3>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 Applying for an Open Work Permit can be tricky depending on your specific eligibility route (e.g., Spousal Sponsorship vs. PGWP). 
                 <br /><br />
                 At Visara, we ensure your application package is complete, minimizing the risk of rejection or delays. We guide you through document preparation and submission strategies.
               </p>
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-4 h-4 text-gold" /> Eligibility Assessment
                 </li>
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-4 h-4 text-gold" /> Document Review & Optimization
                 </li>
                 <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <CheckCircle2 className="w-4 h-4 text-gold" /> Application Tracking
                 </li>
               </ul>
               <Link href="/contact" className="w-full bg-gold text-black font-bold py-4 rounded-sm block text-center hover:bg-white transition-colors uppercase tracking-widest text-sm">
                 Start Your Application
               </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}