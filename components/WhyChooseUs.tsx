import {
  Shield,
  Award,
  Clock,
  HeadphonesIcon,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description:
      "Fully licensed immigration consultants with international accreditations",
  },
  {
    icon: Award,
    title: "Proven Success Rate",
    description:
      "98% approval rate across all visa categories and destinations",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Expedited application processing with dedicated case management",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert immigration team",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Strategic partnerships with immigration authorities worldwide",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees or surprises",
  },
];

// 🔑 Icon animation controlled by parent hover
const iconVariants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
            Why Visara
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gold leading-tight">
            The{" "}
            <span className="bg-gradient-text-gold bg-clip-text text-transparent">
              Visara Advantage
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 group"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
            >
              {/* ICON WRAPPER */}
              <div
                className="relative inline-flex items-center justify-center w-20 h-20 rounded-full
                           border-2 border-gold/40 transition-all duration-300
                           group-hover:border-gold
                           group-hover:bg-gradient-to-br
                           group-hover:from-gold
                           group-hover:to-[#e8c54a]
                           group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <motion.div
                  className="relative z-10"
                  variants={iconVariants}
                >
                  <benefit.icon
                    className="w-10 h-10 text-gold group-hover:text-primary transition-colors duration-300"
                  />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold text-gold">
                {benefit.title}
              </h3>
              <p className="text-gold/70 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
