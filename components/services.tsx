"use client"

import { useState, useEffect } from "react"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  icon: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Interior Detailing",
    description: "Deep clean and restoration of your vehicle interior",
    features: ["Vacuum and steam cleaning", "Leather conditioning", "Stain removal", "Air freshening"],
    icon: "🪑",
  },
  {
    id: 2,
    title: "Exterior Detailing",
    description: "Professional washing and protection for your exterior",
    features: ["Hand wash and dry", "Wheel cleaning", "Trim restoration", "Wax application"],
    icon: "🚗",
  },
  {
    id: 3,
    title: "Full Detailing",
    description: "Complete interior and exterior transformation",
    features: ["Full interior deep clean", "Complete exterior wash", "Paint protection", "Final inspection"],
    icon: "✨",
  },
  {
    id: 4,
    title: "Ceramic Coating",
    description: "Long-lasting paint protection and shine",
    features: ["Paint preparation", "Ceramic application", "UV protection", "2-year warranty"],
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections",
    features: ["Swirl removal", "Scratch repair", "Paint polishing", "Gloss enhancement"],
    icon: "🎨",
  },
  {
    id: 6,
    title: "Maintenance Plans",
    description: "Regular care to keep your car looking pristine",
    features: ["Monthly wash", "Quarterly detail", "Seasonal protection", "Priority booking"],
    icon: "📅",
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70">Comprehensive detailing solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative bg-background rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border border-accent/20 hover:border-accent/50 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:animate-bounce">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-foreground/80 text-sm group-hover:text-foreground/90 transition-colors duration-300"
                    >
                      <span className="text-accent mt-1 group-hover:scale-125 transition-transform duration-300">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:(786)571-1063"
                  className="inline-block px-6 py-2 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform group-hover:scale-110 shadow-md hover:shadow-lg hover:shadow-accent/50 active:scale-95"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
