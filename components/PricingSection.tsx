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
      ease: "easeOut" as const
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
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "btn-gradient shadow-glow"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-card text-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.popular ? "bg-white/20" : "btn-gradient"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? "text-white" : "text-primary-foreground"}`} />
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              {/* <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gradient"}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div> */}

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 ${plan.popular ? "text-white/90" : "text-foreground"}`}>
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
                    ? "bg-white text-foreground hover:bg-white/90"
                    : "btn-gradient text-primary-foreground"
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
