"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { CheckCircle, Clock, Shield, Cpu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const capabilityData = {
  extrusions: {
    title: "Extrusions",
    description: "Precision aluminum and plastic extrusion services for complex profiles and custom shapes",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Our extrusion capabilities deliver precision-engineered profiles for diverse applications. We specialize in both aluminum and plastic extrusions, offering custom tooling and finishing services.",
    features: [
      "Aluminum extrusion up to 12-inch diameter",
      "Plastic extrusion for complex profiles",
      "Custom die design and manufacturing",
      "Secondary operations and finishing",
      'Tight tolerance control ±0.001"',
      "High-volume production capabilities",
    ],
    applications: ["Automotive components", "Architectural systems", "Industrial machinery", "Consumer electronics"],
    specifications: {
      "Material Types": "Aluminum 6061, 6063, 7075; Various plastics",
      "Max Profile Size": "12 inches diameter",
      Tolerance: "±0.001 inches",
      "Production Volume": "1,000 - 1,000,000+ pieces",
    },
  },
  "die-casting": {
    title: "Die Casting",
    description: "High-pressure die casting for aluminum, zinc, and magnesium components with tight tolerances",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Advanced die casting solutions for complex metal components. Our state-of-the-art facilities ensure consistent quality and dimensional accuracy for high-volume production.",
    features: [
      "High-pressure die casting machines",
      "Aluminum, zinc, and magnesium alloys",
      "Automated trimming and finishing",
      "In-house tooling and die maintenance",
      "Real-time quality monitoring",
      "Secondary machining capabilities",
    ],
    applications: ["Automotive engine components", "Electronics housings", "Industrial hardware", "Aerospace parts"],
    specifications: {
      "Material Types": "Aluminum A380, A383; Zinc ZA-8, ZA-12; Magnesium AZ91D",
      "Max Part Weight": "50 lbs",
      Tolerance: "±0.002 inches",
      "Production Volume": "10,000 - 5,000,000+ pieces",
    },
  },
  "cnc-machining": {
    title: "CNC Machining",
    description: "Multi-axis CNC machining for precision parts with micron-level accuracy and surface finish",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Precision CNC machining services with advanced multi-axis capabilities. From prototypes to production runs, we deliver exceptional accuracy and surface finish quality.",
    features: [
      "3, 4, and 5-axis CNC machining",
      "Micron-level precision",
      "Advanced CAM programming",
      "In-process quality control",
      "Wide range of materials",
      "24/7 lights-out manufacturing",
    ],
    applications: ["Aerospace components", "Medical devices", "Precision instruments", "Automotive parts"],
    specifications: {
      "Material Types": "Aluminum, Steel, Titanium, Plastics, Composites",
      "Max Part Size": '60" x 40" x 30"',
      Tolerance: "±0.0001 inches",
      "Production Volume": "1 - 100,000+ pieces",
    },
  },
  "injection-molding": {
    title: "Injection Molding",
    description: "High-volume plastic injection molding with automated systems and quality control",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "State-of-the-art injection molding facilities for high-volume plastic component production. Our automated systems ensure consistent quality and cost-effective manufacturing.",
    features: [
      "Automated injection molding systems",
      "Multi-cavity tooling capabilities",
      "Insert molding and overmolding",
      "Real-time process monitoring",
      "Automated part handling",
      "In-house tool design and build",
    ],
    applications: ["Consumer products", "Automotive interiors", "Electronics enclosures", "Medical devices"],
    specifications: {
      "Material Types": "ABS, PC, PP, PE, PA, POM, and engineering plastics",
      "Max Part Weight": "10 lbs",
      Tolerance: "±0.002 inches",
      "Production Volume": "10,000 - 10,000,000+ pieces",
    },
  },
  forging: {
    title: "Forging",
    description: "Hot and cold forging processes for superior strength and material properties",
    image:
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Advanced forging capabilities for high-strength components. Our hot and cold forging processes deliver superior material properties and dimensional accuracy.",
    features: [
      "Hot and cold forging processes",
      "Upset, open-die, and closed-die forging",
      "Heat treatment capabilities",
      "Precision machining post-forging",
      "Material testing and certification",
      "Custom tooling design",
    ],
    applications: ["Automotive drivetrain", "Aerospace structures", "Industrial machinery", "Oil & gas equipment"],
    specifications: {
      "Material Types": "Carbon steel, Alloy steel, Stainless steel, Aluminum, Titanium",
      "Max Part Weight": "500 lbs",
      Tolerance: "±0.005 inches",
      "Production Volume": "100 - 1,000,000+ pieces",
    },
  },
  "sheet-metal-stamping": {
    title: "Sheet Metal Stamping",
    description: "Progressive and transfer stamping for high-volume sheet metal components",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "High-speed stamping operations for complex sheet metal parts. Our progressive and transfer stamping capabilities ensure efficient production of precision components.",
    features: [
      "Progressive and transfer stamping",
      "Deep draw capabilities",
      "In-die tapping and piercing",
      "Automated material handling",
      "Secondary operations",
      "Tool design and maintenance",
    ],
    applications: ["Automotive body panels", "Electronics brackets", "Appliance components", "HVAC systems"],
    specifications: {
      "Material Types": "Steel, Aluminum, Stainless steel, Copper alloys",
      "Max Material Thickness": "0.25 inches",
      Tolerance: "±0.003 inches",
      "Production Volume": "10,000 - 10,000,000+ pieces",
    },
  },
  "prototyping-pre-production": {
    title: "Prototyping & Pre-Production",
    description: "Rapid prototyping and small-batch production for product development and testing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Accelerate your product development with our rapid prototyping and pre-production services. From concept to market-ready products in record time.",
    features: [
      "3D printing and additive manufacturing",
      "Rapid tooling solutions",
      "Small-batch production runs",
      "Design for manufacturability",
      "Material testing and validation",
      "Fast turnaround times",
    ],
    applications: ["Product development", "Functional testing", "Market validation", "Design verification"],
    specifications: {
      "Material Types": "Plastics, Metals, Composites, Ceramics",
      "Lead Time": "1-5 days for prototypes",
      Tolerance: "±0.005 inches",
      "Production Volume": "1 - 1,000 pieces",
    },
  },
  "investment-casting": {
    title: "Investment Casting",
    description: "Precision investment casting for complex geometries and superior surface finish",
    image:
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "Precision investment casting for complex, near-net-shape components. Our lost-wax process delivers exceptional surface finish and dimensional accuracy.",
    features: [
      "Lost-wax investment casting",
      "Complex geometry capabilities",
      "Superior surface finish",
      "Minimal machining required",
      "Wide range of alloys",
      "Heat treatment services",
    ],
    applications: ["Aerospace turbine blades", "Medical implants", "Jewelry and art", "Industrial valves"],
    specifications: {
      "Material Types": "Stainless steel, Carbon steel, Aluminum, Titanium, Superalloys",
      "Max Part Weight": "100 lbs",
      Tolerance: "±0.005 inches",
      "Production Volume": "10 - 100,000+ pieces",
    },
  },
  "assembly-services": {
    title: "Assembly Services",
    description: "Complete assembly services with testing, packaging, and quality assurance",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    overview:
      "End-to-end assembly services to complete your manufacturing process. From sub-assembly to final product packaging, we ensure quality at every step.",
    features: [
      "Manual and automated assembly",
      "Functional testing and validation",
      "Quality control and inspection",
      "Packaging and labeling",
      "Supply chain management",
      "Just-in-time delivery",
    ],
    applications: ["Electronics assembly", "Mechanical assemblies", "Medical device assembly", "Consumer products"],
    specifications: {
      "Assembly Types": "Mechanical, Electronic, Pneumatic, Hydraulic",
      "Testing Capabilities": "Functional, Environmental, Durability",
      "Quality Standards": "ISO 9001, ISO 13485, AS9100",
      "Production Volume": "100 - 1,000,000+ assemblies",
    },
  },
}

