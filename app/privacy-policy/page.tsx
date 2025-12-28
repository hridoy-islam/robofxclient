"use client";

import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-primary-blue selection:text-black">
      <Header />

      <BreadCumb
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        backgroundImage="/b1.jpg"
      />

      <section className="py-20 relative">
        <div className="container mx-auto  max-w-4xl">
          {/* Intro Box */}
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-blue/10 rounded-lg text-primary-blue shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Your Privacy Matters
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  At QuickTradeFX, we are committed to protecting the privacy
                  and security of our users. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our AI Trading Software and website.
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
                <span className="text-primary-blue">1.</span> Information We
                Collect
              </h3>
              <p className="mb-4">
                We collect information that you provide directly to us when you
                register an account, purchase our software, or contact support.
                This includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mt-4">
                <li className="bg-zinc-900 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                  <Database className="w-5 h-5 text-gray-500 shrink-0" />
                  <div>
                    <strong className="text-white block text-lg mb-1">
                      Personal Data
                    </strong>
                    <span className="text-lg text-gray-400">
                      Name, email address, phone number, and billing
                      information.
                    </span>
                  </div>
                </li>
                <li className="bg-zinc-900 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                  <Database className="w-5 h-5 text-gray-500 shrink-0" />
                  <div>
                    <strong className="text-white block text-lg mb-1">
                      Trading Data
                    </strong>
                    <span className="text-lg text-gray-400">
                      Broker account IDs (for license verification) and software
                      performance logs.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">2.</span> How We Use Your
                Information
              </h3>
              <p className="mb-4">
                We use the collected data for specific, legitimate business
                purposes:
              </p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3 text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 shrink-0" />
                  <span>
                    To provide, operate, and maintain our AI Trading Software.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 shrink-0" />
                  <span>
                    To process your transactions and manage your license keys.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 shrink-0" />
                  <span>
                    To communicate with you regarding updates, security alerts,
                    and support.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 shrink-0" />
                  <span>
                    To detect and prevent fraudulent usage or software piracy.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">3.</span> Data Protection &
                Security
              </h3>
              <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-6 rounded-r-xl">
                <div className="flex items-center gap-2 text-primary-blue font-bold mb-2">
                  <Lock className="w-5 h-5" />
                  Encryption Standards
                </div>
                <p className="text-lg text-gray-400">
                  We implement industry-standard security measures, including
                  SSL encryption for data transmission and secure server
                  environments, to protect your personal information from
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
              <p className="mt-4 text-lg text-gray-500">
                Note: While we strive to use commercially acceptable means to
                protect your Personal Data, no method of transmission over the
                Internet is 100% secure.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">4.</span> Cookies & Tracking
                Technologies
              </h3>
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <p className="mb-2">
                    We use cookies and similar tracking technologies to track
                    the activity on our Service and store certain information.
                  </p>
                  <p className="text-lg text-gray-400">
                    Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent. However, if you do not accept cookies,
                    you may not be able to use some portions of our Service
                    (e.g., the User Dashboard).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">5.</span> Third-Party
                Disclosure
              </h3>
              <p>
                <strong>
                  We do not sell, trade, or otherwise transfer your Personally
                  Identifiable Information to outside parties.
                </strong>
                This does not include website hosting partners and other parties
                who assist us in operating our website, conducting our business,
                or serving our users, so long as those parties agree to keep
                this information confidential.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary-blue">6.</span> Your Data Rights
              </h3>
              <p className="mb-4">
                Depending on your location, you may have the following rights
                regarding your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-400">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data.
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
              </ul>
            </section>
          </div>

          
        </div>
      </section>

      <Footer />
    </div>
  );
}
