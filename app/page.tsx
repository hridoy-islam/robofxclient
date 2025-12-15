"use client";
import Countries from "@/components/Countries";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import PricingSection from "@/components/PricingSection";
import Process from "@/components/Process";
import ReviewsSection from "@/components/ReviewsSection";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Cpu,
  ArrowRight,
  Users,
  Coins,
  Activity,
} from "lucide-react";

export default function Page() {
   const { openModal } = useModal();
  return (
     <div className="min-h-screen bg-primary">
        <Header />
      <Hero />
      <Introduction />
      <Services />
      <WhyChooseUs />
      <Process />
      <Statistics />
      <Testimonials />
      <Countries />
      <CTA />
      <Footer />
    </div>
  );
}
