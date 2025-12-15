 "use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Heart, 
  Home, 
  Users, 
  FileText, 
  Briefcase,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Work in Canada ---
const benefits = [
  {
    icon: TrendingUp,
    title: "Strong & Stable Economy",
    description: "Canada boasts a growing GDP and low unemployment rate, offering stability and vast job opportunities across diverse industries."
  },
  {
    icon: Heart,
    title: "Welcoming Policies",
    description: "Canada’s immigration policies are designed to attract talent. Numerous programs exist to help skilled workers obtain permanent residency."
  },
  {
    icon: Home,
    title: "High Standard of Living",
    description: "Consistently ranked among the world's most livable countries, offering top-tier healthcare, education, and public safety."
  },
  {
    icon: Users,
    title: "Cultural Diversity",
    description: "A multicultural society where diversity is celebrated. Immigrants can maintain their traditions while integrating into the broader society."
  }
];

// --- DATA: Work Permits ---
const permits = [
  {
    id: "open",
    title: "Open Work Permit",
    description: "An Open Work Permit allows you to work for any employer in Canada (with few exceptions) and doesn't require a specific job offer or LMIA to apply. It is often available to spouses of skilled workers or international graduates.",
    link: "/contact", // Replace with specific sub-page if available
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2670&auto=format&fit=crop" // Diverse team
  },
  {
    id: "lmia",
    title: "LMIA Work Permits",
    description: "A Labour Market Impact Assessment (LMIA) document that an employer in Canada may need to get before hiring a foreign worker. It proves there is a need for a foreign worker to fill the job and no Canadian worker is available.",
    link: "/contact", // Replace with specific sub-page if available
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Industrial/Office
  }
];

export default function WorkInCanada() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Work in Canada"
        subtitle="Unlock career opportunities in one of the world's most dynamic economies."
        backgroundImage="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop" // Canadian Rockies/Lake or City
      />

      {/* --- WHY WORK IN CANADA SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Career Destination
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Work in <span className="text-gold">Canada?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Canada’s stable economy and immigration policies make it a great place to work. 
              Popular jobs include software engineers, nurses, accountants, and marketers. 
              Cities like Toronto, Vancouver, and Montreal offer diverse industries and a high quality of life.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-gold/30 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- WORK PERMIT TYPES SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Canadian Work <span className="text-gold">Permits</span></h2>
            <p className="text-gray-400">
              Canada offers various types of work permits. The two most common pathways for foreign nationals are the Open Work Permit and the LMIA Work Permit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {permits.map((permit, idx) => (
              <motion.div 
                key={permit.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/light border border-white/10 rounded-sm overflow-hidden group hover:border-gold/50 transition-all"
              >
                <div className="relative h-64 w-full">
                   <Image 
                     src={permit.image} 
                     alt={permit.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-gold" />
                    <h3 className="text-2xl font-bold text-white">{permit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-8 min-h-[100px]">
                    {permit.description}
                  </p>
                  
                  <Link 
                    href={permit.link} 
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-gold hover:text-black text-white px-6 py-3 rounded-sm font-bold transition-all w-full justify-center"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
                Need help securing a job offer?
              </h2>
              <p className="text-gray-300">
                Our team can guide you through the LMIA process or help you understand your eligibility for an Open Work Permit.
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