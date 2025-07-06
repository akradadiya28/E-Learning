"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowUp } from "lucide-react";
import { PageLayout } from "@/components/common/PageLayout";

export default function NotFound() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Error Page", current: true },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <PageLayout
        title="Error Page"
        breadcrumbs={breadcrumbs}
        backgroundVariant="gradient"
        backgroundIntensity="medium"
        showAnimations={true}
      >
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
                ERROR PAGE!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Sorry! This Page is Not Available!
              </p>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-8 py-3"
              >
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                >
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
            
          </div>
        </main>

        {/* Custom Animations */}
        <style
          jsx
          global
        >{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }

          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0px) rotate(12deg);
            }
            50% {
              transform: translateY(-8px) rotate(15deg);
            }
          }

          @keyframes blink {
            0%,
            90%,
            100% {
              opacity: 1;
            }
            95% {
              opacity: 0;
            }
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
      </PageLayout>
    </div>
  );
}
