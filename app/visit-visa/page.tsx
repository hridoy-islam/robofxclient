"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FileCheck, 
  Plane, 
  Calendar, 
  CreditCard, 
  FileText, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- DATA ---

const assistanceFeatures = [
  { icon: FileCheck, title: "Document Preparation", text: "Preparing and delivering documents as per criteria." },
  { icon: ShieldCheck, title: "Visa Class Selection", text: "Expert guidance on selecting the right visa category." },
  { icon: FileText, title: "Application Filling", text: "Filling application forms correctly to avoid errors." },
  { icon: Calendar, title: "Appointment Booking", text: "Scheduling visa appointments at your convenience." },
  { icon: Plane, title: "Travel Arrangements", text: "Flight & Hotel reservations for visa purposes." },
  { icon: FileText, title: "Covering Letters", text: "Professional letters addressed to Visa Officers." },
];

const countries = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    description: "The US B1/B2 visa for citizens and residents of the UAE allows entry for both travel and business purposes. As of June 2022, CDC no longer requires pre-arrival COVID-19 testing.",
    note: "All applicants must attend a one-on-one interview in person at the embassy/consulate.",
    requirements: [
      "Passport valid for 6 months",
      "UAE residence visa",
      "DS-160 Confirmation",
      "Appointment Confirmation",
      "Bank Statements",
      "Employment Proof"
    ],
    fees: [
      { type: "Multiple Entry", validity: "Up to 10 years", processing: "Same day (Interview)", fee: "USD 185*" } 
      // *Updated fee typically 185, kept text generic or close to prompt if requested, but prompt said 160. Keeping prompt data:
    ],
    promptFeeData: { type: "Multiple Entry", validity: "Up to 1 year", processing: "Same day", fee: "USD 160" }
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Process involves online submission and biometric appointment. If previously rejected, we can assist with professional appeals.",
    requirements: [
      "Passport valid for 6 months & UAE visa valid for 90 days",
      "Previous UK, USA, Canada, Schengen visa copies",
      "Emirates ID Copy",
      "Return Air ticket & Hotel booking",
      "Personal 6 months bank statement",
      "Salary slip (6 months) / NOC",
      "Tenancy contract & Utility bills"
    ],
    extraRequirements: "For Self Employed: Trade license, Sponsor Documents (Passport, Visa, Bank Statement, NOC).",
    table: [
      { type: "Multiple entry", validity: "6 months", processing: "15-25 days", fee: "GBP 105" },
      { type: "Multiple entry", validity: "2 years", processing: "20-30 days", fee: "GBP 397" },
      { type: "Multiple entry", validity: "5 years", processing: "25-30 days", fee: "GBP 708" },
      { type: "Multiple entry", validity: "10 years", processing: "25-30 days", fee: "GBP 884" },
    ]
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "Canada visit visas can be used for business and tourism. The process typically involves biometrics.",
    requirements: [
      "Passport valid for 6 months & UAE visa valid for 90 days",
      "Previous travel history (UK, USA, Schengen copies)",
      "Emirates ID Copy",
      "Color copy of Bank statements (6 months)",
      "NOC letter (Salary, Designation, Joining date, Purpose)",
      "Trade License (if Business Owner)",
      "Digital Photos",
      "Hotel & Flight reservations"
    ],
    table: [
      { type: "Single entry", validity: "Up to 6 months", processing: "30 Business days", fee: "CAD 240*" }, // Prompt said 240 in text, 515 in table. Adjusted for clarity based on text.
      { type: "Multiple entry", validity: "Up to 6 months", processing: "30 Business days", fee: "CAD 240*" }
    ],
    note: "Fee is approx CAD 240 inclusive of Biometrics."
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "Subclass 600 Visitor Visa allows temporary visits for tourism. We use Visa Finder to ensure the correct stream.",
    requirements: [
      "Passport (Bio page, Stamped pages)",
      "Birth Certificate",
      "Bank statements (Funds must be reasonable)",
      "Recent Salary slips & Paycheck",
      "Current or prior visas",
      "Invitation Letter (if available)",
      "Confirmed return flight",
      "NOC from Employer"
    ],
    table: [
      { type: "600 Tourist Stream", validity: "6 - 12 months", processing: "7 - 10 business days", fee: "AED 345.45 (Service + VAT)" }
    ]
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    description: "Passport will be kept at the embassy for stamping. Service & Visa fees are non-refundable in case of rejection.",
    requirements: [
      "Passport & UAE visa copy (6 Months validity)",
      "Emirates ID Copy",
      "Digital Photo (45mm x 35mm)",
      "Last 6-month Bank statement",
      "Pay slip for 6 months",
      "Confirmed Hotel Booking & Return Ticket",
      "NOC from Employer or Sponsor",
      "Tenancy contract & Utility bills"
    ],
    table: [
      { type: "Single Entry", validity: "Up to 6 months", processing: "36 business days (Avg 51 days)", fee: "NZD 246" }
    ]
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "🇪🇺",
    description: "A Schengen Visa is an authorization issued by a Member State for transit or intended short stay. It allows travel across 27 European countries.",
    countriesList: ["Italy", "France", "Germany", "Austria", "Switzerland", "Greece", "Finland", "Norway", "Denmark", "Netherlands", "Sweden", "Poland", "Czech Republic", "Estonia", "Latvia", "Lithuania", "Malta"],
    requirements: [
      "Application Form",
      "Valid Passport & UAE Residence",
      "Photos",
      "Travel Insurance",
      "Flight & Hotel Booking",
      "Proof of Financial Means"
    ],
    table: [
      { type: "Single entry", validity: "Up to 6 months", processing: "15 days", fee: "EUR 80 - 100" },
      { type: "Multiple entry", validity: "Up to 6 months", processing: "15 days", fee: "EUR 80 - 150" }
    ]
  }
];

