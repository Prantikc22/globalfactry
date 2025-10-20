import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Chip, Cpu, ShieldCheck, Clock } from "lucide-react";
import GradientButton from "@/components/ui/button-1";

export const metadata = { title: "Case Study: Industrial Electronics — PCB + Box Build" };

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
          <div className="mb-8 flex items-center gap-3">
            <Badge className="bg-indigo-600 text-white">Industrial Electronics</Badge>
            <span className="text-sm text-slate-300">PCB + Box Build</span>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">PCB + Box Build</h1>
              <p className="mt-4 text-slate-300 text-lg">
                Full stack PCB fabrication, SMT/THT assembly, testing, and finished box build with PO finance for smoother cash flow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-2 text-sm text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                  <CheckCircle className="h-4 w-4" /> 97% on-time delivery
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-sky-500/15 px-3 py-2 text-sm text-sky-300 ring-1 ring-inset ring-sky-400/30">
                  <Clock className="h-4 w-4" /> 90-day PO finance
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden shadow-xl">
              <Image src="/images/elec.webp" alt="Industrial Electronics PCB + Box Build" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><Cpu className="h-5 w-5 text-primary" /> Challenges</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Multi-vendor coordination from PCB fab to final box build</li>
                <li>ICT/functional test coverage and certification</li>
                <li>Cash flow constraints during ramp</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><ShieldCheck className="h-5 w-5 text-primary" /> Solution</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Integrated fab + SMT + THT + enclosure assembly under one PO</li>
                <li>DFM/DFT review, fixture dev, ICT + FCT + burn-in</li>
                <li>Non-recourse PO finance via partners</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><CheckCircle className="h-5 w-5 text-primary" /> Results</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>97% on-time delivery across 4 SKUs</li>
                <li>Lower rework with test-first approach</li>
                <li>Smoother cash flow with 90-day PO finance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">← Back to Home</Link>
          <GradientButton width="170px" height="40px">Start a similar project</GradientButton>
        </div>
      </section>
    </div>
  );
}
