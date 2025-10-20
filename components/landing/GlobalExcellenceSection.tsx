import React from "react";
import { WorldMap } from "@/components/ui/world-map";
import { Factory, Globe, Users, Shield, TrendingUp, Clock, BarChart3, CheckCircle } from "lucide-react";
import Image from "next/image";
import AnimatedOnClient from "@/components/AnimatedOnClient";

export default function GlobalExcellenceSection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnClient initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Manufacturing Capacity</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Logicwerk DLM has the capacity to double production needs overnight regardless of product, specification, scale or geography.
          </p>
        </AnimatedOnClient>
        <AnimatedOnClient initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-20">
          <WorldMap
            dots={[
              { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 40.7128, lng: -74.006 } }, // New Delhi -> NY
              { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 51.5074, lng: -0.1278 } }, // Mumbai -> London
              { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: 35.6762, lng: 139.6503 } }, // Chennai -> Tokyo
              { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 37.7749, lng: -122.4194 } }, // Bangalore -> SF
              { start: { lat: 22.5726, lng: 88.3639 }, end: { lat: 52.52, lng: 13.405 } }, // Kolkata -> Berlin
              { start: { lat: 17.385, lng: 78.4867 }, end: { lat: -33.8688, lng: 151.2093 } }, // Hyderabad -> Sydney
            ]}
            lineColor="#60a5fa"
            backgroundColor="#0b1220"
            dotColor="#94a3b840"
          />
        </AnimatedOnClient>
        {/* Auto-scrolling stats (below map/image) */}
        <div className="relative mb-20 overflow-hidden">
          <div className="flex items-stretch animate-infinite-scroll whitespace-nowrap gap-4 pr-4 py-2">
            {[
              { title: 'INDUSTRIAL SEGMENT', value: '44+', desc: 'Types of industries SKUs' },
              { title: 'CUSTOMERS', value: '500+', desc: 'Active customers across industries, geographies & categories' },
              { title: 'SUPPLIERS', value: '14,500+', desc: 'Active MSME suppliers' },
              { title: 'FACILITIES', value: '11', desc: 'Manufacturing facilities across India, Spain, USA & Mexico' },
              { title: 'GEOGRAPHY', value: '20+', desc: 'Countries including North America, Asia & Middle East' },
            ].concat([
              { title: 'INDUSTRIAL SEGMENT', value: '44+', desc: 'Types of industries SKUs' },
              { title: 'CUSTOMERS', value: '500+', desc: 'Active customers across industries, geographies & categories' },
              { title: 'SUPPLIERS', value: '14,500+', desc: 'Active MSME suppliers' },
              { title: 'FACILITIES', value: '11', desc: 'Manufacturing facilities across India, Spain, USA & Mexico' },
              { title: 'GEOGRAPHY', value: '20+', desc: 'Countries including North America, Asia & Middle East' },
            ]).map((s, i) => (
              <div key={i} className="inline-flex flex-none w-[320px] sm:w-[360px] md:w-[400px] lg:w-[440px] h-[140px] md:h-[150px]">
                <div className="flex flex-col justify-start px-2 w-full whitespace-normal">
                  <div className="text-[11px] tracking-widest text-slate-400 font-medium uppercase mb-2">{s.title}</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none mb-2">{s.value}</div>
                  <div className="text-sm md:text-base text-slate-300 leading-snug break-words max-w-[240px] md:max-w-[300px]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedOnClient initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  India: Your Gateway to
                  <span className="block text-blue-400">Global Manufacturing</span>
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Leverage India's manufacturing prowess with our comprehensive platform. We provide end-to-end solutions that combine local expertise with global standards, enabling seamless production scaling from prototype to mass manufacturing.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Cost Efficiency</h4>
                  <p className="text-sm text-slate-300">Save 30-50% on manufacturing costs</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Rapid Scaling</h4>
                  <p className="text-sm text-slate-300">Double capacity overnight</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "ISO certified manufacturing processes",
                  "Real-time production tracking and transparency",
                  "Compliance with international quality standards",
                  "24/7 global support and project management",
                ].map((feature, index) => (
                  <AnimatedOnClient key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300">{feature}</span>
                  </AnimatedOnClient>
                ))}
              </div>
            </div>
          </AnimatedOnClient>
          <AnimatedOnClient initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="relative">
            <div className="relative">
              <Image src="/images/prototype.avif" alt="Advanced Manufacturing Facility in India" width={600} height={400} className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              {/* Floating Cards */}
              <AnimatedOnClient initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="absolute -bottom-6 -left-6 bg-slate-900/90 p-6 rounded-xl shadow-xl border border-slate-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-slate-300">Projects Delivered</div>
                  </div>
                </div>
              </AnimatedOnClient>
              <AnimatedOnClient initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="absolute -top-6 -right-6 bg-slate-900/90 p-6 rounded-xl shadow-xl border border-slate-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-sm text-slate-300">On-Time Delivery</div>
                  </div>
                </div>
              </AnimatedOnClient>
            </div>
          </AnimatedOnClient>
        </div>
      </div>
    </section>
  );
}
