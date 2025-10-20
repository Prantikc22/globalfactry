"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import GradientButton from "@/components/ui/button-1";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";

// Machining & Metals (existing items)
const machiningAndMetals = [
  {
    name: "Extrusions",
    image: "/images/capabilities/extrusion.webp",
    description:
      "Precision aluminum and plastic extrusion services for complex profiles and custom shapes.",
  },
  {
    name: "Die Casting",
    image: "/images/capabilities/die-casting.webp",
    description:
      "High-pressure die casting for aluminum, zinc, and magnesium components with tight tolerances.",
  },
  {
    name: "CNC Machining",
    image: "/images/capabilities/cnc-precision.webp",
    description:
      "Multi-axis CNC machining for precision parts with micron-level accuracy and surface finish.",
  },
  {
    name: "Injection Molding",
    image: "/images/capabilities/im.webp",
    description:
      "High-volume plastic injection molding with automated systems and quality control.",
  },
  {
    name: "Forging",
    image: "/images/capabilities/forging-hot.webp",
    description:
      "Hot and cold forging processes for superior strength and material properties.",
  },
  {
    name: "Sheet Metal Stamping",
    image: "/images/capabilities/sheet-metal-stamping.webp",
    description:
      "Progressive and transfer stamping for high-volume sheet metal components.",
  },
  {
    name: "Prototyping & Pre-Production",
    image: "/images/prototype.webp",
    description:
      "Rapid prototyping and small-batch production for product development and testing.",
  },
  {
    name: "Investment Casting",
    image: "/images/capabilities/investment-casting.webp",
    description:
      "Precision investment casting for complex geometries and superior surface finish.",
  },
  {
    name: "Assembly Services",
    image: "/images/capabilities/assembly-services.webp",
    description:
      "Complete assembly services with testing, packaging, and quality assurance.",
  },
];

// Other categories as full cards with descriptions (images can be added later)
const electronicsAndDevices = [
  {
    name: "PCB Prototyping",
    image: "images/capabilities/elec1.webp",
    description: "Quick-turn boards for design validation, small-batch spins, and DFM feedback.",
  },
  {
    name: "PCB Assembly",
    image: "images/capabilities/elec2.webp",
    description: "SMT/THT, leaded/lead-free, AOI/X-ray with traceable processes and test.",
  },
  {
    name: "Cable Harness",
    image: "images/capabilities/elec3.webp",
    description: "Custom wire harnesses with labeling, overmolding, and 100% continuity tests.",
  },
  {
    name: "Box Build",
    image: "images/capabilities/elec5.webp",
    description: "Electro-mechanical assemblies with enclosure integration and final QA.",
  },
  {
    name: "Battery Packs",
    image: "images/capabilities/elec4.webp",
    description: "Configured cell packs with BMS integration, spot-welding, and safety tests.",
  },
  {
    name: "Electronic Testing",
    image: "images/capabilities/elec6.webp",
    description: "ICT/functional testing, burn-in, and calibration for reliable performance.",
  },
  {
    name: "Component Sourcing & Kitting",
    image: "images/capabilities/elec7.webp",
    description: "Global sourcing with alternates, lifecycle checks, and turnkey kitting.",
  },
];

const packagingAndBranding = [
  {
    name: "Corrugated Boxes",
    image: "images/capabilities/p1.webp",
    description: "Custom die-cuts, E–AA flute options, print/laminate, and stress-tested packs.",
  },
  { name: "Cartons", image: "images/capabilities/p2.webp", description: "Folding cartons with specialty finishes and inserts." },
  { name: "Rigid Boxes", image: "images/capabilities/p3.webp", description: "Premium rigid set-up boxes with magnets, foam, and wraps." },
  { name: "Flexible Packaging", image: "images/capabilities/p4.webp", description: "Pouches/rollstock with barrier films and high-quality print." },
  { name: "Blow Molding", image: "images/capabilities/p5.webp", description: "HDPE/PET containers with colorants and closures." },
  { name: "Thermoformed Trays", image: "images/capabilities/p6.webp", description: "Inserts and trays for protection, ESD, and presentation." },
  { name: "Shrink Sleeves", image: "images/capabilities/p7.webp", description: "360° artwork sleeves with tamper-evident bands." },
  { name: "Biodegradable Packaging", image: "images/capabilities/p8.webp", description: "Compostable/bioplastics alternatives for sustainability." },
];

