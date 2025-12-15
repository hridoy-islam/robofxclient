import { ArrowRight, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Global Consultancy Architecture"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlay - Ensures text pops against the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary  to-primary-light opacity-60" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <motion.div
          className="max-w-4xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tagline */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white bg-gold/5 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                Leading Global Immigration Firm
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight text-white">
              <span className="block text-gold mb-2 drop-shadow-lg">VISARA</span>
              <span className="block text-3xl md:text-5xl  text-gray-200">
                An Immigration Solution For <span className="  bg-gradient-gold bg-clip-text text-transparent">Everyone</span>
              </span>
            </h1>
          </motion.div>

          {/* Description / Subtext */}
          <motion.div 
            className="border-l-2 border-gold pl-6 space-y-4"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl text-gray-200  leading-relaxed max-w-2xl">
              Best Immigration and Visa Consultants for <span className="bg-gradient-gold bg-clip-text text-transparent">USA, UK, Canada & Australia</span>.
            </p>
            
           
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-6"
            variants={itemVariants}
          >
            <Link href="/contact">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-gold text-primary rounded-sm font-bold tracking-wide flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-black">Start Your Journey</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>
            </Link>

            
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </motion.div>
    </section>
  );
}