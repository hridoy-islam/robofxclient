"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  GraduationCap, 
  Lightbulb, 
  HeartHandshake, 
  CheckCircle2, 
  Building2,
  Users,
  Briefcase,
  Globe2,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Benefits ---
const benefits = [
  {
    icon: TrendingUp,
    title: "Strong Economy",
    description: "The USA has the world's largest economy, offering vast opportunities for employment and entrepreneurship in innovation-led industries like tech and finance."
  },
  {
    icon: GraduationCap,
    title: "Educational Opportunities",
    description: "Home to top-ranking universities. Students from all over the world come to the USA to gain access to quality education and cutting-edge research."
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "A strong culture of innovation makes the USA a great place for startups, offering unparalleled access to funding, resources, and mentorship."
  },
  {
    icon: HeartHandshake,
    title: "Social Security",
    description: "The system provides assistance to eligible individuals and families, including unemployment insurance, food assistance, and healthcare subsidies."
  }
];

// --- DATA: Visa Options ---
const visaOptions = [
  {
    title: "Family-Based",
    icon: Users,
    desc: "For immediate relatives of US citizens and permanent residents."
  },
  {
    title: "Employment-Based",
    icon: Briefcase,
    desc: "For skilled workers, professionals, and those with extraordinary abilities."
  },
  {
    title: "Diversity Visa",
    icon: Globe2,
    desc: "The 'Green Card Lottery' for countries with low immigration rates to the US."
  },
  {
    title: "Investment (EB-5)",
    icon: DollarSign,
    desc: "For investors creating jobs and capital in new commercial enterprises."
  },
];

// --- DATA: EB-5 Requirements ---
const eb5Requirements = [
  "Must meet minimum capital amount: $900,000 (TEA) or $1.8 million (Non-TEA).",
  "Must create at least 10 new full-time jobs for qualifying employees.",
  "Investment funds must be acquired legally and sourced transparently.",
  "The investment must be approved by the USCIS.",
  "Must invest in a 'for-profit' new commercial enterprise established after 1990.",
  "Investment must be 'at-risk' with no guarantee of capital return."
];

// --- DATA: Cities ---
const cities = [
  "New York City", "Los Angeles", "San Francisco", "Austin", "Boston", 
  "Miami", "Chicago", "Seattle", "Houston", "Denver"
];

export default function MigrateToUSA() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary ">
      <Header />

      <BreadCumb
        title="Immigrate to the USA"
        subtitle="The land of opportunity, innovation, and diverse prospects."
        backgroundImage="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop" // NYC Skyline
      />

      {/* --- WHY CHOOSE USA --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              The American Dream
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose the <span className="text-gold">United States?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The United States is a popular destination for immigration owing to its prestigious colleges 
              and numerous employment prospects, especially in technology, healthcare, and finance. 
              In addition to a high quality of living, the nation boasts vibrant cities and great social services.
            </p>
            
            {/* Cities Tag Cloud */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-bold">Top Destinations</p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-gold/50 transition-colors cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- VISA PATHWAYS --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Immigration <span className="text-gold">Pathways</span></h2>
            <p className="text-gray-400">Discover the program that aligns with your profile and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaOptions.map((visa, idx) => (
              <div key={idx} className="bg-primary-light border border-white/5 p-8 rounded-sm text-center hover:border-gold/30 transition-colors relative group overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 relative z-10">
                  <visa.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{visa.title}</h3>
                <p className="text-sm text-gray-400 relative z-10">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EB-5 DETAILED SECTION --- */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
             <Image 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
               alt="US Business" 
               fill 
               className="object-cover grayscale"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-[1]" />

        <div className="container mx-auto  relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-[2px] w-10 bg-gold" />
                 <span className="text-gold font-bold uppercase tracking-wider text-sm">Investment Visa</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">EB-5 Visa <span className="block text-gray-400 text-2xl mt-2 font-normal">Investment Requirements</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The EB-5 program is a direct route to a Green Card for investors. 
                To qualify, applicants must meet specific capital and job creation thresholds set by the USCIS.
              </p>
              
              <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-sm font-bold hover:bg-gold transition-colors inline-block">
                Check Eligibility
              </Link>
            </div>

            {/* Right Checklist */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
                 <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                   <Building2 className="w-5 h-5 text-gold" /> Key Criteria
                 </h3>
                 <ul className="space-y-4">
                   {eb5Requirements.map((req, i) => (
                     <li key={i} className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                       <span className="text-gray-300 text-sm">{req}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto ">
        <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Text */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Your American Journey Today
              </h2>
              <p className="text-gray-300">
                Our experts are ready to guide you through the EB-5, Family-based, 
                or Employment-based immigration process with precision and care.
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