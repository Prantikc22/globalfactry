// components/quote-listeners.client.tsx
"use client";
import { useEffect } from "react";

export default function QuoteListeners() {
  useEffect(() => {
    console.log("[QuoteListeners] mounted");
    function handleOpenClick(e: Event) {
      console.log("[QuoteListeners] open-click", e.currentTarget);
      window.dispatchEvent(new Event("open-quote"));
    }

    function handlePrefetch() {
      console.log("[QuoteListeners] prefetching modal + framer-motion");
      import("@/components/ui/ConversationalQuoteModal");
      import("framer-motion");
    }

    function handleScroll(e: Event) {
      const el = e.currentTarget as HTMLElement;
      const targetId = el.getAttribute("data-scroll-to");
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    const openEls = Array.from(document.querySelectorAll<HTMLElement>("[data-open-quote]"));
    openEls.forEach((el) => el.addEventListener("click", handleOpenClick));

    const preEls = Array.from(document.querySelectorAll<HTMLElement>("[data-prefetch-modal]"));
    preEls.forEach((el) => {
      el.addEventListener("mouseenter", handlePrefetch);
      el.addEventListener("focus", handlePrefetch);
    });

    const scrollEls = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-to]"));
    scrollEls.forEach((el) => el.addEventListener("click", handleScroll));

    // Debug prints
    console.log("[QuoteListeners] found", { openEls: openEls.length, preEls: preEls.length, scrollEls: scrollEls.length });

    return () => {
      openEls.forEach((el) => el.removeEventListener("click", handleOpenClick));
      preEls.forEach((el) => {
        el.removeEventListener("mouseenter", handlePrefetch);
        el.removeEventListener("focus", handlePrefetch);
      });
      scrollEls.forEach((el) => el.removeEventListener("click", handleScroll));
    };
  }, []);

  return null;
}
