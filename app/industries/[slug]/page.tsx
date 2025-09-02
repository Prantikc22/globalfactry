"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Html } from "@/components/ui/html"

import GradientButton from "@/components/ui/button-1"
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const industryData = {
  electronics: {
    title: "Electronics",
    description: "Advanced manufacturing solutions for the electronics industry",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "We provide comprehensive manufacturing services for the electronics industry, from PCB assembly to complete device manufacturing. Our state-of-the-art facilities ensure precision and quality for consumer electronics, industrial equipment, and telecommunications devices.",
    capabilities: [
      "PCB Assembly and Testing",
      "Surface Mount Technology (SMT)",
      "Through-hole Assembly",
      "Cable and Wire Harness Assembly",
      "Enclosure Manufacturing",
      "Final Assembly and Testing",
    ],
    applications: [
      "Consumer Electronics",
      "Telecommunications Equipment",
      "Industrial Controls",
      "Medical Electronics",
    ],
    certifications: ["IPC-A-610", "ISO 9001", "RoHS Compliant", "UL Listed"],
    stats: {
      "Projects Completed": "2,500+",
      "Quality Rating": "99.8%",
      "Average Lead Time": "2-4 weeks",
    },
  },
  "aerospace-and-defence": {
    title: "Aerospace & Defence",
    description: "Precision manufacturing for aerospace and defense applications",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Our aerospace and defense manufacturing capabilities meet the most stringent requirements for safety, precision, and reliability. We specialize in critical components for aircraft, spacecraft, and defense systems.",
    capabilities: [
      "Precision CNC Machining",
      "Aerospace Welding and Fabrication",
      "Composite Manufacturing",
      "Heat Treatment Services",
      "Non-Destructive Testing",
      "AS9100 Quality Systems",
    ],
    applications: ["Aircraft Components", "Spacecraft Parts", "Defense Systems", "Avionics Equipment"],
    certifications: ["AS9100D", "NADCAP", "ITAR Registered", "ISO 9001"],
    stats: {
      "Projects Completed": "1,200+",
      "Quality Rating": "99.9%",
      "Average Lead Time": "4-8 weeks",
    },
  },
  automotive: {
    title: "Automotive",
    description: "High-volume manufacturing solutions for the automotive industry",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "We support the automotive industry with high-volume manufacturing capabilities, from engine components to body panels. Our lean manufacturing processes ensure cost-effective production while maintaining the highest quality standards.",
    capabilities: [
      "Die Casting and Forging",
      "Stamping and Forming",
      "Injection Molding",
      "Assembly and Sub-assembly",
      "Paint and Finishing",
      "Supply Chain Management",
    ],
    applications: ["Engine Components", "Body Panels", "Interior Parts", "Electronic Systems"],
    certifications: ["IATF 16949", "ISO 14001", "OHSAS 18001", "VDA 6.3"],
    stats: {
      "Projects Completed": "5,000+",
      "Quality Rating": "99.7%",
      "Average Lead Time": "6-12 weeks",
    },
  },
  "energy-and-utilities": {
    title: "Energy & Utilities",
    description: "Manufacturing solutions for renewable energy and utility infrastructure",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Supporting the transition to renewable energy with manufacturing solutions for solar, wind, and energy storage systems. We also provide components for traditional power generation and utility infrastructure.",
    capabilities: [
      "Solar Panel Manufacturing",
      "Wind Turbine Components",
      "Battery System Assembly",
      "Power Electronics",
      "Grid Infrastructure",
      "Energy Storage Solutions",
    ],
    applications: ["Solar Power Systems", "Wind Energy", "Energy Storage", "Grid Infrastructure"],
    certifications: ["IEC 61215", "UL 1703", "ISO 9001", "IEC 61730"],
    stats: {
      "Projects Completed": "800+",
      "Quality Rating": "99.6%",
      "Average Lead Time": "8-16 weeks",
    },
  },
  "medical-devices": {
    title: "Medical Devices",
    description: "FDA-compliant manufacturing for medical device applications",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Our medical device manufacturing capabilities ensure compliance with FDA regulations and international standards. We specialize in precision components for diagnostic equipment, surgical instruments, and implantable devices.",
    capabilities: [
      "Precision Machining",
      "Medical Device Assembly",
      "Cleanroom Manufacturing",
      "Sterilization Services",
      "Biocompatible Materials",
      "Regulatory Compliance",
    ],
    applications: ["Surgical Instruments", "Diagnostic Equipment", "Implantable Devices", "Laboratory Equipment"],
    certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Marking", "ISO 14971"],
    stats: {
      "Projects Completed": "1,500+",
      "Quality Rating": "99.9%",
      "Average Lead Time": "4-10 weeks",
    },
  },
  "precision-manufacturing": {
    title: "Precision Manufacturing",
    description: "Ultra-precision manufacturing for demanding applications",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Our precision manufacturing capabilities deliver components with micron-level accuracy for the most demanding applications. We serve industries requiring the highest levels of precision and quality.",
    capabilities: [
      "Multi-axis CNC Machining",
      "Swiss Turning",
      "EDM and Wire EDM",
      "Grinding and Lapping",
      "Coordinate Measuring",
      "Surface Treatment",
    ],
    applications: ["Optical Components", "Precision Instruments", "Semiconductor Equipment", "Research Equipment"],
    certifications: ["ISO 9001", "AS9100", "NIST Traceable", "ISO 17025"],
    stats: {
      "Projects Completed": "3,000+",
      "Quality Rating": "99.8%",
      "Average Lead Time": "2-6 weeks",
    },
  },
  infrastructure: {
    title: "Infrastructure",
    description: "Heavy manufacturing for infrastructure and construction projects",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "We provide heavy manufacturing solutions for infrastructure projects, including bridges, buildings, and transportation systems. Our capabilities support both new construction and infrastructure maintenance.",
    capabilities: [
      "Structural Steel Fabrication",
      "Heavy Welding",
      "Concrete Precast",
      "Bridge Components",
      "Transportation Infrastructure",
      "Project Management",
    ],
    applications: ["Bridge Construction", "Building Structures", "Transportation Systems", "Industrial Facilities"],
    certifications: ["AWS D1.1", "AISC Certified", "ISO 9001", "OSHA Compliant"],
    stats: {
      "Projects Completed": "500+",
      "Quality Rating": "99.5%",
      "Average Lead Time": "12-24 weeks",
    },
  },
  "consumer-products": {
    title: "Consumer Products",
    description: "High-volume manufacturing for consumer goods and appliances",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "We support consumer product manufacturers with high-volume production capabilities, from design to delivery. Our flexible manufacturing systems adapt to changing market demands and seasonal variations.",
    capabilities: [
      "Injection Molding",
      "Assembly and Packaging",
      "Quality Control",
      "Supply Chain Management",
      "Product Testing",
      "Regulatory Compliance",
    ],
    applications: ["Home Appliances", "Consumer Electronics", "Sporting Goods", "Personal Care Products"],
    certifications: ["ISO 9001", "UL Listed", "FCC Compliant", "Energy Star"],
    stats: {
      "Projects Completed": "10,000+",
      "Quality Rating": "99.4%",
      "Average Lead Time": "4-8 weeks",
    },
  },
  semiconductor: {
    title: "Semiconductor",
    description: "Precision manufacturing for semiconductor and microelectronics",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Our semiconductor manufacturing capabilities support the production of advanced microelectronics and semiconductor devices. We maintain cleanroom environments and precision processes required for this demanding industry.",
    capabilities: [
      "Cleanroom Manufacturing",
      "Wafer Processing",
      "Package Assembly",
      "Testing and Validation",
      "Precision Tooling",
      "Contamination Control",
    ],
    applications: ["Microprocessors", "Memory Devices", "Power Electronics", "Sensors and MEMS"],
    certifications: ["ISO 14644", "ISO 9001", "SEMI Standards", "ESD Compliant"],
    stats: {
      "Projects Completed": "2,000+",
      "Quality Rating": "99.9%",
      "Average Lead Time": "6-12 weeks",
    },
  },
}

import { useState } from "react";
import ConversationalQuoteModal from "@/components/ui/ConversationalQuoteModal";

export default function IndustryPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const params = useParams()
  const slug = params.slug as string
  const industry = industryData[slug as keyof typeof industryData]

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link href="/">
            <GradientButton width="160px" height="48px">
              Return Home
            </GradientButton>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <ConversationalQuoteModal open={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[350px] flex items-center pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={industry.image || "/placeholder.svg"} alt={industry.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{industry.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{industry.description}</p>
            <GradientButton width="180px" height="48px" onClick={() => setQuoteModalOpen(true)}>
              Get Industry Quote
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(industry.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
                <div className="text-gray-600">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{industry.overview}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {industry.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Applications</h3>
                <div className="flex flex-wrap gap-3">
                  {industry.applications.map((app, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Industry Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(industry.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="block text-center">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Contact Specialist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Speak with our {industry.title.toLowerCase()} manufacturing experts
                  </p>
                  <GradientButton width="100%" height="40px">
                    Schedule Consultation
                  </GradientButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <Html />

      <Footer />
    </div>
  )
}
