import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Features() {
  return (
      <div>
          {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/features/course.png"
                alt="Students learning"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Courses</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Thousand Of Top <span className="text-orange-500">Courses</span>
                  <br />
                  Now In One Place
                </h2>
                <p className="text-gray-600 mb-6">
                  Groove&apos;s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this
                  episode.
                </p>
              </div>
              <div className="space-y-4">
                {["The Most World Class Instructors", "Access Your Class anywhere", "Flexible Course Plan"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ),
                )}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Explore Courses</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features