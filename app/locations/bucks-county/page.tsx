import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bucks County Web Design & SEO | 21 Connect Digital - Pennsylvania Digital Marketing",
  description:
    "Professional web design and SEO services for Bucks County, PA businesses. Serving Doylestown, Newtown, Warrington, and surrounding areas with modern websites and digital marketing solutions.",
  keywords: [
    "Bucks County web design",
    "Doylestown SEO",
    "Newtown web development",
    "Pennsylvania digital marketing",
    "Bucks County small business websites",
    "local SEO Pennsylvania",
  ],
  openGraph: {
    title: "Bucks County Web Design & SEO | 21 Connect Digital",
    description: "Supporting Bucks County businesses with modern websites and digital marketing strategies",
    url: "https://www.21connectdigital.agency/locations/bucks-county",
  },
}

export default function BucksCountyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
            Bucks County, Pennsylvania
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Bucks County Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Supporting Bucks County businesses with modern websites, local SEO, and digital marketing strategies that
            drive growth and customer engagement.
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

      {/* About Bucks County Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for Bucks County
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering Bucks County Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Bucks County is home to thriving local businesses, from Doylestown's historic downtown to Newtown's
              vibrant community. At 21 Connect Digital, we understand the unique character of Bucks County and help
              local businesses establish a strong online presence that resonates with their community.
            </p>
            <p>
              Whether you're a restaurant in Warrington, a retail shop in Yardley, or a service provider in Langhorne,
              we create custom websites and digital marketing strategies designed to attract local customers and drive
              measurable results.
            </p>
            <p>
              Our team combines technical expertise with local market knowledge to help Bucks County businesses compete
              effectively online while maintaining their authentic community connection.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Bucks County */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in Bucks County
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for Local Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Local Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Custom websites that reflect your Bucks County business and connect with local customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Bucks County SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Local SEO strategies to help customers in Doylestown, Newtown, and beyond find your business online.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">AI Business Tools</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Smart automation and AI chatbots to streamline operations and improve customer service.
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
                  Targeted marketing campaigns that reach Bucks County customers and drive business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Quick Turnaround</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Fast, professional service that gets your Bucks County business online quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Local Support</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Dedicated support from a team that understands the Bucks County business community.
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
            Ready to elevate your Bucks County business? Let's build your digital future today.
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
