import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8 lg:py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl"></div>

        {/* Dotted pattern */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 opacity-20">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Large arrow decoration */}
        <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-32">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-blue-500/20 hidden lg:block">
            <path
              d="M10 40 L90 40 M90 40 L75 25 M90 40 L75 55"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-0 px-4 py-2 text-sm font-medium">
                Never Stop Learning
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Never Stop{" "}
                <span className="relative inline-block">
                  <span className="text-orange-500 relative z-10">Learning</span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-200 -z-10 rounded transform -rotate-1"></div>
                </span>
                <br />
                Life Never Stop <span className="text-gray-800">Teaching</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Every teaching and learning journey is unique. Following We&apos;ll help guide your way through upskilling
                and achieving your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex items-center bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2 text-blue-600" />
                Explore Courses
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm text-gray-600 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Floating Elements */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/images/banner/banner.png"
                alt="Professional woman with laptop - online learning"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-8 right-4 lg:top-12 lg:right-8 bg-white rounded-xl shadow-lg p-3 animate-bounce z-20 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Course Completed</div>
                  <div className="text-xs text-gray-500">Congratulations!</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-4 lg:bottom-20 lg:left-8 bg-white rounded-xl shadow-lg p-3 z-20 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">500K+ Students</div>
                  <div className="text-xs text-gray-500">Learning with us</div>
                </div>
              </div>
            </div>

            {/* User Profile Cards */}
            <div className="absolute top-20 left-4 lg:top-24 lg:left-12 bg-white rounded-lg shadow-md p-2 z-20 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">RF</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-900">Robert Fox</div>
                  <div className="text-xs text-gray-500">Instructor</div>
                </div>
              </div>
            </div>

            <div className="absolute top-32 left-8 lg:top-40 lg:left-16 bg-white rounded-lg shadow-md p-2 z-20 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MJ</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-900">Michel Jones</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200/50 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200/50 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 text-white/50">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}

export default Banner
