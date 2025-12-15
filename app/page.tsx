"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  MapPin,
  Trophy,
  Users,
  ShieldCheck,
  FileCheck,
  Briefcase,
  GraduationCap,
  Building2,
  Plane,
  Quote,
  Star,
} from "lucide-react";

// Assuming you have these external layout components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const countries = [
  {
    name: "Canada",
    description: "Express Entry, Provincial Nomination, and Pilot Programs.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2565&auto=format&fit=crop",
  },
  {
    name: "Australia",
    description:
      "Skilled migration, state sponsorship, and employer nomination.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "United Kingdom",
    description:
      "Global Talent Visa, Skilled Worker, and Innovator Founder routes.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "New Zealand",
    description:
      "Green List pathways, Skilled Migrant Category, and work visas.",
    image:
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2670&auto=format&fit=crop", // Updated: Mount Cook Road
  },
  {
    name: "USA",
    description:
      "H-1B, Green Card, EB-5 Investor Visa, and Family Sponsorship.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2670&auto=format&fit=crop",
  },
];
const stats = [
  { icon: Trophy, value: "99%", label: "Success Rate" },
  { icon: FileCheck, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "5", label: "Licensed Advisers" },
  { icon: ShieldCheck, value: "100%", label: "Ethical Practices" },
];

const services = [
  {
    title: "Work Visa",
    icon: Briefcase,
    text: "Job Seeker & Work Visas grant entry for professionals to find jobs and contribute to the economy.",
  },
  {
    title: "Student Visa",
    icon: GraduationCap,
    text: "Required for individuals pursuing higher education at universities and colleges abroad.",
  },
  {
    title: "Business Visa",
    icon: Building2,
    text: "Issued for organizational purposes, granting access for individuals to attend to business matters abroad.",
  },
  {
    title: "Visit Visa",
    icon: Plane,
    text: "Non-immigrant visas that enable foreign citizens to travel abroad for leisure and tourism.",
  },
];

const reviews = [
  {
    name: "Elena Rodriguez",
    origin: "Spain",
    destination: "Canada",
    type: "Work Permit",
    image: "https://i.pravatar.cc/150?u=elena", // Replace with your local images
    quote:
      "The team at Visara made my transition seamless. They handled the LMIA process with such professionalism that I didn't have to worry about a thing.",
  },
  {
    name: "Ahmed Hassan",
    origin: "UAE",
    destination: "UK",
    type: "Innovator Founder",
    image: "https://i.pravatar.cc/150?u=ahmed",
    quote:
      "I was unsure about the business regulations in the UK, but their consultation was precise. I got my endorsement faster than I ever expected.",
  },
  {
    name: "Priya Sharma",
    origin: "India",
    destination: "Australia",
    type: "Student Visa",
    image: "https://i.pravatar.cc/150?u=priya",
    quote:
      "From university selection to visa filing, the guidance was top-notch. I'm now happily studying at my dream university in Melbourne.",
  },
];

export default function Page() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className=" bg-primary text-white selection:bg-gold selection:text-black overflow-hidden">
      <Header />

      <Hero />

      {/* ================= DESTINATIONS SECTION ================= */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold text-md tracking-[0.2em] uppercase font-medium">
                Work, Study, Live
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Select Your{" "}
                <span className="text-gold ">Dream Destination</span>
              </h2>
              <p className="text-gray-300  text-md leading-relaxed">
                We provide solutions for all your immigration requirements based
                on our many years of experience. Whether to immigrate to Canada,
                Australia, the USA, the UK, or New Zealand, we will help you
                choose the best pathway.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors">
              <Link
                href="/migrate"
                className="flex items-center gap-2 text-white "
              >
                View All Countries <ArrowRight className="w-4 h-4" />
              </Link>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/55" />

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" /> {country.name}
                  </h3>
                  <p className="text-gray-300 text-md mb-6 line-clamp-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {country.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-md font-semibold uppercase tracking-wider">
                    Apply Now{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 uppercase tracking-widest text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT / WHO WE ARE SECTION ================= */}
      <section className="py-24 bg-primary relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-gold text-md tracking-[0.2em] uppercase font-medium">
                  Discover
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                  Who we are & <br />
                  <span className="text-gold  ">What we do</span>
                </h2>
              </div>

              <p className="text-gray-300  leading-relaxed text-md">
                We are a UAE based immigration consultancy firm, with more than
                15 years of experience in the Migration Industry. We assist with
                obtaining Australian, Canadian and New Zealand Visa Documents.
              </p>

              <p className="text-gray-300 leading-relaxed text-md">
                Visara caters to individual needs of our clients, working
                alongside reputed and licensed Immigration Advisors and
                Attorneys from Australia, New Zealand, Canada and USA. We take
                great responsibility in providing you with professional
                immigration services.
              </p>

              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-4 hover:bg-white/5 transition-colors uppercase tracking-wider text-md font-medium"
                >
                  About Visara <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold blur-[120px] opacity-10" />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop"
                alt="Consultation"
                className="relative z-10 w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VISA SERVICES SECTION ================= */}
      <section className="py-24 bg-primary relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-md tracking-[0.2em] uppercase font-medium">
              Get To Know Your Visa
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Types of Visa Options
            </h2>
            <p className="text-gray-300 leading-relaxed text-md">
              We offer expert consultation for all types of visas – Student,
              Business, Job, and Tourist. Our team of certified professionals
              are dedicated to guiding you through each step of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-colors group"
              >
                <service.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-md  mb-6 h-20">
                  {service.text}
                </p>
                <button className="flex items-center gap-2 text-gold text-md font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-primary relative">
        {/* Decorative background text */}
        <div className="absolute top-10 left-0 text-[15vw] lg:text-[200px] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
          STORIES
        </div>

        <div className="container mx-auto mb-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div>
              <span className="text-gold text-md tracking-[0.2em] uppercase font-medium">
                Client Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                We Don't Sugarcoat!
              </h2>
              <p className="text-gray-300 mt-2 text-md">
                Read our client success stories globally.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="hidden md:flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
            >
              View All Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Changed from Flex/Overflow to Grid */}
        <div className="container mx-auto pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((story, idx) => (
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
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-colors shrink-0">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {story.name}
                    </h4>
                    <div className="flex items-center gap-1 text-md text-gray-300 mt-1">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{story.origin}</span>
                      <ArrowRight className="w-3 h-3" />
                      <span>{story.destination}</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-white/5 text-gold text-xs px-3 py-1 rounded-full border border-white/10 group-hover:bg-gold/10 transition-colors">
                    {story.type}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex-grow">
                  <p className="text-gray-300 text-md leading-relaxed  relative">
                    <span className="text-gold text-2xl absolute -top-3 -left-2 opacity-30">
                      "
                    </span>
                    {story.quote}
                    <span className="text-gold text-2xl absolute -bottom-4 -right-2 opacity-30">
                      "
                    </span>
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
        </div>

        {/* Mobile View All Link (Visible only on small screens) */}
        <div className="flex justify-center md:hidden pb-12">
          <Link
            href="/testimonials"
            className="flex items-center gap-2 text-gold border-b border-gold pb-1"
          >
            View All Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <section className="pb-16 container mx-auto bg-primary relative">
        <div className="bg-gradient-to-r from-gold/10 to-transparent p-10 rounded-sm border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Begin Your Global Journey?
            </h3>
            <p className="text-gray-300 text-md">
              Whether for study, business, or residency, our legal experts
              ensure a seamless path to your destination.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-gold hover:bg-white text-black hover:text-black font-bold px-8 py-3 rounded-sm transition-colors duration-300 whitespace-nowrap"
          >
            Start Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
