"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { Calendar, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PressReleasesPage() {
  const pressReleases = [
    {
      title: "Globalfactry Raises $50M Series B to Expand AI-Powered Manufacturing Platform",
      date: "December 18, 2024",
      category: "Funding",
      excerpt:
        "Leading manufacturing platform secures funding to accelerate global expansion and enhance AI capabilities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Partnership with Tata Motors Accelerates Electric Vehicle Component Manufacturing",
      date: "December 10, 2024",
      category: "Partnership",
      excerpt:
        "Strategic collaboration to support India's electric vehicle revolution through advanced manufacturing solutions.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Globalfactry Achieves ISO 27001 Certification for Data Security",
      date: "November 28, 2024",
      category: "Certification",
      excerpt: "Platform receives international certification for information security management systems.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "New Manufacturing Hub Opens in Chennai to Serve South India Market",
      date: "November 15, 2024",
      category: "Expansion",
      excerpt:
        "State-of-the-art facility will provide advanced manufacturing services to automotive and electronics industries.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Globalfactry Named 'Manufacturing Innovation Company of the Year'",
      date: "October 22, 2024",
      category: "Award",
      excerpt: "Recognition from Manufacturing Excellence Awards for revolutionary approach to global manufacturing.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Press Releases</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Latest news and announcements from Globalfactry
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge>{release.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {release.date}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                        <p className="text-gray-600 mb-6">{release.excerpt}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <GradientButton width="120px" height="40px">
                          Read Full Release
                        </GradientButton>
                        <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Share
                        </button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Kit</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download our media kit for logos, company information, and executive photos
          </p>
          <GradientButton width="180px" height="48px">
            Download Media Kit
          </GradientButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}
