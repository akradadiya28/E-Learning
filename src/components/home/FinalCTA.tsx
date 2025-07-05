import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FinalCTA() {
  return (
    <div>{/* Final CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/images/finalcta/finalcta.png"
                alt="Instructor"
                width={400}
                height={400}
                className="relative z-10 w-full h-auto rounded-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Start Learning From
                  <br />
                  World&apos;s Pro Instructors
                </h2>
                <p className="text-gray-600 mb-6">
                  Groove&apos;s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this
                  episode of the Smashing Pod we&apos;re going to find out about the art of teaching.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Chance to learn from the industry experts that have years of experience",
                  "Choose an extensive range of courses from different categories",
                  "Get premium access to our courses and study materials",
                  "Have the flexibility to learn at your own pace",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Start Learning Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default FinalCTA