import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-accent/5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto ">
        <motion.div
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-gold leading-tight">
              Begin Your{" "}
              <span className="bg-gradient-text-gold bg-clip-text text-transparent">
                Immigration Journey
              </span>
            </h2>
            <p className="text-xl text-gold/70 font-light leading-relaxed max-w-3xl mx-auto">
              Schedule a complimentary consultation with our immigration experts
              and discover how we can help you achieve your global aspirations.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }}>
              <Link href="/contact">
                <button
                  className="group px-10 py-5 bg-gradient-gold text-primary rounded-lg font-semibold tracking-wide
                 flex items-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
