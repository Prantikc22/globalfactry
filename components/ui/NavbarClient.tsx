// components/ui/NavbarClient.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GradientButton from "./button-1";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// Props: all static data passed from server
export default function NavbarClient({ services, capabilities, insights, about }: {
  services: any[];
  capabilities: any[];
  insights: any[];
  about: any[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => setActiveDropdown(dropdown);
  const handleDropdownLeave = () => setActiveDropdown(null);

  const triggerOpenQuote = () => {
    if (typeof window !== "undefined") {
      import("@/components/ui/ConversationalQuoteModal").catch(() => {});
      import("framer-motion").catch(() => {});
      window.dispatchEvent(new Event("open-quote"));
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                {isScrolled ? (
                  <Image
                    src="/images/logo-black.png"
                    alt="Globalfactry - Manufacturing Excellence"
                    width={110}
                    height={40}
                    className="h-10 w-auto transition-all duration-500"
                    priority
                  />
                ) : (
                  <Image
                    src="/images/logo-white.png"
                    alt="Globalfactry Logo"
                    width={110}
                    height={40}
                    className="h-10 w-auto transition-all duration-500"
                    priority
                  />
                )}
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-500 rounded-lg ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
              {/* Capabilities Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdownEnter("capabilities")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-500 rounded-lg ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  Capabilities
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
              <Link
                href="/#industries"
                className={`px-4 py-2 font-medium transition-all duration-500 rounded-lg ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                Industries
              </Link>
              {/* About Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-500 rounded-lg ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  About
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
            </div>
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <GradientButton width="140px" height="44px" onClick={triggerOpenQuote} className="text-sm font-medium">
                Get A Quote
              </GradientButton>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-all duration-500 rounded-lg ${
                  isScrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50" : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 px-3 py-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 px-3 py-2">Capabilities</div>
                {capabilities.slice(0, 5).map((capability) => (
                  <Link
                    key={capability.href}
                    href={capability.href}
                    className="block px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {capability.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/#industries"
                className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 px-3 py-2">About</div>
                {about.map((item) =>
                  item.isContact ? (
                    <button
                      key={item.label}
                      className="block px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                      onClick={() => {
                        triggerOpenQuote();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                )}
                <div className="px-6 py-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Insights</div>
                  {insights.map((insight) => (
                    <Link
                      key={insight.href}
                      href={insight.href}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {insight.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <GradientButton
                  width="100%"
                  height="44px"
                  onClick={() => {
                    triggerOpenQuote();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium"
                >
                  Request Quote
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Full-width Dropdown Overlays */}
      {/* Services Dropdown */}
      <div
        className={`fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-300 z-40 ${
          activeDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
        onMouseEnter={() => handleDropdownEnter("services")}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-8">End-to-end manufacturing solutions for your business needs</p>
              <div className="space-y-6">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block group p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {service.label}
                        </h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Services?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Unlimited manufacturing capacity
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  30-50% cost reduction
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Real-time project tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Global quality standards
                </li>
              </ul>
              <div className="mt-6">
                <GradientButton width="160px" height="40px" className="text-sm">
                  Get Started
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Capabilities Dropdown */}
      <div
        className={`fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-300 z-40 ${
          activeDropdown === "capabilities" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
        onMouseEnter={() => handleDropdownEnter("capabilities")}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Manufacturing Capabilities</h3>
            <p className="text-gray-600">Advanced manufacturing processes with precision, quality, and scale</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Link
                key={capability.href}
                href={capability.href}
                className="block group p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {capability.label}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* About Dropdown */}
      <div
        className={`fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-300 z-40 ${
          activeDropdown === "about" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
        onMouseEnter={() => handleDropdownEnter("about")}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">About Logicwerk DLM</h3>
              <p className="text-gray-600 mb-8">Learn more about our company, team, and mission</p>
              <div className="space-y-4">
                {about.map((item) =>
                  item.isContact ? (
                    <button
                      key={item.label}
                      className="block group p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 w-full text-left"
                      onClick={() => {
                        triggerOpenQuote();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {item.label}
                          </h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </button>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block group p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {item.label}
                          </h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Insights & Resources</h4>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <Link
                    key={insight.href}
                    href={insight.href}
                    className="block group p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {insight.label}
                        </h5>
                        <p className="text-sm text-gray-600">{insight.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}
