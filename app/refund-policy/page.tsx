"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RefreshCcw, AlertTriangle, Mail, HelpCircle } from "lucide-react";

export default function RefundPolicyPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Refund Policy"
        subtitle="Transparent information regarding our refund process and cancellations."
        backgroundImage="/b1.jpg"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Intro Box */}
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-blue/10 rounded-lg text-primary-blue shrink-0">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Our Commitment
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  At QuickTradeFX, we strive to ensure that our AI Trading
                  Software meets your expectations. However, due to the nature
                  of digital goods and software licenses, we have established
                  specific guidelines regarding refunds and cancellations to
                  protect the integrity of our intellectual property.
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
                <span className="text-primary-blue">1.</span> Digital Products &
                License Keys
              </h3>
              <p className="mb-4">
                Because our software acts as an immediate digital download
                and/or requires a unique license key activation,
                <strong> all sales are generally considered final</strong> once
                the license key has been issued to you.
              </p>
              <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-primary-blue">
                <p className="text-lg text-gray-400">
                  Unlike physical goods, digital software cannot be "returned."
                  Once you have access to the code or activation key, it is
                  impossible to verify that you have deleted all copies.
                  Therefore, we do not offer "no-questions-asked" refunds.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">2.</span> Refund Eligibility
                (Exceptions)
              </h3>
              <p className="mb-4">
                We acknowledge that technical issues can happen. We will issue a
                full refund under the following specific circumstances:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Non-Functionality:</strong> If the software fails to
                    function on your machine due to a coding error or technical
                    fault that our support team is unable to resolve within 7
                    business days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Misrepresentation:</strong> If the product is
                    substantially different from the description provided on our
                    website.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-lg text-gray-500 italic">
                * Refunds are NOT granted for trading losses, market volatility,
                or failure to follow the installation instructions.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">3.</span> Subscription
                Cancellation
              </h3>
              <p>
                If you are on a recurring subscription plan (e.g., Monthly Gold
                Plan), you may cancel your subscription at any time through your
                user dashboard or by contacting support.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-400">
                <li>
                  Cancellation stops <strong>future</strong> billing charges.
                </li>
                <li>
                  You will retain access to the software until the end of your
                  current paid billing cycle.
                </li>
                <li>
                  We do not offer pro-rated refunds for unused days within the
                  current billing cycle.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">4.</span> Chargebacks &
                Disputes
              </h3>
              <p>
                If you believe a charge was made in error, please contact our
                support team immediately. Initiating a chargeback with your bank
                without contacting us first is considered a violation of our
                Terms of Service and may result in the immediate and permanent
                suspension of your account and blacklisting from future
                services.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">5.</span> How to Request a
                Refund
              </h3>
              <p className="mb-4">
                To submit a refund request, please email us with the subject
                line <strong>"Refund Request - [Order ID]"</strong>.
              </p>
              <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/5 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg">
                    <div className="text-gray-500 uppercase text-lg font-bold">
                      Email Support
                    </div>
                    <a
                      href="mailto:support@quicktradefx.com"
                      className="text-primary-blue font-bold hover:underline"
                    >
                      support@quicktradefx.com
                    </a>
                  </div>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/10" />
                <div className="text-lg text-gray-400 max-w-sm">
                  Please include screenshots of any technical errors and a
                  description of the steps you have taken to resolve the issue.
                </div>
              </div>
            </section>
          </div>

         
        </div>
      </section>

      <Footer />
    </div>
  );
}
