import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Brain, Search, TrendingUp, Zap, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Westchester Web Design & SEO | 21 Connect Digital - NY Digital Marketing Services",
  description:
    "Professional web design and digital marketing for Westchester County, NY businesses. Serving White Plains, Yonkers, New Rochelle with powerful digital solutions that drive results.",
  keywords: [
    "Westchester web design",
    "White Plains SEO",
    "Yonkers web development",
    "New Rochelle digital marketing",
    "Westchester County websites",
    "local SEO Westchester",
  ],
  openGraph: {
    title: "Westchester Web Design & SEO | 21 Connect Digital",
    description: "Partnering with Westchester businesses to build powerful digital presences",
    url: "https://www.21connectdigital.agency/locations/westchester",
  },
}

export default function WestchesterPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
            Westchester County, New York
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Westchester Web Design & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto font-light">
            Partnering with Westchester County businesses to build powerful digital presences that drive real results
            and connect with sophisticated local audiences.
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

      {/* About Westchester Services */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Digital Solutions for Westchester
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-12 text-foreground tracking-tight">
            Empowering Westchester Businesses
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Westchester County represents a unique blend of suburban sophistication and urban accessibility. From
              White Plains' corporate headquarters to Yonkers' diverse communities, from New Rochelle's waterfront
              renaissance to Mount Vernon's vibrant neighborhoods, Westchester businesses serve discerning customers who
              expect excellence.
            </p>
            <p>
              21 Connect Digital understands the Westchester market's high standards. We create polished, professional
              websites and strategic digital marketing campaigns that reflect the quality and sophistication your
              Westchester customers expect while delivering the performance metrics your business needs.
            </p>
            <p>
              Whether you're in Scarsdale, Rye, or anywhere across Westchester County, we provide the digital expertise
              and strategic thinking needed to help your business stand out and succeed in this competitive, affluent
              market.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Westchester */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              What We Offer in Westchester
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Services Built for Westchester Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Premium Web Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Sophisticated websites that reflect Westchester's high standards and convert visitors into customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Westchester SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Strategic SEO that helps Westchester businesses dominate local search and attract qualified leads.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Intelligent Automation</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  AI-powered solutions that enhance customer experience and streamline Westchester business operations.
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
                  Sophisticated digital marketing campaigns tailored to Westchester's affluent, discerning audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Professional Service</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Responsive, reliable service that matches the professionalism Westchester businesses expect.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Long-Term Partnership</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Ongoing optimization and support to help your Westchester business grow and thrive online.
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
            Ready to elevate your Westchester business? Let's build your digital future today.
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
