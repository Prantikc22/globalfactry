// components/ui/NavbarServer.tsx
import React from "react";
import NavbarClient from "./NavbarClient";
import GradientButton from "./button-1";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// All static data (services, capabilities, insights, about)
const services = [
  {
    href: "/services/contract-manufacturing",
    label: "Contract Manufacturing",
    description: "Unlimited capacity with lower pricing & lead times",
  },
  {
    href: "/services/job-work",
    label: "Integrated Job-Work",
    description: "From prototyping to production with full transparency",
  },
  {
    href: "/services/inventory-logistics",
    label: "Inventory & Logistics",
    description: "AI-driven demand forecasting and global shipping",
  },
];

const capabilities = [
  { href: "/capabilities/extrusions", label: "Extrusions", description: "Precision aluminum and plastic profiles" },
  { href: "/capabilities/die-casting", label: "Die Casting", description: "High-pressure casting with tight tolerances" },
  { href: "/capabilities/cnc-machining", label: "CNC Machining", description: "Multi-axis precision machining" },
  { href: "/capabilities/injection-molding", label: "Injection Molding", description: "High-volume plastic manufacturing" },
  { href: "/capabilities/forging", label: "Forging", description: "Hot and cold forging processes" },
  { href: "/capabilities/sheet-metal-stamping", label: "Sheet Metal Stamping", description: "Progressive and transfer stamping" },
  { href: "/capabilities/prototyping-pre-production", label: "Prototyping", description: "Rapid prototyping and small-batch production" },
  { href: "/capabilities/investment-casting", label: "Investment Casting", description: "Precision casting for complex geometries" },
  { href: "/capabilities/assembly-services", label: "Assembly Services", description: "Complete assembly with quality assurance" },
];

const insights = [
  { href: "/insights/blogs", label: "Blogs", description: "Latest manufacturing insights and trends" },
  { href: "/insights/case-studies", label: "Case Studies", description: "Success stories from our clients" },
];

const about = [
  { href: "https://logicwerk.com/about", label: "About Us", description: "Our mission and values", external: true },
  { href: "https://logicwerk.com/careers", label: "Careers", description: "Join our growing team", external: true },
  { href: "#", label: "Contact", description: "Get in touch with us", isContact: true },
];

export default function NavbarServer() {
  return (
    <NavbarClient
      services={services}
      capabilities={capabilities}
      insights={insights}
      about={about}
    />
  );
}
