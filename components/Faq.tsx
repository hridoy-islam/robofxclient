"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which countries do you provide immigration services for?",
      answer:
        "Visara specializes in immigration pathways for major destinations including Canada, the UK, Australia, New Zealand, USA, and various European Schengen countries. We handle skilled migration, business investor visas, study permits, and family sponsorship programs.",
    },
    {
      question: "How long does the visa application process typically take?",
      answer:
        "Processing times vary significantly depending on the country and visa category. A standard skilled worker visa might take 6-12 months, while investor programs can take longer. During your initial consultation, we provide a realistic timeline based on the latest government processing data.",
    },
    {
      question: "Do you guarantee a successful visa application?",
      answer:
        "While no honest consultant can guarantee a 100% success rate as the final decision lies with government authorities, Visara boasts a 98% approval rate. We pre-screen all applications rigorously and only take on cases that meet the eligibility criteria to maximize your chances of success.",
    },
    {
      question: "What are your service fees?",
      answer:
        "Our fee structure is transparent and competitive. Costs vary based on the complexity of the case and the specific visa category. We provide a detailed breakdown of all costs—including government fees and our professional charges—before you sign any agreement.",
    },
    {
      question: "Can you help if my previous visa application was refused?",
      answer:
        "Yes, we specialize in refusal cases. Our legal team will analyze the reasons for your previous rejection and help you prepare a stronger re-application or appeal, addressing all the concerns raised by the immigration officers.",
    },
    {
      question: "How do I get started with Visara?",
      answer:
        "The best way to start is by booking a free initial assessment on our website. One of our consultants will review your profile, discuss your goals, and recommend the most suitable immigration pathways for you.",
    },
  ];

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
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
              Common Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
              Frequently Asked <span className="text-gold font-normal">Questions</span>
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about navigating your global mobility journey with Visara.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-medium pr-4 transition-colors ${
                    openIndex === index ? "text-gold" : "text-white/90 group-hover:text-gold"
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-0">
                        <p className="text-white/60 leading-relaxed font-light border-t border-white/10 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-dark rounded-2xl p-10 relative overflow-hidden group border border-gold/10 hover:border-gold/30 transition-colors">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-2">
                  <MessageCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light text-white">
                  Still have specific questions?
                </h3>
                
                <p className="text-white/60 font-light max-w-lg mx-auto">
                  Our dedicated consultants are ready to provide clarity on your specific immigration case.
                </p>
                
                <Link href="/contact" className="inline-block pt-2">
                  <button className="px-8 py-3 bg-gold text-primary font-semibold rounded-full hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/10">
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