import React from "react";
import Image from "next/image";
import GradientButton from "@/components/ui/button-1";
import { Play } from "lucide-react";

export default function HeroSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-manufacturing-small.webp"
          alt="Manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center w-full">
            <div className="w-full">
              <div className="transition-all duration-1000 opacity-100 translate-y-0">
                <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-lg flex flex-col items-center">
                  <span>Manufacturing At The</span>
                  <span className="text-blue-400 font-normal italic">Speed Of Light</span>
                </h1>
                <p className="text-white text-lg md:text-2xl font-medium mb-10 opacity-90">Manufacturing meets digital speed. We orchestrate a vetted network of suppliers with AI-driven efficiency—so you get high-quality parts, delivered on time, with full transparency and zero hassle.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <GradientButton
                    width="200px"
                    height="56px"
                    onClick={onQuote}
                    className="text-lg font-semibold"
                  >
                    Get A Quote
                  </GradientButton>
                  <button
                    className="border border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-full h-14 transition-all duration-300 flex items-center justify-center"
                    onClick={() => {
                      const el = document.getElementById('capabilities');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Explore Our Capabilities
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
