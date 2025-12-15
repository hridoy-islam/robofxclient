"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Building2, 
  Globe2, 
  Users, 
  Zap, 
  Wallet, 
  FileCheck, 
  Layout, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Plane,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Core Advantages ---
const advantages = [
  {
    icon: Zap,
    title: "It's Fast",
    desc: "Quickly come to Canada with your family on work permits and start your business operations immediately."
  },
  {
    icon: Wallet,
    title: "It's Affordable",
    desc: "Demonstrate existing business financial snapshots or liquid cash balances as low as CA$ 75,000 to $100,000."
  },
  {
    icon: Layout,
    title: "It's Flexible",
    desc: "No strict performance agreements required. You can modify your business plans upon arrival to suit market needs."
  },
  {
    icon: FileCheck,
    title: "It's Easy",
    desc: "We expertly prepare the paperwork. The ICT pathway is often faster and less bureaucratic than other investor programs."
  }
];

// --- DATA: Key Criteria ---
const criteria = [
  {
    label: "Business Age",
    value: "2+ Years",
    desc: "Your current home-country business must have been operating for at least 2 years."
  },
  {
    label: "Annual Turnover",
    value: "$300,000+",
    desc: "Existing business should demonstrate annual revenue/sales of over $300k per year."
  },
  {
    label: "Employee Count",
    value: "5+ Staff",
    desc: "The home company should currently employ at least 5 people."
  },
  {
    label: "Experience",
    value: "1 Year",
    desc: "Transferees must have worked for the company for at least 1 year in a management position."
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Strategic Plan",
    desc: "Our certified lawyers develop a personalized 5-year business and financial plan tailored to your expansion."
  },
  {
    step: "02",
    title: "Incorporation",
    desc: "We assist with setting up the Canadian branch, including incorporation and banking (Director services available if needed)."
  },
  {
    step: "03",
    title: "Work Permit",
    desc: "Apply for a 1-year work permit. Spouses get open work permits; children get study permits."
  },
  {
    step: "04",
    title: "Permanent Residency",
    desc: "After 1 year of active business operations, apply for permit renewal and transition to Permanent Residency."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Does the Canadian business need to be the same as the home business?",
    answer: "No. The company in Canada does not need to do the exact same business as the current business in your home country. However, the Canadian business must be 'active' (producing goods or services) and cannot be a passive investment."
  },
  {
    question: "Can my family come with me?",
    answer: "Yes. Your spouse will receive an open work permit, allowing them to work for any employer in Canada. Children under 18 will receive student permits to attend Canadian public schools for free."
  },
  {
    question: "Is there a minimum investment requirement?",
    answer: "There is no strict government-stipulated minimum investment. However, you must demonstrate the financial means to start and operate the business. We typically recommend showing liquid cash or a financial snapshot of at least CAD $75,000 - $100,000."
  },
  {
    question: "Can I travel outside Canada while on an ICT permit?",
    answer: "Yes. Under an ICT work permit, you can travel in and out of Canada. You and your family can live in Canada or maintain ties abroad, though residing in Canada helps with the eventual PR application."
  }
];

