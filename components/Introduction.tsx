import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Introduction() {
  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '50+', label: 'Countries Covered' },
    { value: '10K+', label: 'Successful Cases' },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-light pl-1">
                About Visara
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gold ">
                Excellence in{' '}
                <span className="bg-gradient-text-gold bg-clip-text text-transparent block mt-2">
                  Immigration Services
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gold/70 font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Established as the UAE's most trusted immigration consultancy, Visara combines
              decades of expertise with innovative solutions to navigate the complexities of
              global immigration. Our commitment to excellence and personalized approach has
              helped thousands achieve their international aspirations.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-2 p-4 rounded-xl bg-gradient-dark border border-gold/10 hover:border-gold/40 transition-all group"
                  whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                >
                  <motion.div
                    className="text-3xl lg:text-4xl font-light bg-gradient-text-gold bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gold/60 text-sm font-light group-hover:text-gold/90 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image Component */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Frame/Border Effect */}
            <div className="absolute inset-0 border border-gold/20 rounded-2xl transform translate-x-4 translate-y-4 z-0" />
            
            {/* Main Image Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 z-10 border border-white/5">
              <Image 
                src="/h1.jpg" 
                alt="Visara Immigration Consultants Modern Office" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Optional Overlay Gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}