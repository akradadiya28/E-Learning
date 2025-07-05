import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Instructors() {
  return (
    <div>{/* Instructors Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">WORLD CLASS</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Top Class &
                  Expert Instructors In
                  One Place
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Mark Jukarberg", role: "UX Design Expert", image: "/images/instructors/inst1.png" },
                  { name: "Alexa Liras", role: "Business Expert", image: "/images/instructors/inst2.png" },
                  { name: "William Smith", role: "Web Developer", image: "/images/instructors/inst3.png" },
                  { name: "Sophia Ana", role: "Marketing Expert", image: "/images/instructors/inst4.png" },
                ].map((instructor, index) => (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <Image
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          width={200}
                          height={200}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{instructor.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{instructor.role}</p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  See All Instructors
                </Button>
              </div>
            </div>
          </section></div>
  )
}

export default Instructors