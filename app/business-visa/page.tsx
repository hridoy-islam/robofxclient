"use client";

import { motion } from "framer-motion";
import { 
  Globe2, 
  Briefcase, 
  TrendingUp, 
  Building2, 
  ArrowRight, 
  MapPin 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Country Cards ---
const countries = [
  {
    id: "usa",
    name: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop", // NYC
    description: "Explore the advantages and programs of business visas in the USA, including eligibility requirements and types of business visas available for investors and entrepreneurs.",
    link: "/business-visa/usa"
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop", // London
    description: "Discover the benefits and programs of various business visa options available in the UK, encompassing eligibility criteria and potential routes for expansion.",
    link: "/business-visa/uk"
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop", // Toronto
    description: "Discover the benefits and programs of different business visa options in Canada, including Start-Up Visas and eligibility criteria for global founders.",
    link: "/business-visa/canada"
  }
];

// --- DATA: General Benefits ---
const benefits = [
  {
    icon: Globe2,
    title: "Global Market Access",
    desc: "Expand your business operations into the world's most stable and lucrative economies."
  },
  {
    icon: TrendingUp,
    title: "Economic Stability",
    desc: "Secure your capital by investing in markets with strong legal frameworks and growth potential."
  },
  {
    icon: Briefcase,
    title: "Residency Pathways",
    desc: "Many business visas offer direct or indirect pathways to permanent residency and citizenship."
  }
];

export default function BusinessVisaHub() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Business Visas"
        subtitle="Global Opportunities for Entrepreneurs, Investors, and Innovators."
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Expand Your Horizons
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              All you need to know on <span className="text-gold">Business Visas</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Explore the advantages and schemes of business visas in Canada, UK, and the USA. 
              Whether you are an established business owner looking to expand, or an aspiring entrepreneur with a revolutionary idea, 
              business visas encompass the criteria for eligibility and open doors to potential global prospects.
            </p>
            
            <div className="grid gap-6">
               {benefits.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="bg-white/5 p-3 h-fit rounded-sm text-gold border border-white/10">
                     <item.icon className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group">
             <Image 
               src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop" 
               alt="Global Business" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* --- COUNTRY SELECTION GRID --- */}
      <section className="py-24 bg-primary-light border-t border-white/5 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-gold">Destination</span></h2>
            <p className="text-gray-400">
              Navigate the specific requirements and opportunities available in top global economies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-primary border border-white/10 rounded-sm overflow-hidden hover:border-gold/50 transition-all flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={country.image} 
                    alt={country.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-white font-bold tracking-wider uppercase text-sm">{country.name}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {country.name} Business Visa
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {country.description}
                  </p>
                  
                  <Link 
                    href={country.link}
                    className="inline-flex items-center justify-between w-full border-t border-white/10 pt-4 text-white font-medium group-hover:text-gold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / EXPERT HELP --- */}
      <section className="py-20 container mx-auto ">
        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-sm flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Need Expert Guidance?</h2>
            <p className="text-gray-300 leading-relaxed">
              Business immigration is complex, involving strict financial audits, business plan approvals, and interview preparations. 
              Visara's specialized team ensures your investment translates into a secure future.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-gold text-black px-10 py-4 rounded-sm font-bold hover:bg-white transition-colors uppercase tracking-widest text-sm shrink-0"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}