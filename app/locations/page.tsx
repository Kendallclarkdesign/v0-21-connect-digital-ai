import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Service Areas | 21 Connect Digital",
  description:
    "Explore the regions 21 Connect Digital serves, including NYC, Bucks County, Hunterdon County, Orange County, Los Angeles, and Westchester — helping small businesses grow with web design, SEO, and AI-powered solutions.",
  keywords: [
    "NYC web design",
    "Bucks County SEO",
    "Hunterdon County digital marketing",
    "Orange County AI web design",
    "Los Angeles small business websites",
    "Westchester startups",
  ],
  openGraph: {
    title: "Our Service Areas | 21 Connect Digital",
    description:
      "Explore the regions 21 Connect Digital serves — helping small businesses grow with web design, SEO, and AI-powered solutions.",
    url: "https://www.21connectdigital.agency/locations",
  },
}

const locations = [
  {
    name: "New York City",
    slug: "nyc",
    state: "New York",
    description: "Helping NYC startups and small businesses grow online through AI-powered web design and SEO.",
    nearby: "Manhattan, Brooklyn, Queens, Bronx, Staten Island",
  },
  {
    name: "Bucks County",
    slug: "bucks-county",
    state: "Pennsylvania",
    description:
      "Supporting Bucks County businesses with modern websites, digital marketing, and local SEO strategies.",
    nearby: "Doylestown, Newtown, Warrington, Yardley, Langhorne",
  },
  {
    name: "Hunterdon County",
    slug: "hunterdon-county",
    state: "New Jersey",
    description:
      "Empowering Hunterdon County businesses with professional web design and growth-focused digital solutions.",
    nearby: "Flemington, Clinton, Raritan Township, Lebanon, Califon",
  },
  {
    name: "Orange County",
    slug: "orange-county",
    state: "New York",
    description: "Delivering innovative web design and SEO services to Orange County businesses ready to scale online.",
    nearby: "Middletown, Newburgh, Port Jervis, Warwick, Monroe",
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    state: "California",
    description: "Helping LA businesses stand out with creative web design, AI automation, and data-driven marketing.",
    nearby: "Santa Monica, Beverly Hills, Pasadena, Long Beach, Glendale",
  },
  {
    name: "Westchester",
    slug: "westchester",
    state: "New York",
    description: "Partnering with Westchester businesses to build powerful digital presences that drive real results.",
    nearby: "White Plains, Yonkers, New Rochelle, Mount Vernon, Scarsdale",
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">Where We Work</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Our Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            We support small businesses and startups across different U.S. regions with professional web design, AI
            automation, SEO, and digital marketing services that drive real growth.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card
                key={location.slug}
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card group"
              >
                <CardContent className="pt-10 pb-10 px-8 space-y-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{location.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">{location.state}</p>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm mb-4">
                      {location.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70 font-light mb-6">
                      <span className="font-medium">Nearby:</span> {location.nearby}
                    </p>
                  </div>
                  <Link href={`/locations/${location.slug}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md group">
                      View City Page
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-accent-foreground tracking-tight">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-12 font-light max-w-2xl mx-auto">
            Let's build your digital future.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background text-base px-12 py-7 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
