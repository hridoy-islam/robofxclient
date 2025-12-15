"use client";

import { motion } from "framer-motion";
import { 
  PoundSterling, 
  Building2, 
  Users, 
  GraduationCap, 
  CalendarClock, 
  FileCheck,
  Languages,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Work in UK ---
const benefits = [
  {
    icon: PoundSterling,
    title: "Strong & Stable Economy",
    description: "The UK has a robust economy built over decades. London stands as one of the world's foremost financial centers, supported by business-friendly incentives."
  },
  {
    icon: Building2,
    title: "Diverse Job Market",
    description: "Employment opportunities abound in banking, technology, healthcare, education, and creative industries, making the UK a hub for varied talents."
  },
  {
    icon: Users,
    title: "Higher Minimum Wages",
    description: "The UK offers a relatively high minimum wage compared to many nations, reviewed yearly to align with living costs and ensure a respectable quality of life."
  }
];

// --- DATA: Requirements ---
const requirements = [
  {
    icon: CalendarClock,
    title: "Age Requirements",
    description: "The minimum age to work is generally 18. Specific visas like the Youth Mobility Scheme are restricted to those 18-30 (or 35), while the Skilled Worker route has no upper age limit."
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    description: "For a Skilled Worker Visa, your job must be at an eligible skill level (RQF Level 3 or higher). You may need to prove your qualifications match UK standards."
  },
  {
    icon: FileCheck,
    title: "Certificate of Sponsorship",
    description: "You generally need a valid Certificate of Sponsorship (CoS) from a UK employer who holds a valid Sponsor License from the Home Office."
  },
  {
    icon: Languages,
    title: "English Proficiency",
    description: "You must be able to speak, read, write, and understand English. You will usually need to prove your knowledge of English when you apply."
  }
];

export default function WorkInUK() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Work in the UK"
        subtitle="Experience cultural richness and professional growth in the United Kingdom."
        backgroundImage="https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2670&auto=format&fit=crop" // London Eye / City
      />

      {/* --- INTRO & BENEFITS SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Professional Opportunities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Work in the <span className="text-gold">United Kingdom?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The cultural richness and history of the UK make it a desirable destination to live and work. 
              It provides a unique experience for anyone wishing to widen their horizons. 
              With a diversified job market and strong government support for business, the UK remains a top tier destination for global talent.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
             {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm flex items-start gap-4 hover:border-gold/30 transition-all group"
                >
                  <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold transition-colors">
                    <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility <span className="text-gold">Requirements</span></h2>
            <p className="text-gray-400">
              Below are the standard requirements that must be met in order to be eligible to apply for most UK work visas (e.g., Skilled Worker).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary-light border border-white/10 p-8 rounded-sm hover:border-gold/40 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <req.icon className="w-8 h-8 text-gold" />
                  <h3 className="text-xl font-bold text-white">{req.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Secure your UK Work Permit
              </h2>
              <p className="text-gray-300">
                Our experts specialize in the Points-Based System. We can help you navigate Sponsorship, 
                Visa applications, and settlement routes.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="bg-gold text-black px-10 py-4 rounded-sm font-bold hover:bg-white transition-colors block"
              >
                Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}