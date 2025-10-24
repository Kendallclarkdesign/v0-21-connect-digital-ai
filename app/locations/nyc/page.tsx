import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NYC Web Design & SEO | 21 Connect Digital - AI-Powered Digital Solutions",
  description:
    "Professional web design, AI automation, and SEO services for NYC small businesses and startups. Helping Manhattan, Brooklyn, and Queens businesses grow online with data-driven digital marketing.",
  keywords: [
    "NYC web design",
    "New York City SEO",
    "Manhattan web development",
    "Brooklyn digital marketing",
    "AI automation NYC",
    "startup web design",
    "small business website NYC",
  ],
  openGraph: {
    title: "NYC Web Design & SEO | 21 Connect Digital",
    description: "Helping NYC startups and small businesses grow online through AI-powered web design and SEO",
    url: "https://www.21connectdigital.agency/locations/nyc",
  },
}

export default function NYCPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">New York City</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            NYC Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Helping NYC startups and small businesses grow online through AI-powered web design, SEO, and digital
            marketing that drives real results.
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

      {/* About NYC Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for NYC
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering New York City Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              In the heart of the world's most competitive business landscape, your digital presence needs to stand out.
              21 Connect Digital specializes in helping NYC small businesses, startups, and entrepreneurs build powerful
              online platforms that attract customers and drive growth.
            </p>
            <p>
              From Manhattan's bustling financial district to Brooklyn's creative hubs, we understand the unique
              challenges NYC businesses face. Our team delivers modern, high-performing websites combined with strategic
              SEO and AI automation to help you compete and win in the digital marketplace.
            </p>
            <p>
              Whether you're in Queens, the Bronx, or Staten Island, we're your local digital partner committed to your
              long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Services for NYC */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in NYC
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for NYC Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">NYC Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Beautiful, conversion-focused websites designed specifically for NYC's competitive market.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Local NYC SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Rank higher in NYC local searches and attract customers in Manhattan, Brooklyn, and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">AI Automation</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Smart chatbots and AI workflows that save time and improve customer experience for NYC businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Digital Marketing</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Data-driven marketing strategies that help NYC businesses grow their online presence and revenue.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Quick turnaround times perfect for NYC's fast-paced business environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Ongoing Support</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Dedicated support and maintenance to keep your NYC business running smoothly online.
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
            Ready to elevate your NYC business? Let's build your digital future today.
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
