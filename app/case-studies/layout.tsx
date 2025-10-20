import React from "react";
import Navbar from "@/components/ui/NavbarServer";
import { Footer } from "@/components/ui/footer";
import QuoteClient from "@/app/_quote-client";
import QuoteListeners from "@/components/quote-listeners.client";

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <QuoteListeners />
      <QuoteClient />
    </div>
  );
}
