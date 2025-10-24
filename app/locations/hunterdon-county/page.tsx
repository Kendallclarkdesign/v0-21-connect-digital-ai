import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hunterdon County Web Design & SEO | 21 Connect Digital - New Jersey Digital Marketing",
  description:
    "Professional web design and SEO services for Hunterdon County, NJ businesses. Serving Flemington, Clinton, Raritan Township with modern websites and growth-focused digital solutions.",
  keywords: [
    "Hunterdon County web design",
    "Flemington SEO",
    "Clinton web development",
    "New Jersey digital marketing",
    "Hunterdon County small business websites",
    "local SEO New Jersey",
  ],
  openGraph: {
    title: "Hunterdon County Web Design & SEO | 21 Connect Digital",
    description: "Empowering Hunterdon County businesses with professional web design and digital solutions",
    url: "https://www.21connectdigital.agency/locations/hunterdon-county",
  },
}

export default function HunterdonCountyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
            Hunterdon County, New Jersey
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Hunterdon County Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Empowering Hunterdon County businesses with professional web design, local SEO, and growth-focused digital
            solutions that connect with your community.
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

      {/* About Hunterdon County Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for Hunterdon County
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering Hunterdon County Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Hunterdon County's rich history and tight-knit communities create a unique business environment. From
              Flemington's charming downtown to Clinton's scenic mill district, local businesses thrive on authentic
              connections with their customers.
            </p>
            <p>
              21 Connect Digital helps Hunterdon County businesses translate that local authenticity into powerful
              online presences. We create websites and digital marketing strategies that honor your community roots
              while expanding your reach to new customers throughout New Jersey and beyond.
            </p>
            <p>
              Whether you're in Raritan Township, Lebanon, or Califon, we provide the technical expertise and local
              understanding needed to help your business succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Hunterdon County */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in Hunterdon County
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for Community Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Community-Focused Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Websites that reflect Hunterdon County's character and connect with local customers authentically.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Local NJ SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Optimize your visibility in Flemington, Clinton, and throughout Hunterdon County search results.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Smart Automation</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  AI-powered tools that help Hunterdon County businesses work smarter and serve customers better.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Growth Marketing</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Strategic digital marketing that expands your reach while maintaining local authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Efficient Service</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Professional, timely delivery that respects your time and business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Dedicated Partnership</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Ongoing support from a team invested in your Hunterdon County business success.
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
            Ready to elevate your Hunterdon County business? Let's build your digital future today.
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
