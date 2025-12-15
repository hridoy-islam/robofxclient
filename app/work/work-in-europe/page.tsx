"use client";

import { motion } from "framer-motion";
import { 
  Euro, 
  Globe2, 
  BookOpen, 
  Building2, 
  GraduationCap, 
  Users, 
  Briefcase,
  ArrowRight,
  File
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Work in Europe ---
const benefits = [
  {
    icon: Building2,
    title: "Career Growth Opportunities",
    description: "Europe is a powerhouse of intellectual and technical progress. With access to world-class research facilities and innovative businesses, nations prioritize professional development and skills training."
  },
  {
    icon: Users,
    title: "Multicultural Environment",
    description: "Exposure to different perspectives and ideas challenges assumptions and helps you develop a deeper understanding of global traditions, broadening your professional horizons."
  },
  {
    icon: Euro,
    title: "High Standard of Living",
    description: "Access a high quality of life including extensive social welfare programs. Many nations offer free or affordable healthcare, education, and child care services."
  }
];

// --- DATA: Requirements ---
const requirements = [
  {
    icon: Users, // Age
    title: "Age Requirements",
    description: "Generally, the legal minimum age to work is 16. However, for skilled migration visas, applicants are typically adults (18+). Specific industries like entertainment may have exceptions."
  },
  {
    icon: GraduationCap, // Education
    title: "Education & Qualifications",
    description: "Skilled work permits usually require a recognized higher education degree or substantial professional experience in fields like Technology, Finance, or Healthcare."
  },
  {
    icon: File, // Visa Status
    title: "Visa & Work Permit",
    description: "Non-European Union (EU) citizens are required to obtain a valid work visa and residence permit before commencing employment. This often requires a valid job offer first."
  }
];

export default function WorkInEurope() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Work in Europe"
        subtitle="Explore diverse cultures and career opportunities across the continent."
        backgroundImage="https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=2670&auto=format&fit=crop" // Europe Architecture
      />

      {/* --- INTRO & BENEFITS SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              A Continental Opportunity
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Work in <span className="text-gold">Europe?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Working in Europe gives you the opportunity to immerse yourself in a new culture, 
              acquire a new language, and broaden your professional network. 
              With a highly competent and multilingual labour pool, Europe provides employment 
              possibilities in technology, finance, education, and healthcare.
            </p>
            <div className="p-6 bg-white/5 border-l-2 border-gold rounded-r-sm">
                <p className="text-gray-400 italic">
                    "Working in a multicultural environment can broaden your horizons and help you develop a deeper understanding of different traditions."
                </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
             {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0a0a0a] border border-white/10 p-6 rounded-sm flex items-start gap-4 hover:border-gold/30 transition-all group"
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

      {/* --- EU BLUE CARD HIGHLIGHT (Value Add) --- */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
         <div className="container mx-auto  relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative h-[300px] w-full rounded-sm overflow-hidden border border-white/10">
                    <Image 
                        src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop" 
                        alt="Modern European Office"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/30" />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <Globe2 className="w-6 h-6 text-gold" />
                        <h3 className="text-xl font-bold text-gold uppercase tracking-widest">The EU Blue Card</h3>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">One Permit, Many Countries</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        For highly qualified professionals, the EU Blue Card is a major pathway. 
                        It allows non-EU/EEA nationals to work in 25 of the 27 EU member states. 
                        It offers equal treatment to nationals regarding working conditions and social security.
                    </p>
                    <Link href="/contact" className="text-white border-b border-gold pb-1 hover:text-gold transition-colors inline-flex items-center gap-2">
                        Check Eligibility <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
         </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility <span className="text-gold">Requirements</span></h2>
            <p className="text-gray-400">
              While specific criteria vary by country (e.g., Germany vs. France), the following general requirements usually apply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-white/10 p-8 rounded-sm hover:border-gold/40 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-primary border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <req.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{req.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto ">
        <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Your European Career
              </h2>
              <p className="text-gray-300">
                Navigating the various work permits of Europe can be complex. 
                Our experts help you identify the right country and visa type for your skills.
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