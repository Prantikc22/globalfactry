// app/_quote-client.tsx
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ConversationalQuoteModal = dynamic(
  () => import("@/components/ui/ConversationalQuoteModal"),
  { ssr: false, loading: () => null }
);

export default function QuoteClient() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("[QuoteClient] mounted");
    function onOpen() {
      console.log("[QuoteClient] received open-quote event");
      // Open modal
      setOpen(true);
    }
    window.addEventListener("open-quote", onOpen);
    return () => {
      window.removeEventListener("open-quote", onOpen);
    };
  }, []);

  return (
    <>
      {open && (
        <ConversationalQuoteModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
