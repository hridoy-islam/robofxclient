import { ArrowRight } from 'lucide-react';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-primary opacity-80"></div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative h-full container mx-auto  flex items-center">
        <motion.div
          className="max-w-3xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-light ">
                Leading Global Immigration Firm
              </span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-light leading-tight">
              <motion.span
                className="block text-gold mb-4 drop-shadow-lg "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                VISARA
              </motion.span>
              <motion.span
                className="block text-5xl md:text-6xl bg-gradient-text-gold bg-clip-text text-transparent font-normal"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Your Gateway to Global Opportunities
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-gold/80 font-light leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Premier UAE-based immigration consultancy delivering comprehensive visa solutions,
            permanent residencies, and expert guidance for your international journey.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-4"
            variants={itemVariants}
          > <Link href="/contact">

            <motion.button
              className="group px-8 py-4 bg-gradient-gold text-primary rounded-lg font-semibold tracking-wide flex items-center justify-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg"
              whileHover={{ scale: 1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
              >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
              </Link>
            {/* <motion.button
              className="px-8 py-4 border-2 border-gold text-gold rounded-lg font-semibold tracking-wide hover:bg-gold/10"
              whileHover={{ scale: 1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Explore Services
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
