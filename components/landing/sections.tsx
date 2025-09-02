import dynamic from "next/dynamic";

// Lazy load large sections
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"));
const ClientLogosSection = dynamic(() => import("@/components/landing/ClientLogosSection"));
const ServicesSection = dynamic(() => import("@/components/landing/ServicesSection"));
const CapabilitiesSection = dynamic(() => import("@/components/landing/CapabilitiesSection"));
const GlobalExcellenceSection = dynamic(() => import("@/components/landing/GlobalExcellenceSection"));
const CaseStudiesSection = dynamic(() => import("@/components/landing/CaseStudiesSection"));

export { HeroSection, ClientLogosSection, ServicesSection, CapabilitiesSection, GlobalExcellenceSection, CaseStudiesSection };
export { default as IndustriesSection } from './IndustriesSection';
