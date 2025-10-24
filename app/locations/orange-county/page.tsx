import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Orange County NY Web Design & SEO | 21 Connect Digital - Hudson Valley Digital Marketing",
  description:
    "Professional web design and SEO services for Orange County, NY businesses. Serving Middletown, Newburgh, Port Jervis with innovative web design and digital marketing solutions.",
  keywords: [
    "Orange County NY web design",
    "Middletown SEO",
    "Newburgh web development",
    "Hudson Valley digital marketing",
    "Orange County small business websites",
    "local SEO New York",
  ],
  openGraph: {
    title: "Orange County NY Web Design & SEO | 21 Connect Digital",
    description: "Delivering innovative web design and SEO services to Orange County businesses",
    url: "https://www.21connectdigital.agency/locations/orange-county",
  },
}

export default function OrangeCountyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
            Orange County, New York
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Orange County Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Delivering innovative web design, SEO, and digital marketing services to Orange County businesses ready to
            scale their online presence and reach new customers.
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

      {/* About Orange County Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for Orange County
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering Orange County Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Orange County, New York, is experiencing tremendous growth as businesses discover the advantages of the
              Hudson Valley region. From Middletown's expanding commercial district to Newburgh's revitalized waterfront
              and Port Jervis's historic charm, the area offers incredible opportunities for businesses ready to grow.
            </p>
            <p>
              21 Connect Digital helps Orange County businesses capitalize on this growth with modern, high-performing
              websites and strategic digital marketing. We understand the unique position of Orange County—close enough
              to NYC for opportunity, distinct enough to maintain its own identity.
            </p>
            <p>
              Whether you're in Warwick, Monroe, or anywhere in Orange County, we provide the digital tools and
              expertise needed to compete effectively and reach customers throughout the Hudson Valley and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Orange County */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in Orange County
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for Regional Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Modern Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Contemporary websites that position Orange County businesses for growth and success.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Hudson Valley SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Local and regional SEO strategies that help Orange County businesses dominate search results.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">AI Integration</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Cutting-edge AI tools and automation that give Orange County businesses a competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Strategic Marketing</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Data-driven marketing campaigns that expand your reach throughout the Hudson Valley region.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Rapid Deployment</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Fast, professional service that gets your Orange County business online and generating leads quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Growth Partnership</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Ongoing support and optimization to help your Orange County business scale successfully.
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
            Ready to elevate your Orange County business? Let's build your digital future today.
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
