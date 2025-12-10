import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for beginners exploring crypto mining",
    icon: Zap,
    features: [
      "1 TH/s Hash Power",
      "Basic Dashboard",
      "Email Support",
      "Weekly Payouts",
      "1 Cryptocurrency"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Most popular choice for serious miners",
    icon: Crown,
    features: [
      "10 TH/s Hash Power",
      "Advanced Analytics",
      "Priority Support",
      "Daily Payouts",
      "5 Cryptocurrencies",
      "Auto-optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/month",
    description: "Maximum power for professional operations",
    icon: Rocket,
    features: [
      "50 TH/s Hash Power",
      "Custom Dashboard",
      "24/7 Dedicated Support",
      "Instant Payouts",
      "All Cryptocurrencies",
      "API Access",
      "Custom Contracts"
    ],
    popular: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const PricingSection = () => {
  const { openModal } = useModal();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- SECTION BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 ">
        <img
          src="/p1.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* --- SECTION OVERLAY (To ensure text readability) --- */}
      <div className="absolute inset-0  bg-black/75" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mining Plan</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Flexible pricing designed to scale with your mining ambitions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              // Solid backgrounds for cards
              className={`relative rounded-3xl p-8 flex flex-col justify-between border ${
                plan.popular 
                  ? "bg-gray-900/90 border-blue-500 shadow-xl shadow-blue-500/10" // Highlight for Popular
                  : "bg-black/60 border-white/10 hover:border-white/20" // Standard solid dark card
              } backdrop-blur-sm`}
            >
              {/* --- Content --- */}
              <div className="relative z-10">
                {plan.popular && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular ? "bg-blue-500/20" : "bg-white/5"
                }`}>
                  <plan.icon className={`w-7 h-7 ${plan.popular ? "text-blue-400" : "text-white"}`} />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm mb-6 text-gray-400">
                  {plan.description}
                </p>

                 {/* Price Display */}
                 <div className="mb-8">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/60 ml-2">
                      {plan.period}
                    </span>
                  </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-blue-400" : "text-gray-500"}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;