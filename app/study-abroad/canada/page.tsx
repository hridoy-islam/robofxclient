"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Leaf, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  FileCheck, 
  ShieldAlert, 
  Landmark, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Study in Canada ---
const benefits = [
  {
    icon: HeartPulse,
    title: "Universal Health Care",
    desc: "Canada's health care system is funded by taxes and based on values of universality and accessibility, offering medical services to all citizens and permanent residents."
  },
  {
    icon: Leaf,
    title: "High Quality of Life",
    desc: "A strong economy, excellent social services, natural beauty, diversity, and safety make Canada one of the most desirable locations in the world for a comfortable life."
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    desc: "A robust economy offers vast employment prospects. International students can access Post-Graduation Work Permits (PGWP) to work for up to 3 years after studies."
  },
  {
    icon: GraduationCap,
    title: "Outstanding Education",
    desc: "The Canadian system emphasizes student-centered learning and inclusivity, providing a world-class environment committed to equity and academic excellence."
  }
];

// --- DATA: Top Cities ---
const cities = [
  {
    name: "Toronto",
    desc: "Canada's financial hub and most diverse city, home to world-class universities and a vibrant cultural scene.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Vancouver",
    desc: "Famous for its stunning natural beauty, mild climate, and booming tech industry on the west coast.",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=2718&auto=format&fit=crop"
  },
  {
    name: "Montreal",
    desc: "A bilingual cultural capital known for its European flair, affordable living, and high student population.",
    image: "https://images.unsplash.com/photo-1723921027368-c19d7f757fbd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ottawa",
    desc: "The nation's capital, offering a unique blend of political history, safety, and bilingual education opportunities.",
    image: "https://images.unsplash.com/photo-1599457480385-83984b998663?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// --- DATA: Universities ---
const universities = [
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "University of Alberta",
  "University of Waterloo",
  "McMaster University",
  "University of Montreal",
  "Western University",
  "University of Calgary",
  "Queen's University",
  "University of Ottawa",
  "Dalhousie University"
];

export default function StudyInCanada() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Study in Canada"
        subtitle="World-Class Education. A Pathway to Permanent Residency."
        // backgroundImage="https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&w=2669&auto=format&fit=crop" // Canadian Campus/Nature
      />

      {/* --- WHY STUDY IN CANADA --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              Discover Canada
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-gold">Canada?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Canada is a popular immigration destination, providing a wide range of benefits. From universal health care to a high quality of life, 
              it offers an environment where students can thrive academically and personally.
            </p>
            <div className="relative h-64 w-full rounded-sm overflow-hidden border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop" // Canadian Nature
                 alt="Canadian Landscape"
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
            <h2 className="text-3xl font-bold mb-4">Top Student <span className="text-gold">Cities</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Several Canadian cities are ideal for academic pursuits, each with its own culture and opportunities. 
              Students can pursue their goals in these diverse urban centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                As an international student, you need a study permit to study in Canada. The application requires careful preparation of several key documents.
              </p>
              <ul className="space-y-4">
                {[
                  "Admission letter from a Designated Learning Institution (DLI)",
                  "Evidence of financial support (tuition + living expenses)",
                  "Proof of Language Competency (IELTS/CELPIP/TEF)",
                  "Immigration Medical Examination (if required)",
                  "Police Clearance Certificate",
                  "A legitimate Study Plan (Statement of Purpose)"
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
                Maintaining your status in Canada requires strict adherence to immigration laws. You must aim to exit Canada once your studies are complete unless you qualify for another permit.
              </p>
              <div className="space-y-6 border-l-2 border-white/10 pl-6">
                <div>
                   <h4 className="font-bold text-white mb-2">Enrollment Status</h4>
                   <p className="text-sm text-gray-400">You must remain enrolled at a Designated Learning Institution (DLI) and actively pursue your course of study.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Academic Progress</h4>
                   <p className="text-sm text-gray-400">You are expected to make reasonable progress toward completing your program within the expected timeframe.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Work Conditions</h4>
                   <p className="text-sm text-gray-400">Respect the work hours stipulated on your permit (e.g., 20 hours/week off-campus during semesters, full-time during breaks).</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Reporting Changes</h4>
                   <p className="text-sm text-gray-400">Notify IRCC if you change institutions, and ensure you maintain valid status at all times.</p>
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
             <h2 className="text-3xl font-bold text-white mb-4">Top Canadian <span className="text-gold">Universities</span></h2>
             <p className="text-gray-400">Home to some of the world's most prestigious research institutions.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <h3 className="text-2xl font-bold text-white mb-2">Ready to start your Canadian education?</h3>
                <p className="text-gray-400 text-sm">Our experts can help you select the right university and navigate the visa process.</p>
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