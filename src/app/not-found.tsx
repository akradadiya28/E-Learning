"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, ArrowUp } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-purple-300 opacity-60 animate-float">
          <svg width="40" height="40" viewBox="0 0 40 40" className="transform rotate-12">
            <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="20" cy="20" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-32 right-32 text-blue-300 opacity-60 animate-float-delayed">
          <svg width="35" height="35" viewBox="0 0 35 35" className="transform -rotate-12">
            <path d="M17.5 2 L22 12 L32 12 L24 19 L27 29 L17.5 23 L8 29 L11 19 L3 12 L13 12 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-16 text-orange-300 opacity-60 animate-bounce-slow">
          <BookOpen className="w-8 h-8 transform rotate-12" />
        </div>

        <div className="absolute top-1/4 right-20 text-purple-300 opacity-60 animate-pulse">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M15 2 L18 12 L28 12 L20 18 L23 28 L15 22 L7 28 L10 18 L2 12 L12 12 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-24 text-blue-300 opacity-60 animate-float">
          <svg width="32" height="32" viewBox="0 0 32 32" className="transform rotate-45">
            <rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16 L16 20 L24 12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Background Shapes */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-200/20 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <span className="text-gray-400">{">"}</span>
              <span className="text-gray-900 font-medium">Error Page</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Character */}
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center space-x-2">
              {/* First 4 */}
              <div className="text-8xl md:text-9xl font-bold text-yellow-400 transform hover:scale-105 transition-transform duration-300">
                4
              </div>

              {/* Animated 0 with face */}
              <div className="relative">
                <div className="text-8xl md:text-9xl font-bold text-yellow-400 transform hover:scale-105 transition-transform duration-300">
                  0
                </div>
                {/* Eyes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-3 -mt-4">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full animate-blink"></div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Mouth */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-4 border-b-2 border-black rounded-full transform rotate-12"></div>
                </div>
                {/* Eyebrow */}
                <div className="absolute top-4 right-6">
                  <div className="w-6 h-1 bg-black rounded transform rotate-12"></div>
                </div>
              </div>

              {/* Second 4 */}
              <div className="text-8xl md:text-9xl font-bold text-yellow-400 transform hover:scale-105 transition-transform duration-300">
                4
              </div>
            </div>
          </div>

          {/* Error Messages */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">ERROR PAGE!</h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">Sorry! This Page is Not Available!</p>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-8 py-3"
            >
              <Link href="/" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4 mr-2 transform rotate-180" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          {/* <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Need help finding something?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button variant="ghost" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <Link href="/courses" className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>Browse Courses</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                onClick={() => window.location.reload()}
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </Button>
            </div>
          </div> */}
        </div>
      </main>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }
        
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
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
        
        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
