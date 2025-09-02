import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import GradientButton from "@/components/ui/button-1";
import Link from "next/link";
import { Factory, Settings, Truck } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Without Limits. Powered by Precision.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Prototype to Production—Seamless, Scalable, On-Demand.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contract Manufacturing */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image src="/contractManu.webp" alt="Contract Manufacturing" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
                Scalable contract manufacturing with flexible capacity and turnkey EPC development. Delivering precision production at speed with transparent, competitive pricing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Turnkey EPC Development</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Flexible, On-Demand Capacity</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Cost-Optimized, Transparent Pricing</li>
              </ul>
              <div className="mt-auto">
                <Link href="/services/contract-manufacturing">
                  <GradientButton width="140px" height="40px" className="text-sm">Learn More</GradientButton>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Integrated Job-Work */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image src="/images/jobwork.avif" alt="Integrated Job-Work" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
                End-to-end jobwork execution—from rapid prototyping to scaled production. Backed by digital transparency, real-time quality control, and integrated supply chain visibility.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Rapid Prototyping → Full Production</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Real-Time Digital Transparency</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Integrated Supply Chain Management</li>
              </ul>
              <div className="mt-auto">
                <Link href="/services/job-work">
                  <GradientButton width="140px" height="40px" className="text-sm">Learn More</GradientButton>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Inventory & Logistics */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image src="/images/logistics.avif" alt="Logistics and Inventory" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
                Global logistics and AI-driven inventory management. From demand forecasting to auto-replenishment, we ensure uninterrupted supply chain flow worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>AI-Powered Demand Forecasting</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Global Logistics Network</li>
                <li className="flex items-center text-sm text-gray-600"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Auto Inventory Replenishment</li>
              </ul>
              <div className="mt-auto">
                <Link href="/services/inventory-logistics">
                  <GradientButton width="140px" height="40px" className="text-sm">Learn More</GradientButton>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
