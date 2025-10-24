import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Globe,
  Palette,
  Search,
  Code,
  Smartphone,
  BarChart,
  Zap,
  Users,
  Award,
  Brain,
  TrendingUp,
  Linkedin,
  Facebook,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { TestimonialSlider } from "@/components/testimonial-slider"
// import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">Digital Agency</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-[0.95] tracking-tight">
            Design. Build. Elevate.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-2xl mx-auto font-light">
            Digital solutions that connect, convert, and captivate.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">About Us</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-16 text-foreground tracking-tight">
              Who We Are
            </h2>
            <div className="relative max-w-3xl mx-auto mb-16">
              <div className="relative w-full bg-card rounded-3xl overflow-hidden shadow-lg p-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="21 Connect Digital"
                  className="w-full h-auto object-contain max-h-[400px] rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              21 Connect Digital is a modern web agency dedicated to helping businesses establish a powerful online
              presence. We combine creative design with technical expertise to deliver websites that not only look great
              but drive real results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We&#39;re not just developers we&#39;re your digital partners, committed to your long-term success.
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">Our Approach</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Why Choose 21 Connect Digital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              We deliver exceptional results through our unique approach to digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="text-7xl font-serif font-light text-primary/20">01</div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">Lightning Fast Delivery</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                We deliver projects quickly without compromising on quality or design excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-7xl font-serif font-light text-primary/20">02</div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">Dedicated Support</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                You'll have a dedicated team member available whenever you need help or guidance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-7xl font-serif font-light text-primary/20">03</div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">Award-Winning Design</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our designs are modern, beautiful, and optimized for maximum conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">What We Do</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              We offer comprehensive digital solutions to help your business thrive online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards with minimal styling */}
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Website Design & Development</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Beautiful, scalable websites that perform flawlessly across all devices and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">UX/UI Design</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Intuitive designs that connect with your audience and drive meaningful engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">SEO Optimization</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Increase visibility and rank higher on search engines with our proven SEO strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Custom Development</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Tailored web applications and features built specifically for your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Mobile Optimization</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Ensure your website looks perfect and functions smoothly on all mobile devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Analytics & Insights</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Track performance and gain valuable insights to make data-driven business decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">AI Business Solutions</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Harness AI to automate support, integrate smart tools, and build custom workflows that save time and
                  scale your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Digital Marketing & SEO</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  Boost visibility and grow your brand with data-driven SEO, content marketing, and social media
                  strategies that convert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">Client Success</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">Investment</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Choose the plan that fits your business needs. All plans include hosting, maintenance, and support.
            </p>
          </div>
          {/* <CountdownTimer /> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Starter Plan</h3>
                <p className="text-muted-foreground mb-6 font-light text-sm">
                  Perfect for freelancers and personal brands
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-serif font-semibold text-foreground">$299</span>
                  <span className="text-muted-foreground font-light">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 font-light">+ $399 launch fee</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">1–2 page website or landing page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Basic contact form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Hosting + maintenance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">1 monthly revision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Basic SEO setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Secure deployment</span>
                  </li>
                </ul>
                <div className="mb-6 p-4 bg-muted rounded-2xl">
                  <p className="text-xs font-medium text-foreground mb-1">Best for:</p>
                  <p className="text-xs text-muted-foreground font-light">
                    Freelancers, personal brands, local services, early startups
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
                    Start Your Project Today
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl rounded-3xl relative bg-card">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                Most Popular
              </div>
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Growth Plan</h3>
                <p className="text-muted-foreground mb-6 font-light text-sm">Ideal for agencies and consultants</p>
                <div className="mb-2">
                  <span className="text-5xl font-serif font-semibold text-foreground">$499</span>
                  <span className="text-muted-foreground font-light">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 font-light">+ $499 launch fee</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      Up to 5 custom pages (Home, About, Services, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Blog or portfolio section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      AI chatbot or booking/calendar integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Secure hosting & maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">2 monthly updates/revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">SEO setup + analytics tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      Form automation (emails & workflow)
                    </span>
                  </li>
                </ul>
                <div className="mb-6 p-4 bg-muted rounded-2xl">
                  <p className="text-xs font-medium text-foreground mb-1">Best for:</p>
                  <p className="text-xs text-muted-foreground font-light">
                    Agencies, consultants, real estate, health & wellness, coaches, creators
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
                    Start Your Project Today
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl bg-card">
              <CardContent className="pt-10 pb-10 px-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Scale Plan</h3>
                <p className="text-muted-foreground mb-6 font-light text-sm">For growing businesses ready to scale</p>
                <div className="mb-2">
                  <span className="text-5xl font-serif font-semibold text-foreground">$899</span>
                  <span className="text-muted-foreground font-light">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 font-light">+ $999 launch fee</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      Up to 10 pages or full web app/site
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      E-commerce or membership integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">AI automations + CRM workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">4 monthly updates/revisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">Performance & growth analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground font-light text-sm">
                      API integrations (booking, payments, etc.)
                    </span>
                  </li>
                </ul>
                <div className="mb-6 p-4 bg-muted rounded-2xl">
                  <p className="text-xs font-medium text-foreground mb-1">Best for:</p>
                  <p className="text-xs text-muted-foreground font-light">
                    Growing businesses, e-commerce brands, SaaS companies, agencies, startups ready to scale
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
                    Start Your Project Today
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-accent-foreground tracking-tight">
            Ready to elevate your brand? Let's start building your digital future today.
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background text-base px-12 py-7 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
              Start a Project
            </a>
          </Button>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">Get In Touch</p>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Let's Build Your Digital Presence
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <Card className="border border-border shadow-lg rounded-3xl bg-card">
            <CardContent className="pt-10 pb-10 px-10">
              <form action="https://formspree.io/f/mjkargbe" method="POST" className="space-y-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="rounded-2xl border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/company/21-connect-digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/21connectdigtial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-light">
              Copyright © 2025 21 Connect Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
