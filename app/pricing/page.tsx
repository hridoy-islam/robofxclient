"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BreadCumb
        title="Pricing"
        subtitle="Choose a plan that suits your trading goals. No hidden fees just straightforward pricing with powerful"
      />
      <Pricing />

      <Footer />
    </div>
  );
}
