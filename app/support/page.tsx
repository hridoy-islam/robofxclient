"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Ticket,
  Mail,
  MessageSquare,
  Clock,
  FileText,
  CheckCircle,
  Zap,
  Users,
  LayoutDashboard,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <Zap className="w-6 h-6 " />,
      title: "Mining Operations",
      description: "Hash rate issues, hardware allocation, and pool connectivity.",
      action: "Get Technical Help",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 " />,
      title: "Dashboard & Account",
      description: "Login issues, verification status, and security settings.",
      action: "Manage Account",
    },
    {
      icon: <FileText className="w-6 h-6 " />,
      title: "Billing & Payouts",
      description: "Withdrawal queries, deposit confirmations, and plan upgrades.",
      action: "View Financial FAQ",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 " />,
      title: "Security & Privacy",
      description: "2FA setup, wallet address changes, and data protection.",
      action: "Security Center",
    },
  ];

  const supportStats = [
    {
      label: "Avg. Response Time",
      value: "< 2 Hours",
      icon: <Clock className="w-5 h-5 text-gray-400" />,
    },
    {
      label: "User Satisfaction",
      value: "98.5%",
      icon: <CheckCircle className="w-5 h-5 text-gray-400" />,
    },
    {
      label: "Active Agents",
      value: "24/7",
      icon: <Users className="w-5 h-5 text-gray-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />

      <BreadCumb
        title="Support Center"
        subtitle="Dedicated assistance for your mining journey."
      />

      {/* Stats Bar - Floating overlap */}
      <section className="relative z-20 -mt-8 ">
        <div className="container mx-auto ">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {supportStats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 py-4 md:py-0"
              >
                <div className="p-3 bg-gray-50 rounded-full border border-gray-100">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column - Categories */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className=" font-semibold tracking-wide uppercase text-sm">
                  Help Categories
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  How can we assist you?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Select a category below to find answers or direct your inquiry to the right department.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {supportCategories.map((category, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      {category.description}
                    </p>
                    <div className="flex items-center  font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      {category.action} <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact Info Block */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Prefer to email us directly?</h3>
                        <p className="text-gray-400 text-sm">Our enterprise support team monitors this inbox 24/7.</p>
                    </div>
                    <a href="mailto:support@cryptominerx.com" className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all border border-white/10 backdrop-blur-sm">
                        <Mail className="w-5 h-5" />
                        <span className="font-mono">support@cryptominerx.com</span>
                    </a>
                 </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 sticky top-8">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Ticket className="w-3 h-3" />
                    <span>Open Ticket</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Submit a Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    We usually respond within 2 hours.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Priority</label>
                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                    <div>
                         <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Department</label>
                         <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                            <option value="tech">Technical</option>
                            <option value="billing">Billing</option>
                            <option value="sales">Sales</option>
                        </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="Brief description of the issue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="Please include error codes if applicable..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 mt-2">
                    Submit Ticket <MessageSquare className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Protected by reCAPTCHA and the Google Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}