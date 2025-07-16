"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

export default function BlogsPage() {
  const blogs = [
    {
      title: "The Future of Manufacturing: AI and Automation Trends",
      excerpt: "Explore how artificial intelligence and automation are reshaping the manufacturing landscape in 2024.",
      author: "Rajesh Kumar",
      date: "December 15, 2024",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
    },
    {
      title: "Sustainable Manufacturing: Green Practices for Modern Factories",
      excerpt:
        "Learn about eco-friendly manufacturing processes and how companies are reducing their environmental impact.",
      author: "Priya Sharma",
      date: "December 12, 2024",
      category: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
    },
    {
      title: "Supply Chain Resilience: Lessons from Global Disruptions",
      excerpt: "How manufacturers are building more resilient supply chains to handle future disruptions.",
      author: "Amit Patel",
      date: "December 10, 2024",
      category: "Supply Chain",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
    },
    {
      title: "Quality Control in the Digital Age: IoT and Smart Sensors",
      excerpt: "Discover how IoT devices and smart sensors are revolutionizing quality control processes.",
      author: "Dr. Sarah Johnson",
      date: "December 8, 2024",
      category: "Quality",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "4 min read",
    },
    {
      title: "India's Manufacturing Renaissance: Opportunities and Challenges",
      excerpt: "An in-depth look at India's growing manufacturing sector and its global impact.",
      author: "Rajesh Kumar",
      date: "December 5, 2024",
      category: "Industry",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
    },
    {
      title: "Precision Manufacturing: Achieving Micron-Level Accuracy",
      excerpt: "The technologies and techniques behind ultra-precision manufacturing processes.",
      author: "Dr. Michael Chen",
      date: "December 3, 2024",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
    },
  ]

  const categories = ["All", "Technology", "Sustainability", "Supply Chain", "Quality", "Industry"]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Manufacturing Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest trends, technologies, and best practices in manufacturing
            </p>
            <GradientButton width="180px" height="48px">
              Subscribe to Updates
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image src={blogs[0].image || "/placeholder.svg"} alt={blogs[0].title} fill className="object-cover" />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge>{blogs[0].category}</Badge>
                  <span className="text-sm text-gray-500">{blogs[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogs[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogs[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogs[0].date}
                    </div>
                  </div>
                  <GradientButton width="120px" height="40px">
                    Read More
                  </GradientButton>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="outline">{blog.category}</Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Get the latest manufacturing insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <GradientButton width="140px" height="48px">
              Subscribe
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
