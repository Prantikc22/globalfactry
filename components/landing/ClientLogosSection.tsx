import React from "react";

export default function ClientLogosSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-sm text-gray-600 font-medium mb-6">Trusted by industry leaders</p>
          <div className="relative w-full">
            <div className="overflow-hidden w-full">
              <div className="marquee-track flex items-center space-x-16 opacity-60 justify-center">
                {/* Marquee Logos - seamless infinite scroll */}
                {[
                  '/images/companyLogos/intrax.svg',
                  '/images/companyLogos/tesla.svg',
                  '/images/companyLogos/ford2.svg',
                  '/images/companyLogos/ge2.svg',
                  '/images/companyLogos/cat2.svg',
                  '/images/companyLogos/boeing.svg',
                  '/images/companyLogos/garmin.svg',
                  '/images/companyLogos/mitsubishi.svg',
                  '/images/companyLogos/sanyo.svg',
                  '/images/companyLogos/shell.svg',
                  '/images/companyLogos/tata.svg',
                ].map((src, i) => (
                  <img
                    key={src + i}
                    className="h-10 max-w-[120px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src={src}
                    alt={src.split('/').pop()?.replace('.svg','') || 'logo'}
                  />
                ))}
                {/* Duplicate logos for seamless looping */}
                {[
                  '/images/companyLogos/intrax.svg',
                  '/images/companyLogos/tesla.svg',
                  '/images/companyLogos/ford2.svg',
                  '/images/companyLogos/ge2.svg',
                  '/images/companyLogos/cat2.svg',
                  '/images/companyLogos/boeing.svg',
                  '/images/companyLogos/garmin.svg',
                  '/images/companyLogos/mitsubishi.svg',
                  '/images/companyLogos/sanyo.svg',
                  '/images/companyLogos/shell.svg',
                  '/images/companyLogos/tata.svg',
                ].map((src, i) => (
                  <img
                    key={src + 'dup' + i}
                    className="h-10 max-w-[120px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    src={src}
                    alt={src.split('/').pop()?.replace('.svg','') || 'logo'}
                  />
                ))}
              </div>
            </div>
            {/* Fade effects */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
