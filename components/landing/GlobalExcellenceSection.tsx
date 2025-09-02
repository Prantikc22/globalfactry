import React from "react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { Factory, Globe, Users, Shield, TrendingUp, Clock, BarChart3, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function GlobalExcellenceSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Global Manufacturing Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            From India to the world, we connect global manufacturers with unlimited capacity, local expertise, and cutting-edge technology to deliver quality at scale.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-20">
          <WorldMap
            dots={[
              { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 40.7128, lng: -74.006 } }, // New Delhi -> NY
              { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 51.5074, lng: -0.1278 } }, // Mumbai -> London
              { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: 35.6762, lng: 139.6503 } }, // Chennai -> Tokyo
              { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 37.7749, lng: -122.4194 } }, // Bangalore -> SF
              { start: { lat: 22.5726, lng: 88.3639 }, end: { lat: 52.52, lng: 13.405 } }, // Kolkata -> Berlin
              { start: { lat: 17.385, lng: 78.4867 }, end: { lat: -33.8688, lng: 151.2093 } }, // Hyderabad -> Sydney
            ]}
            lineColor="#2563eb"
          />
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "50+", label: "Manufacturing Facilities", icon: Factory },
            { number: "15+", label: "Countries Served", icon: Globe },
            { number: "1000+", label: "Global Suppliers", icon: Users },
            { number: "99.5%", label: "Quality Assurance", icon: Shield },
          ].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  India: Your Gateway to
                  <span className="block text-blue-600">Global Manufacturing</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Leverage India's manufacturing prowess with our comprehensive platform. We provide end-to-end solutions that combine local expertise with global standards, enabling seamless production scaling from prototype to mass manufacturing.
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
                  <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="relative">
            <div className="relative">
              <Image src="/images/prototype.avif" alt="Advanced Manufacturing Facility in India" width={600} height={400} className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              {/* Floating Cards */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
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
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
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
  );
}
