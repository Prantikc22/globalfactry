"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"
import GradientButton from "./button-1"

import { useState } from "react"
import ConversationalQuoteModal from "@/components/ui/ConversationalQuoteModal"

export function Footer() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Globalfactry Logo"
                width={160}
                height={40}
                className="h-10 w-auto mr-4"
                priority
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your gateway to global manufacturing excellence. We transform production with AI-powered solutions,
              worldwide partnerships, and end-to-end manufacturing services from India to the world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contact@logicwerkdlm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 820 899 0366</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Bangalore, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/logicwerk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Logicwerk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566249706090"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Offerings</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Machining & Metals</Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Electronics & Devices</Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Packaging & Branding</Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Textiles & Leather</Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Construction & Infrastructure</Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors">Advanced Manufacturing</Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/automotive" className="text-gray-400 hover:text-white transition-colors">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/industries/aerospace-and-defence" className="text-gray-400 hover:text-white transition-colors">
                  Aerospace & Defence
                </Link>
              </li>
              <li>
                <Link href="/industries/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/industries/medical-devices" className="text-gray-400 hover:text-white transition-colors">
                  Medical Devices
                </Link>
              </li>
              <li>
                <Link href="/industries/energy-and-utilities" className="text-gray-400 hover:text-white transition-colors">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link href="/industries/industrial-equipment" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Equipment
                </Link>
              </li>
              <li>
                <Link href="/industries/consumer-goods" className="text-gray-400 hover:text-white transition-colors">
                  Consumer Goods
                </Link>
              </li>
              <li>
                <Link href="/industries/renewable-energy" className="text-gray-400 hover:text-white transition-colors">
                  Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="/industries/railways" className="text-gray-400 hover:text-white transition-colors">
                  Railways
                </Link>
              </li>
              <li>
                <Link href="/industries/heavy-machinery" className="text-gray-400 hover:text-white transition-colors">
                  Heavy Machinery
                </Link>
              </li>
              <li>
                <Link href="/industries/oil-and-gas" className="text-gray-400 hover:text-white transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/construction" className="text-gray-400 hover:text-white transition-colors">
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://logicwerk.com/about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://logicwerk.com/careers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#finance" className="text-gray-400 hover:text-white transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-white transition-colors w-full text-left"
                  onClick={() => setShowQuoteModal(true)}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 Logicwerk DLM. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    <ConversationalQuoteModal open={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </footer>
  )
}
