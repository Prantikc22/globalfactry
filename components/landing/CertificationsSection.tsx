import React from "react";
import Image from "next/image";

const CERTS = [
  { id: "iso", src: "/images/certifications/as.webp", alt: "ISO" },
  { id: "tuv", src: "/images/certifications/iso.webp", alt: "TÜV Nord" },
  { id: "gdpr", src: "/images/certifications/iso2.webp", alt: "GDPR" },
  { id: "drdo", src: "/images/certifications/drdo.webp", alt: "DRDO" },
  { id: "asme", src: "/images/certifications/asme.webp", alt: "ASME" },
  { id: "iatf", src: "/images/certifications/iatf.webp", alt: "IATF" },
  { id: "ce", src: "/images/certifications/ce.webp", alt: "CE" },
  { id: "rail", src: "/images/certifications/rail.webp", alt: "Rail" },

];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-5 md:gap-6">
          <div className="min-w-0 shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Certifications</h2>
            <p className="text-slate-600 mt-1 text-sm md:text-base max-w-xl">
              Our partner facilities hold global certifications to ensure your parts meet every compliance standard.
            </p>
          </div>
          <div className="ml-4 md:ml-6 flex flex-nowrap items-center gap-4 md:gap-6 overflow-x-auto">
            {CERTS.map((c) => (
              <div key={c.id} className="flex-none h-8 md:h-10 w-auto">
                <Image src={c.src} alt={c.alt} width={96} height={40} className="object-contain h-8 md:h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