const textilesAndLeather = [
  { name: "Cut & Sew", image: "images/capabilities/t1.webp", description: "Apparel, soft goods, and accessories with QC inline." },
  { name: "Embroidery & Printing", image: "images/capabilities/t2.webp", description: "DTG, screen, sublimation, and embroidery branding." },
  { name: "Upholstery", image: "images/capabilities/t3.webp", description: "Custom upholstery for furniture, auto, and hospitality." },
  { name: "Knitting & Weaving", image: "images/capabilities/t4.webp", description: "Yarn-to-fabric production with finishing treatments." },
  { name: "Leather Goods", image: "images/capabilities/t5.webp", description: "Crafted leather wallets, bags, and small goods." },
];

const constructionAndInfra = [
  { name: "Structural Steel", image: "images/capabilities/c1.webp", description: "Fabrication, blasting, coating, and on-site fit-up." },
  { name: "Metal Joinery", image: "images/capabilities/c2.webp", description: "Architectural metalwork, railings, and fixtures." },
  { name: "Precast Concrete", image: "images/capabilities/c3.webp", description: "Precision molds, reinforcement, and QC cured parts." },
  { name: "Prefab Modules", image: "images/capabilities/c4.webp", description: "Volumetric modules for fast site install and quality." },
  { name: "Glass Facades", image: "images/capabilities/c5.webp", description: "Unitized facades with structural glazing and testing." },
  { name: "Carpentry & Woodwork", image: "images/capabilities/c6.webp", description: "Joinery, veneers, and finishes for interiors/exteriors." },
];

const advancedManufacturing = [
  { name: "Assembly & Kitting", image: "images/capabilities/a1.webp", description: "Final assembly, kitting, labeling, and pack-out." },
  { name: "QC & Inspection", image: "images/capabilities/a2.webp", description: "CMM, spectro, tensile, and statistical QC reports." },
  { name: "Component Sourcing", image: "images/capabilities/a3.webp", description: "BOM fulfillment with AVL compliance and alternates." },
  { name: "Surface Finishing", image: "images/capabilities/a4.webp", description: "Anodizing, powder coat, plating, bead-blast, and more." },
  { name: "Tooling & Fixture Development", image: "images/capabilities/a5.webp", description: "Rapid tool/fixture design for repeatability and speed." },
];

