"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="21 Connect Digital Logo" className="h-10 w-auto" />
            <span className="text-xl font-serif font-semibold text-foreground tracking-tight hidden sm:inline">
              21 Connect Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Contact
            </button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md"
            >
              <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Contact
              </button>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full mt-2"
              >
                <a href="https://calendly.com/21connectdigital/30min" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
