"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  MapPin, 
  FileCheck, 
  Briefcase, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  Sun
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Study in Australia ---
const benefits = [
  {
    icon: Users,
    title: "Dedication to Diversity",
    desc: "Australia offers specific support services to help migrants from diverse cultures adapt, fostering a welcoming and inclusive environment."
  },
  {
    icon: HeartPulse,
    title: "Advanced Health Care",
    desc: "The universal healthcare system ensures all permanent residents have access to high-quality care founded on equality and excellence."
  },
  {
    icon: GraduationCap,
    title: "High Quality Education",
    desc: "From arts to advanced technology, the education system is built on fairness and quality, ensuring every student has an equal chance at success."
  },
  {
    icon: ShieldCheck,
    title: "Social Security Programs",
    desc: "A comprehensive safety net offers unemployment, disability, and healthcare assistance to support citizens and residents in need."
  }
];

// --- DATA: Top Cities ---
const cities = [
  {
    name: "Melbourne",
    desc: "Consistently ranked as Australia's best student city, known for its coffee culture, arts scenes, and top-tier universities.",
    image: "https://images.unsplash.com/photo-1594300157693-a741f98738c2?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sydney",
    desc: "Australia's global city, offering iconic beaches, a bustling business district, and a diverse international student community.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Brisbane",
    desc: "A sun-soaked city with a lower cost of living, known for its outdoor lifestyle and rapidly growing research institutions.",
    image: "https://images.unsplash.com/photo-1452859030887-bb96ef08d051?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Perth",
    desc: "Located on the west coast, offering a relaxed vibe, endless beaches, and strong connections to the mining and engineering sectors.",
    image: "https://images.unsplash.com/photo-1642247093742-38768e332b87?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Adelaide",
    desc: "The 'Festival City' is affordable and accessible, providing a safe and community-focused environment for students.",
    image: "https://images.unsplash.com/photo-1720485757241-0402b031ec42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// --- DATA: Universities ---
const universities = [
  "University of Melbourne",
  "University of Sydney",
  "Australian National University (ANU)",
  "University of New South Wales (UNSW)",
  "University of Queensland",
  "Monash University",
  "University of Western Australia",
  "University of Adelaide",
  "University of Technology Sydney (UTS)",
  "RMIT University",
  "Macquarie University",
  "Queensland University of Technology"
];

export default function StudyInAustralia() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Study in Australia"
        subtitle="World-Class Education in a Vibrant, diverse Nation."
        // backgroundImage="https://images.unsplash.com/photo-1523482580638-014316f70b45?q=80&w=2669&auto=format&fit=crop" // Sydney Opera House
      />

      {/* --- WHY STUDY IN AUSTRALIA --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Destination Down Under
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-gold">Australia?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Australia’s dedication to diversity, advanced healthcare system, and high-quality education make it an appealing location for those seeking to start a new life overseas.
            </p>
            <div className="relative h-64 w-full rounded-sm overflow-hidden border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Australian Nature/Koala or City
                 alt="Life in Australia"
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
              Well-known for world-class colleges, low cost of living, and cultural attractions, 
              these cities offer distinctive characteristics for foreign students.
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
                To study in Australia, you must obtain a Subclass 500 Student Visa. The core requirements include:
              </p>
              <ul className="space-y-4">
                {[
                  "Enrollment in a recognized course (CoE - Confirmation of Enrolment)",
                  "Evidence of Financial Capability (approx. AUD 29,710/year for living)",
                  "Overseas Student Health Cover (OSHC) insurance",
                  "English Proficiency (IELTS 6.0+ or equivalent)",
                  "Genuine Student (GS) requirement (replaces GTE)",
                  "Character and Health standards clearance"
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
                <Briefcase className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-white">Student <span className="text-gold">Responsibilities</span></h2>
              </div>
              <p className="text-gray-300 mb-8">
                Maintaining your visa status is crucial. Australian regulations for 2025 are strict regarding work and study balance.
              </p>
              <div className="space-y-6 border-l-2 border-white/10 pl-6">
                <div>
                   <h4 className="font-bold text-white mb-2">Work Restrictions</h4>
                   <p className="text-sm text-gray-400">You are capped at <strong>48 hours per fortnight</strong> while your course is in session. You may work unlimited hours during scheduled semester breaks.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Academic Progress</h4>
                   <p className="text-sm text-gray-400">You must maintain satisfactory attendance and course progress as defined by your education provider.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Health Insurance</h4>
                   <p className="text-sm text-gray-400">You must maintain your OSHC (Overseas Student Health Cover) for the entire duration of your stay.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Address Updates</h4>
                   <p className="text-sm text-gray-400">You must notify your education provider of your Australian address within 7 days of arrival.</p>
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
             <h2 className="text-3xl font-bold text-white mb-4">Top Australian <span className="text-gold">Universities</span></h2>
             <p className="text-gray-400">Institutions consistently ranked among the world's best.</p>
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
                <h3 className="text-2xl font-bold text-white mb-2">Dreaming of the Australian lifestyle?</h3>
                <p className="text-gray-400 text-sm">Get expert guidance on universities, GTE/GS requirements, and visa applications.</p>
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