import { BarChart3, BookOpen, CheckCircle, Users } from "lucide-react"

export default function JourneySection() {
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
        </div>
      </section>
    </div>
  )
}

