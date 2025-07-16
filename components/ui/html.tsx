"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import GradientButton from "./button-1"
import { ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react"

export const Html = () => {
  const titleWords = "Ready to Transform Your Manufacturing?".split(" ")
  const [visibleWords, setVisibleWords] = useState(0)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 150)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setFormVisible(true), 400)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Title Animation */}
              <div className="mb-8">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
                    {titleWords.map((word, index) => (
                      <div
                        key={index}
                        className={`${
                          index < visibleWords ? "fade-in-word opacity-100" : "opacity-0"
                        } ${index === titleWords.length - 1 ? "text-blue-400" : ""}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join hundreds of companies scaling with our AI-powered manufacturing platform. From prototype to
                  production, we deliver excellence at every step.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Lightning Fast</div>
                    <div className="text-gray-400 text-sm">1-5 day prototypes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Global Network</div>
                    <div className="text-gray-400 text-sm">50+ facilities</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quality Assured</div>
                    <div className="text-gray-400 text-sm">99.8% accuracy</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Cost Effective</div>
                    <div className="text-gray-400 text-sm">30-50% savings</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Global Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-gray-400 text-sm">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className={`${formVisible ? "fade-in-form opacity-100" : "opacity-0"}`}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Your Quote Today</h3>
                  <p className="text-gray-300">Start your manufacturing transformation journey</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Full Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Company"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Email"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-blue-400 transition-all duration-300 min-h-[120px]"
                      rows={4}
                    />
                  </div>

                  <div className="pt-2">
                    <GradientButton
                      width="100%"
                      height="56px"
                      onClick={() => console.log("Get Quote clicked")}
                      className="text-lg font-semibold"
                    >
                      Get Your Quote Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </GradientButton>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">🔒 Your information is secure and confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-word {
          animation: fadeInWord 0.8s ease-out forwards;
        }
        
        .fade-in-form {
          animation: fadeInForm 1.2s ease-out forwards;
        }
        
        @keyframes fadeInWord {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes fadeInForm {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Html
