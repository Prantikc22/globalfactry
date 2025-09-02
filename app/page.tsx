"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Html } from "@/components/ui/html"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import ConversationalQuoteModal from "@/components/ui/ConversationalQuoteModal"
import {
  HeroSection,
  ClientLogosSection,
  ServicesSection,
  CapabilitiesSection,
  IndustriesSection,
  GlobalExcellenceSection,
  CaseStudiesSection,
} from "@/components/landing/sections"

export default function GlobalfactryWebsite() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onRequestQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onQuote={() => setQuoteModalOpen(true)} />

      {/* Client Logos Section */}
      <ClientLogosSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Capabilities Section */}
      <CapabilitiesSection />
      <IndustriesSection />
      <GlobalExcellenceSection />
      <CaseStudiesSection />

      
<Html/>
      {/* Footer */}
      <Footer />
    </div>
  );
}

                  