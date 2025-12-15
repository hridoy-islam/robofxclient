"use client";

import { motion } from "framer-motion";
import { 
  Crown, 
  Users, 
  Briefcase, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  BookOpen
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Study in the UK ---
const benefits = [
  {
    icon: Crown,
    title: "World Class Education",
    desc: "Home to the University of Oxford and Cambridge, the UK is renowned for academic brilliance, cutting-edge research, and a comprehensive selection of courses."
  },
  {
    icon: Briefcase,
    title: "Diverse Employment",
    desc: "A thriving economy with opportunities in finance, healthcare, and technology. The Graduate Route visa allows students to work for 2 years post-graduation."
  },
  {
    icon: HeartPulse,
    title: "Excellent Living Standards",
    desc: "Residents enjoy high standards of housing and education. The National Health Service (NHS) provides a universal healthcare system accessible to students."
  },
  {
    icon: Users,
    title: "Family Reunification",
    desc: "The government allows eligible students (postgraduate research) to sponsor family members, helping maintain family bonds while living in the UK."
  }
];

// --- DATA: Top Cities ---
const cities = [
  {
    name: "London",
    desc: "The global academic capital, home to Imperial, UCL, and LSE, offering unmatched cultural and professional opportunities.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Oxford",
    desc: " The 'City of Dreaming Spires', defined by its historic architecture and the world's oldest English-speaking university.",
    image: "https://images.unsplash.com/photo-1755289734953-c468dd44c626?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cambridge",
    desc: "A hub of innovation and history, offering a picturesque setting for intense academic pursuit and technological growth.",
    image: "https://images.unsplash.com/photo-1590161311659-852a5207c5b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Edinburgh",
    desc: "Scotland's capital combines ancient history with a vibrant student life, famous for its arts festivals and research heritage.",
    image: "https://images.unsplash.com/photo-1695299107473-e454630c8f9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Manchester",
    desc: "A youthful, dynamic city known for its pivotal role in the industrial revolution and its modern media and tech landscape.",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=80&w=2669&auto=format&fit=crop"
  },
  {
    name: "Bristol",
    desc: "A creative and maritime city in the southwest, celebrated for its engineering history and independent spirit.",
    image: "https://images.unsplash.com/photo-1667017898253-bbb017f9c8a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// --- DATA: Universities ---
const universities = [
  "University of Oxford",
  "University of Cambridge",
  "Imperial College London",
  "University College London (UCL)",
  "London School of Economics (LSE)",
  "University of Edinburgh",
  "King's College London",
  "University of Manchester",
  "University of Bristol",
  "University of Warwick",
  "University of Glasgow",
  "University of Durham"
];

export default function StudyInUK() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Study in the United Kingdom"
        subtitle="Heritage, Innovation, and Global Opportunity."
        backgroundImage="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2671&auto=format&fit=crop" // Big Ben / London
      />

      {/* --- WHY STUDY IN UK --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              The British Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Choose the <span className="text-gold">UK?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The United Kingdom offers a unique blend of centuries-old academic tradition and modern innovation. From the historic halls of Oxford to the bustling financial districts of London, the UK provides an environment where ambition thrives.
            </p>
            <div className="relative h-64 w-full rounded-sm overflow-hidden border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2574&auto=format&fit=crop" // UK University / Architecture
                 alt="UK Architecture"
                 fill
                 className="object-cover"
               />
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-sm border border-white/10 hover:border-gold/30 transition-colors">
                <div className="w-12 h-12 bg-black/40 text-gold flex items-center justify-center rounded-full mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOP CITIES --- */}
      <section className="py-20 bg-primary-light/5 border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Best Cities to <span className="text-gold">Study</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              London, Oxford, Cambridge, and beyond. Explore cities rich in history, culture, and academic resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div key={idx} className="group relative h-80 rounded-sm overflow-hidden border border-white/10">
                <Image 
                  src={city.image} 
                  alt={city.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {city.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS & RESPONSIBILITIES --- */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Visa Requirements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-white">Visa <span className="text-gold">Requirements</span></h2>
              </div>
              <p className="text-gray-300 mb-8">
                A <strong>Student Visa</strong> (formerly Tier 4) is required for courses lasting longer than six months. The UK Visas and Immigration (UKVI) agency requires the following:
              </p>
              <ul className="space-y-4">
                {[
                  "CAS (Confirmation of Acceptance for Studies) from your university",
                  "Proof of English Proficiency (SELT/IELTS)",
                  "Evidence of financial resources (Maintenance Funds)",
                  "Tuberculosis (TB) test results (if applicable)",
                  "Valid Passport & Travel Documents",
                  "Parental consent (if under 18)"
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-sm border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Responsibilities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-white">Student <span className="text-gold">Responsibilities</span></h2>
              </div>
              <p className="text-gray-300 mb-8">
                Your visa is tied to your academic performance and compliance with UK laws.
              </p>
              <div className="space-y-6 border-l-2 border-white/10 pl-6">
                <div>
                   <h4 className="font-bold text-white mb-2">Attendance & Progress</h4>
                   <p className="text-sm text-gray-400">You must attend all courses and make satisfactory academic progress. Universities are required to report non-attendance to the Home Office.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Work Restrictions</h4>
                   <p className="text-sm text-gray-400">Most degree-level students can work up to <strong>20 hours per week</strong> during term time and full-time during holidays. Strict adherence is mandatory.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Visa Conditions</h4>
                   <p className="text-sm text-gray-400">You must not claim public funds (benefits) and must update the Home Office if your address or circumstances change.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- UNIVERSITIES --- */}
      <section className="py-20 bg-primary-light/5 border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Top UK <span className="text-gold">Universities</span></h2>
             <p className="text-gray-400">The UK is home to some of the world's most prestigious and ancient institutions.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {universities.map((uni, idx) => (
                <div key={idx} className="bg-primary p-4 rounded-sm border border-white/10 flex items-center gap-3 hover:border-gold/30 transition-colors">
                   <Landmark className="w-5 h-5 text-gold shrink-0" />
                   <span className="text-sm font-bold text-gray-200">{uni}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 bg-primary">
         <div className="container mx-auto ">
            <div className="bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Need help with your UK Student Visa?</h3>
                <p className="text-gray-400 text-sm">We assist with university selection, CAS applications, and visa compliance.</p>
              </div>
              <Link 
                href="/contact"
                className="bg-gold hover:bg-white text-black hover:text-black font-bold px-8 py-3 rounded-sm transition-colors duration-300 whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}