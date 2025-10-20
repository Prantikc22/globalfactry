"use client";

import React from "react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const STEPS = [
  {
    id: "step-1",
    title: "RFQ Submission",
    description: "Submit drawings and specs.",
  },
  {
    id: "step-2",
    title: "AI Matchmaking",
    description:
      "Our engine matches the best Indian manufacturer for your process, volume, and lead time.",
  },
  {
    id: "step-3",
    title: "Quote in 24h",
    description: "You get one consolidated quote from Logicwerk.",
  },
  {
    id: "step-4",
    title: "Order & QC",
    description: "We handle production, QA, and logistics.",
  },
  {
    id: "step-5",
    title: "Delivery & Financing",
    description:
      "Buyer can use PO financing; supplier gets EarlyPay if needed.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-stone-50 scroll-mt-32 pt-28 md:pt-36">
      <div className="container mx-auto place-content-center px-6 pb-12 text-stone-900 xl:px-12">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="left-0 md:sticky md:top-24 md:h-[70vh] md:py-6">
            <h5 className="text-xs uppercase tracking-wide text-stone-500">how it works</h5>
            <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
              How Logicwerk Makes <span className="text-blue-600">Manufacturing</span> Simple
            </h2>
            <p className="max-w-prose text-sm text-stone-600">
              Everything is traceable, confidential, and compliant — from RFQ to delivery.
            </p>
          </div>

          <ContainerScroll className="min-h-[140vh] space-y-6 pt-28 pb-8">
            {STEPS.map((step, index) => (
              <CardSticky
                key={step.id}
                index={index + 2}
                className="rounded-2xl border border-stone-200 bg-white p-8 shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="my-4 text-2xl font-bold tracking-tighter">
                    {step.title}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-stone-700">{step.description}</p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
