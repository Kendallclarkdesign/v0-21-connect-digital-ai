"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false)

    // If we're on the homepage, scroll to section
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    // If we're on another page, the Link href will handle navigation
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
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/#hero"
              onClick={() => handleNavClick("hero")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#why-us"
              onClick={() => handleNavClick("why-us")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#services"
              onClick={() => handleNavClick("services")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#work"
              onClick={() => handleNavClick("work")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/locations"
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Our Service Areas
            </Link>
            <Link
              href="/#pricing"
              onClick={() => handleNavClick("pricing")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#contact"
              onClick={() => handleNavClick("contact")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors"
            >
              Contact
            </Link>
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
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#hero"
                onClick={() => handleNavClick("hero")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Home
              </Link>
              <Link
                href="/#why-us"
                onClick={() => handleNavClick("why-us")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Why Us
              </Link>
              <Link
                href="/#services"
                onClick={() => handleNavClick("services")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Services
              </Link>
              <Link
                href="/#work"
                onClick={() => handleNavClick("work")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Our Work
              </Link>
              <Link
                href="/locations"
                onClick={() => setIsOpen(false)}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Our Service Areas
              </Link>
              <Link
                href="/#pricing"
                onClick={() => handleNavClick("pricing")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Pricing
              </Link>
              <Link
                href="/#contact"
                onClick={() => handleNavClick("contact")}
                className="text-foreground/70 hover:text-foreground font-medium transition-colors text-left py-2"
              >
                Contact
              </Link>
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
