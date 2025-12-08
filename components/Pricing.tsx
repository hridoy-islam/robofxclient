"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { Check, Cpu, Zap, Server, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const { openModal } = useModal();

  const plans = [
    {
      title: "Cloud Starter",
      description: "Perfect for beginners starting their mining journey.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      price: "Flexible", // Or specific price if you have one
      features: [
        "CryptoMinerX Dashboard Access",
        "Shared Hash Power Pool",
        "Weekly Automated Payouts",
        "Standard Encryption Security",
        "Email Support",
        "99.9% Uptime Guarantee",
      ],
      popular: false,
    },
    {
      title: "Pro Mining Farm",
      description: "Dedicated power for serious investors seeking max yield.",
      icon: <Server className="w-6 h-6 text-white" />,
      price: "Custom",
      features: [
        "Dedicated Mining Hardware",
        "Maximum Hash Rate Allocation",
        "Daily Automated Payouts",
        "Institutional-Grade Security",
        "Dedicated Account Manager",
        "Real-time Hardware Monitoring",
        "Zero Maintenance Fees",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto  relative z-10">
        {/* Minimal Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase border border-blue-100">
              Investment Plans
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Transparent pricing for your <br />
            <span className="text-blue-600">Mining Infrastructure</span>
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed">
            Choose the hardware setup that fits your investment goals. 
            We handle the maintenance, cooling, and security of your machines.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "bg-gray-900 text-white shadow-2xl scale-100 md:scale-105 ring-1 ring-gray-900"
                  : "bg-white text-gray-900 shadow-lg border border-gray-100 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8 border-b border-opacity-10 border-current pb-8">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.popular ? "bg-gray-800" : "bg-blue-50"
                  }`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-5 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular ? "bg-blue-600" : "bg-blue-100"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        plan.popular ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button
                onClick={() =>
                  openModal({
                    title: `Start ${plan.title}`,
                    subtitle: "Configure your mining preferences below.",
                    buttonText: "Proceed to Dashboard",
                    type: "contact", // Adjusted to generic contact or signup
                  })
                }
                className={`w-full py-6 rounded-xl font-bold text-base transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Trust/Security Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>
              All plans include SSL encryption and cold wallet storage for your mined assets.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}