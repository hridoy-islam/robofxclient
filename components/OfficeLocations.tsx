"use client";
import { MapPin, Building2, Globe } from "lucide-react";

export default function OfficeLocations() {
  const locations = [
    {
      name: "Dubai",
      country: "United Arab Emirates",
      address: "Park Lane Tower Business Bay, Dubai UAE",
      phone: "+971542819321",
      email: "dubai@robofx.com",
      timezone: "GMT+4",
      description: "Middle East Hub",
      position: "top-1/4 right-1/3",
      features: ["24/7 Support", "Local Expertise", "Arabic Support"],
      gradient: "from-orange-500 to-red-500",
      mapPosition: { top: "47%", left: "51%" },
    },
    {
      name: "Singapore",
      country: "Singapore",
      address:
        "Business Office Services, 61 Robinson Road #13-01A, Robinson Centre",
      phone: "+65-XXXX-XXXX",
      email: "singapore@robofx.com",
      timezone: "GMT+8",
      description: "Asia-Pacific Center",
      position: "top-1/2 right-1/4",
      features: ["Multi-Currency", "Regional Markets", "Expert Analysis"],
      gradient: "from-blue-500 to-purple-500",
      mapPosition: { top: "61%", left: "76%" },
    },
    {
      name: "Malaysia",
      country: "Malaysia",
      address: "Menara HLX, KL City Centre, KLCC, Kuala Lumpur, Bukit Bintang",
      phone: "+60-XXX-XXX-XXXX",
      email: "malaysia@robofx.com",
      timezone: "GMT+8",
      description: "Southeast Asia Gateway",
      position: "top-1/3 left-1/4",
      features: [
        "Malaysian Support",
        "Regional Integration",
        "Live Trading Workshops",
      ],
      gradient: "from-indigo-500 to-cyan-500",
      mapPosition: { top: "58.5%", left: "68%" },
    },
    {
      name: "United Kingdom",
      country: "United Kingdom",
      address: "34A Jewry Street, Winchester, Hampshire SO23",
      phone: "+44-XXX-XXX-XXXX",
      email: "uk@robofx.com",
      timezone: "GMT+0",
      description: "European Operations",
      position: "top-1/4 left-1/3",
      features: [
        "European Markets",
        "Regulatory Compliance",
        "Multi-Language Support",
      ],
      gradient: "from-green-500 to-blue-500",
      mapPosition: { top: "34%", left: "36.5%" },
    },
    {
      name: "United States",
      country: "United States",
      address: "530 Fifth Ave, New York, NY 10036",
      phone: "+1-XXX-XXX-XXXX",
      email: "usa@robofx.com",
      timezone: "GMT-5",
      description: "North America Headquarters",
      position: "top-1/3 left-1/2",
      features: [
        "US Market Access",
        "Regulatory Standards",
        "English & Spanish Support",
      ],
      gradient: "from-red-600 to-blue-600",
      mapPosition: { top: "42%", left: "19%" },
    },
  ];

  return (
    <section className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(102,126,234,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">Global Network</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our <span className="text-blue-800">Worldwide</span>
            <br />
            Presence
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connect with our expert teams across three continents for
            personalized support and local market expertise.
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative h-[32rem] rounded-3xl overflow-hidden border border-slate-700/50">
          {/* 📍 Realistic World Map Background */}
          <img
            src="/map.png" // Use your desired map: PNG, SVG, or WebP
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 🔲 Optional Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(102,126,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(102,126,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

          {/* 📌 Location Pins */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute group cursor-pointer"
              style={{
                top: location.mapPosition.top,
                left: location.mapPosition.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Pin */}
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-primary rounded-full animate-ping"></div>
              </div>

              {/* Location Name */}
              <div className="text-white font-bold text-sm mt-1 text-center">
                {location.name}
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="glass rounded-xl p-3 min-w-48 max-w-xs text-sm">
                  <div className="text-white font-semibold">
                    {location.name}
                  </div>
                  <div className="text-slate-300">{location.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/30 card-hover hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-slate-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location.country}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${location.gradient} rounded-2xl flex items-center justify-center`}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {location.address}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {location.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
