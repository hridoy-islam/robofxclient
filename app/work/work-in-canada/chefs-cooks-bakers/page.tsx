"use client";

import { motion } from "framer-motion";
import { 
  ChefHat, 
  UtensilsCrossed, 
  Coffee, 
  TrendingUp, 
  FileCheck, 
  Globe2,
  Users,
  Clock,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Program Highlights ---
const highlights = [
  {
    icon: TrendingUp,
    title: "130,000+ Vacancies",
    desc: "The food service industry is facing a massive labor shortage, doubling job vacancies post-pandemic."
  },
  {
    icon: Globe2,
    title: "Cultural Diversity",
    desc: "Canada's melting pot of cultures drives demand for diverse cuisines (Asian, Middle Eastern, Indian, etc)."
  },
  {
    icon: Users,
    title: "High Demand Roles",
    desc: "Chefs, Cooks, Bakers, and Food Service Supervisors are currently top targets for immigration intake."
  }
];

// --- DATA: Job Roles ---
const jobRoles = [
  { title: "Executive Chefs", icon: ChefHat },
  { title: "Sous Chefs", icon: ChefHat },
  { title: "Pastry Chefs", icon: UtensilsCrossed },
  { title: "Bakers", icon: UtensilsCrossed },
  { title: "Restaurant Managers", icon: Coffee },
  { title: "Food Service Supervisors", icon: Coffee },
];

// --- DATA: Eligibility Criteria ---
const criteria = [
  {
    category: "Experience",
    detail: "Minimum 2–3 years of highly relevant work experience (Supervisory role required for QSR streams).",
    icon: Clock
  },
  {
    category: "Education",
    detail: "Minimum Secondary School (Class 12). A Diploma in Hotel/Restaurant Management is a strong advantage.",
    icon: GraduationCap
  },
  {
    category: "Job Offer",
    detail: "A valid job offer from a Canadian employer, typically requiring a positive LMIA approval.",
    icon: FileCheck
  },
  {
    category: "Language",
    detail: "Proficiency in English. Minimum IELTS 5.0 overall (CLB 5: R-4, L-5, S-5, W-5).",
    icon: Globe2
  },
  {
    category: "Age Limit",
    detail: "Applicants generally must be under the age of 53 to maximize eligibility for work permits.",
    icon: Users
  }
];

export default function CulinaryProgramPage() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Culinary & QSR Program"
        subtitle="Immigration pathways for Chefs, Cooks, Bakers, and Food Service Supervisors."
        backgroundImage="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2670&auto=format&fit=crop" // Chef plating food
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
              In-Demand Occupations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Canada is Calling for <span className="text-gold">Culinary Talent</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Canada is facing a significant labor shortage in the culinary sector. With over <strong>130,000 vacancies</strong> reported in the food service industry, the country is actively targeting skilled workers to fill these gaps.
              </p>
              <p>
                Whether you are an experienced Chef specializing in international cuisine or a skilled Food Service Supervisor capable of managing fast-paced QSR operations, your skills are in high demand across Canadian cities.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
             {highlights.map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white/5 border border-white/10 p-6 rounded-sm flex gap-4 hover:border-gold/30 transition-all"
               >
                 <div className="bg-gold/10 p-3 h-fit rounded-full text-gold">
                   <item.icon className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </section>

      {/* --- JOB ROLES GRID --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Eligible <span className="text-gold">Job Roles</span></h2>
            <p className="text-gray-400">
              You can immigrate to Canada if you have experience in these key positions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {jobRoles.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary-light border border-white/10 p-8 rounded-sm text-center hover:bg-gold hover:text-black transition-all group cursor-default"
              >
                <role.icon className="w-10 h-10 mx-auto mb-4 text-gold group-hover:text-black transition-colors" />
                <h3 className="font-bold text-lg">{role.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto  relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-8">Eligibility <span className="text-gold">Criteria</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                To secure a Work Permit under the Culinary or Fast Food Worker streams, applicants must meet specific age, education, and experience thresholds.
              </p>
              
              <div className="space-y-6">
                {criteria.map((req, idx) => (
                  <div key={idx} className="flex gap-5 border-b border-white/5 pb-6 last:border-0">
                    <div className="w-12 h-12 shrink-0 bg-white/5 text-gold flex items-center justify-center rounded-sm">
                      <req.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{req.category}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{req.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
               <div className="relative h-full min-h-[500px] rounded-sm overflow-hidden border border-white/10 group">
                  <Image 
                    src="https://images.unsplash.com/photo-1651977560788-98792cd34da0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Kitchen Staff"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">QSR & Fast Food Program</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Canada is specifically targeting Quick Service Restaurant (QSR) supervisors and managers. 
                      With the inclusive, immigrant-friendly society of Canada exploring global cuisines, 
                      the demand for workers who can manage daily operations and customer service is skyrocketing.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
                      Apply for QSR Roles <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto ">
        <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Culinary Career in Canada
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              From the kitchen to the manager's office, Visara helps you navigate the LMIA process, 
              work permit applications, and documentation to ensure a smooth transition.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-black px-10 py-4 rounded-sm font-bold hover:bg-white transition-colors uppercase tracking-widest text-sm"
            >
              Book Consultation
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}