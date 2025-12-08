"use client";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import Header from "@/components/Header";
import OfficeLocations from "@/components/OfficeLocations";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Cpu, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <section className="relative pt-20 pb-32 px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Mining Active — 99.9% Uptime
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-gradient">Mine Crypto</span>
                <br />
                <span className="text-foreground">Effortlessly</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Join the next generation of crypto mining. Professional-grade infrastructure, 
                maximized returns, zero complexity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gradient px-8 py-4 rounded-xl text-primary-foreground font-semibold flex items-center gap-2 group"
                >
                  Start Mining
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  View Dashboard
                </motion.button>
              </motion.div>

              {/* Stats inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-12 pt-8 border-t border-border"
              >
                <div>
                  <p className="text-3xl font-bold text-gradient">$42M+</p>
                  <p className="text-sm text-muted-foreground mt-1">Total Mined</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">15K+</p>
                  <p className="text-sm text-muted-foreground mt-1">Active Miners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">99.9%</p>
                  <p className="text-sm text-muted-foreground mt-1">Uptime</p>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* hero image */}
                <img 
                  src='/hero.jpg' 
                  alt="Crypto trading chart showing upward trend" 
                  className="w-full h-auto rounded-3xl shadow-elevated"
                />
                
                {/* Floating Bitcoin */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-1/4"
                >
                  <div className="w-24 h-24 rounded-2xl bg-card shadow-card p-2 pulse-glow">
                    <img src='/bitcoin.jpg' alt="Bitcoin" className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                {/* Floating Ethereum */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-6 bottom-1/4"
                >
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-card p-2 pulse-glow">
                    <img src='/etherium.jpg' alt="Ethereum" className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                {/* Live profit card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 card-glass rounded-2xl px-6 py-4 shadow-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Profit</p>
                      <p className="text-xl font-bold text-gradient">+$2,847.32</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
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
              Enterprise-grade mining infrastructure designed for maximum efficiency and returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized algorithms for maximum hash rates and minimal latency"
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "Multi-layer encryption and cold storage for your assets"
              },
              {
                icon: TrendingUp,
                title: "High Returns",
                description: "Competitive payouts with real-time profit tracking"
              },
              {
                icon: Cpu,
                title: "Latest Hardware",
                description: "State-of-the-art ASIC miners with energy efficiency"
              }
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
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Start Mining in <span className="text-gradient">3 Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with crypto mining in minutes, not days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up in seconds with just your email. No complex verification needed."
              },
              {
                step: "02",
                title: "Choose Your Plan",
                description: "Select a mining plan that fits your goals. Start small or go big."
              },
              {
                step: "03",
                title: "Watch Profits Grow",
                description: "Sit back and watch your earnings accumulate in real-time."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/30 to-primary/5" />
                )}
                
                <div className="relative text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-2xl gradient-border bg-card mb-6"
                  >
                    <span className="text-3xl font-bold text-gradient">{item.step}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <PricingSection />

      <ReviewsSection />

      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl btn-gradient p-12 lg:p-16 text-center"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Ready to Start Mining?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of miners already earning with CryptoMinerX. 
                Start your journey to passive crypto income today.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-xl bg-card text-foreground font-semibold hover:bg-card/90 transition-colors shadow-elevated flex items-center gap-2 mx-auto group"
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
              <p className="text-2xl font-bold text-gradient">Instant Payouts</p>
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

      <Footer/>
    </div>
  );
}
