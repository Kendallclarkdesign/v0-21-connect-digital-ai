"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const saleEndDate = new Date("2026-01-01T23:59:59").getTime()

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = saleEndDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-primary/10 border-2 border-primary/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">⚡ Limited Time Offer</p>
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">30% Off First 3 Months</h3>
        <p className="text-muted-foreground font-light">Sale ends in:</p>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground text-center mt-2 font-medium">Days</div>
        </div>
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground text-center mt-2 font-medium">
            Hours
          </div>
        </div>
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground text-center mt-2 font-medium">
            Minutes
          </div>
        </div>
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground text-center mt-2 font-medium">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}
