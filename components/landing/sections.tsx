import dynamic from "next/dynamic";

// Lazy load large sections
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"));
const ClientLogosSection = dynamic(() => import("@/components/landing/ClientLogosSection"));
const ServicesSection = dynamic(() => import("@/components/landing/ServicesSection"));
const CapabilitiesSection = dynamic(() => import("@/components/landing/CapabilitiesSection"));
const GlobalExcellenceSection = dynamic(() => import("@/components/landing/GlobalExcellenceSection"));
const CaseStudiesSection = dynamic(() => import("@/components/landing/CaseStudiesSection"));
const HowItWorksSection = dynamic(() => import("@/components/landing/HowItWorksSection"));
const ProcessSection = dynamic(() => import("@/components/landing/ProcessSection"));
const CertificationsSection = dynamic(() => import("@/components/landing/CertificationsSection"));
const CTAAuroraSection = dynamic(() => import("@/components/landing/CTAAuroraSection"));
const WhyLogicwerkSection = dynamic(() => import("@/components/landing/WhyLogicwerkSection"));
const FinanceSection = dynamic(() => import("@/components/landing/FinanceSection"));
const TestimonialsSection = dynamic(() => import("@/components/landing/TestimonialsSection"));

export { HeroSection, ClientLogosSection, ServicesSection, CapabilitiesSection, GlobalExcellenceSection, CaseStudiesSection, HowItWorksSection, ProcessSection, CertificationsSection, CTAAuroraSection, WhyLogicwerkSection, FinanceSection, TestimonialsSection };
export { default as IndustriesSection } from './IndustriesSection';

