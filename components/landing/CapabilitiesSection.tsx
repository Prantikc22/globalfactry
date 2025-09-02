import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import GradientButton from "@/components/ui/button-1";
import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    name: "Extrusions",
    image: "/images/capabilities/extrusion.webp",
    description: "Precision aluminum and plastic extrusion services for complex profiles and custom shapes.",
  },
  {
    name: "Die Casting",
    image: "/images/capabilities/die-casting.webp",
    description: "High-pressure die casting for aluminum, zinc, and magnesium components with tight tolerances.",
  },
  {
    name: "CNC Machining",
    image: "/images/capabilities/cnc-precision.webp",
    description: "Multi-axis CNC machining for precision parts with micron-level accuracy and surface finish.",
  },
  {
    name: "Injection Molding",
    image: "/images/capabilities/im.webp",
    description: "High-volume plastic injection molding with automated systems and quality control.",
  },
  {
    name: "Forging",
    image: "/images/capabilities/forging-hot.webp",
    description: "Hot and cold forging processes for superior strength and material properties.",
  },
  {
    name: "Sheet Metal Stamping",
    image: "/images/capabilities/sheet-metal-stamping.webp",
    description: "Progressive and transfer stamping for high-volume sheet metal components.",
  },
  {
    name: "Prototyping & Pre-Production",
    image: "/images/prototype.webp",
    description: "Rapid prototyping and small-batch production for product development and testing.",
  },
  {
    name: "Investment Casting",
    image: "/images/capabilities/investment-casting.webp",
    description: "Precision investment casting for complex geometries and superior surface finish.",
  },
  {
    name: "Assembly Services",
    image: "/images/capabilities/assembly-services.webp",
    description: "Complete assembly services with testing, packaging, and quality assurance.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced manufacturing processes with precision, quality, and scale across diverse technologies
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
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
  );
}