export default function CapabilityPage() {
  const params = useParams()
  const slug = params.slug as string
  const capability = capabilityData[slug as keyof typeof capabilityData]

  if (!capability) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Capability Not Found</h1>
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
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb Navigation */}
      <section className="pt-28 pb-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-500 hover:text-gray-700">
                  Capabilities
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{capability.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={capability.image || "/placeholder.svg"} alt={capability.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{capability.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{capability.description}</p>
            <GradientButton width="160px" height="48px">
              Request Quote
            </GradientButton>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{capability.overview}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {capability.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
                <div className="flex flex-wrap gap-3">
                  {capability.applications.map((app, index) => (
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
                    <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(capability.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-semibold text-gray-900">{key}</dt>
                      <dd className="text-gray-600">{value}</dd>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Lead Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prototypes</span>
                      <span className="font-semibold">1-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Small Batch</span>
                      <span className="font-semibold">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Production</span>
                      <span className="font-semibold">2-6 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Quality Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">ISO 9001:2015</Badge>
                    <Badge variant="outline">AS9100D</Badge>
                    <Badge variant="outline">ISO 13485</Badge>
                    <Badge variant="outline">IATF 16949</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(capabilityData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedCapability]) => (
                <Link key={key} href={`/capabilities/${key}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedCapability.image || "/placeholder.svg"}
                        alt={relatedCapability.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{relatedCapability.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedCapability.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our experts to discuss your {capability.title.toLowerCase()} requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton width="160px" height="48px">
              Request Quote
            </GradientButton>
            <GradientButton width="200px" height="48px">
              Schedule Consultation
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
