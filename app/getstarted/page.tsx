"use client";
import BreadCumb from "@/components/BreadCrumb";
import type React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Download,
  CheckCircle,
  Bot,
  Sparkles,
  Mail,
  Phone,
  MessageSquare,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import LiveResult from "@/components/LiveResult";

export default function GetStartedPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Instant Download",
      description: "Get immediate access to your trading robot",
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: "AI-Powered Trading",
      description: "Advanced algorithms for optimal performance",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Setup Guide Included",
      description: "Step-by-step installation instructions",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance",
    },
  ];

  const benefits = [
    "No trading experience required",
    "Works 24/7 without supervision",
    "Adapts to market conditions automatically",
    "Multiple currency pair support",
    "Built-in risk management",
    "Real-time performance monitoring",
    "Lifetime free updates",
    "Dedicated account manager",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BreadCumb
        title="Get Started"
        subtitle="Launch your automated trading journey in just a few simple steps. Download your AI trading robot and start earning today."
      />

      <LiveResult />

      {/* Success Message */}
      {isSubmitted && (
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-green-200">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-green-600 mb-4">
                  Download Started Successfully!
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Your AI trading robot download has begun. Check your email for
                  setup instructions and exclusive trading tips.
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download in Progress</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Setup Guide Sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold">
                      Download Robot
                    </span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Start Your{" "}
                  <span className="text-gradient">Automated Trading</span>{" "}
                  Journey
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get instant access to our powerful AI trading robot. Simply
                  fill out the form and start your path to automated trading
                  success with professional support every step of the way.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-white rounded-2xl p-6 shadow-blue border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="glass-blue rounded-3xl p-8 shadow-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  What You Get
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center glass-white rounded-2xl p-6 shadow-blue border border-gray-100">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-black text-blue-600 mb-1">
                    10K+
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    Active Users
                  </div>
                </div>
                <div className="text-center glass-white rounded-2xl p-6 shadow-blue border border-gray-100">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-black text-green-600 mb-1">
                    99.9%
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    Success Rate
                  </div>
                </div>
                <div className="text-center glass-white rounded-2xl p-6 shadow-blue border border-gray-100">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-black text-purple-600 mb-1">
                    24/7
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Download Form */}
            <div className="glass-white rounded-3xl p-8 shadow-blue-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download Your Trading Robot
                </h3>
                <p className="text-gray-600">
                  Fill out the form below to get instant access
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* City and Country Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your city"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your country"
                      required
                    />
                  </div>
                </div>

                {/* Trading Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    Trading Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">
                      Intermediate (1-3 years)
                    </option>
                    <option value="advanced">Advanced (3+ years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-900 font-medium mb-2"
                  >
                    Trading Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your trading goals and what you hope to achieve with automated trading..."
                    required
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    I agree to receive communications from Algopips including
                    setup instructions, trading tips, and product updates. I
                    understand I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full btn-gradient text-white font-bold py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Processing Download...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 mr-3" />
                      Download Complete!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                      Download AI Trading Robot
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="text-center pt-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    🔒 Your information is secure and encrypted. We respect your
                    privacy and will never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our expert team is standing by to help you with installation,
              setup, and getting your first trades running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-white font-bold px-8 py-4 rounded-xl shadow-blue hover:shadow-blue-lg transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Support: +1-800-ALGOPIPS
              </Button>
              <Button className="btn-outline-gradient text-gray-700 hover:text-blue-600 font-bold px-8 py-4 rounded-xl bg-white hover:bg-blue-50 transition-all duration-200">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
