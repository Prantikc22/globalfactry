"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export const CTAHtml = () => {
  const titleWords = "Ready to Transform Your Manufacturing?".split(" ")
  const subtitle = "Join hundreds of companies scaling with Globalfactry"
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 200)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 400)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    if (subtitleVisible) {
      const timeout = setTimeout(() => setFormVisible(true), 600)
      return () => clearTimeout(timeout)
    }
  }, [subtitleVisible])

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.3),transparent_50%)] animate-pulse"></div>
        <div
          className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,rgba(147,51,234,0.1),transparent)] animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8">
            <div className="text-4xl md:text-6xl font-bold text-white mb-6">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {titleWords.map((word, index) => (
                  <div
                    key={index}
                    className={index < visibleWords ? "fade-in-word opacity-100" : "opacity-0"}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`text-xl md:text-2xl text-gray-300 mb-12 ${subtitleVisible ? "fade-in-subtitle opacity-100" : "opacity-0"}`}
            >
              {subtitle}
            </div>
          </div>

          {/* Form */}
          <div className={`max-w-2xl mx-auto ${formVisible ? "fade-in-form opacity-100" : "opacity-0"}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input
                    placeholder="Company"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input
                    placeholder="Phone"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <Textarea
                  placeholder="Tell us about your project requirements..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  rows={4}
                />
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Get Your Quote Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-word {
          animation: fadeInWord 0.8s ease-out forwards;
        }
        
        .fade-in-subtitle {
          animation: fadeInSubtitle 1s ease-out forwards;
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
        
        @keyframes fadeInSubtitle {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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
            transform: translateY(-15px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}

export default CTAHtml
