import { Building2, GraduationCap, Briefcase, Plane, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Permanent Residency',
    description: 'Secure your future with permanent residency solutions in leading global destinations.',
    features: ['Golden Visa Programs', 'Investment Immigration', 'Family Sponsorship'],
  },
  {
    icon: Building2,
    title: 'Business Visas',
    description: 'Expand your enterprise internationally with streamlined business visa processing.',
    features: ['Investor Visas', 'Entrepreneur Programs', 'Corporate Relocation'],
  },
  {
    icon: GraduationCap,
    title: 'Student Visas',
    description: 'Access world-class education with comprehensive student visa assistance.',
    features: ['University Placement', 'Post-Study Work Rights', 'Scholarship Guidance'],
  },
  {
    icon: Briefcase,
    title: 'Work Permits',
    description: 'Navigate employment immigration with expert work permit consultation.',
    features: ['Skilled Worker Visas', 'Intra-Company Transfers', 'Professional Licensing'],
  },
  {
    icon: Plane,
    title: 'Visit Visas',
    description: 'Seamless tourist and visitor visa services for your travel needs.',
    features: ['Tourist Visas', 'Family Visits', 'Multiple Entry Permits'],
  },
  {
    icon: Users,
    title: 'Family Immigration',
    description: 'Reunite with loved ones through family-based immigration programs.',
    features: ['Spouse Visas', 'Dependent Visas', 'Parent Sponsorship'],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-32 bg-gradient-to-b from-primary to-primary-light relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
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
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light ">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gold leading-tight">
            Comprehensive{' '}
            <span className="bg-gradient-text-gold bg-clip-text text-transparent">
              Immigration Solutions
            </span>
          </h2>
          <p className="text-xl text-gold/70 font-light max-w-3xl mx-auto">
            Tailored immigration services designed to meet your unique needs and aspirations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-primary-light/40 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/60 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
            >
              <div className="space-y-6">
                <motion.div
                  className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-primary font-bold" />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-gold">{service.title}</h3>
                  <p className="text-gold/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="text-sm text-gold/60 font-light flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
