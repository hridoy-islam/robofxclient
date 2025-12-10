"use client";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Cpu,
  ArrowRight,
  Users,
  Coins,
  Activity,
} from "lucide-react";

export default function Page() {
   const { openModal } = useModal();
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      
      
      <section className="relative min-h-screen flex flex-col pt-20">
        {/* --- Background Layer --- */}
        <div className="absolute inset-0 z-0">
          <video
            src="/cryptominerx.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-900/60 to-transparent" />
        </div>

        {/* --- Main Content --- */}
        {/* Added flex-1 and justify-center to center content vertically in the available space */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center py-12 md:py-20">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-sm font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Mining Pool Active
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-5xl"
          >
            Smart Crypto Mining <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text text-gradient">
              For Modern Investors
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            CryptoMinerX simplifies the mining process. We host the hardware,
            handle the maintenance, and optimize the algorithms so you can mine
            Bitcoin, Ethereum, and other top assets without the noise or heat.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 w-full flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                  openModal({
                    title: "Create your account",
                    subtitle: "Join the world's largest crypto exchange",
                    buttonText: "Sign Up",
                  })
                }
              className="w-full sm:w-auto px-8 py-4 btn-gradient text-white rounded-xl font-bold text-base shadow-lg transition-all"
            >
              Start Mining Today
            </motion.button>
          </motion.div>
        </div>

     
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full z-20 px-4 pb-8 pt-8 md:pt-0"
        >
          <div className="container mx-auto">
            {/* Glassmorphism Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              {/* Stat 1: Total Mined */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-3 flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20">
                    <Coins className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Earnings
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  $42M+
                </p>
                <p className="text-sm text-gray-400 mt-1">Total Mined</p>
              </div>

              {/* Stat 2: Active Miners */}
              {/* Added responsive border logic */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left border-t border-white/10 pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                <div className="mb-3 flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/20">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Community
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  15K+
                </p>
                <p className="text-sm text-gray-400 mt-1">Active Miners</p>
              </div>

              {/* Stat 3: Uptime */}
              {/* Added responsive border logic */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left border-t border-white/10 pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                <div className="mb-3 flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/20">
                    <Activity className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Reliability
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  99.9%
                </p>
                <p className="text-sm text-gray-400 mt-1">Uptime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/80">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">CryptoMinerX</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade mining infrastructure designed for maximum
              efficiency and returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized algorithms for maximum hash rates and minimal latency",
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description:
                  "Multi-layer encryption and cold storage for your assets",
              },
              {
                icon: TrendingUp,
                title: "High Returns",
                description:
                  "Competitive payouts with real-time profit tracking",
              },
              {
                icon: Cpu,
                title: "Latest Hardware",
                description:
                  "State-of-the-art ASIC miners with energy efficiency",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden isolate">
        {/* --- Background Image --- */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1591994843349-f415893b3a6b?q=80&w=2600&auto=format&fit=crop"
            alt="Crypto Mining Hardware"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- Dark Overlay for Readability --- */}
        <div className="absolute inset-0 bg-black/80 -z-10" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Start Mining in <span className="text-gradient">3 Steps</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get started with crypto mining in minutes, not days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description:
                  "Sign up in seconds with just your email. No complex verification needed.",
              },
              {
                step: "02",
                title: "Choose Your Plan",
                description:
                  "Select a mining plan that fits your goals. Start small or go big.",
              },
              {
                step: "03",
                title: "Watch Profits Grow",
                description:
                  "Sit back and watch your earnings accumulate in real-time.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line - adjusted for dark bg */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gray-50" />
                )}

                <div className="relative text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    // Changed bg-card to bg-white/5 for dark mode look
                    className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-gray-50 bg-white/35 backdrop-blur-sm mb-6"
                  >
                    <span className="text-3xl font-bold text-white">
                      {item.step}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <ReviewsSection />
      <PricingSection />

      <FAQSection />

      {/* CTA Section */}
      <section >
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // Removed 'btn-gradient', added 'isolate' to manage stacking context
            className="relative overflow-hidden  bg-black/80 p-24 lg:p-24 text-center isolate"
          >
            {/* --- Background Image & Overlay --- */}
            <div className="absolute inset-0 -z-20">
              <img
                // Using a dark crypto/tech related image placeholder
                src="/cto.jpg"
                alt="Start Mining Crypto"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            {/* Strong dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 -z-10" />

            {/* --- Decorative elements (Adjusted colors to pop against dark bg) --- */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

            {/* --- Content --- */}
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Ready to Start Mining?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Join thousands of miners already earning with CryptoMinerX.
                Start your journey to passive crypto income today.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  openModal({
                    title: "Create your account",
                    subtitle: "Join the world's largest crypto exchange",
                    buttonText: "Sign Up",
                  })
                }
                className="px-10 py-4 rounded-xl btn-gradient text-white font-bold shadow-lg transition-all flex items-center gap-2 mx-auto group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16  border-t border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-muted-foreground"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">SSL Secured</p>
              <p className="text-sm">256-bit Encryption</p>
            </div>
            <div className="w-px h-12 bg-border hidden lg:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">24/7 Support</p>
              <p className="text-sm">Always Available</p>
            </div>
            <div className="w-px h-12 bg-border hidden lg:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">
                Instant Payouts
              </p>
              <p className="text-sm">No Waiting Period</p>
            </div>
            <div className="w-px h-12 bg-border hidden lg:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">Global Access</p>
              <p className="text-sm">Available Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <OfficeLocations /> */}

      <Footer />
    </div>
  );
}
