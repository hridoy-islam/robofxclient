"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our AI Trading Software."
      />

      <section className="py-20 relative" >
        <div className="container mx-auto max-w-4xl">
          {/* Intro Box */}
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-blue/10 rounded-lg text-primary-blue shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Agreement to Terms
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  By purchasing, downloading, installing, or using the
                  QuickTradeFX software ("Software"), you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and Conditions. If you do not agree, please do not use our
                  services.
                </p>
                <div className="mt-4 text-lg text-gray-500 font-mono">
                  Last Updated:{" "}
                  <span className="text-primary-blue">{lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">1.</span> Software License
              </h3>
              <p className="mb-4">
                QuickTradeFX grants you a limited, non-exclusive,
                non-transferable, and revocable license to use the Software
                solely for your personal, non-commercial trading activities.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue mt-1 shrink-0" />
                  <span>
                    You may not redistribute, sell, decompile, reverse engineer,
                    or disassemble the Software.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue mt-1 shrink-0" />
                  <span>
                    The license is valid only for the subscription period paid
                    for by the user.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">2.</span> Risk Disclaimer
              </h3>
              <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
                <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
                  <ShieldAlert className="w-5 h-5" />
                  IMPORTANT WARNING
                </div>
                <p className="text-lg text-gray-400 mb-4">
                  Trading Foreign Exchange (Forex) and Cryptocurrencies carries
                  a high level of risk and may not be suitable for all
                  investors. The high degree of leverage can work against you as
                  well as for you. Before deciding to trade, you should
                  carefully consider your investment objectives, level of
                  experience, and risk appetite.
                </p>
                <p className="text-lg text-gray-400 font-semibold">
                  QuickTradeFX does not guarantee any specific results or
                  profits. Past performance of the Software is not indicative of
                  future results.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">3.</span> No Financial
                Advice
              </h3>
              <p>
                QuickTradeFX is a software development company, not a financial
                advisor. The Software, signals, and data provided are for
                educational and informational purposes only. Nothing contained
                in our services constitutes a solicitation, recommendation,
                endorsement, or offer to buy or sell any securities or other
                financial instruments.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">4.</span> Limitation of
                Liability
              </h3>
              <p>
                To the maximum extent permitted by applicable law, QuickTradeFX
                shall not be liable for any direct, indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, use, goodwill, or other
                intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-400">
                <li>
                  Your access to or use of or inability to access or use the
                  Software;
                </li>
                <li>
                  Any conduct or content of any third party on the Service;
                </li>
                <li>Any content obtained from the Service; and</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">5.</span> Refunds &
                Cancellations
              </h3>
              <p className="mb-4">
                Due to the digital nature of the Software (instant
                download/access), we generally do not offer refunds once the
                software license key has been activated. However, exceptions may
                be made in cases of unresolved technical issues confirmed by our
                support team.
              </p>
              <p className="text-lg text-gray-400">
                You may cancel your subscription at any time. Cancellation will
                take effect at the end of the current paid term.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">6.</span> Updates to Terms
              </h3>
              <p>
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will try to provide at least
                30 days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>
            </section>
          </div>

         
        </div>
      </section>

      <Footer />
    </div>
  );
}
