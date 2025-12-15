"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Mountain, 
  GraduationCap, 
  Briefcase, 
  Plane,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Choose NZ ---
const features = [
  {
    icon: ShieldCheck,
    title: "Political Stability",
    description: "New Zealand is a stable democracy with a government that values transparency and accountability, providing security for all residents."
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Kiwis value a strong balance between work and leisure. Employees enjoy time for family and recreation, contributing to overall well-being."
  },
  {
    icon: Mountain,
    title: "Stunning Nature",
    description: "Known for breathtaking landscapes including mountains, beaches, and forests. Endless opportunities for hiking, skiing, and outdoor adventures."
  },
  {
    icon: GraduationCap,
    title: "Educational Opportunities",
    description: "A world-class education system with reputable universities. International students are welcomed, and graduates are highly sought after worldwide."
  }
];

// --- DATA: Common Pathways (Standard NZ Immigration Data) ---
const pathways = [
  {
    id: "skilled",
    title: "Skilled Migrant Category",
    subtitle: "Resident Visa",
    // New Image: Iconic Auckland Sky Tower & Cityscape
    image: "https://images.unsplash.com/photo-1612850702148-5ce6dcc7ce4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The primary pathway for skilled workers. You can claim points for age, work experience, qualifications, and an offer of skilled employment to apply for residence.",
    benefits: ["Live & work indefinitely", "Include partner & children", "Access to healthcare"]
  },
  {
    id: "green-list",
    title: "Green List Pathways",
    subtitle: "Fast-Track Residence",
    image: "https://images.unsplash.com/photo-1725201557564-749bd2fac356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "For roles in high demand (e.g., Construction, Engineering, Health). Eligible roles allow for 'Straight to Residence' or 'Work to Residence' after 2 years.",
    benefits: ["Priority processing", "Direct path to residency", "Critical skill shortage fill"]
  },
  {
    id: "student",
    title: "International Student",
    subtitle: "Study to Work",
    // New Image: Diverse group of students/friends
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
    description: "Gain a world-class education and potentially qualify for a Post-Study Work Visa, allowing you to work for any employer and gain experience for residency.",
    benefits: ["World-class education", "Post-study work rights", "Pathway to residence"]
  }
];

export default function MigrateToNewZealand() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Immigrate to New Zealand"
        subtitle="Kia Ora! Discover a lifestyle that balances ambition with tranquility."
        backgroundImage="https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2670&auto=format&fit=crop"
      />

      {/* --- INTRO & FEATURES --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Kia Ora & Welcome
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-gold">New Zealand?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              New Zealand is an amazing place for work or study. Due to its robust economy and 
              good education system, it provides several prospects for professional and personal advancement. 
              The country offers high-quality healthcare and a safe environment for immigrating families.
            </p>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-white/5 border border-gold/30 rounded-sm">
                <span className="text-gold font-bold text-xl block">#1</span>
                <span className="text-xs text-gray-400 uppercase">Work-Life Balance</span>
              </div>
              <div className="px-4 py-2 bg-white/5 border border-gold/30 rounded-sm">
                <span className="text-gold font-bold text-xl block">Top 10</span>
                <span className="text-xs text-gray-400 uppercase">Safest Countries</span>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-gold/30 transition-all group"
                >
                  <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- PATHWAYS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5 relative">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Immigration <span className="text-gold">Pathways</span></h2>
            <p className="text-gray-400">Explore the visa options available for skilled professionals and students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((path, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-primary-light border border-white/10 rounded-sm overflow-hidden group hover:border-gold/40 transition-all flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                   <Image 
                     src={path.image} 
                     alt={path.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm border-l-2 border-gold">
                      <span className="text-xs text-white font-bold uppercase tracking-wider">{path.subtitle}</span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{path.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{path.description}</p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {path.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-gold" /> {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="flex items-center gap-2 text-white font-bold hover:text-gold transition-colors text-sm uppercase tracking-wider">
                      Check Eligibility <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Requested Style) --- */}
      <section className="py-24 container mx-auto ">
        <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Text */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Your New Zealand Journey Today
              </h2>
              <p className="text-gray-300">
                Our experts are ready to guide you through the Skilled Migrant, Green List, 
                or Student Visa process with precision and care.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="bg-gold text-black px-10 py-4 rounded-sm font-bold hover:bg-white transition-colors block"
              >
                Free Assessment
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}