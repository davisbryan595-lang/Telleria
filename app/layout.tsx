import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Telleria Detailing | Premium Mobile Car Detailing in Orlando",
  description:
    "Professional mobile car detailing services in Orlando, FL. Interior, exterior, ceramic coating, and paint correction.",
  keywords: "car detailing, mobile detailing, Orlando, ceramic coating, paint correction",
  openGraph: {
    title: "Telleria Detailing | Premium Mobile Car Detailing",
    description: "Professional mobile car detailing services in Orlando, FL",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  )
}
