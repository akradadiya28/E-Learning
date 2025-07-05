import React from 'react'

function Stats() {
  return (
    <div>{/* Stats Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                {[
                  { number: "42K+", label: "Happy Students" },
                  { number: "86+", label: "Quality Courses" },
                  { number: "32K", label: "Online Courses" },
                  { number: "45K", label: "People Worldwide" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-purple-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section></div>
  )
}

export default Stats