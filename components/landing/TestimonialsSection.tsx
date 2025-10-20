import { Component as TestimonialComponent } from "@/components/ui/testimonial";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            What our clients says
          </h2>
        </div>
        <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden">
          <TestimonialComponent />
        </div>
      </div>
    </section>
  );
}
