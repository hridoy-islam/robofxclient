"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Lightbulb, 
  Briefcase, 
  GraduationCap, 
  Landmark, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Why Study in USA ---
const benefits = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Home to the Ivy League and top-ranked global institutions, the U.S. offers flexible curriculums and world-renowned research facilities."
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    desc: "Through OPT (Optional Practical Training) and CPT, students can gain up to 12-36 months of work experience in their field after graduation."
  },
  {
    icon: Globe,
    title: "Cultural Diversity",
    desc: "The U.S. is a melting pot of cultures. Universities host diverse student bodies, offering a rich exchange of traditions and global perspectives."
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    desc: "From Silicon Valley to Wall Street, studying in the U.S. places you at the center of global innovation, entrepreneurship, and industry trends."
  }
];

// --- DATA: Top Cities ---
const cities = [
  {
    name: "Boston",
    desc: "The 'Athens of America', known for its intense academic focus, hosting Harvard, MIT, and a massive student population.",
    image: "https://images.unsplash.com/photo-1630518328545-5e5ee3e91152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "New York City",
    desc: "The global center for finance, arts, and media. A fast-paced city offering unmatched networking opportunities and cultural experiences.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "San Francisco",
    desc: "The gateway to Silicon Valley. Ideal for students in tech and engineering who want to be near the world's biggest startups.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Chicago",
    desc: "A major economic hub with affordable living compared to the coasts, known for prestigious universities and stunning architecture.",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Los Angeles",
    desc: "The entertainment capital of the world. Offers a creative environment, sunny weather, and strong programs in arts and film.",
    image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Austin",
    desc: "A rapidly growing tech hub with a vibrant live music scene and a lower cost of living, hosting the University of Texas.",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2670&auto=format&fit=crop"
  }
];

// --- DATA: Universities ---
const universities = [
  "Harvard University",
  "Mass. Institute of Technology (MIT)",
  "Stanford University",
  "Columbia University",
  "University of California, Berkeley (UCB)",
  "University of California, Los Angeles (UCLA)",
  "New York University (NYU)",
  "University of Pennsylvania",
  "University of Chicago",
  "Yale University",
  "Princeton University",
  "Cornell University"
];

export default function StudyInUSA() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Study in the USA"
        subtitle="The Land of Opportunity and Academic Excellence."
        backgroundImage="https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2670&auto=format&fit=crop" // NYC Skyline
      />

      {/* --- WHY STUDY IN USA --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              The American Dream
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Choose the <span className="text-gold">USA?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The United States offers the world's most flexible and prestigious education system. With a focus on critical thinking, research, and practical application, a US degree is a global passport to career success.
            </p>
            <div className="relative h-64 w-full rounded-sm overflow-hidden border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop" // US Campus / College
                 alt="American University Campus"
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
              From the historic academic hubs of the East Coast to the tech-driven West Coast, discover the perfect environment for your studies.
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
                The <strong>F-1 Student Visa</strong> is the most common visa for international students. The process involves several key steps:
              </p>
              
              <div className="mb-6">
                 
              </div>

              <ul className="space-y-4">
                {[
                  "Acceptance at a SEVP-certified school (Form I-20)",
                  "Payment of the I-901 SEVIS Fee (~$350)",
                  "DS-160 Online Nonimmigrant Visa Application",
                  "Proof of financial stability (Bank Statements/Sponsorship)",
                  "Visa Interview at a US Embassy or Consulate",
                  "Strong ties to home country (intent to return)"
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
                <AlertTriangle className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-white">Student <span className="text-gold">Responsibilities</span></h2>
              </div>
              <p className="text-gray-300 mb-8">
                Maintaining your F-1 status is critical to remaining in the USA legally.
              </p>
              <div className="space-y-6 border-l-2 border-white/10 pl-6">
                <div>
                   <h4 className="font-bold text-white mb-2">Full-Time Enrollment</h4>
                   <p className="text-sm text-gray-400">You must enroll in a full course load (usually 12 credits for undergrads) during the academic year (Fall/Spring).</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Employment Rules</h4>
                   <p className="text-sm text-gray-400">You may work up to <strong>20 hours per week on-campus</strong> while school is in session. Off-campus work (CPT/OPT) requires specific authorization.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Reporting Changes</h4>
                   <p className="text-sm text-gray-400">You must report any change of address to your DSO (Designated School Official) within <strong>10 days</strong> of moving.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">Travel Signatures</h4>
                   <p className="text-sm text-gray-400">Before traveling internationally, ensure your Form I-20 has a valid travel signature from your DSO.</p>
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
             <h2 className="text-3xl font-bold text-white mb-4">Top US <span className="text-gold">Universities</span></h2>
             <p className="text-gray-400">The USA dominates global university rankings.</p>
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
                <h3 className="text-2xl font-bold text-white mb-2">Aiming for the Ivy League?</h3>
                <p className="text-gray-400 text-sm">Our counselors specialize in US university admissions and F-1 visa guidance.</p>
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