"use client";
import { ChevronRight, Home } from "lucide-react";

interface BreadCumbProps {
  title: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

export default function BreadCumb({
  title,
  subtitle,
  showBreadcrumb = true,
}: BreadCumbProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-20 w-12 h-12 bg-gradient-secondary rounded-full opacity-10 animate-float delay-1000"></div>

      <div className="container mx-auto  relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          {/* {showBreadcrumb && (
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <a
                href="/"
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-blue-600 font-medium">{title}</span>
            </nav>
          )} */}

          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight relative">
              {title}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-primary rounded-full"></div>
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}

            {/* Decorative Elements */}
            {/* <div className="flex items-center space-x-4 pt-4">
              <div className="h-px bg-gradient-to-r from-blue-400 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-blue-400 to-transparent w-16"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
