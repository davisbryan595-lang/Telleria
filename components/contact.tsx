"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Get In Touch</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Phone
                  </h3>
                  <a
                    href="tel:(786)571-1063"
                    className="text-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    (786) 571-1063
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Service Area
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    Orlando, FL, USA
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Hours
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    Monday - Sunday
                  </p>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20"
            >
              <div className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-accent/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 hover:border-accent/40"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-accent/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 hover:border-accent/40"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-accent/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 hover:border-accent/40"
                    placeholder="(786) 571-1063"
                  />
                </div>

                {/* Service */}
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-accent/20 rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 hover:border-accent/40"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="full">Full Detailing</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="paint">Paint Correction</option>
                    <option value="maintenance">Maintenance Plan</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background-secondary border border-accent/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 hover:border-accent/40 resize-none"
                    placeholder="Tell us about your vehicle..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-accent/50 active:scale-95"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>

                {submitted && (
                  <div className="p-4 bg-accent/20 border border-accent/50 rounded-lg text-center animate-fade-in">
                    <p className="text-accent font-medium">Thank you! We'll be in touch soon.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
