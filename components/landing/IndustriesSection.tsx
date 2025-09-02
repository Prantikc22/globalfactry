import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    name: "Automotive",
    image: "../../../images/auto.avif",
    description: "Precision manufacturing for automotive parts and systems.",
  },
  {
    name: "Aerospace & Defence",
    image: "../../../images/aerodefense.avif",
    description: "High-reliability solutions for aerospace and defence sectors.",
  },
  {
    name: "Electronics",
    image: "../../../images/electronics.avif",
    description: "Advanced manufacturing for electronics and microdevices.",
  },
  {
    name: "Medical Devices",
    image: "../../../images/medical.jpg",
    description: "Quality-focused manufacturing for medical and healthcare.",
  },
  {
    name: "Energy & Utilities",
    image: "../../../images/energy.avif",
    description: "Robust engineering for energy, utilities, and renewables.",
  },
  {
    name: "Industrial Equipment",
    image: "../../../images/manu.jpg",
    description: "Custom manufacturing for heavy and industrial equipment.",
  },
];

export default function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="industries" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Industries We Serve
        </h2>
        <div className="relative">
          {/* Chevron Controls */}
          <button
            aria-label="Scroll industries left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-300 ${canScrollLeft ? "opacity-80 hover:opacity-100" : "opacity-30 cursor-not-allowed"}`}
            style={{ pointerEvents: canScrollLeft ? "auto" : "none" }}
            onClick={() => scrollBy(-320)}
          >
            <ChevronLeft className={`w-6 h-6 transition-transform duration-200 ${canScrollLeft ? "group-hover:-translate-x-1" : ""}`} />
          </button>
          <button
            aria-label="Scroll industries right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-300 ${canScrollRight ? "opacity-80 hover:opacity-100" : "opacity-30 cursor-not-allowed"}`}
            style={{ pointerEvents: canScrollRight ? "auto" : "none" }}
            onClick={() => scrollBy(320)}
          >
            <ChevronRight className={`w-6 h-6 transition-transform duration-200 ${canScrollRight ? "group-hover:translate-x-1" : ""}`} />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
          >
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="min-w-[300px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{industry.name}</h3>
                <p className="text-gray-600 text-center mb-2">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}