"use client"

import { useState, useEffect, type ReactNode } from "react"

interface CountUpProps {
  end: number
  suffix?: string
  title: string
  description: string
  icon?: ReactNode
}

export default function CountUp({ end, suffix = "", title, description, icon }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2000, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end])

  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="text-4xl font-bold mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-lg font-medium mb-1">{title}</div>
      <div className="text-sm text-white/80">{description}</div>
    </div>
  )
}
