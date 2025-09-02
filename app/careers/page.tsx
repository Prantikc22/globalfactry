"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { MapPin, Clock, Users, Briefcase, Heart, Zap } from "lucide-react"
import Image from "next/image"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Manufacturing Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead manufacturing process optimization and quality improvement initiatives.",
    },
    {
      title: "AI/ML Engineer",
      department: "Technology",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop AI-powered solutions for demand forecasting and process optimization.",
    },
    {
      title: "Global Supply Chain Manager",
      department: "Operations",
      location: "Delhi, India",
      type: "Full-time",
      experience: "7-10 years",
      description: "Manage global supplier relationships and optimize supply chain operations.",
    },
    {
      title: "Quality Assurance Specialist",
      department: "Quality",
      location: "Chennai, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Ensure quality standards across all manufacturing processes and partners.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Pune, India",
      type: "Full-time",
      experience: "5-7 years",
      description: "Drive business growth and establish new client relationships.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Define product strategy and roadmap for our manufacturing platform.",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Continuous learning opportunities, conferences, and skill development programs",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous time off",
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Clear career paths, mentorship programs, and leadership opportunities",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Careers at Logicwerk DLM"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Mission</h1>
            <p className="text-xl text-gray-200 mb-8">
              Help us transform manufacturing and build the future of global production. Join a team of innovators,
              engineers, and visionaries.
            </p>
            <GradientButton width="160px" height="48px">
              View Open Roles
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Logicwerk DLM?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a company that's revolutionizing manufacturing and making a global impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow your career with us
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                        </div>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <GradientButton width="120px" height="40px">
                        Apply Now
                      </GradientButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We foster an environment of innovation, collaboration, and continuous learning. Our team is passionate
                about solving complex manufacturing challenges and making a positive impact on the industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Innovation-driven mindset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Commitment to excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Global perspective</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Culture"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton width="180px" height="48px">
              Send Your Resume
            </GradientButton>
            <GradientButton width="160px" height="48px">
              Learn More
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
