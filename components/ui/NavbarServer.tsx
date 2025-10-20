// components/ui/NavbarServer.tsx
import React from "react";
import NavbarClient from "./NavbarClient";
import GradientButton from "./button-1";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Offerings data: categories with SKUs
const offerings = [
  {
    label: "Metal & Machining",
    items: [
      "CNC Machining",
      "Sheet Metal Fabrication",
      "Die Casting",
      "Forging",
      "Extrusions",
      "Investment Casting",
      "Surface Finishing",
    ],
  },
  {
    label: "Electronics & Devices",
    items: [
      "PCB Prototyping",
      "SMT/THT Assembly",
      "Wire Harnesses",
      "Box Build",
      "Battery Packs",
      "Testing (ICT/FCT)",
      "Component Sourcing",
    ],
  },
  {
    label: "Packaging & Branding",
    items: [
      "Corrugated Boxes",
      "Cartons",
      "Rigid Boxes",
      "Flexible Packaging",
      "Blow Molding",
      "Thermoformed Trays",
      "Shrink Sleeves",
      "Biodegradable Packaging",
    ],
  },
  {
    label: "Textiles & Leather",
    items: [
      "Cut & Sew",
      "Embroidery & Printing",
      "Upholstery",
      "Knitting & Weaving",
      "Leather Goods",
    ],
  },
  {
    label: "Construction & Infra",
    items: [
      "Structural Steel",
      "Metal Joinery",
      "Precast Concrete",
      "Prefab Modules",
      "Glass Facades",
      "Carpentry & Woodwork",
    ],
  },
  {
    label: "Advanced Manufacturing",
    items: [
      "Assembly & Kitting",
      "QC & Inspection",
      "Component Sourcing",
      "Tooling & Fixtures",
    ],
  },
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
      offerings={offerings}
      insights={insights}
      about={about}
    />
  );
}
