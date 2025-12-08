"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Headphones,
  RefreshCw,
  DollarSign,
  Bot,
  Shield,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  XCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function FeaturesPage() {
  const { openModal } = useModal();

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-blue-600" />,
      title: "CryptoMinerX EA System",
      description:
        "Complete EA ready for quick-installation. Includes a wizard that guides you through the simple configuration process. No additional skills required.",
      stats: "One-Click Setup",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      title: "Quick Strategy Guide",
      description:
        "Detailed guide to walk you through the best techniques. Maximize performance with our informative step-by-step strategy documentation.",
      stats: "Step-by-Step",
    },
    {
      icon: <Headphones className="w-6 h-6 text-sky-600" />,
      title: "24/7 Priority Support",
      description:
        "Our support desk is open 24/7. We pride ourselves on rapid follow-up, often answering questions within one business day.",
      stats: "< 24 Hours",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />,
      title: "Lifetime Updates",
      description:
        "Access to all future updates free of charge. We ensure you always have the latest technology to start trading effectively today.",
      stats: "Forever Free",
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Scientific Trading",
      description:
        "Removes human emotion. Flawlessly executes optimized strategies every second of every session. The disciplined way to trade Forex.",
      stats: "99.9% Accuracy",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-600" />,
      title: "Impulse Trading Levels",
      description:
        "Sets trades to take advantage of market volatility. Each trade can be configured based on your specific risk profile and strategy.",
      stats: "Real-Time",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-600" />,
      title: "Money Management",
      description:
        "Systematically tracks open positions and closes each at optimal profit levels to ensure sustainable growth and capital preservation.",
      stats: "Smart Exits",
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-600" />,
      title: "Bank-Level Security",
      description:
        "Protected with advanced security protocols, encrypted connections, and secure API integrations for complete peace of mind.",
      stats: "Encrypted",
    },
  ];

  const benefits = [
    "Fully automated trading system",
    "No trading experience required",
    "Works 24/7 without supervision",
    "Adapts to market conditions",
    "Multiple currency pair support",
    "Risk management built-in",
    "Real-time performance monitoring",
    "Lifetime customer support",
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      <Header />

      <BreadCumb
        title="Features"
        subtitle="Discover the powerful technology behind our automated trading solution"
      />

      {/* Intro & Benefits Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto  relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Powerful Features for {" "}
              <span className="text-gradient">Modern Traders</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Experience the power of advanced AI-driven trading. We combine precision engineering with user-friendly design to maximize your trading potential.
            </p>
          </div>

          {/* Benefits Grid - Minimal Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up animate-delay-200">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-glass group p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                    {feature.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-gradient">CryptoMinerX?</span>
            </h2>
            <p className="text-slate-600">
              See how we compare to traditional trading methods
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            
            {/* Manual Trading */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 opacity-80 hover:opacity-100 transition-opacity animate-fade-up animate-delay-100">
              <div className="text-center mb-6">
                <div className="mx-auto w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Manual Trading</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Requires constant monitoring",
                  "Emotional decision making",
                  "Limited trading hours",
                  "High stress levels",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CryptoMinerX - Highlighted */}
            <div className="card-glass relative p-8 rounded-3xl border border-blue-100 shadow-xl lg:-mt-6 animate-fade-up">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">
                  RECOMMENDED
               </div>
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 pulse-glow">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900">CryptoMinerX</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "One-click installation",
                  "24/7 expert support",
                  "Lifetime free updates",
                  "Advanced AI strategies",
                  "Zero maintenance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal({ type: "download" })}
                className="w-full btn-gradient text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Other Robots */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 opacity-80 hover:opacity-100 transition-opacity animate-fade-up animate-delay-200">
              <div className="text-center mb-6">
                <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Other Robots</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Complex setup required",
                  "Limited support",
                  "No lifetime updates",
                  "Basic strategies",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto  text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to automate your success?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Join thousands of successful traders who are already using CryptoMinerX to maximize their profits with zero stress.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  openModal({
                    title: "Get Started",
                    type: "download",
                  })
                }
                className="btn-gradient text-white font-bold px-8 py-4 rounded-full min-w-[200px] flex items-center justify-center gap-2"
              >
                Start Trading
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() =>
                    openModal({
                      title: "Get Started",
                      type: "download",
                    })
                  }
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 rounded-full min-w-[200px] transition-colors"
              >
                View Live Results
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}