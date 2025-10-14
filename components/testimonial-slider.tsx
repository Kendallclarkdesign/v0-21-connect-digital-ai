"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, ExternalLink, Linkedin, Facebook, Globe } from "lucide-react"

const testimonials = [
  {
    name: "Aaron Brown",
    role: "Owner, Dirtbusters Excavations",
    quote:
      "They brought clarity and fresh ideas to our digital presence. The process felt easy and professional from start to finish.",
    portfolioLink: "https://www.dirtbustersexcavation.com/",
    socialLink: "https://www.facebook.com/Seattle.DirtBusters/",
    socialType: "facebook" as const,
  },
  {
    name: "Ashley Drakeford",
    role: "Dentist, Dental For You",
    quote: "Exceptional communication and a modern approach. They understood exactly what my practice needed.",
    portfolioLink: "https://foryoudental.com/",
    socialLink: "https://foryoudental.com/",
    socialType: "website" as const,
  },
  {
    name: "Max Noir",
    role: "Marketing Professional (Independent Collaboration)",
    quote: "Creative, reliable, and ahead of the curve. One of the best partnerships I've had in digital work.",
    portfolioLink:
      "https://dribbble.com/shots/23042573-Forest-AR-App-CryptoRoots-Edition-Where-Environmental-Impact?utm_source=Clipboard_Shot&utm_campaign=kendallclarkdesign&utm_content=Forest%20AR%20App%3A%20CryptoRoots%20Edition%20-%20Where%20Environmental%20Impact&utm_medium=Social_Share",
    socialLink: "https://www.linkedin.com/in/maxnoir",
    socialType: "linkedin" as const,
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderSocialIcon = (type: "linkedin" | "facebook" | "website") => {
    const iconClass = "w-4 h-4"
    switch (type) {
      case "linkedin":
        return <Linkedin className={iconClass} />
      case "facebook":
        return <Facebook className={iconClass} />
      case "website":
        return <Globe className={iconClass} />
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border border-border shadow-lg rounded-3xl bg-card overflow-hidden">
        <CardContent className="pt-16 pb-16 px-12 md:px-16">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          <div className="text-center space-y-8 min-h-[240px] flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light italic">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <a
                  href={testimonials[currentIndex].portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-serif font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  {testimonials[currentIndex].name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href={testimonials[currentIndex].socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={`Visit ${testimonials[currentIndex].name}'s ${testimonials[currentIndex].socialType}`}
                >
                  {renderSocialIcon(testimonials[currentIndex].socialType)}
                </a>
              </div>
              <p className="text-sm text-muted-foreground font-light">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
