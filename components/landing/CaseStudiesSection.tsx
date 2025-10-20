import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import GradientButton from "@/components/ui/button-1";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    image: "/images/tatamotors.jpg",
    alt: "Automotive Manufacturing",
    badge: "Automotive",
    title: "CNC + Sheet Metal Assembly",
    description: "End-to-end machining and sheet metal assembly for an automotive platform.",
    points: ["15% cost reduction", "6-week ramp"],
    href: "/case-studies/automotive-cnc-assembly",
  },
  {
    image: "/images/d2c.webp",
    alt: "D2C Cosmetics Packaging",
    badge: "D2C Cosmetics",
    title: "Packaging (Carton + Bottle + Label)",
    description: "Consolidated primary and secondary packaging under one PO for a D2C brand.",
    points: ["3-week turnaround", "Repeat orders"],
    href: "/case-studies/d2c-cosmetics-packaging",
  },
  {
    image: "/images/elec.webp",
    alt: "Industrial Electronics Manufacturing",
    badge: "Industrial Electronics",
    title: "PCB + Box Build",
    description: "Full stack PCB fabrication, assembly, testing and box build for industrial electronics.",
    points: ["97% on-time delivery", "90-day PO finance"],
    href: "/case-studies/industrial-electronics-pcb-box-build",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Results That Speak for Themselves</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped Indian manufacturers scale globally and international companies establish their presence in India
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image src={study.image} alt={study.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{study.badge}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{study.description}</p>
                <div className="space-y-2 mb-6">
                  {study.points.map((point) => (
                    <div key={point} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link href={study.href}>
                    <GradientButton width="140px" height="36px" className="text-sm" square>Read Case Study</GradientButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
