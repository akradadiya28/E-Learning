import { BarChart3, BookOpen, CheckCircle, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";

function LearningJourney() {
  return (
    <div>
      {/* Learning Journey Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-700 to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Start Your Learning Journey Today!
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Choose online learning and get access to thousands of courses, expert instructors, and flexible learning.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: Users,
                title: "Learn with Experts",
                description: "Learn from industry experts who have years of experience in their field.",
              },
              {
                icon: BookOpen,
                title: "Learn Anything",
                description: "Access thousands of courses across different categories and skill levels.",
              },
              {
                icon: CheckCircle,
                title: "Get Online Certificate",
                description: "Earn certificates upon course completion to showcase your skills.",
              },
              {
                icon: BarChart3,
                title: "Track Progress",
                description: "Monitor your learning progress and achieve your educational goals effectively.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center text-white group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-purple-100 text-sm sm:text-base leading-relaxed px-2">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Instructor/Student Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Instructor Card */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex-1 p-4 sm:p-6 order-2 sm:order-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                      Become an Instructor
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 text-center sm:text-left leading-relaxed">
                      Teach what you love. Become an instructor and share your knowledge with students around the world.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                      <Button className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 px-6 py-2">
                        Apply as Instructor
                      </Button>
                    </div>
                  </div>
                  <div className="w-full sm:w-32 lg:w-40 h-32 sm:h-32 lg:h-40 relative order-1 sm:order-2 flex-shrink-0">
                    <Image
                      src="/images/learningjourney/l1j.png"
                      alt="Become an instructor"
                      fill
                      className="object-cover sm:object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 128px, 160px"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Card */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex-1 p-4 sm:p-6 order-2 sm:order-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                      Become a Student
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 text-center sm:text-left leading-relaxed">
                      Start your learning journey today. Join thousands of students learning new skills every day.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                      <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 px-6 py-2">
                        Apply as Student
                      </Button>
                    </div>
                  </div>
                  <div className="w-full sm:w-32 lg:w-40 h-32 sm:h-32 lg:h-40 relative order-1 sm:order-2 flex-shrink-0">
                    <Image
                      src="/images/learningjourney/l2j.png"
                      alt="Become a student"
                      fill
                      className="object-cover sm:object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 128px, 160px"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LearningJourney
