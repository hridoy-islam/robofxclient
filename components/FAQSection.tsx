import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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
  <section className="py-24 relative overflow-hidden isolate bg-gray-50">
  <div className="container mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Changed text-white to text-slate-900 */}
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>
      {/* Changed text-gray-300 to text-gray-600 */}
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            {/* Changed bg/border to fit light mode */}
            <AccordionItem
              value={`item-${index}`}
              className="bg-white border border-gray-200 
              rounded-2xl px-6 overflow-hidden shadow-sm
              data-[state=open]:border-blue-200 transition-all"
            >
              {/* Changed text to dark, hover to blue */}
              <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 hover:no-underline
                transition-colors py-6 text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              {/* Changed content text to gray-600 */}
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed text-base">
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
      <p className="text-gray-600 mb-4">Still have questions?</p>
       <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-3 rounded-xl  text-white 
        font-bold btn-gradient transition-colors shadow-lg"
      >
        Contact Support
      </motion.button>
      </Link>
    </motion.div>
  </div>
</section>

  );
};

export default FAQSection;
