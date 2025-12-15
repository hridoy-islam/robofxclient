"use client";

import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Users, 
  Stethoscope, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  Plane,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Users,
    title: "Diverse Culture",
    description: "A cultural melting pot, Australia welcomes everyone and is known to be friendly and supportive of all cultures."
  },
  {
    icon: Stethoscope,
    title: "Health Benefits",
    description: "With PR, you’ll receive free Medicare and access to great health services, as part of the Australian government’s basic insurance package."
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Permanent residents have access to free public schools. You pay significantly less for university tuition and qualify for grants."
  },
  {
    icon: HeartHandshake,
    title: "Social Benefits",
    description: "Residents get social security via the Income Support System. There is no waiting period for family assistance payments."
  }
];

// --- DATA: Visa Programs ---
const visaPrograms = [
  {
    id: "189",
    code: "Subclass 189",
    title: "Skilled Independent Visa",
    type: "Permanent Residence",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop", // Sydney Opera House
    description: "The Skilled Independent Visa Subclass 189 permits skilled people to live and work in Australia permanently. This visa is points-based; applicants are evaluated on age, qualifications, experience, and English proficiency. You must submit an Expression of Interest (EOI) via SkillSelect.",
    highlights: [
      "Permanently stay, work, and study in Australia",
      "Enjoy complete Medicare Entitlement",
      "Sponsor eligible relatives for PR",
      "Travel into and out of Australia for 5 years",
      "Eligible to apply for Australian Citizenship"
    ]
  },
  {
    id: "491",
    code: "Subclass 491",
    title: "Skilled Work Regional",
    type: "Provisional (5 Years)",
  image: "https://images.unsplash.com/photo-1584549239925-5554aa6b9183?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Australian regional landscape
    description: "Introduced in 2019, this provisional visa enables qualified aspirants and their families to settle and work in regional areas. Sponsorship can come from a state government or an eligible relative. It offers a pathway to PR via the Subclass 191 Visa.",
    highlights: [
      "Pathway to PR (Subclass 191) after 3 years",
      "Priority processing for regional visas",
      "Complete Medicare Entitlement",
      "Enhanced points for single applicants",
      "Enhanced points if spouse is eligible for nomination"
    ]
  },
  {
    id: "186",
    code: "Subclass 186",
    title: "Employer Nominated Scheme",
    type: "Permanent Residence",
    image: "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?q=80&w=2773&auto=format&fit=crop", // Melbourne Tram/City
    description: "The 186 visa opens doors for skilled workers to establish permanent roots. If Australian businesses are eager for your skills, this pathway turns your work arrangement into direct PR. Includes 'Direct Entry' and 'Temporary Residence Transition' streams.",
    highlights: [
      "No restriction on location (Regional or Non-regional)",
      "Indefinite stay with full work and study rights",
      "Apply for Citizenship upon eligibility",
      "Sponsor relatives for permanent residence",
      "No requirement to stay with employer for 2 years after grant"
    ]
  },
  {
    id: "482",
    code: "Subclass 482",
    title: "Temporary Skilled Shortage (TSS)",
    type: "Work Permit",
    image: "https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?q=80&w=2670&auto=format&fit=crop", // Construction/Engineer
    description: "The TSS visa allows skilled individuals sponsored by an eligible employer to work in Australia. It fills gaps where Australian workers cannot be sourced. It consists of a Short-Term stream (2 years) and Medium-Term stream (4 years). Processing time is approx 6-8 months.",
    highlights: [
      "May be eligible for PR after 2–4 years",
      "Family sponsored visa for dependents",
      "Lower IELTS requirement (5-5.5)",
      "No age limit for the visa itself",
      "No qualification mandatory (though advantageous for PR)"
    ]
  }
];

export default function MigrateToAustralia() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Immigrate to Australia"
        subtitle="Ranked highest for skilled worker salaries and quality of life."
      />

      {/* --- WHY CHOOSE AUSTRALIA SECTION --- */}
      <section className="py-20 container mx-auto  relative bg-primary">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
            The Land Down Under
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Immigrate to <span className="text-gold">Australia?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Australia is the most popular destination among skilled migrants. With high salaries, 
            a robust healthcare system, and a diverse cultural landscape, it offers an unmatched lifestyle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/40 transition-colors group"
            >
              <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <item.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- VISA PROGRAMS SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Immigration <span className="text-gold">Pathways</span>
            </h2>
            <p className="text-gray-400">
              Find the right program for your skills and start your journey to Australia.
            </p>
          </div>

          <div className="space-y-24">
            {visaPrograms.map((visa, index) => (
              <motion.div 
                key={visa.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-gold/5 rounded-sm transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative h-[350px] lg:h-[450px] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={visa.image}
                      alt={visa.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-2 border-l-4 border-gold">
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Visa Class</p>
                      <p className="text-white font-bold text-lg">{visa.code}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider rounded-full">
                      {visa.type}
                    </span>
                    {visa.id === '189' && <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">Points Tested</span>}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {visa.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                    {visa.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                       <Briefcase className="w-5 h-5 text-gold" /> Key Features & Benefits
                    </h4>
                    <ul className="space-y-3">
                      {visa.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-2 text-white font-bold border-b border-gold pb-1 hover:text-gold transition-colors"
                  >
                    Check Eligibility <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto ">
        <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-sm p-12 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Plane className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to move Down Under?</h2>
            <p className="text-gray-300 mb-8">
              Whether you are a skilled professional or looking for employer nomination, 
              Visara provides expert guidance to navigate the Australian points system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gold text-black px-8 py-3 rounded-sm font-bold hover:bg-white transition-colors"
              >
                Book Consultation
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-sm font-bold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Calculate Points
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}