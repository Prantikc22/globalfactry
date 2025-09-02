"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { Target, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="About Logicwerk DLM"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Logicwerk DLM</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforming manufacturing through innovation, technology, and global partnerships. We're building the
              future of production, one project at a time.
            </p>
            <GradientButton width="180px" height="48px">
              Join Our Mission
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To democratize manufacturing by connecting businesses with global production capabilities, making
                high-quality manufacturing accessible, transparent, and efficient for companies of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Manufacturing Excellence"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We pursue excellence in every project, ensuring the highest quality standards and customer
                  satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Perspective</h3>
                <p className="text-gray-600">
                  We think globally, connecting businesses with the best manufacturing capabilities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace cutting-edge technology and innovative processes to transform manufacturing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving the future of manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
                <p className="text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  20+ years in manufacturing and technology, former VP at Tata Motors
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
                <p className="text-blue-600 mb-3">CTO</p>
                <p className="text-gray-600 text-sm">AI and automation expert, former lead engineer at Infosys</p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="COO"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amit Patel</h3>
                <p className="text-blue-600 mb-3">COO</p>
                <p className="text-gray-600 text-sm">Operations specialist with global supply chain expertise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl text-gray-600 mb-8">Join hundreds of companies already scaling with Logicwerk DLM</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton width="160px" height="48px">
              Get Started
            </GradientButton>
            <GradientButton width="140px" height="48px">
              Contact Us
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
