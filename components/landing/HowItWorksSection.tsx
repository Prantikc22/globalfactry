"use client";
import React from "react";
import { FileText, Cpu, Timer, ShieldCheck, Truck } from "lucide-react";
import AnimatedOnClient from "@/components/AnimatedOnClient";

const steps = [
  {
    id: "1",
    title: "RFQ Submission",
    desc: "Submit drawings and specifications.",
    icon: FileText,
    chip: "1️⃣",
  },
  {
    id: "2",
    title: "AI Matchmaking",
    desc: "We match the best Indian manufacturer for your process, volume, and lead time.",
    icon: Cpu,
    chip: "2️⃣",
  },
  {
    id: "3",
    title: "Quote in 24h",
    desc: "You receive one consolidated quote from Logicwerk.",
    icon: Timer,
    chip: "3️⃣",
  },
  {
    id: "4",
    title: "Order & QC",
    desc: "We manage production, QA, and logistics end‑to‑end.",
    icon: ShieldCheck,
    chip: "4️⃣",
  },
  {
    id: "5",
    title: "Delivery & Financing",
    desc: "Buyer can use PO financing; suppliers can opt for EarlyPay.",
    icon: Truck,
    chip: "5️⃣",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 scroll-mt-28 md:scroll-mt-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-blue-950" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60rem_60rem_at_50%_-10%,#60a5fa_0%,transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:32px_32px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnClient
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Logicwerk Makes Manufacturing Simple
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Everything is traceable, confidential, and compliant — from RFQ to delivery.
          </p>
        </AnimatedOnClient>

        {/* Timeline/steps */}
        <div className="relative">
          {/* connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <AnimatedOnClient
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-blue-300" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center justify-center text-xs font-semibold text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-full px-2 py-0.5">
                        {s.chip}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedOnClient>
            ))}
          </div>

          {/* bottom accent */}
          <div className="mt-10 flex justify-center">
            <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
