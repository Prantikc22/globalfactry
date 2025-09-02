"use client"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Tata Motors: 300% Production Scale-Up in 6 Months",
      client: "Tata Motors",
      industry: "Automotive",
      challenge: "Needed to rapidly scale component manufacturing for new EV line",
      solution: "Implemented distributed manufacturing network across 5 facilities",
      results: {
        production: "300% increase",
        cost: "25% reduction",
        timeline: "6 months",
        quality: "99.8% accuracy",
      },
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial:
        "Logicwerk DLM transformed our manufacturing capabilities and helped us meet aggressive EV production targets.",
      testimonialAuthor: "Ravi Sharma, VP Manufacturing",
    },
    {
      title: "Biocon: FDA-Compliant Biosimilar Manufacturing",
      client: "Biocon",
      industry: "Medical Devices",
      challenge: "Required FDA-compliant manufacturing for global market entry",
      solution: "Established cleanroom facilities with full regulatory compliance",
      results: {
        compliance: "FDA approved",
        market: "Global access",
        timeline: "8 months",
        certification: "ISO 13485",
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial:
        "The regulatory expertise and quality systems exceeded our expectations for international compliance.",
      testimonialAuthor: "Dr. Kiran Mazumdar-Shaw, Executive Chairperson",
    },
    {
      title: "Adani Green: 500% Solar Panel Capacity Expansion",
      client: "Adani Green Energy",
      industry: "Renewable Energy",
      challenge: "Massive capacity increase needed for renewable energy targets",
      solution: "Multi-state manufacturing network with automated quality control",
      results: {
        capacity: "500% increase",
        efficiency: "40% improvement",
        sustainability: "Carbon neutral",
        export: "Ready for global markets",
      },
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial:
        "Critical partner in achieving India's renewable energy goals with world-class manufacturing quality.",
      testimonialAuthor: "Gautam Adani, Chairman",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how leading companies have transformed their manufacturing with Logicwerk DLM
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{Object.values(study.results)[0]}</div>
                          <div className="text-sm text-gray-600">{Object.keys(study.results)[0]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge>{study.industry}</Badge>
                    <Badge variant="outline">{study.client}</Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                      <p className="text-sm font-semibold text-gray-900">— {study.testimonialAuthor}</p>
                    </div>

                    <GradientButton width="180px" height="48px">
                      Read Full Case Study
                    </GradientButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join these industry leaders and transform your manufacturing operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton width="180px" height="48px">
              Start Your Project
            </GradientButton>
            <GradientButton width="160px" height="48px">
              Schedule Consultation
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
