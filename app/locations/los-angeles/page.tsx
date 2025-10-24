import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Los Angeles Web Design & SEO | 21 Connect Digital - LA Digital Marketing Agency",
  description:
    "Professional web design, AI automation, and digital marketing for Los Angeles businesses. Serving Santa Monica, Beverly Hills, Pasadena with creative web solutions and data-driven marketing.",
  keywords: [
    "Los Angeles web design",
    "LA SEO services",
    "Santa Monica web development",
    "Beverly Hills digital marketing",
    "AI automation Los Angeles",
    "LA startup web design",
  ],
  openGraph: {
    title: "Los Angeles Web Design & SEO | 21 Connect Digital",
    description: "Helping LA businesses stand out with creative web design and data-driven marketing",
    url: "https://www.21connectdigital.agency/locations/los-angeles",
  },
}

export default function LosAngelesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
            Los Angeles, California
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Los Angeles Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Helping LA businesses stand out with creative web design, AI automation, and data-driven marketing that
            captures the innovation and energy of Los Angeles.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* About LA Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for Los Angeles
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering Los Angeles Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Los Angeles is the epicenter of creativity, innovation, and entrepreneurship. From Santa Monica's tech
              scene to Beverly Hills' luxury brands, from Pasadena's historic charm to Long Beach's vibrant waterfront,
              LA businesses operate in one of the world's most dynamic and competitive markets.
            </p>
            <p>
              21 Connect Digital brings the same level of creativity and innovation to your digital presence. We create
              websites and marketing strategies that reflect LA's cutting-edge spirit while delivering measurable
              results that help your business grow in this competitive landscape.
            </p>
            <p>
              Whether you're a startup in Glendale, an established business in the Valley, or anywhere across the LA
              metro area, we provide the digital expertise and creative vision needed to make your business stand out
              and succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Services for LA */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in Los Angeles
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for LA Innovation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Creative Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Bold, innovative websites that capture LA's creative energy and convert visitors into customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">LA Market SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Competitive SEO strategies designed to help LA businesses rank higher and attract more customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Advanced AI Solutions</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Cutting-edge AI automation and smart tools that give LA businesses a technological edge.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Performance Marketing</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Data-driven campaigns optimized for LA's competitive market and diverse customer base.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Agile Development</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Fast, iterative development that keeps pace with LA's dynamic business environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Premium Support</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  White-glove service and ongoing optimization to help your LA business thrive online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-accent-foreground tracking-tight">
            Ready to elevate your Los Angeles business? Let's build your digital future today.
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background text-base px-12 py-7 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
              Start Your Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
