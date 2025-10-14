interface TickerBandProps {
  text: string
  bgColor: string
  textColor: string
  speed?: "normal" | "slow"
}

export function TickerBand({ text, bgColor, textColor, speed = "normal" }: TickerBandProps) {
  const items = Array(20).fill(text)

  return (
    <div className={`${bgColor} ${textColor} py-3 overflow-hidden whitespace-nowrap`}>
      <div className={`inline-block ${speed === "slow" ? "ticker-slow" : "ticker"}`}>
        {items.map((item, i) => (
          <span key={i} className="inline-block px-4 text-lg font-bold uppercase">
            {item} →
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`duplicate-${i}`} className="inline-block px-4 text-lg font-bold uppercase">
            {item} →
          </span>
        ))}
      </div>
    </div>
  )
}
