"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is AI Auto Trading Software?",
    a: "AI Auto Trading Software is an advanced algorithmic tool that uses Artificial Intelligence to analyze market data, identify trends, and execute trades automatically on your behalf without requiring manual intervention.",
  },
  {
    q: "How is AI different from regular automated trading?",
    a: "Regular automated trading follows strict, static rules (if X happens, do Y). AI trading, however, uses machine learning to adapt to changing market conditions, learning from historical data to improve its decision-making over time.",
  },
  {
    q: "Do I need trading experience to use this software?",
    a: "No, you do not need prior trading experience. The software is designed to be fully automated and user-friendly. We provide a Quick Strategy Guide to help you get set up in minutes.",
  },
  {
    q: "Can I create my own trading strategy?",
    a: "Yes. While the software comes with pre-built, optimized strategies, advanced users can customize parameters and create their own strategies to suit their specific risk appetite and goals.",
  },
  {
    q: "How secure is the platform?",
    a: "Security is our top priority. We use industry-standard encryption protocols to protect your data. Furthermore, the software runs on your local machine or VPS, meaning we never have access to your funds or broker account credentials.",
  },
  {
    q: "Can I test strategies before trading with real money?",
    a: "Absolutely. The software includes a robust backtesting feature that allows you to simulate strategies using historical market data to verify their performance before risking real capital.",
  },
  {
    q: "Does the software work 24/7?",
    a: "Yes, the software operates 24/7, constantly monitoring the markets for opportunities, which is especially beneficial for the crypto and forex markets that never sleep.",
  },
  {
    q: "Can I control risk levels?",
    a: "Yes, the software includes built-in risk management tools. You can set Stop Loss, Take Profit, and trailing stops to protect your investment and manage risk according to your comfort level.",
  },
  {
    q: "Which brokers are supported?",
    a: "Our software is compatible with most major brokers that support MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms.",
  },
  {
    q: "How much does the software cost?",
    a: "We offer flexible pricing plans to suit different needs. Please visit our Pricing page for the most up-to-date information on packages and features.",
  },
  {
    q: "Is customer support available?",
    a: "Yes, we offer 24/7 Quick Response Support. Our dedicated team is available to assist with installation, setup, and any technical questions you may have.",
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-black " id="faq">
      <div className="container mx-auto  max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about our AI Trading Software
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl bg-zinc-900/20 overflow-hidden transition-colors duration-300 ${
                openFaq === index
                  ? "border-primary-blue/50 bg-zinc-900/40"
                  : "border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span
                  className={`font-semibold text-lg pr-4 ${
                    openFaq === index ? "text-white" : "text-gray-300"
                  }`}
                >
                  {faq.q}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="text-primary-blue shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-500 shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
