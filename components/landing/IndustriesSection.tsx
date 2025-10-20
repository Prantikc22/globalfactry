"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Merge previous and new lists, avoiding duplicates
const industries = [
  { name: "Automotive", image: "/images/auto.avif" },
  { name: "Aerospace And Defence", image: "/images/aerodefense.avif" },
  { name: "Electronics", image: "/images/electronics.avif" },
  { name: "Medical Devices", image: "/images/medical.jpg" },
  { name: "Energy & Utilities", image: "/images/energy.avif" },
  { name: "FMCG", image: "" },
  { name: "Commodities", image: "/images/commodities.jpg" },
  { name: "Technology", image: "/images/technology.jpg" },
  { name: "Energy Transition", image: "/images/energy.avif" },
  { name: "Precision Manufacturing", image: "/images/manu.avif" },
];

export default function IndustriesSection() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const update = () => {
      const max = Math.max(1, el.scrollWidth - el.clientWidth);
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
      setProgress(Math.min(1, Math.max(0, el.scrollLeft / max)));
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (delta: number) => {
    rowRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="industries" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Industries we serve</h2>

        <div className="relative">
          {/* Slider row */}
          <div
            ref={rowRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={`/industries/${ind.name.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="snap-start"
              >
                <div className="relative min-w-[220px] sm:min-w-[260px] lg:min-w-[280px] h-64 overflow-hidden shadow bg-gray-200 group">
                  <Image
                    src={ind.image || "/placeholder.svg"}
                    alt={ind.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <h3 className="text-white font-medium text-base md:text-lg drop-shadow-sm max-w-[75%]">
                      {ind.name}
                    </h3>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-lime-300 text-black group-hover:translate-x-1 transition-transform">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Right-edge gradient hint when more content is available */}
          <div
            className={`pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent transition-opacity ${canRight ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        {/* Slim slider indicator */}
        <div className="mt-4">
          <div className="relative h-1 bg-gray-200/80 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gray-800 rounded-full transition-[width] duration-150"
              style={{ width: `${Math.max(0.06, progress) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}