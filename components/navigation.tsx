"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-20 h-20 relative animate-float group-hover:animate-glow">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6a80af1db8104ff4a1b5bea732d858c0%2Fa23feba45a9641f0870661d6f035e834?format=webp&width=800"
                alt="Telleria Detailing Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:(786)571-1063"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:(786)571-1063"
              className="block w-full px-4 py-2 border-2 border-white text-white font-medium rounded-lg text-center hover:bg-white/20 transition-all"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
