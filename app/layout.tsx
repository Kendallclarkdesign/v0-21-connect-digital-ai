import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
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
    "21 Connect Digital",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "21 Connect Digital",
    image: "https://www.21connectdigital.agency/logo.png",
    url: "https://www.21connectdigital.agency",
    telephone: "+1-213-399-3200",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    priceRange: "$$",
    description:
      "NYC-based digital agency helping small businesses and startups with web design, SEO, and AI automation.",
    areaServed: [
      "New York City, NY",
      "Bucks County, PA",
      "Hunterdon County, NJ",
      "Westchester, NY",
      "Orange County, CA",
      "Los Angeles, CA",
    ],
    sameAs: ["https://www.facebook.com/21connectdigtial", "https://www.linkedin.com/company/21-connect-digital/"],
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TDRT0L20ML"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TDRT0L20ML', { send_page_view: true });
    `,
  }}
/>

      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDRT0L20ML" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TDRT0L20ML');
          `}
        </Script>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
