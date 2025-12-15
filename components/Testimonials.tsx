import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Al-Mansouri',
    role: 'Business Owner',
    country: 'Canada PR',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Visara transformed our Canadian PR dream into reality. Their expertise and dedication made an incredibly complex process seamless. We cannot thank them enough.',
  },
  {
    name: 'James Mitchell',
    role: 'Software Engineer',
    country: 'UK Work Permit',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The level of professionalism and attention to detail was extraordinary. Visara secured my UK work permit in record time, exceeding all expectations.',
  },
  {
    name: 'Priya Sharma',
    role: 'Graduate Student',
    country: 'Australian Student Visa',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'From university selection to visa approval, Visara guided me every step of the way. Their knowledge of the Australian education system is unmatched.',
  },
];

export default function Testimonials() {
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
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
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
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gold leading-tight">
            Stories of{' '}
            <span className="bg-gradient-text-gold bg-clip-text text-transparent">
              Success
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-primary-light/40 backdrop-blur-sm border border-gold/20 p-8 rounded-xl hover:border-gold/60 transition-all duration-300 space-y-6"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)',
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Quote className="w-10 h-10 text-gold/40" />
              </motion.div>

              <p className="text-gold/80 font-light leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <motion.div
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/40"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="text-gold font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gold/60 font-light">{testimonial.role}</div>
                  <div className="text-xs text-gold/50 font-light">{testimonial.country}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
