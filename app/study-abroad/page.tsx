"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Globe2, 
  BookOpen, 
  Plane, 
  ArrowRight,
  MapPin,
  Compass
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Country Destinations ---
const destinations = [
  {
    country: "Canada",
    title: "Study in Canada",
    desc: "World-class education with a clear pathway to permanent residency. Discover the benefits of the student permit and post-graduation work opportunities.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop", // Toronto
    link: "/study-abroad/canada"
  },
  {
    country: "Australia",
    title: "Study in Australia",
    desc: "Explore the advantages of the student visa in Australia. Experience a vibrant lifestyle, top-tier universities, and excellent post-study work rights.",
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop',
    link: "/study-abroad/australia"
  },
  {
    country: "United Kingdom",
    title: "Study in UK",
    desc: "Home to some of the world's oldest and most prestigious institutions. Learn about the eligibility requirements and the Graduate Route visa.",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2671&auto=format&fit=crop", // London Big Ben/Bus
    link: "/study-abroad/uk"
  },
  {
    country: "Europe",
    title: "Study in Europe",
    desc: "Access diverse cultures and affordable education across the continent. Explore student permits for Schengen countries and beyond.",
    image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=2670&auto=format&fit=crop", // European Architecture
    link: "/study-abroad/europe"
  },
  {
    country: "New Zealand",
    title: "Study in New Zealand",
    desc: "Learn in a safe, innovative environment. Discover the benefits of the student visa, including eligibility criteria and the relaxed Kiwi lifestyle.",
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2670&auto=format&fit=crop', // Updated: Mount Cook Road
    link: "/study-abroad/new-zealand"
  }
];

// --- DATA: Why Study Abroad? ---
const benefits = [
  {
    icon: Globe2,
    title: "Global Perspective",
    desc: "Immerse yourself in new cultures and gain a worldview that employers value highly."
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    desc: "Access cutting-edge research, facilities, and teaching methods available at top global universities."
  },
  {
    icon: Compass,
    title: "Career Opportunities",
    desc: "Build an international network and access post-study work visas to launch a global career."
  }
];

export default function StudyAbroad() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Study Abroad"
        subtitle="Work, Study, and Live in the World's Top Destinations."
        // backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop" // University Library/Hall
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
            Unlock Your Potential
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Your Gateway to <span className="text-gold">Global Education</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Studying abroad is more than just a degree—it's a life-changing experience. 
            Whether you dream of the historic lecture halls of the UK, the innovative campuses of Canada, or the vibrant lifestyle of Australia, we guide you through every step of the permit process.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-sm border border-white/10 text-center hover:border-gold/30 transition-colors">
              <div className="w-14 h-14 bg-black/40 text-gold flex items-center justify-center rounded-full mx-auto mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DESTINATIONS GRID --- */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Choose Your <span className="text-gold">Destination</span></h2>
              <p className="text-gray-400">Explore specific requirements for each country.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-primary-light border border-white/10 rounded-sm overflow-hidden hover:border-gold/50 transition-all flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={dest.image} 
                    alt={dest.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* <div className="absolute inset-0  group-hover:bg-primary transition-colors" /> */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gold uppercase tracking-wider rounded-sm border border-gold/20">
                    {dest.country}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {dest.desc}
                  </p>
                  
                  <Link href={dest.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold transition-colors uppercase tracking-wider mt-auto">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
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