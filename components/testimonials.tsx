"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "BMW Owner",
    content: "Telleria Detailing transformed my car. The attention to detail is incredible. Highly recommend!",
    rating: 5,
    image: "/placeholder.jpg?height=200&width=200&query=professional%20man%20portrait%20headshot",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Mercedes Owner",
    content: "Best detailing service in Orlando. Professional, punctual, and the results speak for themselves.",
    rating: 5,
    image: "/placeholder.jpg?height=200&width=200&query=professional%20woman%20portrait%20headshot",
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Audi Owner",
    content: "The ceramic coating has kept my car looking showroom fresh. Worth every penny!",
    rating: 5,
    image: "/placeholder.jpg?height=200&width=200&query=smiling%20man%20portrait%20headshot",
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Tesla Owner",
    content: "Mobile detailing at its finest. They came to my home and did an amazing job. Highly satisfied!",
    rating: 5,
    image: "/placeholder.jpg?height=200&width=200&query=happy%20woman%20portrait%20headshot",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70">Real reviews from satisfied customers</p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-background-secondary rounded-2xl p-8 md:p-12 shadow-lg border border-accent/20 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20">
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span
                  key={i}
                  className="text-accent text-2xl transition-all duration-300 hover:scale-125 cursor-pointer"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl font-serif text-foreground mb-8 italic transition-all duration-500">
              "{testimonials[activeIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/50 hover:ring-accent transition-all duration-300 hover:scale-110">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                <p className="text-foreground/60">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                activeIndex === index ? "bg-accent w-8 shadow-lg shadow-accent/50" : "bg-accent/30 hover:bg-accent/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-background rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-background-secondary group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent group-hover:scale-110 transition-transform duration-300">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 line-clamp-3 group-hover:text-foreground/90 transition-colors duration-300">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent/50 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
