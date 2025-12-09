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
  TrendingUp,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
export default function FeaturesPage() {
  const { openModal } = useModal();



  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


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
<section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Powerful Features for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Modern Traders
              </span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Experience the power of advanced AI-driven trading. We combine precision engineering with user-friendly design to maximize your trading potential.
            </motion.p>

            {/* The List */}
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            {/* CTA Button (Optional) */}
            <motion.div variants={itemVariants} className="mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
                Start Trading Now
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Div */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 group">
              {/* Gradient overlay for "shine" effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
              
              {/* Replace src with your actual dashboard screenshot */}
              <img 
                src="/trading.jpg" 
                alt="Trading Dashboard Interface" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Decorative Floating Element (Glass Card) */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 md:right-auto md:w-64 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-xl z-30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Daily Profit</p>
                    <p className="text-lg font-bold text-slate-900">+12.4%</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[75%] rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Background Blob behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
          </motion.div>
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
  <section className="relative py-24 overflow-hidden isolate">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/feature.webp"
          alt="Trading Automation Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* --- Dark Overlay for Readability --- */}
      <div className="absolute inset-0 bg-slate-950/70 -z-10" />

      {/* --- Content --- */}
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to automate your success?
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Join thousands of successful traders who are already using
            CryptoMinerX to maximize their profits with zero stress.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                openModal({
                  title: "Get Started",
                  type: "download",
                })
              }
              // Kept btn-gradient, ensured text is white
              className="btn-gradient text-white font-bold px-8 py-4 rounded-full min-w-[200px] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:scale-105"
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
              // Changed to Glassmorphic style for dark background
              className="bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full min-w-[200px] transition-all"
            >
              View Live Results
            </button>
          </div>
        </motion.div>
      </div>
    </section>

      <Footer />
    </div>
  );
}