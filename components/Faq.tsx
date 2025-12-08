"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is crypto mining and how does it work?",
      answer:
        "Crypto mining is the process of validating blockchain transactions using computational power. With CryptoMinerX, we handle all the technical complexity - you simply invest in hash power and earn rewards from the mining operations we perform on your behalf.",
    },
    {
      question: "How much can I earn from mining?",
      answer:
        "Earnings depend on your chosen plan, current cryptocurrency prices, and network difficulty. Our Pro plan users typically see returns of 8-15% monthly. You can track your real-time earnings in your dashboard.",
    },
    {
      question: "When and how do I receive my payouts?",
      answer:
        "Payouts are processed automatically based on your plan - daily for Pro and Enterprise, weekly for Starter. You can withdraw to any compatible wallet address. There's no minimum withdrawal threshold.",
    },
    {
      question: "Is my investment secure?",
      answer:
        "Absolutely. We use bank-grade 256-bit encryption, cold storage for assets, and multi-signature wallets. Our infrastructure is audited regularly by third-party security firms, ensuring your investment is protected.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes! You can change your plan at any time from your dashboard. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. All your mining progress is preserved.",
    },
    {
      question: "What cryptocurrencies can I mine?",
      answer:
        "Depending on your plan, you can mine Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies. Enterprise users have access to our full portfolio of 20+ mineable cryptocurrencies.",
    },
  ];

  return (
    <section className="section-padding py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern - subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pulse-glow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold">FAQ</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Mining Queries? Find{" "}
              <span className="text-gradient">Answers Here</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about earning passive income with
              CryptoMinerX infrastructure.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card-glass rounded-2xl overflow-hidden transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-gray-100/50">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-up animate-delay-500">
            <div className="card-glass rounded-2xl p-10 relative overflow-hidden group">
              {/* Hover effect gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="floating mb-6">
                  <MessageCircle className="w-14 h-14 text-blue-600 mx-auto drop-shadow-lg" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Still have questions regarding mining?
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Our expert mining support team is available 24/7 to help you optimize your hash rate and earnings.
                </p>
                
                <Link href={"contact"}>
                  <button className="btn-gradient text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/30">
                    Contact Mining Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}