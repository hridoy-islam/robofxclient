import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "CryptoMinerX has completely transformed my passive income strategy. The returns are consistent and the platform is incredibly easy to use."
  },
  {
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "I've tried multiple mining platforms, but none come close to the efficiency and transparency of CryptoMinerX. Highly recommended!"
  },
  {
    name: "David Williams",
    role: "Investment Analyst",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The real-time analytics and instant payouts make this the best mining platform I've used. Professional support team too."
  },
  {
    name: "Emma Rodriguez",
    role: "Crypto Enthusiast",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Started with the Starter plan and quickly upgraded to Pro. The ROI speaks for itself. This platform delivers results."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ReviewsSection = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">15,000+ Miners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -15px rgba(0, 22, 122, 0.15)"
              }}
              className="relative p-6 rounded-2xl bg-card border border-border group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-8 mt-12"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-gradient">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold text-gradient">2,500+</p>
            <p className="text-sm text-muted-foreground">5-Star Reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
