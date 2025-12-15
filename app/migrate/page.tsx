"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA ---
const destinations = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2565&auto=format&fit=crop", // Toronto
    description: "Learn more about Canada immigration Express Entry, Provincial Nomination (PNP), and other pilot programs designed for skilled workers.",
    link: "/migrate/migrate-to-canada"
  },
  {
    name: "Australia",
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop', // Melbourne/Sydney
    description: "Explore the benefits of immigration to Australia, the skilled migration programs offered, and the available job prospects in a thriving economy.",
    link: "/migrate/migrate-to-australia"
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop", // London Big Ben
    description: "Discover the advantages of immigration to the UK, including the Skilled Worker Visa, Global Talent routes, and diverse job opportunities.",
    link: "/migrate/migrate-to-uk"
  },
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop", // NYC
    description: "Uncover the advantages of immigration to the USA, the Green Card programs accessible, and the vast career opportunities in the global tech hub.",
    link: "/migrate/migrate-to-usa"
  },
  {
    name: "New Zealand",
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2670&auto=format&fit=crop', // NZ Nature
    description: "Discover the benefits of immigration to New Zealand, the Skilled Migrant Category, and the high quality of life job prospects available.",
    link: "/migrate/migrate-to-nz"
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function MigratePage() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      {/* Reusing your upgraded Breadcrumb */}
      <BreadCumb
        title="Migrate Overseas"
        subtitle="Your gateway to a new life in the world's top destinations."
        backgroundImage="/b1.jpg" // Or any specific migration banner image
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 mb-4">
               <Globe className="w-4 h-4" /> Global Opportunities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Migrate to <span className="text-gold">Canada, UK, USA & Australia</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Discover the various migration options available to you and make an informed decision. 
              Browse our comprehensive list of migration paths below and find the one that best suits your professional and personal needs.
            </p>
          </motion.div>
        </div>

        {/* --- DESTINATIONS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {destinations.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs text-gold font-bold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Link 
                    href={item.link}
                    className="flex items-center justify-between w-full group/btn"
                  >
                    <span className="text-white font-bold group-hover/btn:text-gold transition-colors">
                      Apply Now
                    </span>
                    <span className="bg-white/10 p-2 rounded-full group-hover/btn:bg-gold group-hover/btn:text-primary transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-24 bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
             <h3 className="text-2xl font-bold text-white mb-2">Not sure which country is right for you?</h3>
             <p className="text-gray-400 text-sm">Book a free consultation with our immigration experts today.</p>
          </div>
          <Link 
            href="/contact"
            className="bg-gold hover:bg-white text-black hover:text-black font-bold px-8 py-3 rounded-sm transition-colors duration-300 whitespace-nowrap"
          >
            Book Consultation
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
}