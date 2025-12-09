import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is crypto mining and how does it work?",
    answer: "Crypto mining is the process of validating blockchain transactions using computational power. With CryptoMinerX, we handle all the technical complexity - you simply invest in hash power and earn rewards from the mining operations we perform on your behalf."
  },
  {
    question: "How much can I earn from mining?",
    answer: "Earnings depend on your chosen plan, current cryptocurrency prices, and network difficulty. Our Pro plan users typically see returns of 8-15% monthly. You can track your real-time earnings in your dashboard."
  },
  {
    question: "When and how do I receive my payouts?",
    answer: "Payouts are processed automatically based on your plan - daily for Pro and Enterprise, weekly for Starter. You can withdraw to any compatible wallet address. There's no minimum withdrawal threshold."
  },
  {
    question: "Is my investment secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption, cold storage for assets, and multi-signature wallets. Our infrastructure is audited regularly by third-party security firms, ensuring your investment is protected."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can change your plan at any time from your dashboard. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. All your mining progress is preserved."
  },
  {
    question: "What cryptocurrencies can I mine?",
    answer: "Depending on your plan, you can mine Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies. Enterprise users have access to our full portfolio of 20+ mineable cryptocurrencies."
  }
];

const FAQSection = () => {
  return (
   <section className="py-24 relative overflow-hidden isolate">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
          alt="Abstract Network Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- Overlay for Readability --- */}
      <div className="absolute inset-0 bg-slate-950/85 -z-10" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about crypto mining with CryptoMinerX
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  // Updated to Glassmorphism style for dark background
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 overflow-hidden data-[state=open]:bg-white/10 transition-all"
                >
                  <AccordionTrigger className="text-left text-white hover:text-blue-100 transition-colors py-6 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
