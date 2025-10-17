"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance drop-shadow-lg">
            Premium Mobile Detailing
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 text-balance font-light drop-shadow-md">
            Professional car care delivered to your doorstep in Orlando
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(786)571-1063"
              className="px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-accent/50 active:scale-95"
            >
              Book Now
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
