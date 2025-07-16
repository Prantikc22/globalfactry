"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Html } from "@/components/ui/html"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import {
  Factory,
  Shield,
  BarChart3,
  Globe,
  Settings,
  Truck,
  Clock,
  Eye,
  Play,
  ChevronRight,
  ChevronLeft,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { WorldMap } from "@/components/ui/world-map"

export default function GlobalfactryWebsite() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-manufacturing.png"
            alt="Modern automated manufacturing facility with robotic assembly lines and CNC machines"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-[85vh] flex flex-col justify-center">
              {/* Main Content */}
              <div className="max-w-4xl">
                <div
                  className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
                    Manufacturing Made
                    <br />
                    <span className="text-blue-400">Simple & Scalable</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl font-normal">
                    Transform your production with our end-to-end manufacturing platform. From rapid prototyping to mass
                    production, we deliver quality at speed with complete transparency.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <GradientButton
                      width="200px"
                      height="56px"
                      onClick={() => console.log("Get Started clicked")}
                      className="text-lg font-semibold"
                    >
                      Get Started Today
                    </GradientButton>
                    <button className="border border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-full h-14 transition-all duration-300 flex items-center justify-center">
                      <Play className="mr-2 w-5 h-5" />
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-semibold text-white mb-1 tracking-tight">500+</div>
                    <div className="text-gray-300 text-sm font-normal">Projects Delivered</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-semibold text-white mb-1 tracking-tight">50+</div>
                    <div className="text-gray-300 text-sm font-normal">Manufacturing Partners</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-semibold text-white mb-1 tracking-tight">99%</div>
                    <div className="text-gray-300 text-sm font-normal">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Client Logos Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6 mb-8 md:mb-0">
              <p className="text-center md:text-right text-sm text-gray-600 font-medium">Trusted by industry leaders</p>
            </div>
            <div className="flex-1 md:pl-6 relative">
              <div className="overflow-hidden">
                <div className="flex animate-infinite-scroll space-x-16 opacity-60">
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Boeing_full_logo.svg"
                    alt="Boeing"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                    alt="Tesla"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
                    alt="Ford"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg"
                    alt="General Electric"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg"
                    alt="Siemens"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Caterpillar-logo.svg"
                    alt="Caterpillar"
                  />
                  {/* Duplicate for seamless loop */}
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Boeing_full_logo.svg"
                    alt="Boeing"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                    alt="Tesla"
                  />
                  <img
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
                    alt="Ford"
                  />
                </div>
              </div>
              {/* Fade effects */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlimited Manufacturing, Zero Headaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we handle every aspect of your manufacturing needs with precision and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Contract Manufacturing - Industrial production line with precision machinery"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract Manufacturing</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Unlimited capacity with lower pricing & lead times. EPC turnkey development included for seamless
                  production scaling.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Turnkey EPC Development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Unlimited Production Capacity
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Competitive Pricing
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/services/contract-manufacturing">
                    <GradientButton width="140px" height="40px" className="text-sm">
                      Learn More
                    </GradientButton>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Integrated Job-Work - CNC machining and precision manufacturing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Integrated Job-Work</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  From prototyping to production, with full digital transparency and speed. Real-time tracking and
                  quality control.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Rapid Prototyping
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Digital Transparency
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Supply Chain Management
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/services/job-work">
                    <GradientButton width="140px" height="40px" className="text-sm">
                      Learn More
                    </GradientButton>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Logistics and Inventory - Warehouse automation and supply chain management"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Managed Inventory & Logistics</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Global shipping and auto-replenished inventory with AI-driven demand forecasting for optimal supply
                  chain management.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    AI Demand Forecasting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Global Logistics Network
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Auto-Replenishment
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/services/inventory-logistics">
                    <GradientButton width="140px" height="40px" className="text-sm">
                      Learn More
                    </GradientButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing processes with precision, quality, and scale across diverse technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Extrusions",
                image: "/images/capabilities/extrusion.jpeg",
                description:
                  "Precision aluminum and plastic extrusion services for complex profiles and custom shapes.",
              },
              {
                name: "Die Casting",
                image: "/images/capabilities/die-casting.png",
                description:
                  "High-pressure die casting for aluminum, zinc, and magnesium components with tight tolerances.",
              },
              {
                name: "CNC Machining",
                image: "/images/capabilities/cnc-precision.jpeg",
                description:
                  "Multi-axis CNC machining for precision parts with micron-level accuracy and surface finish.",
              },
              {
                name: "Injection Molding",
                image: "/images/capabilities/sheet-metal-stamping.png",
                description: "High-volume plastic injection molding with automated systems and quality control.",
              },
              {
                name: "Forging",
                image: "/images/capabilities/forging-hot.png",
                description: "Hot and cold forging processes for superior strength and material properties.",
              },
              {
                name: "Sheet Metal Stamping",
                image: "/images/capabilities/sheet-metal-stamping.png",
                description: "Progressive and transfer stamping for high-volume sheet metal components.",
              },
              {
                name: "Prototyping & Pre-Production",
                image:
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Rapid prototyping and small-batch production for product development and testing.",
              },
              {
                name: "Investment Casting",
                image: "/images/capabilities/investment-casting.png",
                description: "Precision investment casting for complex geometries and superior surface finish.",
              },
              {
                name: "Assembly Services",
                image: "/images/capabilities/assembly-services.png",
                description: "Complete assembly services with testing, packaging, and quality assurance.",
              },
            ].map((capability, index) => (
              <Link
                key={capability.name}
                href={`/capabilities/${capability.name.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
              >
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={capability.image || "/placeholder.svg"}
                      alt={capability.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">{capability.description}</p>
                    <div className="mt-auto">
                      <GradientButton width="120px" height="36px" className="text-sm">
                        Learn More
                      </GradientButton>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Manufacturing Excellence Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Global Manufacturing Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              From India to the world, we connect global manufacturers with unlimited capacity, local expertise, and
              cutting-edge technology to deliver quality at scale.
            </p>
          </motion.div>

          {/* World Map Container - Seamless */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <WorldMap
              dots={[
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: 40.7128, lng: -74.006 }, // New York
                },
                {
                  start: { lat: 19.076, lng: 72.8777 }, // Mumbai
                  end: { lat: 51.5074, lng: -0.1278 }, // London
                },
                {
                  start: { lat: 13.0827, lng: 80.2707 }, // Chennai
                  end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                },
                {
                  start: { lat: 12.9716, lng: 77.5946 }, // Bangalore
                  end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                },
                {
                  start: { lat: 22.5726, lng: 88.3639 }, // Kolkata
                  end: { lat: 52.52, lng: 13.405 }, // Berlin
                },
                {
                  start: { lat: 17.385, lng: 78.4867 }, // Hyderabad
                  end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                },
              ]}
              lineColor="#2563eb"
            />
          </motion.div>

          {/* Stats Grid - Professional */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "50+", label: "Manufacturing Facilities", icon: Factory },
              { number: "15+", label: "Countries Served", icon: Globe },
              { number: "1000+", label: "Global Suppliers", icon: Users },
              { number: "99.5%", label: "Quality Assurance", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Two Column Content - India Gateway - Professional */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    India: Your Gateway to
                    <span className="block text-blue-600">Global Manufacturing</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Leverage India's manufacturing prowess with our comprehensive platform. We provide end-to-end
                    solutions that combine local expertise with global standards, enabling seamless production scaling
                    from prototype to mass manufacturing.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                    <p className="text-sm text-gray-600">Save 30-50% on manufacturing costs</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Rapid Scaling</h4>
                    <p className="text-sm text-gray-600">Double capacity overnight</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "ISO certified manufacturing processes",
                    "Real-time production tracking and transparency",
                    "Compliance with international quality standards",
                    "24/7 global support and project management",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <GradientButton
                    width="240px"
                    height="48px"
                    onClick={() => console.log("Explore India Manufacturing clicked")}
                    className="text-base font-semibold"
                  >
                    Explore India Manufacturing
                  </GradientButton>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Advanced Manufacturing Facility in India"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from India</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped Indian manufacturers scale globally and international companies establish their
              presence in India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Automotive Parts Manufacturing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Automotive</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tata Motors Component Scaling</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Helped Tata Motors scale their component manufacturing by 300% while reducing costs by 25% through our
                  optimized supply chain network across Maharashtra and Tamil Nadu.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    300% production increase
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    25% cost reduction
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    6-month timeline
                  </div>
                </div>
                <div className="mt-auto">
                  <GradientButton width="140px" height="36px" className="text-sm">
                    Read Case Study
                  </GradientButton>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Medical Device Manufacturing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Medical Devices</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Biocon Biosimilars Production</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Enabled Biocon to establish FDA-compliant biosimilar manufacturing facilities in Bangalore, achieving
                  international quality standards for global market entry.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    FDA compliance achieved
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Global market access
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ISO 13485 certified
                  </div>
                </div>
                <div className="mt-auto">
                  <GradientButton width="140px" height="36px" className="text-sm">
                    Read Case Study
                  </GradientButton>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solar Panel Manufacturing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Renewable Energy</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Adani Solar Panel Expansion</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Supported Adani Green Energy in scaling solar panel manufacturing capacity by 500% across Gujarat and
                  Rajasthan, meeting India's renewable energy targets ahead of schedule.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    500% capacity increase
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Carbon neutral production
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Export ready quality
                  </div>
                </div>
                <div className="mt-auto">
                  <GradientButton width="140px" height="36px" className="text-sm">
                    Read Case Study
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries with specialized manufacturing expertise and compliance standards
            </p>
          </div>

          <div className="relative">
            {/* Scroll Controls */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    const container = document.getElementById("industries-scroll")
                    if (container) {
                      container.scrollBy({ left: -320, behavior: "smooth" })
                    }
                  }}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-sm text-gray-500">Scroll to explore all industries</span>
                <button
                  onClick={() => {
                    const container = document.getElementById("industries-scroll")
                    if (container) {
                      container.scrollBy({ left: 320, behavior: "smooth" })
                    }
                  }}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div
              id="industries-scroll"
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onWheel={(e) => {
                // Horizontal scroll on mouse wheel
                e.currentTarget.scrollLeft += e.deltaY
              }}
            >
              {[
                {
                  name: "Electronics",
                  image: "/images/capabilities/electronics-assembly.jpeg",
                },
                {
                  name: "Aerospace & Defence",
                  image:
                    "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Automotive",
                  image:
                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Energy & Utilities",
                  image:
                    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Medical Devices",
                  image:
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Precision Manufacturing",
                  image:
                    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Infrastructure",
                  image:
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Consumer Products",
                  image:
                    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Semiconductor",
                  image:
                    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Textiles & Apparel",
                  image:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Food & Beverage",
                  image:
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Chemicals & Petrochemicals",
                  image:
                    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
              ].map((industry, index) => (
                <Link
                  key={industry.name}
                  href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                >
                  <div className="relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden cursor-pointer group">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{industry.name}</h3>
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                        <span className="text-sm">Learn more</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Scroll indicators */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Globalfactry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of manufacturing with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {[
              {
                title: "Lightning Fast Delivery",
                description:
                  "From prototype to production in weeks, not months. Our streamlined process ensures rapid turnaround times.",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                title: "Cost Optimization",
                description:
                  "Save 30-50% on manufacturing costs through our optimized supply chain and bulk purchasing power.",
                icon: <BarChart3 className="w-6 h-6" />,
              },
              {
                title: "Quality Assurance",
                description: "ISO certified processes with rigorous quality control at every stage of production.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Global Network",
                description: "Access to 50+ manufacturing partners across 15+ countries for unlimited capacity.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: "Real-time Tracking",
                description: "Complete transparency with live project tracking and instant communication channels.",
                icon: <Eye className="w-6 h-6" />,
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support with dedicated project managers for your success.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Digital Platform",
                description: "AI-powered operations with automated workflows and intelligent demand forecasting.",
                icon: <Settings className="w-6 h-6" />,
              },
              {
                title: "Scalable Solutions",
                description: "From single prototypes to mass production, we scale with your business needs seamlessly.",
                icon: <Factory className="w-6 h-6" />,
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col lg:border-r py-10 relative group/feature border-gray-200 ${
                  (index === 0 || index === 4) && "lg:border-l"
                } ${index < 4 && "lg:border-b"}`}
              >
                {index < 4 && (
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
                )}
                {index >= 4 && (
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
                )}
                <div className="mb-4 relative z-10 px-10 text-blue-600">{feature.icon}</div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Build Your Manufacturing Dreams */}
      <Html />

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-gray-600">Trusted by regulatory bodies and industry standards worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Image
                  src="/images/certifications/iso.png"
                  alt="ISO Certification"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">ISO 9001:2015</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Image
                  src="/images/certifications/drdo.png"
                  alt="DRDO Certification"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">DRDO Certified</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Image
                  src="/images/certifications/tuv-nord.png"
                  alt="TÜV NORD Certification"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">TÜV NORD</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Image
                  src="/images/certifications/gdpr.png"
                  alt="GDPR Compliance"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
