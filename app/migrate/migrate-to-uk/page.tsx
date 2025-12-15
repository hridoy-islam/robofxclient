"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Briefcase, 
  Clock, 
  Users, 
  FileText,
  ArrowRight,
  Landmark
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Choose Visara ---
const features = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "We have been lodging visas for over a decade with combined experience in all matters related to UK immigration and nationality laws."
  },
  {
    icon: Briefcase,
    title: "Comprehensive Services",
    description: "From initial eligibility assessments to full application and appeal support. We assign a specialist caseworker tailored to your specific needs."
  },
  {
    icon: FileText,
    title: "Always Up To Date",
    description: "We stay ahead of volatile visa policy changes. No case is too complicated, ensuring your application is lodged to the highest standard."
  },
  {
    icon: Users,
    title: "Dedicated Advisor",
    description: "Work closely with an advisor to outline an action plan. Receive realistic advice on documents, evidence, and forms required for success."
  }
];

// --- DATA: Requirements ---
const requirements = [
  "You must be aged 18 or over",
  "Valid Certificate of Sponsorship (CoS) for the job",
  "Job offer must be a genuine vacancy",
  "Role must be at an appropriate skill level",
  "Salary must equal or exceed the general threshold and 'going rate'",
  "Sponsor must have paid the Immigration Skills Charge",
  "Demonstrate English proficiency (at least CEFR Level B1)",
  "Financial sustainability without public funds",
  "Provide a criminal record certificate",
  "Valid TB certificate (if applicable)"
];

const steps = [
  {
    id: 1,
    title: "Profile Submission",
    text: "Introduction and submission of your entire profile to designated employers through our Licensed recruitment partners based in the UK."
  },
  {
    id: 2,
    title: "Secure Placement",
    text: "Securing a placement from an Employer who is licensed by the UK Endorsed body."
  },
  {
    id: 3,
    title: "Visa Application",
    text: "Proceeding with the official Work Permit Visa application process under expert guidance."
  }
];

export default function MigrateToUK() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Immigrate to the UK"
        subtitle="Work, Study, and Live in the United Kingdom."
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop"
      />

      {/* --- INTRO & FEATURES --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Expert Guidance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-gold">Visara</span> for UK Visas?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you wish to immigrate to the UK to work, start your business, 
              join your family, or settle as a permanent resident, our team of specialists 
              have all the necessary expertise, knowledge, and competence to support you.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {/* Space for future imagery if needed */}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/40 transition-all group"
            >
              <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLED WORKER VISA SECTION --- */}
      <section className="py-20 bg-primary border-t border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2671&auto=format&fit=crop" // Big Ben / London
                  alt="UK Skilled Worker"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-4 text-gold">
                    <Landmark className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-white text-xl">Skilled Worker Visa</p>
                      <p className="text-xs uppercase tracking-wider text-gray-400">Points-Based System</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-bold uppercase tracking-wider text-sm mb-2 block">Pathway to PR</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                UK Skilled Worker <span className="text-gold">Visa</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Implemented on 1 January 2021, the Skilled Worker Visa allows employers to recruit 
                individuals of all nationalities to work in the UK in eligible skilled occupations. 
                This route can lead to Permanent Residency, and applicants can be joined by dependent 
                partners and children.
              </p>
              
              <div className="bg-white/5 border-l-2 border-gold p-6 mb-8 rounded-r-sm">
                <p className="text-gray-400 italic">
                  &quot;To secure a Skilled Worker Visa, an applicant will need to be sponsored to do a specific job, 
                  meeting the skill and salary requirements of employers licensed by the Home Office.&quot;
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Process Overview</h3>
                {steps.map((step) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-black font-bold flex items-center justify-center text-sm">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                 <Link href="/contact" className="inline-flex items-center gap-2 text-gold hover:text-white font-bold transition-colors border-b border-gold pb-1">
                    Check Eligibility Now <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto ">
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visa <span className="text-gold">Requirements</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                To qualify, you need to be sponsored by a UK-based employer and meet the specific criteria outlined by the Home Office.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {requirements.map((req, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-sm transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{req}</span>
                </motion.div>
              ))}
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
                Start Your UK Journey Today
              </h2>
              <p className="text-gray-300">
                Our experts are ready to guide you through the Skilled Worker Visa, Student Visa, 
                or Business immigration process with precision and care.
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