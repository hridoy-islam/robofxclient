"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Globe2, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Scale, 
  Briefcase,
  ChevronDown,
  ChevronUp,
  User
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Visa Types ---
const visaTypes = [
  {
    id: "eb1a",
    title: "EB1A Visa",
    subtitle: "Extraordinary Ability",
    description: "A prestigious green card for individuals demonstrating extraordinary ability in sciences, arts, education, business, or athletics. No employer sponsorship is required.",
    benefits: [
      "Self-petition: No employer needed",
      "Permanent residency for you & dependents",
      "Expedited processing options available"
    ],
    icon: Award
  },
  {
    id: "eb2",
    title: "EB2 NIW Visa",
    subtitle: "National Interest Waiver",
    description: "Designed for exceptional professionals whose work has a substantial impact on U.S. national interests. Allows self-petition without labor certification.",
    benefits: [
      "Ideal for researchers & scientists",
      "Flexible qualifications",
      "No employer or job offer required"
    ],
    icon: Globe2
  }
];

// --- DATA: Requirements Comparison ---
const requirements = [
  {
    title: "EB1A Requirements",
    points: [
      "Demonstrated extraordinary ability in sciences, arts, business, or athletics.",
      "Must meet at least 3/10 criteria (e.g., Awards, Associations, Leading Roles).",
      "Significant contributions (patents, innovations, scholarly articles).",
      "Evidence of high salary or commercial success in performing arts."
    ]
  },
  {
    title: "EB2 NIW Requirements",
    points: [
      "Advanced Degree (Master’s or equivalent) OR Exceptional Ability.",
      "Proposed endeavor has substantial merit and national importance.",
      "Applicant is well-positioned to advance the proposed endeavor.",
      "Beneficial to the U.S. to waive the job offer/labor certification."
    ]
  }
];

// --- DATA: Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "File I-140 Petition",
    desc: "Submit comprehensive evidence proving eligibility (awards, achievements, contributions) to USCIS."
  },
  {
    step: "02",
    title: "Processing",
    desc: "Wait for approval. Premium processing takes ~15 days; Regular processing takes 8–10 months."
  },
  {
    step: "03",
    title: "Adjustment of Status",
    desc: "Once approved and priority date is current, file for residency (Green Card) processing."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Who can apply for EB1A and EB2 NIW visas?",
    answer: "Anyone meeting the required qualifications can apply. EB1A focuses on individuals with extraordinary global talent, while EB2 NIW benefits professionals whose specific work has intrinsic national importance to the United States."
  },
  {
    question: "Do I need a U.S. employer to apply?",
    answer: "No. Both EB1A and EB2 NIW allow for 'Self-Petitioning,' meaning you do not need a specific job offer or a U.S. employer to sponsor your application."
  }
];

export default function WorkInUSA() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Work in the USA"
        subtitle="Pathways to the American Dream for Extraordinary Professionals."
        backgroundImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2670&auto=format&fit=crop" 
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Employment-Based Green Cards
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Advance Your Career in the <span className="text-gold">United States</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The United States offers diverse opportunities for professionals to make a global impact. 
              Whether you’re an individual of extraordinary ability or a professional contributing to the national interest, 
              the <strong>EB1A</strong> and <strong>EB2 NIW</strong> visa categories provide pathways to work, reside, and thrive in the USA.
            </p>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-sm overflow-hidden border border-white/10">
             <Image 
               src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop" 
               alt="USA City" 
               fill 
               className="object-cover" 
             />
             <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>

        {/* Visa Types Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {visaTypes.map((visa, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold transition-colors">
                  <visa.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{visa.title}</h3>
                  <p className="text-gold text-sm uppercase tracking-wider">{visa.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 min-h-[80px]">{visa.description}</p>
              <ul className="space-y-3 mb-8">
                {visa.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 border border-white/20 rounded-sm hover:bg-gold hover:text-black hover:border-gold font-bold transition-all"
              >
                Check My Eligibility
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DETAILED REQUIREMENTS --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed <span className="text-gold">Requirements</span></h2>
            <p className="text-gray-400">Understanding the criteria for approval.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {requirements.map((req, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-8 rounded-sm border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-gold/30 pb-4">{req.title}</h3>
                <ul className="space-y-4">
                  {req.points.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <Scale className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION PROCESS --- */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The Application <span className="text-gold">Process</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-white/10 -z-0" />
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-primary border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-gold shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      {/* <section id="application-form" className="py-24 container mx-auto ">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-gold/30 rounded-sm p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Apply Now</h2>
            <p className="text-gray-400">If you meet the above criteria, submit your details for a preliminary assessment.</p>
          </div>

          <form className="space-y-6">
            
           
            <div className="space-y-2">
              <label className="text-sm font-bold text-gold uppercase tracking-wider">Select Your Program</label>
              <select className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none transition-colors">
                <option value="" disabled selected>Please Select Your Program</option>
                <option value="eb1a">EB1A Visa: Extraordinary Ability Green Card</option>
                <option value="eb2">EB2 NIW Visa: National Interest Waiver</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
             
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Highest Qualification</label>
                <select className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none">
                  <option value="" disabled selected>Select Qualification</option>
                  <option value="phd">PhD / Doctorate</option>
                  <option value="masters">Masters</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>

             
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Occupation</label>
                <input 
                  type="text" 
                  placeholder="e.g. Software Engineer"
                  className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Contributions / Awards / Recognitions</label>
              <textarea 
                rows={4}
                placeholder="Briefly list your key achievements, patents, or awards..."
                className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
             
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Work Experience (Years)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 5"
                  className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
                />
              </div>

             
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
             
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
                />
              </div>
              
              
               <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Nationality</label>
                <select className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none">
                  <option value="" disabled selected>Select Nationality</option>
                  <option value="in">India</option>
                  <option value="cn">China</option>
                  <option value="ph">Philippines</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Resident Country</label>
                <select className="w-full bg-primary border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none">
                  <option value="" disabled selected>Select Resident Country</option>
                  <option value="uae">UAE</option>
                  <option value="sl">Sri Lanka</option>
                  <option value="in">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            
            <div className="flex items-center gap-3 pt-4">
              <input type="checkbox" id="privacy" className="w-5 h-5 accent-gold cursor-pointer" />
              <label htmlFor="privacy" className="text-sm text-gray-400 cursor-pointer">
                I have read and agree to the <span className="text-gold underline">Privacy Policy</span>.
              </label>
            </div>

            <button className="w-full bg-gold text-black font-bold py-4 rounded-sm hover:bg-white hover:scale-[1.01] transition-all text-lg uppercase tracking-widest mt-6">
              Submit Application
            </button>
          </form>
        </div>
      </section> */}

      {/* --- HOW WE HELP & FAQ --- */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container mx-auto  flex flex-col lg:flex-row gap-16">
          
          {/* How we help */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">How <span className="text-gold">Visara</span> Can Help</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Visara, we specialize in high-merit immigration cases. We assess your eligibility for EB1A or EB2 NIW, 
              guide you through the complex document preparation, and craft a compelling narrative to maximize your success.
            </p>
            <div className="bg-white/5 border-l-4 border-gold p-6">
              <p className="text-white italic">"We turn your professional achievements into a winning immigration strategy."</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/10 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
                  >
                    <span className="font-bold text-gray-200">{faq.question}</span>
                    {openFaq === idx ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gold" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 bg-black/20 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}