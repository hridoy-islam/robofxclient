"use client";

import { 
  ShieldCheck, 
  Globe, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

// Keeping only Layout imports. 
// If you don't have these, you can remove them or replace with a simple <div>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb"; 

export default function AboutPage() {
  
  // Data for the page sections
  const stats = [
    { label: "Visa Approvals", value: "15,000+", icon: <ShieldCheck className="w-6 h-6 text-gold" /> },
    { label: "Success Rate", value: "98.5%", icon: <Award className="w-6 h-6 text-gold" /> },
    { label: "Years Experience", value: "12+", icon: <Lightbulb className="w-6 h-6 text-gold" /> },
    { label: "Global Partners", value: "50+", icon: <Globe className="w-6 h-6 text-gold" /> },
  ];

  const values = [
    {
      title: "Integrity First",
      description: "We navigate complex legal frameworks with absolute transparency and ethical standards.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Client-Centric",
      description: "Your journey is unique. We tailor every strategy to your specific personal or business goals.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Global Vision",
      description: "We see beyond borders, connecting talent and businesses to opportunities worldwide.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-primary font-sans text-white selection:bg-gold selection:text-primary">
      <Header />

      {/* 1. Hero / Breadcrumb Section */}
      {/* If you don't have the BreadCumb component, you can replace this with a standard div */}
      <BreadCumb
        title="About Visara"
        subtitle="Bridging borders, building futures."
      />

      {/* 2. Introduction Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary-light rounded-full blur-3xl opacity-30 -translate-x-1/2" />
        
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 relative z-10">
              <span className="text-gold font-bold tracking-widest uppercase text-xs">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-light leading-tight">
                Architects of <span className="font-bold text-gold">Global Mobility</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Founded on the belief that talent and opportunity should not be limited by geography, Visara has established itself as a premier consultancy for visa, residency, and citizenship solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                From individual skilled migration to complex corporate relocation strategies, we combine legal expertise with a personal touch to ensure your transition is seamless.
              </p>
              
              
            </div>

            {/* Image Placeholder / Abstract Graphic */}
            <div className="relative">
  <div className="aspect-[4/3] bg-primary-light rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl shadow-black/30 group">
    {/* Image now correctly covers the container */}
    <img src="/b2.jpg" alt="A professional team working on global mobility" className="w-full h-full object-cover" />
  </div>
  
  {/* Decorative Box (Visara Context) */}
  <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-lg max-w-xs z-30 hidden md:block">
    <p className="text-primary font-bold text-2xl">10k+</p>
    {/* Assuming primary-dark is defined in your theme to provide sufficient contrast on the gold background */}
    <p className="text-primary-dark text-sm font-medium">Successful Applications Processed</p>
  </div>
</div>
          </div>
        </div>
      </section>



      {/* 4. Mission & Vision */}
      <section className="py-24 relative">
         <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-light mb-4">Driven by <span className="text-gold font-semibold">Purpose</span></h2>
               <p className="text-gray-400 font-light">Our goal is to simplify the complex world of immigration law for individuals and corporations alike.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {values.map((item, index) => (
                  <div key={index} className="bg-primary-light/50 p-8 rounded-xl border border-white/5 hover:border-gold/30 hover:bg-primary-light transition-all duration-300 group">
                      <div className="mb-6 bg-primary w-16 h-16 rounded-lg flex items-center justify-center text-gold shadow-inner shadow-white/5 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Our Approach / Steps */}
      <section className="py-24 bg-gradient-to-b from-primary-light to-primary relative border-t border-white/5">
        <div className="container mx-auto ">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="space-y-10">
                      {/* Step 1 */}
                      <div className="flex gap-5">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-primary font-bold">1</div>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold text-white mb-2">Assessment & Strategy</h3>
                              <p className="text-gray-400 font-light text-sm">We analyze your profile against current regulations to identify the most viable visa or residency pathways.</p>
                          </div>
                      </div>
                      {/* Step 2 */}
                      <div className="flex gap-5">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-8 h-8 rounded-full bg-primary-lighter border border-gold/50 flex items-center justify-center text-gold font-bold">2</div>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold text-white mb-2">Documentation & Filing</h3>
                              <p className="text-gray-400 font-light text-sm">Our legal team compiles, reviews, and submits your application with precision to minimize delays.</p>
                          </div>
                      </div>
                      {/* Step 3 */}
                      <div className="flex gap-5">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-8 h-8 rounded-full bg-primary-lighter border border-gold/50 flex items-center justify-center text-gold font-bold">3</div>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold text-white mb-2">Approval & Settlement</h3>
                              <p className="text-gray-400 font-light text-sm">Beyond the visa, we assist with landing services, compliance, and settling into your new environment.</p>
                          </div>
                      </div>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2">
                  <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Our Process</span>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                    A streamline journey to <br />
                    <span className="font-bold">Your Destination</span>
                  </h2>
                  <p className="text-gray-400 font-light mb-8">
                    Immigration procedures can be daunting. We break them down into a clear, manageable three-step process designed to give you peace of mind.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold mr-3" /> 24/7 Case Tracking
                     </li>
                     <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold mr-3" /> Dedicated Case Manager
                     </li>
                     <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold mr-3" /> Flat-fee Transparency
                     </li>
                  </ul>
               </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}