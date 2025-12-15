import { FileText, Search, CheckCircle2, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Initial Consultation',
    description: 'Comprehensive assessment of your immigration goals and eligibility evaluation',
  },
  {
    icon: Search,
    number: '02',
    title: 'Documentation Review',
    description: 'Meticulous preparation and verification of all required documentation',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Application Submission',
    description: 'Strategic submission with ongoing monitoring and communication',
  },
  {
    icon: Plane,
    number: '04',
    title: 'Approval & Beyond',
    description: 'Post-approval support including relocation assistance and settlement services',
  },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section className="py-32 bg-gradient-to-t from-primary-light to-primary relative overflow-hidden">
      <div className="container mx-auto ">
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light ">
            Our Process
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gold leading-tight">
            Your Journey to{' '}
            <span className="bg-gradient-text-gold bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-gold/70 font-light max-w-3xl mx-auto">
            A streamlined, transparent process designed for your peace of mind
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 transform -translate-y-1/2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <motion.div
                  className="bg-gradient-dark border border-gold/20 p-8 rounded-xl space-y-6 hover:border-gold/60 transition-all duration-300 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)',
                  }}
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-primary font-bold" />
                    </motion.div>
                    <motion.span
                      className="text-6xl font-light text-gold/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gold">{step.title}</h3>
                    <p className="text-gold/70 font-light leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
