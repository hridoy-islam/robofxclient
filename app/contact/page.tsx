"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Send,
  Building2,
  Clock,
  MapPin,
  Globe,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      city: "Dubai",
      country: "UAE",
      address: "Park Lane Tower, Business Bay, Dubai",
      email: "dubai@cryptominerx.com",
      phone: "+971 54 281 9321",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "61 Robinson Road #13-01A, Robinson Centre",
      email: "asia@cryptominerx.com",
      phone: "+65 6789 0123",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "34A Jewry Street, Winchester, Hampshire",
      email: "uk@cryptominerx.com",
      phone: "+44 20 7123 4567",
    },
    {
      city: "New York",
      country: "USA",
      address: "530 Fifth Ave, New York, NY 10036",
      email: "usa@cryptominerx.com",
      phone: "+1 212 555 0199",
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Support",
      description: "For general inquiries and account support.",
      action: "support@cryptominerx.com",
      link: "mailto:support@cryptominerx.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our mining experts.",
      action: "+971 54 281 9321",
      link: "tel:+971542819321",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Live Chat",
      description: "Real-time assistance for urgent issues.",
      action: "Start Chat",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <BreadCumb
        title="Contact Us"
        subtitle="Global infrastructure, local support. Get in touch with our team."
      />

      {/* Intro & Quick Contact Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in touch with <span className="text-blue-600">CryptoMinerX</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Whether you are looking to start your first mining contract or build an 
              institutional-grade mining farm, our team is ready to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center transition-colors"
                >
                  {method.action} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Split: Form & Offices */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a message
                </h3>
                <p className="text-gray-500">
                  Our team typically responds within 2-4 business hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all">
                    <option value="">Select a topic...</option>
                    <option value="sales">Mining Farm Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 h-auto rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column: Global Presence */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Globe className="w-3 h-3" />
                  <span>Global Network</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit our offices
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                    

[Image of World Map with location pins]

                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  CryptoMinerX operates legally registered offices in major financial 
                  hubs, ensuring regulatory compliance and accessible support for our institutional clients.
                </p>
              </div>

              <div className="grid gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Building2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold text-gray-900">
                          {office.city}
                        </h4>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide border border-gray-100 px-2 py-1 rounded">
                          {office.country}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">
                        {office.address}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                        <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline font-medium">
                          {office.email}
                        </a>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Banner */}
              <div className="bg-gray-900 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-500/10 rounded-full">
                        <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">24/7 Priority Line</h4>
                        <p className="text-sm text-gray-400">For enterprise clients only</p>
                    </div>
                </div>
                <div className="text-lg font-mono font-bold text-red-400">
                    +971 54 281 9321
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}