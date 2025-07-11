"use client"

// import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Star, Calendar, Users, Clock, Award } from "lucide-react"
import type { CourseDetail } from "@/types/courseDetail"

interface CourseHeroProps {
  course: CourseDetail
}

export function CourseHero({ course }: CourseHeroProps) {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // const handlePlayVideo = () => {
  //   setIsVideoPlaying(true)
  //   // Here you would implement video player logic
  // }

  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>

        {/* X Pattern */}
        <div className="absolute top-16 right-32 text-white text-2xl font-bold opacity-20">
          × × × × ×<br />× × × × ×<br />× × × × ×
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold border-0">
                {course.level}
              </Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold border-0">
                Laravel Pro
              </Badge>
            </div>

            {/* Course Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{course.title}</h1>

            {/* Course Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="font-medium">{course.rating}</span>
                <span className="text-white/70">({course.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{course.lastUpdated}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.studentCount.toLocaleString()} Students</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {course.instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium">By {course.instructor.name}</p>
                <p className="text-white/70 text-sm">{course.instructor.title}</p>
              </div>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold px-8 py-3">
                Enroll Now - ${course.price}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                // onClick={handlePlayVideo}
              >
                <Play className="w-4 h-4 mr-2" />
                Preview Course
              </Button>
            </div>
          </div>

          {/* Right Content - Course Preview */}
          <div className="order-1 lg:order-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <CardContent className="p-0">
                {/* Video Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-blue-600">
                  <Image
                    src={course.heroImage || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30"
                      // onClick={handlePlayVideo}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </Button>
                  </div>

                  {/* Course Level Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white hover:bg-green-600 px-3 py-1 text-sm font-semibold">
                      Beginner
                    </Badge>
                  </div>

                  {/* Course Type Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 text-sm font-semibold">
                      Crash Course
                    </Badge>
                  </div>
                </div>

                {/* Course Quick Info */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-white/70 text-sm mb-2">This Course Fee:</p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-3xl font-bold text-white">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-xl text-white/50 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 text-white/90">
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">{course.duration}</p>
                      <p className="text-xs text-white/70">Duration</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">{course.totalLessons}</p>
                      <p className="text-xs text-white/70">Lessons</p>
                    </div>
                  </div>

                  {/* Desktop CTA */}
                  <div className="hidden lg:flex flex-col gap-3">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-white/90 font-semibold py-3">
                      Enroll Now - ${course.price}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white text-white hover:bg-white/10 bg-transparent"
                      // onClick={handlePlayVideo}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Preview Course
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
