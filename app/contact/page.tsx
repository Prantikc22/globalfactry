"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import GradientButton from "@/components/ui/button-1"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Contact Logicwerk DLM"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-200 mb-8">
              Ready to transform your manufacturing? Let's discuss how we can help scale your production and optimize
              your supply chain.
            </p>
            <GradientButton width="180px" height="48px">
              Schedule a Call
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-2" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+91 98765 43210" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <GradientButton width="100%" height="48px">
                      Send Message
                    </GradientButton>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-1">contact@logicwerkdlm.com</p>
                        <p className="text-gray-600">support@logicwerkdlm.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-1">+91 98765 43210</p>
                        <p className="text-gray-600">+91 87654 32109</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-600">
                          123 Business District
                          <br />
                          Mumbai, Maharashtra 400001
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Get instant answers to your questions</p>
                <GradientButton width="140px" height="40px">
                  Start Chat
                </GradientButton>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Call</h3>
                <p className="text-gray-600 mb-6">Book a consultation with our experts</p>
                <GradientButton width="140px" height="40px">
                  Book Call
                </GradientButton>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meet in Person</h3>
                <p className="text-gray-600 mb-6">Visit our office or we'll come to you</p>
                <GradientButton width="140px" height="40px">
                  Schedule Visit
                </GradientButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
