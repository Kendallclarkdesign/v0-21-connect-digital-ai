"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const totalSteps = 4

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mrbyokbg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
          <Card className="max-w-2xl w-full border border-border shadow-lg rounded-3xl bg-card">
            <CardContent className="pt-16 pb-16 px-10 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-foreground">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-8 font-light">
                We've received your project information and will get back to you within 24 hours to discuss next steps.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-full font-medium"
              >
                <a href="/">Return to Home</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              Start Your Project
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-foreground tracking-tight">
              Let's Build Something Great
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Tell us about your project and we'll create a custom solution for you.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                      s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                        s < step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground font-light">
              <span>Contact</span>
              <span>Project</span>
              <span>Features</span>
              <span>Timeline</span>
            </div>
          </div>

          <Card className="border border-border shadow-lg rounded-3xl bg-card">
            <CardContent className="pt-10 pb-10 px-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">Contact Information</h2>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-3">
                        Business/Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Business Name"
                        required
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-foreground mb-3">
                        Current Website (if any)
                      </label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary h-12"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">Project Details</h2>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-3">
                        What type of project do you need? *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full h-12 rounded-2xl border border-border bg-background px-4 focus:border-primary focus:ring-primary text-foreground"
                      >
                        <option value="">Select a project type</option>
                        <option value="new-website">New Website</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="ecommerce">E-commerce Store</option>
                        <option value="web-app">Web Application</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium text-foreground mb-3">
                        What are your main goals for this project? *
                      </label>
                      <Textarea
                        id="goals"
                        name="goals"
                        placeholder="e.g., Increase online sales, improve brand presence, generate leads..."
                        rows={4}
                        required
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium text-foreground mb-3">
                        What challenges are you currently facing?
                      </label>
                      <Textarea
                        id="challenges"
                        name="challenges"
                        placeholder="Tell us about any problems you're trying to solve..."
                        rows={4}
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Features & Services */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">Features & Services</h2>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        What features do you need? (Select all that apply)
                      </label>
                      <div className="space-y-3">
                        {[
                          "Contact Forms",
                          "Blog/News Section",
                          "E-commerce/Online Store",
                          "Booking/Scheduling System",
                          "User Accounts/Login",
                          "Payment Integration",
                          "AI Chatbot",
                          "Email Marketing Integration",
                          "Analytics & Tracking",
                          "Social Media Integration",
                        ].map((feature) => (
                          <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              name="features"
                              value={feature}
                              className="w-5 h-5 rounded border-border text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light">
                              {feature}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Which services are you interested in?
                      </label>
                      <div className="space-y-3">
                        {[
                          "Website Design & Development",
                          "UX/UI Design",
                          "SEO Optimization",
                          "Digital Marketing",
                          "AI Business Solutions",
                          "Ongoing Maintenance & Support",
                        ].map((service) => (
                          <label key={service} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              name="services"
                              value={service}
                              className="w-5 h-5 rounded border-border text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors font-light">
                              {service}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline & Budget */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">Timeline & Plan</h2>
                    <div>
                      <label htmlFor="plan" className="block text-sm font-medium text-foreground mb-3">
                        Which plan are you interested in? *
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        required
                        className="w-full h-12 rounded-2xl border border-border bg-background px-4 focus:border-primary focus:ring-primary text-foreground"
                      >
                        <option value="">Select a plan</option>
                        <option value="starter">Starter Plan - $299/month</option>
                        <option value="growth">Growth Plan - $499/month</option>
                        <option value="scale">Scale Plan - $899/month</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-3">
                        When do you need to launch? *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        className="w-full h-12 rounded-2xl border border-border bg-background px-4 focus:border-primary focus:ring-primary text-foreground"
                      >
                        <option value="">Select a timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-3">
                        Anything else we should know?
                      </label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Share any additional details, inspiration, or questions..."
                        rows={5}
                        className="rounded-2xl border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10 pt-8 border-t border-border">
                  {step > 1 ? (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="rounded-full px-6 py-5 border-border hover:border-primary hover:text-primary bg-transparent"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 ml-auto"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 ml-auto"
                    >
                      Submit Project
                      <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
