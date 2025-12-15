"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  GraduationCap,
  Flag,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";

// --- DATA: Benefits ---
const benefits = [
  {
    icon: Briefcase,
    title: "Right to Live & Work",
    description:
      "Permanent Residents are authorized to live and work in any region of the country, subject to specific exceptions.",
  },
  {
    icon: Users,
    title: "Family Relocation",
    description:
      "Permanent Residents are allowed to move with their entire family, including children and grandparents, to any location.",
  },
  {
    icon: GraduationCap,
    title: "Access to Social Benefits",
    description:
      "Children receive free world-class education, and immediate family members are eligible for state-sponsored healthcare.",
  },
  {
    icon: Flag,
    title: "Eligibility for Citizenship",
    description:
      "After residing as a Permanent Resident for just three years, you may apply for full Canadian citizenship.",
  },
];

// --- DATA: Programs ---
const programs = [
  {
    id: "express-entry",
    title: "Express Entry Program",
    subtitle: "Skilled Immigrant Pathway",
    image:
      "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?q=80&w=2670&auto=format&fit=crop", // Toronto City
    description:
      "The process of obtaining Permanent Residence in Canada through the skilled immigrant program is a popular and efficient method for those looking to live and work in the country. This pathway to PR is highly sought after, as it not only provides opportunities for the applicant but also contributes to Canada’s economy.",
    requirements: [
      "University or college degree",
      "Relevant work experience",
      "Good understanding of English and/or French",
    ],
  },
  {
    id: "pnp",
    title: "Provincial Nomination (PNP)",
    subtitle: "Regional Economic Pathway",
    image:
      "https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=2670&auto=format&fit=crop", // Banff / Nature
    description:
      "The Canada Provincial Nomination Program is a highly efficient and popular pathway for skilled immigrants seeking Permanent Residence. This application process allows provinces to nominate individuals who wish to immigrate to Canada and who are interested in settling in a particular province.",
    requirements: [
      "University or college degree",
      "Relevant work experience",
      "Moderate proficiency in English and/or French",
    ],
  },
  {
    id: "business",
    title: "Business Immigration",
    subtitle: "Investors & Entrepreneurs",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop", // Business Meeting
    description:
      "The Canada Business Immigration Program is an exceptional route for those looking to obtain Permanent Residence. With this program, you can immigrate to Canada with your family, work on a permit, start a business, and ultimately achieve PR.",
    requirements: [
      "No strict requirement to demonstrate language proficiency (Program dependent)",
      "Business ownership or management experience",
      "Investment capability",
    ],
  },
];

export default function MigrateToCanada() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary font-sans">
      <Header />

      <BreadCumb
        title="Immigrate to Canada"
        subtitle="Find out about the benefits, programs, and available job opportunities."
        backgroundImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2565&auto=format&fit=crop"
      />

      {/* --- WHY CHOOSE CANADA SECTION --- */}
      <section className="py-20 container mx-auto  relative">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="md:w-1/2">
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">
              Destination of Choice
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gold">Canada?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Canada is a welcoming country and home to many immigrants. With
              its high quality of life, cultural diversity, and great nature,
              Canada has established itself as one of the best countries in the
              world for immigrants.
            </p>
            <div className="h-1 w-20 bg-gold rounded-full" />
          </div>

          {/* Stats / Visual */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-sm text-center border border-white/10">
              <h3 className="text-3xl font-bold text-gold mb-1">Top 3</h3>
              <p className="text-xs text-gray-400 uppercase">Quality of Life</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm text-center border border-white/10">
              <h3 className="text-3xl font-bold text-gold mb-1">#1</h3>
              <p className="text-xs text-gray-400 uppercase">For Education</p>
            </div>
          </div>
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
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- IMMIGRATION PROGRAMS SECTION --- */}
      <section className="py-20 bg-primary  border-white/5">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Canada Immigration <span className="text-gold">Pathways</span>
            </h2>
            <p className="text-gray-400">
              Select the program that best fits your profile and professional
              goals.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-12 items-center bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-gold/20 transition-all`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-2/5 h-[300px] lg:h-[450px] relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute top-4 left-4 bg-gold px-3 py-1 text-black font-bold text-xs uppercase tracking-wider rounded-sm">
                    {program.id === "business"
                      ? "Investment"
                      : "Skilled Worker"}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-3/5 p-8 lg:p-12">
                  <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
                    {program.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="mb-8 bg-black/30 p-6 rounded-sm border-l-2 border-gold">
                    <h4 className="text-white font-bold mb-3 text-sm uppercase">
                      Key Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {program.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm font-bold hover:bg-gold transition-colors"
                  >
                    Book a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto">
  <div className="mx-auto bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-sm border border-gold/30">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      
      {/* Text */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Start Your Canadian Journey Today
        </h2>
        <p className="text-gray-300">
          Our experts are ready to guide you through the Express Entry, PNP,
          or Business immigration process with precision and care.
        </p>
      </div>

      {/* Button */}
      <div className="shrink-0">
        <Link
          href="/contact"
          className="bg-gold text-black px-10 py-4 rounded-sm font-bold hover:bg-white transition-colors"
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