export default function CanadaICTAndVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Intra-Company Transfer"
        subtitle="Expand Your Enterprise. Relocate Your Executives."
        // backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" // Corporate Office
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Business Expansion Pathway
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Grow Your Business in <span className="text-gold">Canada</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong>Intra-Company Transfer (ICT)</strong> program helps international business owners and key staff expand their operations to Canada. 
              We help small & medium investors obtain work permits quickly to establish a new branch, subsidiary, or affiliate.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              This is a customized strategic immigration plan that allows you to leverage your existing business success to build a future in North America, 
              eventually leading to Permanent Residence.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((adv, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                    <adv.icon className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold text-white text-sm">{adv.title}</h4>
                       <p className="text-xs text-gray-400 mt-1">{adv.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" 
               alt="Business Strategy Canada" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS / BENEFITS --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Program <span className="text-gold">Highlights</span></h2>
            <p className="text-gray-400">Why the ICT is the preferred route for established business owners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* Benefit 1 */}
             <div className="bg-primary-light/5 p-6 rounded-sm border border-white/10 hover:border-gold/30 transition-colors">
                <Clock className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Rapid Entry</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Get a work permit quickly. Rapidly establish your Canadian business presence without the long wait times of traditional immigration streams.
                </p>
             </div>
             {/* Benefit 2 */}
             <div className="bg-primary-light/5 p-6 rounded-sm border border-white/10 hover:border-gold/30 transition-colors">
                <Users className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Family Benefits</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Spouses receive open work permits. Minor children attend Canadian public schools for free. Access Canada’s excellent healthcare system.
                </p>
             </div>
             {/* Benefit 3 */}
             <div className="bg-primary-light/5 p-6 rounded-sm border border-white/10 hover:border-gold/30 transition-colors">
                <Building2 className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Path to PR</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   After one year of successful operation, the updated business plan serves as a basis to renew permits and apply for Permanent Residency.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- CRITERIA CHECKLIST --- */}
      <section className="py-20 bg-primary-light/5 relative overflow-hidden">
        <div className="container mx-auto  relative z-10">
           <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                 <h2 className="text-3xl font-bold text-white mb-6">Key <span className="text-gold">Criteria</span></h2>
                 <p className="text-gray-300 mb-6">
                    To qualify for the ICT Work Permit, both the home company and the transferee must meet specific requirements to ensure the legitimacy of the transfer.
                 </p>
                 <div className="p-6 bg-primary border-l-2 border-gold rounded-r-sm">
                    <p className="text-sm text-gray-400 italic">
                       "Majority shareholders must be willing to establish the business in Canada. The Canadian entity cannot be passive—it must be an active operation."
                    </p>
                 </div>
              </div>

              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                 {criteria.map((item, idx) => (
                    <div key={idx} className="bg-primary p-6 rounded-sm border border-white/5 flex items-start gap-4">
                       <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                       <div>
                          <h4 className="text-gold font-bold text-xs uppercase tracking-wider mb-1">{item.label}</h4>
                          <div className="text-xl font-bold text-white mb-2">{item.value}</div>
                          <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- PROCESS / SERVICES --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white">Our <span className="text-gold">Services</span> & Process</h2>
             <p className="text-gray-400 mt-4">From incorporation to post-landing compliance.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
             <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-white/10 -z-0" />
             
             {processSteps.map((step, idx) => (
               <div key={idx} className="relative z-10 text-center bg-primary p-4">
                 <div className="w-16 h-16 bg-primary-light/10 border border-gold text-gold font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-gold/10">
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
      <section className="py-20 bg-primary-light/5 border-t border-white/10">
        <div className="container mx-auto  flex flex-col lg:flex-row gap-16">
          
          {/* How we help */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Expert Legal Representation</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We have appointed Canadian lawyers to develop a personalized strategic action plan that’s right for you. Our team includes Certified Specialists in Canadian Citizenship and Immigration Law.
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Assistance with deciding on business location and premises.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Execution of the 5-year business and financial plan.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Processing of all initial immigration permits for adults and children.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">Post-landing guidance for one year to ensure compliance.</span>
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
    <div
      key={idx}
      className={`rounded-xl overflow-hidden border transition-all duration-300 ${
        openFaq === idx
          ? "bg-white/5 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          : "bg-white/5 border-white/10 hover:border-gold/20"
      }`}
    >
      <button
        onClick={() => toggleFaq(idx)}
        className="w-full px-6 md:px-8 py-5 text-left flex items-center justify-between group"
      >
        <span
          className={`text-lg font-medium pr-4 transition-colors ${
            openFaq === idx
              ? "text-gold"
              : "text-white/90 group-hover:text-gold"
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold/70 transition-transform duration-300 ${
            openFaq === idx ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {openFaq === idx && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 pt-0">
              <p className="text-gray-300 leading-relaxed font-light border-t border-white/10 pt-4 text-sm">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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