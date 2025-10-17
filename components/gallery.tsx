"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GalleryItem {
  id: number
  before: string
  after: string
  title: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    before: "https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg",
    after:
      "https://images.pexels.com/photos/244819/pexels-photo-244819.jpeg",
    title: "Interior Deep Clean",
    category: "Interior",
  },
  {
    id: 2,
    before: "https://images.pexels.com/photos/9932885/pexels-photo-9932885.jpeg",
    after: "https://images.pexels.com/photos/4870739/pexels-photo-4870739.jpeg",
    title: "Ceramic Coating",
    category: "Exterior",
  },
  {
    id: 3,
    before: "https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg",
    after: "https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg",
    title: "Paint Correction",
    category: "Paint",
  },
  {
    id: 4,
    before: "https://images.pexels.com/photos/9932885/pexels-photo-9932885.jpeg",
    after: "https://images.pexels.com/photos/244819/pexels-photo-244819.jpeg",
    title: "Full Detailing",
    category: "Full Service",
  },
]

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-lg text-foreground/70">See the transformation we deliver</p>
        </div>

        {/* Main Slider */}
        <div className="mb-12">
          <div
            className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-background cursor-col-resize group shadow-2xl transition-all duration-300 hover:shadow-accent/30 border border-accent/20"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src={galleryItems[activeSlide].before || "/placeholder.svg"}
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-75"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src={galleryItems[activeSlide].after || "/placeholder.svg"}
                alt="After"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-accent transition-all duration-75 shadow-lg shadow-accent/50"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-3 shadow-lg shadow-accent/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-125">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                  <path d="M9 19l7-7-7-7" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent">Before</p>
            </div>
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent">After</p>
            </div>
          </div>

          {/* Title and Category */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{galleryItems[activeSlide].title}</h3>
            <p className="text-foreground/60">{galleryItems[activeSlide].category}</p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSlide(index)
                setSliderPosition(50)
              }}
              className={`relative aspect-square rounded-lg overflow-hidden group transition-all duration-300 ${
                activeSlide === index
                  ? "ring-2 ring-accent shadow-lg shadow-accent/50 scale-105"
                  : "hover:shadow-lg hover:scale-105"
              }`}
            >
              <Image
                src={item.after || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-center px-2">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
