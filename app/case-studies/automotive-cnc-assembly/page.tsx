import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Settings, Wrench, TrendingDown } from "lucide-react";
import GradientButton from "@/components/ui/button-1";

export const metadata = { title: "Case Study: CNC + Sheet Metal Assembly | Automotive" };

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
          <div className="mb-8 flex items-center gap-3">
            <Badge className="bg-blue-600 text-white">Automotive</Badge>
            <span className="text-sm text-slate-300">CNC + Sheet Metal Assembly</span>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">CNC + Sheet Metal Assembly</h1>
              <p className="mt-4 text-slate-300 text-lg">
                End-to-end machining and sheet metal assembly for an automotive platform. Multi-process production delivered under one PO across certified suppliers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-500/15 px-3 py-2 text-sm text-blue-300 ring-1 ring-inset ring-blue-400/30">
                  <TrendingDown className="h-4 w-4" /> 15% cost reduction
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-2 text-sm text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                  <Clock className="h-4 w-4" /> 6-week ramp
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden shadow-xl">
              <Image src="/images/tatamotors.jpg" alt="Automotive CNC + Sheet Metal" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><Wrench className="h-5 w-5 text-primary" /> Challenges</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>High variation across SKUs and tolerances</li>
                <li>Fragmented machining + sheet metal vendor base</li>
                <li>Inconsistent documentation and QA</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><Settings className="h-5 w-5 text-primary" /> Solution</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>AI-aided supplier matching across CNC + sheet metal</li>
                <li>Unified PO with PPAP, CMM and packaging standards</li>
                <li>In-process QC with SPC and final inspection</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><CheckCircle className="h-5 w-5 text-primary" /> Results</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>15% landed cost reduction</li>
                <li>6-week ramp from pilot to steady state</li>
                <li>Zero line-stops; audited QA docs per lot</li>
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