const CATEGORIES: { key: string; label: string; items: { name: string; image?: string; description?: string }[] }[] = [
  { key: "machining", label: "Machining & Metals", items: machiningAndMetals },
  { key: "electronics", label: "Electronics & Devices", items: electronicsAndDevices },
  { key: "packaging", label: "Packaging & Branding", items: packagingAndBranding },
  { key: "textiles", label: "Textiles & Leather", items: textilesAndLeather },
  { key: "construction", label: "Construction & Infrastructure", items: constructionAndInfra },
  { key: "advanced", label: "Advanced Manufacturing", items: advancedManufacturing },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState<string>("machining");
  const [modalItem, setModalItem] = useState<{ name: string; image?: string; description?: string } | null>(null);
  const activeItems = useMemo(() => {
    const found = CATEGORIES.find((c) => c.key === active);
    return found ? found.items : [];
  }, [active]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const details: Record<string, { bullets: string[] }> = {
    "Extrusions": { bullets: ["Aluminum 6xxx/7xxx, plastics (ABS/PC/PP)", "Tolerances up to ±0.15 mm on profiles", "Anodize, powder coat, machining & cut-to-length", "Tooling in 2–3 weeks; samples in 1 week after tool"] },
    "Die Casting": { bullets: ["Al, Zn, Mg alloys HPDC", "DPM/PPAP with CMM reports", "In-house deburr, shot-blast, machining", "Tool life tracking & maintenance logs"] },
    "CNC Machining": { bullets: ["3/4/5-axis, turn-mill centers", "Tolerances to ±0.005 mm; Ra ≤ 0.8 µm", "Materials: Al, SS, brass, Ti, engineering plastics", "SPC charts with each lot + surface finish reports"] },
    "Injection Molding": { bullets: ["300–1600T presses, auto pick-n-place", "Multi-cavity / family molds", "Materials: PP, ABS, PC, Nylon, POM", "Moldflow + first-article inspection"] },
    "Forging": { bullets: ["Hot/cold forging; closed die", "Heat treatment + grain flow validation", "MPI/UT/NDT as applicable", "CNC finish machining & coatings"] },
    "Sheet Metal Stamping": { bullets: ["Progressive/transfer tooling", "SPM presses up to 300T", "In-die sensing & inline vision", "Plating/phosphate/paint options"] },
    "Prototyping & Pre-Production": { bullets: ["CNC, SLA/SLS, sheet metal proto in days", "Design for manufacturability feedback", "Pilot builds with traceability", "BOM, packaging & test planning"] },
    "Investment Casting": { bullets: ["SS/Al/Alloy steel IC", "Dimensional reports with gauges", "Surface finish to Ra 3.2 µm", "Heat treat + HIP as needed"] },
    "Assembly Services": { bullets: ["Electro-mechanical and kitting", "SOPs/work instructions provided", "100% functional testing on request", "Barcode/serialization & pack-out"] },
    "PCB Prototyping": { bullets: ["1–8 layer quick-turn, impedance control", "ENIG/HASL; IPC Class 2/3", "DFM feedback within 24h", "X-out control and coupon testing"] },
    "PCB Assembly": { bullets: ["0201/BGA/uBGA; leaded/lead-free", "AOI + X-ray + ICT/FCT", "Traceability by reel/lot", "Conformal coat & rework station"] },
    "Cable Harness": { bullets: ["UL-listed wires and terminals", "Labeling, loom, overmold", "100% continuity & hipot tests", "Custom fixtures for repeatability"] },
    "Box Build": { bullets: ["Chassis/enclosure integration", "Power-on, burn-in and calibration", "Firmware flashing & basic config", "Packaging and accessories kit"] },
    "Battery Packs": { bullets: ["Cell sourcing with COA", "Spot-welding & busbar design", "BMS integration and testing", "UN38.3 documentation support"] },
    "Electronic Testing": { bullets: ["ICT/functional/burn-in rigs", "Test coverage reports", "Calibration certificates", "Failure analysis workflow"] },
    "Component Sourcing & Kitting": { bullets: ["AVL alignment & alternates", "Lifecycle and NRND checks", "Turnkey kitting + reel/tape", "Shelf-life tracked logistics"] },
    "Corrugated Boxes": { bullets: ["E–AA flute options", "Edge crush & drop test certified", "Pantone accurate prints", "Die-cut + laminate + window"] },
    "Cartons": { bullets: ["Folding cartons with inserts", "GSM/varnish/lam specs", "Color mgmt with Pantone", "FOGRA proofs if required"] },
    "Rigid Boxes": { bullets: ["Set-up boxes with magnets", "Foam/EVA/CNC inserts", "Premium wraps and foils", "Tight QC on corners & wrap"] },
    "Flexible Packaging": { bullets: ["Pouches/rollstock", "Barrier films & zippers", "High-resolution rotogravure", "Peel/tear strength reports"] },
    "Blow Molding": { bullets: ["HDPE/PET bottles", "Colorants & closures", "Leak & drop tests", "Sleeve/label application"] },
    "Thermoformed Trays": { bullets: ["ESD/anti-static options", "Custom cavity tooling", "Dimensional checks", "Carton fitment designed"] },
    "Shrink Sleeves": { bullets: ["360° artwork shrink fit", "Tamper-evident bands", "Steam tunnel compatible", "High-opacity whites"] },
    "Biodegradable Packaging": { bullets: ["Compostable/bioplastics", "Material certifications", "Print with soy inks", "End-of-life guidance"] },
    "Cut & Sew": { bullets: ["Patterning & sampling", "Inline QC AQL 2.5", "Labels/branding packs", "Polybag/box pack-out"] },
    "Embroidery & Printing": { bullets: ["DTG/screen/sublimation", "Color fastness & wash tests", "Placement jigs", "Bulk consistency checks"] },
    "Upholstery": { bullets: ["PU/fabric/leather", "Foam density validation", "Stitch quality checks", "Fire-retardant options"] },
    "Knitting & Weaving": { bullets: ["Yarn-to-fabric", "Finishing (wash/soften)", "Shrinkage control", "Shade band approvals"] },
    "Leather Goods": { bullets: ["Genuine/PU leather", "Edge painting & burnish", "Hardware sourcing", "Gift packaging available"] },
    "Structural Steel": { bullets: ["Fabrication & welding WPS", "Blast & paint systems", "Dimensional + NDT", "On-site fit-up support"] },
    "Metal Joinery": { bullets: ["Architectural metalwork", "Precision jigs & fixtures", "Stainless/Al options", "Install manuals provided"] },
    "Precast Concrete": { bullets: ["Precision molds", "Rebar & curing QC", "Compression tests", "Transport plan & rigging"] },
    "Prefab Modules": { bullets: ["Volumetric modules", "MEP integration", "Site-ready packaging", "QC punch list closure"] },
    "Glass Facades": { bullets: ["Unitized systems", "Structural glazing tests", "Sealant & gasket QA", "Water & wind tests"] },
    "Carpentry & Woodwork": { bullets: ["Joinery & veneers", "Moisture content checks", "PU/NC finishes", "Site measurement & fitment"] },
    "Assembly & Kitting": { bullets: ["Final assembly & pack-out", "Traceability and barcodes", "SOPs & WI provided", "Custom jigs for cycle time"] },
    "QC & Inspection": { bullets: ["CMM/spectro/tensile", "FAI + PPAP as needed", "SPC with each lot", "Digital report pack"] },
    "Component Sourcing": { bullets: ["Global AVL sourcing", "Cost-down through alternates", "VMI/consignment options", "RoHS/REACH docs"] },
    "Surface Finishing": { bullets: ["Anodize/plating/powder", "Bead-blast/brushing", "Salt spray tests", "Color and gloss control"] },
    "Tooling & Fixture Development": { bullets: ["Rapid tool design", "Maintenance program", "Spare sets stocked", "Process capability reports"] },
  };
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Offerings Across Every Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced manufacturing processes with precision, quality, and scale across diverse technologies
          </p>
          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActive(cat.key)}
                className={
                  `px-4 py-2 rounded-full text-sm font-medium transition-all ` +
                  (active === cat.key
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200")
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {activeItems.map((capability) => (
            <div key={capability.name}>
              <Card
                onClick={() => setModalItem(capability)}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
              >
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
                    <GradientButton width="120px" height="36px" className="text-sm" square>
                      Learn More
                    </GradientButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {modalItem && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalItem(null)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-full">
                  <Image src={modalItem.image || "/placeholder.svg"} alt={modalItem.name} fill className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{modalItem.name}</h3>
                      <p className="text-gray-600 mt-2">{modalItem.description}</p>
                    </div>
                    <button aria-label="Close" onClick={() => setModalItem(null)} className="p-2 rounded-lg hover:bg-gray-100">
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="space-y-2 mb-6">
                    {(details[modalItem.name]?.bullets || ["Process capability details available on request."]).map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="https://app.logicwerkdlm.com/register" target="_blank" rel="noopener noreferrer">
                      <GradientButton width="180px" height="44px" className="text-sm font-semibold" square>
                        Start Manufacturing
                      </GradientButton>
                    </a>
                    <button onClick={() => setModalItem(null)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
