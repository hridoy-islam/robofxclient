import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const regions = [
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Spain', 'Portugal'],
  },
  {
    name: 'Oceania',
    countries: ['Australia', 'New Zealand'],
  },
  {
    name: 'Asia',
    countries: ['Singapore', 'Japan', 'South Korea', 'Malaysia'],
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar'],
  },
  {
    name: 'Others',
    countries: ['Caribbean Nations', 'African Countries', 'South America'],
  },
];

export default function Countries() {
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
    <section className="py-32 bg-gradient-to-t from-primary-light to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="relative container  mx-auto">
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light ">
            Global Reach
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gold leading-tight">
            Countries We{' '}
            <span className="bg-gradient-text-gold bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-xl text-gold/70 font-light max-w-3xl mx-auto">
            Comprehensive immigration services across multiple continents
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="bg-primary-light/30 backdrop-blur-sm border border-gold/20 p-8 rounded-xl hover:border-gold/60 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <MapPin className="w-6 h-6 text-gold" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gold">{region.name}</h3>
              </div>

              <ul className="space-y-3">
                {region.countries.map((country, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gold/70 font-light flex items-center gap-3 hover:text-gold transition-colors group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150"
                      whileHover={{ scale: 1.5 }}
                    />
                    {country}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
