import { motion } from "framer-motion";
import { Globe, Server, Users, Wifi } from "lucide-react";

const locations = [
  { name: "North America", servers: 12, position: { top: "30%", left: "20%" } },
  { name: "Europe", servers: 15, position: { top: "25%", left: "48%" } },
  { name: "Asia Pacific", servers: 18, position: { top: "35%", left: "75%" } },
  { name: "South America", servers: 6, position: { top: "60%", left: "28%" } },
  { name: "Africa", servers: 4, position: { top: "50%", left: "52%" } },
  { name: "Australia", servers: 5, position: { top: "70%", left: "82%" } },
];

const stats = [
  { icon: Server, value: "60+", label: "Data Centers" },
  { icon: Globe, value: "120+", label: "Countries" },
  { icon: Users, value: "15K+", label: "Active Miners" },
  { icon: Wifi, value: "99.9%", label: "Uptime" },
];

const GlobalNetworkSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Global Network</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mining infrastructure spanning across 6 continents for maximum efficiency
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[500px] mb-16 rounded-3xl bg-gradient-to-br from-secondary via-secondary/50 to-background border border-border overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated connection lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00167a" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#255ae7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00167a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Connection lines between data centers */}
            <motion.path
              d="M 120 150 Q 300 100 480 125"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 480 125 Q 600 180 750 175"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.path
              d="M 120 150 Q 200 350 280 300"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.1 }}
            />
          </svg>

          {/* Data center markers */}
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
              className="absolute group cursor-pointer"
              style={{ top: location.position.top, left: location.position.left }}
            >
              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                className="absolute inset-0 w-4 h-4 rounded-full btn-gradient"
              />
              
              {/* Marker dot */}
              <div className="relative w-4 h-4 rounded-full btn-gradient shadow-glow" />
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 -translate-x-1/2 -top-16 px-4 py-2 bg-card rounded-lg shadow-card border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <p className="font-semibold text-foreground text-sm">{location.name}</p>
                <p className="text-xs text-muted-foreground">{location.servers} Data Centers</p>
              </motion.div>
            </motion.div>
          ))}

          {/* Floating globe icon */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-8 right-8 w-24 h-24 rounded-2xl btn-gradient flex items-center justify-center shadow-glow"
          >
            <Globe className="w-12 h-12 text-primary-foreground" />
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Network Activity Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
              <span className="text-foreground font-medium">All Systems Operational</span>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Network Hashrate:</span>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-bold text-gradient"
              >
                847.5 PH/s
              </motion.span>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Active Connections:</span>
              <span className="font-bold text-gradient">12,847</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
