import { Users, Globe, Award, TrendingUp } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Clients Served",
    description: "Successfully guided families to their dream destinations",
  },
  {
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries",
    description: "Global immigration coverage across six continents",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Industry-leading approval rates for all visa types",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Proven expertise in immigration law and policy",
  },
];

interface CounterProps {
  value: number;
  suffix?: string;
}
// 🔢 Counter component
function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// 🔄 Icon animation
const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function Statistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div> */}

      <div className="relative container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 group"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
            >
              {/* ICON */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full
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
                  <stat.icon className="w-8 h-8 text-gold group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              </div>

              {/* TEXT */}
              <div className="space-y-2">
                <motion.div
                  className="text-5xl font-light bg-gradient-text-gold bg-clip-text text-transparent"
                  viewport={{ once: true }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>

                <div className="text-xl text-gold font-semibold">
                  {stat.label}
                </div>

                <p className="text-sm text-gold/70 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
