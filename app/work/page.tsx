"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Globe2, 
  TrendingUp, 
  ArrowRight,
  Building2 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Work Destinations ---
const destinations = [
  {
    id: "canada",
    country: "Canada",
    title: "Work in Canada",
    description: "Discover the benefits of working in Canada, the different types of work visas available (like LMIA and IEC), and the vast job opportunities in tech and healthcare.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2565&auto=format&fit=crop", // Toronto
    link: "/work/work-in-canada"
  },
  {
    id: "uk",
    country: "United Kingdom",
    title: "Work in UK",
    description: "Explore the advantages of working in the UK, including the Skilled Worker Visa and Global Talent routes, amidst a thriving cultural and economic hub.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop", // London
    link: "/work/work-in-uk"
  },
  {
    id: "europe",
    country: "Europe",
    title: "Work in Europe",
    description: "Learn about the Blue Card scheme and country-specific work visas across the Schengen zone. Experience diverse cultures while advancing your career.",
    image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Europe / Paris
    link: "/work/work-in-europe" 
  }
];

// --- DATA: General Benefits ---
const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Gain international experience that makes your resume stand out globally."
  },
  {
    icon: Globe2,
    title: "Cultural Exchange",
    desc: "Immerse yourself in new cultures, languages, and professional environments."
  },
  {
    icon: Building2,
    title: "Better Quality of Life",
    desc: "Access superior healthcare, education, and work-life balance standards."
  }
];

export default function Work() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Work Abroad"
        subtitle="Expand your horizons. Discover global career opportunities."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop" // Working / Laptop
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto  text-center l">
        <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
          Global Opportunities
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          All you need to know on <span className="text-gold">Working Abroad</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Discover the benefits and programs of work visas in Canada, the UK, and Europe. 
          Whether you are seeking rapid career advancement or a better lifestyle, 
          we guide you through eligibility criteria and available job opportunities.
        </p>
        
        {/* Benefits Grid (Mini) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-gold/30 transition-colors">
              <b.icon className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-bold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DESTINATIONS GRID --- */}
      <section className="py-20 bg-primary ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-primary border border-white/10 rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.country}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                    {item.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-gold/50 pb-1 hover:text-gold hover:border-gold transition-all w-fit"
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
              <Briefcase className="w-10 h-10 text-gold mb-4 mx-auto md:mx-0" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to take your career global?
              </h2>
              <p className="text-gray-300">
                Our consultants specialize in work permits and employment-based visas.
                Let us assess your profile for the best international opportunities.
              </p>
            </div>

            <div className="shrink-0 flex gap-4">
              <Link
                href="/contact"
                className="bg-gold text-black px-8 py-3 rounded-sm font-bold hover:bg-white transition-colors"
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