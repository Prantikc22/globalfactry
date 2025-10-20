import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Box, Package2, Clock, Repeat } from "lucide-react";
import GradientButton from "@/components/ui/button-1";

export const metadata = { title: "Case Study: D2C Cosmetics Packaging" };

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
          <div className="mb-8 flex items-center gap-3">
            <Badge className="bg-rose-600 text-white">D2C Cosmetics</Badge>
            <span className="text-sm text-slate-300">Packaging (Carton + Bottle + Label)</span>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Packaging (Carton + Bottle + Label)</h1>
              <p className="mt-4 text-slate-300 text-lg">
                Consolidated primary and secondary packaging under one PO for a D2C brand—cartons, bottles, and labels with QA and sustainability options.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-2 text-sm text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                  <Clock className="h-4 w-4" /> 3-week turnaround
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-sky-500/15 px-3 py-2 text-sm text-sky-300 ring-1 ring-inset ring-sky-400/30">
                  <Repeat className="h-4 w-4" /> Repeat orders
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden shadow-xl">
              <Image src="/images/d2c.webp" alt="D2C packaging" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><Package2 className="h-5 w-5 text-primary" /> Challenges</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Multiple vendors for cartons, bottles, labels</li>
                <li>Color consistency and finish matching</li>
                <li>Lead-time unpredictability at scale</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><Box className="h-5 w-5 text-primary" /> Solution</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Unified PO across vetted carton, bottle, label suppliers</li>
                <li>QA specs: GSM, varnish, Pantone matching, drop tests</li>
                <li>Biodegradable and recycled options for sustainability</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-slate-800 bg-slate-900 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2 text-white font-semibold"><CheckCircle className="h-5 w-5 text-primary" /> Results</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>3-week first run, locked QA for subsequent batches</li>
                <li>Consolidated inbound logistics and warehousing</li>
                <li>Lower defects and consistent brand experience</li>
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
