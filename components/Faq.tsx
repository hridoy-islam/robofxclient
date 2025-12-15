"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA STRUCTURE ---
const faqData = {
  General: [
    {
      question: "Which countries do you provide immigration services for?",
      answer: "Visara specializes in immigration pathways for major destinations including Canada, the UK, Australia, New Zealand, USA, and various European Schengen countries."
    },
    {
      question: "What are your service fees?",
      answer: "Our fee structure is transparent. Costs vary based on the complexity of the case and the specific visa category. We provide a detailed breakdown of all costs—including government fees—before you sign any agreement."
    },
    {
      question: "Do you guarantee a successful visa application?",
      answer: "While no honest consultant can guarantee a 100% success rate, Visara boasts a 98% approval rate. We rigorously pre-screen applications to maximize your chances."
    }
  ],
  Canada: [
    {
      question: "What is the Express Entry system?",
      answer: "Express Entry is an online system used to manage applications for permanent residence for skilled workers. It ranks candidates based on age, education, language proficiency, and work experience."
    },
    {
      question: "Can I work in Canada while studying?",
      answer: "Yes, most study permits allow you to work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks."
    },
    {
      question: "How much funds do I need for Canada PR?",
      answer: "Proof of funds varies by family size. For a single applicant under Express Entry, you typically need around CAD $13,757 (subject to change). Valid job offers may exempt you from this requirement."
    }
  ],
  USA: [
    {
      question: "What is the difference between H-1B and L-1 visas?",
      answer: "The H-1B is for specialty occupations requiring specific education, while the L-1 is for intracompany transferees (executives/managers) moving from a foreign office to a US office of the same company."
    },
    {
      question: "How long can I stay on an F-1 Student Visa?",
      answer: "You can stay as long as you are enrolled in a full-time academic program. After graduation, you may be eligible for OPT (Optional Practical Training) to work for 12-36 months."
    },
    {
      question: "Is the EB-5 Investor Visa right for me?",
      answer: "If you can invest at least $800,000 in a targeted employment area in the US and create 10 jobs, the EB-5 visa offers a direct path to a Green Card for you and your family."
    }
  ],
  UK: [
    {
      question: "What is the Skilled Worker Visa salary threshold?",
      answer: "Generally, you must be paid at least £26,200 per year or the 'going rate' for your job, whichever is higher. Specific shortage occupations may have different requirements."
    },
    {
      question: "Can I bring my family to the UK?",
      answer: "Yes, Skilled Worker and Student visa holders (on postgraduate courses) can usually bring their partner and children as 'dependents'."
    }
  ],
  Australia: [
    {
      question: "How does the Points Test work?",
      answer: "Australia uses a points-based system for skilled migration (Subclass 189/190/491). Points are awarded for age, English skills, employment history, and education. You generally need 65 points to apply."
    },
    {
      question: "What is the age limit for Australian migration?",
      answer: "For most skilled migration visas, you must be under 45 years of age at the time of invitation. There are exceptions for certain business and investor visas."
    }
  ]
};

const categories = Object.keys(faqData);

export default function Faq() {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Get the FAQs for the current active tab
  // @ts-ignore
  const currentFaqs = faqData[activeTab] || [];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(null); // Reset open accordion when switching tabs
  };

  const handleAccordionToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-bold">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Select a country below to find specific answers about your destination.
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-gold text-primary border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-gold/50 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ List Area */}
          <div className="min-h-[400px]"> {/* Min height prevents layout shift */}
            <motion.div
               key={activeTab} // Triggers animation on tab change
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
               className="space-y-4"
            >
              {currentFaqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-white/5 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
                      : "bg-white/5 border-white/10 hover:border-gold/20"
                  }`}
                >
                  <button
                    className="w-full px-6 md:px-8 py-5 text-left flex items-center justify-between group"
                    onClick={() => handleAccordionToggle(index)}
                  >
                    <span className={`text-lg font-bold pr-4 transition-colors ${
                      openIndex === index ? "text-gold" : "text-white group-hover:text-gold"
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold/70 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-gold" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 pt-0">
                          <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 text-left">
                 <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-bold text-white">
                      Specific Question?
                    </h3>
                 </div>
                <p className="text-gray-400 text-sm max-w-sm">
                  Can't find what you're looking for? Our legal team is ready to review your case personally.
                </p>
              </div>
              
              <div className="relative z-10">
                <Link href="/contact">
                  <button className="px-8 py-3 bg-gold text-black font-bold rounded-sm hover:bg-white transition-colors duration-300 whitespace-nowrap">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}