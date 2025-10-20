"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import GradientButton from "@/components/ui/button-1";

export default function CTAAuroraSection() {
  return (
    <section id="cta" className="relative">
      <AuroraBackground className="h-[80vh] md:h-[70vh]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
          className="relative flex flex-col gap-5 items-center justify-center px-6 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready to Manufacture Smarter?
          </h2>
          <p className="max-w-3xl text-base md:text-xl text-slate-700/90 dark:text-neutral-200">
            Join hundreds of companies scaling with our AI-powered manufacturing platform. From prototype to production, we deliver excellence at every step.
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://app.logicwerkdlm.com/register" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="px-5 md:px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow-md text-sm md:text-base font-semibold transition">
                Start Manufacturing
              </div>
            </a>
            <a href="https://app.logicwerkdlm.com/register" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="px-4 md:px-5 py-3 rounded-lg bg-white text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50 text-sm md:text-base transition">
                Supplier? Partner Now
              </div>
            </a>
          </div>
          <p className="text-xs md:text-sm text-slate-600/80 dark:text-neutral-300 mt-2">
            NDA-protected uploads. Supplier confidentiality guaranteed.
          </p>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
