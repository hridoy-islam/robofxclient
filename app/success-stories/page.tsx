"use client";

import { motion } from "framer-motion";
import { 
  Quote, 
  MapPin, 
  Star, 
  Trophy, 
  Users, 
  Globe2, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Statistics ---
const stats = [
  { label: "Visas Granted", value: "2,500+", icon: Trophy },
  { label: "Success Rate", value: "98%", icon: CheckCircle2 },
  { label: "Happy Families", value: "1,200+", icon: Users },
  { label: "Countries Covered", value: "15+", icon: Globe2 },
];

// --- DATA: Success Stories ---
const stories = [
  {
    name: "Sarah Jenkins",
    origin: "South Africa",
    destination: "Canada",
    type: "Student Visa (Study Permit)",
    university: "University of Toronto",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    quote: "I was overwhelmed by the paperwork for Canada. The team at Visara didn't just fill out forms; they helped me write a compelling SOP that got me into my dream university. I'm now entering my second year and loving every minute."
  },
  {
    name: "Raj Patel",
    origin: "India",
    destination: "United Kingdom",
    type: "Skilled Worker Visa",
    university: "Tech Sector",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
    quote: "Moving my family to the UK seemed impossible. The consultants guided me through the sponsorship process and handled my dependents' visas seamlessly. We are now settled in Manchester and building a new life."
  },
  {
    name: "Elena Rodriguez",
    origin: "Brazil",
    destination: "Australia",
    type: "Student Visa (Subclass 500)",
    university: "University of Melbourne",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    quote: "The team's knowledge of the Australian education system is unmatched. They helped me choose a course that perfectly aligned with my career goals. The visa approval came faster than I expected!"
  },
  {
    name: "Wei Zhang",
    origin: "China",
    destination: "USA",
    type: "F-1 Student Visa",
    university: "NYU",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop",
    quote: "My first visa application was rejected when I applied on my own. I came to Visara for help. They analyzed my profile, prepared me for the interview, and I passed with flying colors on the second try."
  },
  {
    name: "Amara Okeke",
    origin: "Nigeria",
    destination: "Canada",
    type: "Permanent Residency (Express Entry)",
    university: "N/A",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
    quote: "From the IELTS preparation to the final PR application, the support was constant. They kept me updated at every stage. Today, I am a permanent resident of Canada thanks to their dedication."
  },
  {
    name: "Liam O'Connor",
    origin: "Ireland",
    destination: "New Zealand",
    type: "Work & Holiday Visa",
    university: "N/A",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    quote: "I wanted an adventure. They helped me sort out the Working Holiday visa requirements quickly so I could focus on planning my trip. Professional, fast, and friendly service."
  }
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Success Stories"
        subtitle="Real People. Real Dreams. Real Results."
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" // Graduation / Success group
      />

      {/* --- STATS SECTION --- */}
      <section className="py-12 border-b border-white/5 bg-white/5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-4 text-gold p-3 bg-primary rounded-full border border-white/10">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED STORY --- */}
      <section className="py-20 container mx-auto ">
        <div className="text-center mb-16">
           <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
            Client Spotlight
           </span>
           <h2 className="text-3xl md:text-4xl font-bold">From Dream to <span className="text-gold">Reality</span></h2>
        </div>

        <div className="relative bg-primary-light border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1659080907095-b3f60d056767?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Happy graduate
              alt="Featured Success Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent md:hidden" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Quote className="text-gold w-10 h-10 mb-6 opacity-50" />
            <h3 className="text-2xl font-bold text-white mb-4">"They changed my life completely."</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
              "I had almost given up on my dream of studying medicine abroad after two rejections. Visara analyzed my previous applications, found the errors, and helped me rebuild my profile. I got accepted into 3 universities!"
            </p>
            <div>
              <p className="text-white font-bold text-lg">Dr. Aisha Khan</p>
              <p className="text-gold text-sm">Medical Resident in London, UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STORIES GRID --- */}
      <section className="py-20 bg-primary-light/5 border-t border-white/5">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary border border-white/10 p-8 rounded-sm hover:border-gold/30 transition-all group flex flex-col h-full"
              >
                {/* User Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-colors">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{story.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <MapPin className="w-3 h-3 text-gold" />
                      {story.origin} <ArrowRight className="w-3 h-3" /> {story.destination}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-white/5 text-gold text-xs px-3 py-1 rounded-full border border-white/10">
                    {story.type}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex-grow">
                   <p className="text-gray-300 text-sm leading-relaxed italic relative">
                     <span className="text-gold text-xl absolute -top-2 -left-2 opacity-30">"</span>
                     {story.quote}
                     <span className="text-gold text-xl absolute -bottom-2 -right-2 opacity-30">"</span>
                   </p>
                </div>

                {/* Rating */}
                <div className="mt-6 pt-6 border-t border-white/10 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- CTA BANNER --- */}
          <div className="mt-24 bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">You could be our next success story.</h3>
              <p className="text-gray-400 text-sm">Let us handle the complexity while you focus on your future.</p>
            </div>
            <Link 
              href="/contact"
              className="bg-gold hover:bg-white text-black hover:text-black font-bold px-8 py-3 rounded-sm transition-colors duration-300 whitespace-nowrap"
            >
              Start Your Journey
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}