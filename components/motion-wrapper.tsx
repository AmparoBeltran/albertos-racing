/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { type ReactNode, useEffect, useRef } from "react"

interface MotionProps {
  initial?: Record<string, any>
  animate?: Record<string, any>
  transition?: Record<string, any>
  className?: string
  children: ReactNode
}

export const Motion = ({ initial, animate, transition, className, children }: MotionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Apply initial styles
    if (initial) {
      Object.entries(initial).forEach(([key, value]) => {
        if (key === "opacity") {
          element.style.opacity = String(value)
        } else if (key === "x") {
          element.style.transform = `translateX(${value}px)`
        } else if (key === "y") {
          element.style.transform = `translateY(${value}px)`
        }
      })
    }

    // Apply animation after a small delay
    const timeoutId = setTimeout(() => {
      if (animate) {
        element.style.transition = `all ${transition?.duration || 0.3}s ease-in-out ${transition?.delay || 0}s`

        Object.entries(animate).forEach(([key, value]) => {
          if (key === "opacity") {
            element.style.opacity = String(value)
          } else if (key === "x") {
            element.style.transform = `translateX(${value}px)`
          } else if (key === "y") {
            element.style.transform = `translateY(${value}px)`
          }
        })
      }
    }, 10)

    return () => clearTimeout(timeoutId)
  }, [initial, animate, transition])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
