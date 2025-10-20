import { Card, CardContent } from "@/components/ui/card";
import { HandCoins, BadgeCheck } from "lucide-react";

export default function FinanceSection() {
  return (
    <section id="finance" className="py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl px-6">
        <div className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_40%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 dark:from-primary/15 dark:via-primary/10 dark:to-secondary/15" />
        </div>
        <div className="relative mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Finance that Moves at Your Speed
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Simple, compliant, and fast—built for modern manufacturing cashflow.
          </p>
        </div>

        <div className="relative grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:place-items-stretch">
          {/* Buyers (PO Financing) — Blue */}
          <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-sm">
            <CardContent className="relative grid h-full min-h-[180px] items-center gap-2 p-5 md:min-h-[200px]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20">
                  <HandCoins className="size-4" /> For Buyers — PO Financing
                </div>
                <h3 className="text-[1.05rem] font-semibold leading-snug md:text-[1.15rem]">Unlock working capital without slowing production</h3>
                <p className="text-[13px] leading-relaxed text-white/85 md:text-sm">
                  Convert accepted POs/invoices into instant liquidity through partner NBFCs/TReDS. We handle the ops; you scale.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Suppliers (EarlyPay) — Teal */}
          <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-teal-600 to-teal-500 text-white shadow-sm">
            <CardContent className="relative grid h-full min-h-[180px] items-center gap-2 p-5 md:min-h-[200px]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20">
                  <BadgeCheck className="size-4" /> For Suppliers — EarlyPay
                </div>
                <h3 className="text-[1.05rem] font-semibold leading-snug md:text-[1.15rem]">Get paid earlier on buyer-approved invoices</h3>
                <p className="text-[13px] leading-relaxed text-white/85 md:text-sm">
                  Access fast, non-recourse payouts via partner NBFCs/TReDS while Logicwerk manages fulfillment and documentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
