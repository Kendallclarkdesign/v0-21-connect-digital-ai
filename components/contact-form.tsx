"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <Card className="border border-border shadow-lg rounded-3xl bg-card">
      <CardContent className="pt-10 pb-10 px-10">
        <form
          action="https://formspree.io/f/mjkargbe"
          method="POST"
          onSubmit={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "form_submission", {
                event_category: "Lead",
                event_label: "Contact Form - 21 Connect Digital",
              })
            }
          }}
          className="space-y-8"
        >
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
  )
}