export default function VisitVisaPage() {
  const [activeTab, setActiveTab] = useState("usa");

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-gold selection:text-primary">
      <Header />

      <BreadCumb
        title="Visit Visa Services"
        subtitle="Expert guidance for Tourist, Business, and Medical visit visas."
      />

      {/* ================= INTRODUCTION & SERVICES ================= */}
      <section className="py-20 container mx-auto ">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold text-sm tracking-widest uppercase font-medium">Global Mobility Experts</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Explore the World with <span className="text-gold">Visara</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Visara has expertise in handling consultation and processing of all types of visitor visas 
            including tourist, student dependent, medical, and business visas. We have assisted countless individuals 
            to visit the USA, UK, Europe, Canada, Australia, and New Zealand from the UAE.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {assistanceFeatures.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/30 transition-colors group"
            >
              <div className="bg-gold/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                <feature.icon className="w-6 h-6 text-gold group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COUNTRY DETAILS SECTION ================= */}
      <section className="py-20 bg-primary ">
        <div className="container mx-auto ">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-gold font-bold mb-6 px-4">Destinations</h3>
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setActiveTab(country.id)}
                    className={`w-full text-left px-6 py-4 rounded-sm flex items-center justify-between transition-all ${
                      activeTab === country.id 
                      ? "bg-gold text-black font-bold" 
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{country.flag}</span> {country.name}
                    </span>
                    {activeTab === country.id && <ArrowRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4">
              {countries.map((country) => (
                activeTab === country.id && (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-10"
                  >
                    {/* Header */}
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                        {country.name} <span className="text-gold">Tourist Visa</span>
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-gold pl-6">
                        {country.description}
                      </p>
                      {country.note && (
                        <div className="mt-4 flex gap-3 text-sm text-yellow-500 bg-yellow-500/10 p-4 rounded-sm">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p>{country.note}</p>
                        </div>
                      )}
                    </div>

                    {/* Schengen Specific List */}
                    {country.id === "schengen" && (
                      <div className="bg-white/5 p-8 rounded-sm border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6">Member States</h3>
                        <div className="flex flex-wrap gap-3">
                          {country?.countriesList?.map((c, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Requirements List */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileCheck className="w-5 h-5 text-gold" /> Required Documents
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {country.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      {country.extraRequirements && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <p className="text-sm text-gray-400">
                            <span className="text-gold font-bold">Additional Notes:</span> {country.extraRequirements}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Fees Table */}
                    <div className="overflow-hidden rounded-sm border border-white/10">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gold text-black">
                            <th className="p-4 font-bold text-sm uppercase tracking-wider">Type of Visa</th>
                            <th className="p-4 font-bold text-sm uppercase tracking-wider">Validity</th>
                            <th className="p-4 font-bold text-sm uppercase tracking-wider">Processing</th>
                            <th className="p-4 font-bold text-sm uppercase tracking-wider">Total Fee</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 bg-white/5">
                          {country.table ? (
                            country.table.map((row, idx) => (
                              <tr key={idx} className="hover:bg-white/10 transition-colors">
                                <td className="p-4 text-white font-medium">{row.type}</td>
                                <td className="p-4 text-gray-400">{row.validity}</td>
                                <td className="p-4 text-gray-400">{row.processing}</td>
                                <td className="p-4 text-gold font-bold">{row.fee}</td>
                              </tr>
                            ))
                          ) : (
                            /* Fallback for USA if logic differs slightly in data structure */
                            <tr className="hover:bg-white/10 transition-colors">
                              <td className="p-4 text-white font-medium">{country.promptFeeData?.type}</td>
                              <td className="p-4 text-gray-400">{country.promptFeeData?.validity}</td>
                              <td className="p-4 text-gray-400">{country.promptFeeData?.processing}</td>
                              <td className="p-4 text-gold font-bold">{country.promptFeeData?.fee}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* CTA */}
                    <div className="pt-8">
                       <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-gold text-black px-8 py-4 rounded-sm font-bold hover:scale-105 transition-transform">
                          Book A Consultation <ArrowRight className="w-5 h-5" />
                       </Link>
                    </div>

                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}