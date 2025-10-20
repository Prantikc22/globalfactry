import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, HandCoins, FileCheck2, Globe2, Package } from "lucide-react";

export default function WhyLogicwerkSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Manufacturing Without Limits. Powered by Precision.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered supply chain, manufacturing, and guaranteed quality—under one PO.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Package className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">One PO, Many Processes</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
              Manage your CNC, packaging, and electronics orders under one partner—no vendor chaos.              
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">Unlimited Capacity, Zero Vendor Risk</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
                Access India’s top certified suppliers without chasing quotes. Logicwerk scales production invisibly for you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileCheck2 className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">Guaranteed QA & Documentation</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
                PPAP, CMM, CE, RoHS, REACH, ISO reports with every shipment. You receive proof, not promises.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <HandCoins className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">Flexible Financing</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
                Reduce working capital stress with PO Financing for buyers and EarlyPay for suppliers. Non-recourse via TReDS or NBFCs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Globe2 className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">Global Shipping</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
                Air, sea, or courier logistics — tracked, insured, and delivered door-to-door worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Shield className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">Cost-Optimized Manufacturing</h3>
              </div>
              <p className="mt-3 text-sm text-foreground">
                Get the same quality at 15–20% lower cost through Logicwerk’s optimized multi-supplier network.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
