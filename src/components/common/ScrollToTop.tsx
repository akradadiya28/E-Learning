"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

interface ScrollToTopProps {
  showAfter?: number
  className?: string
  variant?: "purple" | "blue" | "orange" | "green"
}

export function ScrollToTop({ showAfter = 300, className = "", variant = "purple" }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "blue":
        return "bg-blue-600 hover:bg-blue-700"
      case "orange":
        return "bg-orange-600 hover:bg-orange-700"
      case "green":
        return "bg-green-600 hover:bg-green-700"
      default:
        return "bg-purple-600 hover:bg-purple-700"
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-6 right-6 ${getVariantClasses()} shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50 ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  )
}
