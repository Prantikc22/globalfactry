// app/page.tsx  (server component)
import React from "react";
import { Html } from "@/components/ui/html";
import Navbar from "@/components/ui/NavbarServer";
import { Footer } from "@/components/ui/footer";
import {
  HeroSection,
  ClientLogosSection,
  WhyLogicwerkSection,
  FinanceSection,
  TestimonialsSection,
  CapabilitiesSection,
  IndustriesSection,
  GlobalExcellenceSection,
  CaseStudiesSection,
  CertificationsSection,
  ProcessSection,
  CTAAuroraSection,
} from "@/components/landing/sections";

// client wrappers
import QuoteClient from "@/app/_quote-client"; // handles modal open state + dynamic import
import QuoteListeners from "@/components/quote-listeners.client"; // attaches click/hover listeners

export default function GlobalfactryWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* other sections */}
      <ClientLogosSection />
      <WhyLogicwerkSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ProcessSection />
      <GlobalExcellenceSection />
      <FinanceSection />
      <CaseStudiesSection />
      <CertificationsSection />
      <CTAAuroraSection />


      <Footer />

      {/* client utilities */}
      <QuoteListeners />
      <QuoteClient />
    </div>
  );
}
