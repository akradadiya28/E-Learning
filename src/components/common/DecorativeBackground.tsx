"use client"

import { BookOpen } from "lucide-react"

interface DecorativeBackgroundProps {
  variant?: "default" | "purple" | "blue" | "gradient"
  intensity?: "light" | "medium" | "strong"
  showAnimations?: boolean
}

export function DecorativeBackground({
  intensity = "medium",
  showAnimations = true,
}: DecorativeBackgroundProps) {
  const getOpacityClass = () => {
    switch (intensity) {
      case "light":
        return "opacity-40"
      case "strong":
        return "opacity-80"
      default:
        return "opacity-60"
    }
  }

  return (
    <>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        <div
          className={`absolute top-16 left-12 md:top-20 md:left-20 text-purple-300 ${getOpacityClass()} ${showAnimations ? "animate-float" : ""}`}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" className="transform rotate-12 md:w-10 md:h-10">
            <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="16" cy="16" r="3" fill="currentColor" />
          </svg>
        </div>

        <div
          className={`absolute top-24 right-16 md:top-32 md:right-32 text-blue-300 ${getOpacityClass()} ${showAnimations ? "animate-float-delayed" : ""}`}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" className="transform -rotate-12 md:w-9 md:h-9">
            <path d="M14 2 L17 10 L25 10 L19 15 L22 23 L14 18 L6 23 L9 15 L3 10 L11 10 Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className={`absolute bottom-32 left-8 md:bottom-40 md:left-16 text-orange-300 ${getOpacityClass()} ${showAnimations ? "animate-bounce-slow" : ""}`}
        >
          <BookOpen className="w-6 h-6 md:w-8 md:h-8 transform rotate-12" />
        </div>

        <div
          className={`absolute top-1/3 right-12 md:right-20 text-purple-300 ${getOpacityClass()} ${showAnimations ? "animate-pulse" : ""}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="md:w-7 md:h-7">
            <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className={`absolute bottom-20 right-16 md:bottom-24 md:right-24 text-blue-300 ${getOpacityClass()} ${showAnimations ? "animate-float" : ""}`}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" className="transform rotate-45 md:w-8 md:h-8">
            <rect x="5" y="5" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M10 13 L13 16 L19 10" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div
          className={`absolute top-1/2 left-4 md:left-8 text-pink-300 ${getOpacityClass()} ${showAnimations ? "animate-float-delayed" : ""}`}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" className="transform -rotate-45 md:w-6 md:h-6">
            <polygon points="11,2 14,8 20,8 15,12 17,18 11,15 5,18 7,12 2,8 8,8" fill="currentColor" />
          </svg>
        </div>

        <div
          className={`absolute top-16 right-1/4 text-indigo-300 ${getOpacityClass()} ${showAnimations ? "animate-bounce-slow" : ""}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="transform rotate-90 md:w-5 md:h-5">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>

        <div
          className={`absolute bottom-1/3 left-1/4 text-teal-300 ${getOpacityClass()} ${showAnimations ? "animate-pulse" : ""}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" className="transform rotate-12 md:w-5 md:h-5">
            <rect x="3" y="3" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M7 9 L9 11 L13 7" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Background Shapes */}
        <div className="absolute top-8 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-purple-200/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 right-1/4 w-28 h-28 md:w-40 md:h-40 bg-blue-200/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-6 w-16 h-16 md:w-24 md:h-24 bg-orange-200/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 md:w-36 md:h-36 bg-pink-200/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-18 md:w-28 md:h-28 bg-indigo-200/15 rounded-full blur-xl"></div>

        {/* Large decorative curves */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-200">
            <path
              d="M50,50 Q150,50 150,150 Q50,150 50,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full text-blue-200">
            <path
              d="M150,150 Q50,150 50,50 Q150,50 150,150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-6px) rotate(15deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
