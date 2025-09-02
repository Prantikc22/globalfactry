import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import GradientButton from "@/components/ui/button-1";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const caseStudies = [
  {
    image: "/images/tatamotors.jpg",
    alt: "Automotive Parts Manufacturing",
    badge: "Automotive",
    title: "Tata Motors Component Scaling",
    description: "Helped Tata Motors scale their component manufacturing by 300% while reducing costs by 25% through our optimized supply chain network across Maharashtra and Tamil Nadu.",
    points: ["300% production increase", "25% cost reduction", "6-month timeline"],
  },
  {
    image: "/images/medical.jpg",
    alt: "Medical Device Manufacturing",
    badge: "Medical Devices",
    title: "Biocon Biosimilars Production",
    description: "Enabled Biocon to establish FDA-compliant biosimilar manufacturing facilities in Bangalore, achieving international quality standards for global market entry.",
    points: ["FDA compliance achieved", "Global market access", "ISO 13485 certified"],
  },
  {
    image: "/images/solarpanel.webp",
    alt: "Solar Panel Manufacturing",
    badge: "Renewable Energy",
    title: "Solar Panel Export Success",
    description: "Facilitated the export of high-efficiency solar panels to Europe and the US, supporting the transition to renewable energy worldwide.",
    points: ["Export to 10+ countries", "High-efficiency panels", "Sustainable supply chain"],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from the World</h2>
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
                  <GradientButton width="140px" height="36px" className="text-sm">Read Case Study</GradientButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
