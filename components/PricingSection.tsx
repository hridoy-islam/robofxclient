import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for beginners exploring crypto mining",
    icon: Zap,
    image: "/p1.jpg", // Bitcoin/Chip image
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
    image: "/p2.jpg", // GPU/Mining Rig image
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
    image: "/p1.jpg", // Server Farm image
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
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Mining Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className={`relative rounded-3xl p-8 overflow-hidden isolate border`}
            >
              {/* --- Background Image Layer --- */}
              <div className="absolute inset-0 -z-20">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>

              {/* --- Overlay Layer (Darken image for text readability) --- */}
              <div className={`absolute inset-0 -z-10 ${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/70 to-black/90" // Colored tint for popular
                  : "bg-black/80" // Standard dark overlay
              }`} />

              {/* --- Content --- */}
              <div className="relative z-10">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white  text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular ? "bg-white/10" : "bg-white/10 backdrop-blur-sm"
                }`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm mb-4 text-gray-300">
                  {plan.description}
                </p>

                 {/* <div className="mb-6">
                   <span className="text-4xl font-bold text-white">
                     {plan.price}
                   </span>
                   <span className="text-white/70">
                     {plan.period}
                   </span>
                 </div> */}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-200">
                      <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-primary"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "btn-gradient text-white"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;