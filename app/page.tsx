// app/page.tsx  (server component)
import React from "react";
import { Html } from "@/components/ui/html";
import Navbar from "@/components/ui/NavbarServer";
import { Footer } from "@/components/ui/footer";
import {
  HeroSection,
  ClientLogosSection,
  ServicesSection,
  CapabilitiesSection,
  IndustriesSection,
  GlobalExcellenceSection,
  CaseStudiesSection,
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
      <ServicesSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <GlobalExcellenceSection />
      <CaseStudiesSection />

      <Html />
      <Footer />

      {/* client utilities */}
      <QuoteListeners />
      <QuoteClient />
    </div>
  );
}
