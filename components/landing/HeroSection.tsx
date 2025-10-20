// components/landing/HeroSection.tsx
import React from "react";
import Image from "next/image";
import GradientButton from "@/components/ui/button-1";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://cdn.jsdelivr.net/gh/Prantikc22/logicwerk-website-assets@main/Herobg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center w-full">
            <div className="w-full">
              <div className="transition-all duration-1000 opacity-100 translate-y-0">
                <h1 className="font-garet text-center text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight tracking-tight [word-spacing:-0.05em] flex flex-col items-center">
                  <span>Your Global Factory</span>
                  <span className="text-blue-400 font-medium italic tracking-tight [word-spacing:-0.05em]">Manufacture at Speed of Light</span>
                </h1>

                <p className="font-garet text-white text-lg md:text-xl font-book tracking-tight [word-spacing:-0.02em] mb-6 opacity-90 mx-auto max-w-[60ch]">
                  From CNC & Electronics to Packaging & Textiles — one PO, one invoice, one partner for all your AI-powered RFQs, quality, logistics, and financing. 
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  {/* Primary CTA: external register link, sharp corners */}
                  <a href="https://app.logicwerkdlm.com/register" target="_blank" rel="noopener noreferrer">
                    <GradientButton
                      width="200px"
                      height="56px"
                      className="text-lg font-semibold"
                      square
                    >
                      Start Manufacturing
                    </GradientButton>
                  </a>

                  {/* Scroll button: use data-scroll-to instead of onClick */}
                  <button
                    type="button"
                    data-scroll-to="capabilities"
                    className="border border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-lg h-14 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Explore Our Offerings
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-10 opacity-80">
                  <Image src="/images/logo/clutch3.webp" alt="Clutch" width={160} height={80} className="h-10 md:h-12 w-auto object-contain" />
                  <Image src="/images/logo/gf3.webp" alt="GF" width={160} height={80} className="h-10 md:h-12 w-auto object-contain" />
                  <Image src="/images/logo/thomas.webp" alt="Thomas" width={480} height={240} className="h-10 md:h-12 w-auto object-contain" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
