import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "21 Connect Digital | NYC Web Design, AI Solutions & SEO for Small Businesses & Startups",
  description:
    "An NYC-based digital agency helping small businesses and startups grow with modern web design, AI integration, SEO, and digital strategy.",
  keywords: [
    "NYC digital agency",
    "web design for small businesses",
    "startup web development",
    "AI business solutions",
    "SEO services",
    "NYC web agency",
    "AI chatbot integration",
    "digital marketing",
    "website maintenance",
    "branding and UX design",
    "Bucks County web design",
    "Hunterdon County SEO",
    "Orange County CA web design",
    "Los Angeles digital agency",
    "Westchester NY web design",
    "contractor marketing",
    "HVAC web design",
    "plumbing website design",
    "local business SEO",
    "21 Connect Digital"
  ],
  openGraph: {
    title: "21 Connect Digital | Web Design, AI Solutions & SEO",
    description:
      "We help startups and small businesses grow with modern websites, AI automation, and SEO — built and managed by a trusted NYC-based agency.",
    url: "https://www.21connectdigital.agency",
    siteName: "21 Connect Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.21connectdigital.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "21 Connect Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Connect Digital | Web Design, AI & SEO for Small Businesses",
    description:
      "NYC-based agency providing web design, AI integration, and SEO services for startups and small businesses.",
    images: ["https://www.21connectdigital.agency/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
