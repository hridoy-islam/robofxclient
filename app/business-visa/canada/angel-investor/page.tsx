"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Globe2,
  Briefcase,
  FileCheck,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Gem,
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
    title: "Obtain Permanent Residency",
    desc: "Live and work anywhere in Canada without needing a separate work permit. This pathway leads directly to Canadian citizenship.",
  },
  {
    icon: Users,
    title: "Work with Industry Experts",
    desc: "Gain exclusive access to networking opportunities with seasoned entrepreneurs and investors, fostering valuable collaborations.",
  },
  {
    icon: Lightbulb,
    title: "Dynamic Environment",
    desc: "Immerse yourself in Canada's thriving start-up ecosystem. Access innovative technology and collaborate to expand your business globally.",
  },
  {
    icon: Briefcase,
    title: "Migrate with Family",
    desc: "Bring your spouse or common-law partner and dependent children. In certain cases, parents or grandparents may also be eligible.",
  },
];

// --- DATA: Requirements ---
const requirements = [
  {
    title: "Required Investment",
    value: "$75,000 CAD",
    detail:
      "You must secure a minimum investment of $75,000 from a designated Angel Investor group.",
    icon: DollarSign,
  },
  {
    title: "Business Experience",
    value: "Qualifying Business",
    detail:
      "You must demonstrate that your business is innovative and that you have the skills to manage it actively in Canada.",
    icon: Briefcase,
  },
  {
    title: "Designated Organization",
    value: "Letter of Support",
    detail:
      "A mandatory commitment certificate from a designated Angel group proving they support your venture.",
    icon: FileCheck,
  },
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Secure Commitment",
    desc: "Pitch your business to a designated Angel Investor group and secure an investment commitment of at least $75,000 CAD.",
  },
  {
    step: "02",
    title: "Letter of Support",
    desc: "Receive a Letter of Support from the Angel group. This is the most critical document for your immigration application.",
  },
  {
    step: "03",
    title: "IRCC Application",
    desc: "Submit your application for Permanent Residence (and optional work permit) to Immigration, Refugees and Citizenship Canada.",
  },
  {
    step: "04",
    title: "Checks & Visa",
    desc: "Undergo standard medical and security examinations. Upon approval, receive your permanent residency visa.",
  },
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Is it necessary to hire an immigration lawyer?",
    answer:
      "While it is not mandatory, it is highly recommended. The process involves complex legal agreements between you and the Angel group, as well as strict immigration protocols. A qualified consultant ensures your application is complete and accurate.",
  },
  {
    question: "What kind of commitment do I need?",
    answer:
      "You need a formal agreement from a designated Angel Investor group confirming they are investing a minimum of $75,000 CAD into your qualifying business. This generates the Letter of Support required by the government.",
  },
];

export default function CanadaAngelVisa() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Canada Angel Visa"
        subtitle="Partner with World-Class Investors to Launch Your Dream."
        // backgroundImage="https://images.unsplash.com/photo-1559136555-930d72f18615?q=80&w=2670&auto=format&fit=crop" // Modern Office / Handshake
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Investment Pathways
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Canada <span className="text-gold">Angel Visa</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong>Canada Angel Investor Visa</strong> is a premier
              stream within the Start-Up Visa program, aimed at attracting
              skilled business professionals ready to launch innovative
              companies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              By securing an investment of at least <strong>$75,000 CAD</strong>{" "}
              from a designated Angel Investor group, entrepreneurs can
              fast-track their permanent residency while gaining invaluable
              mentorship and capital.
            </p>

            <div className="flex gap-4">
              <div className="bg-white/5 px-6 py-3 rounded-full border border-gold/30 text-gold text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <Gem className="w-4 h-4" /> Mentorship Included
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[450px] w-full rounded-sm overflow-hidden border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop"
              alt="Angel Investors Meeting"
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
            <h2 className="text-3xl font-bold mb-4">
              Immigration <span className="text-gold">Benefits</span>
            </h2>
            <p className="text-gray-400">
              Why entrepreneurs choose the Angel stream.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary-light/5 border border-white/10 p-6 rounded-sm hover:border-gold/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors border border-white/5">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
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
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Program <span className="text-gold">Requirements</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-primary-light/5 p-8 rounded-sm border border-white/5 hover:border-gold/30 transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-gold mb-6">
                  <req.icon className="w-8 h-8" />
                </div>
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {req.title}
                </h3>
                <div className="text-2xl font-bold text-white mb-4">
                  {req.value}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {req.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Application <span className="text-gold">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-white/10 -z-0" />

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 text-center bg-primary p-4"
              >
                <div className="w-16 h-16 bg-primary-light/10 border border-gold text-gold font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-gold/10">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
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
            <h3 className="text-2xl font-bold text-white mb-6">
              How <span className="text-gold">Visara</span> Can Help
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Navigating the Angel Investor landscape requires more than just a
              business idea; it requires a strategic approach to designated
              organizations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Assessing your personal circumstances to determine the best
                  route.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Preparing and submitting your application to IRCC.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Advertising the investment if required by specific Angel
                  groups.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Liaising with relevant authorities to keep you updated.
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-gold text-black font-bold py-4 px-8 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm"
            >
              Book a Consultation
            </Link>
          </div>

          {/* FAQ */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h3>
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
