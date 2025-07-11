"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  BookOpen,
  HelpCircle,
  Award,
  Users,
  Download,
  Smartphone,
  Infinity,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Heart,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"
import type { CourseDetail } from "@/types/courseDetail"

interface CourseSidebarProps {
  course: CourseDetail
  className?: string
}

export function CourseSidebar({ course, className = "" }: CourseSidebarProps) {
  const handleEnroll = () => {
    // Handle enrollment logic
    console.log("Enrolling in course:", course.id)
  }

  const handleAddToWishlist = () => {
    // Handle wishlist logic
    console.log("Adding to wishlist:", course.id)
  }

  const handleShare = (platform: string) => {
    // Handle sharing logic
    console.log("Sharing on:", platform)
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Course Preview Card */}
      <Card className="overflow-hidden shadow-lg">
        <div className="relative aspect-video bg-gradient-to-br from-green-400 to-teal-500">
          <Image src="/images/courses/c1.jpg" alt="Course Preview" fill className="object-cover" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-green-500 text-white hover:bg-green-600 text-xs">Beginner</Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs">Crash Course</Badge>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Price Section */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">This Course Fee:</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-purple-600">${course.price.toFixed(2)}</span>
              {course.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${course.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleEnroll}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Enroll Now
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={handleAddToWishlist}>
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Course Includes */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">Course Includes:</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Level</span>
                </div>
                <span className="font-medium text-gray-900">{course.level}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Duration</span>
                </div>
                <span className="font-medium text-gray-900">{course.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  <span>Lessons</span>
                </div>
                <span className="font-medium text-gray-900">{course.totalLessons}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <HelpCircle className="w-4 h-4" />
                  <span>Quizzes</span>
                </div>
                <span className="font-medium text-gray-900">{course.totalQuizzes}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </div>
                <span className="font-medium text-gray-900">{course.certificates ? "Yes" : "No"}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Graduation</span>
                </div>
                <span className="font-medium text-gray-900">25K</span>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Features */}
          <div className="space-y-3">
            {course.lifetimeAccess && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Infinity className="w-4 h-4 text-green-600" />
                <span>Lifetime Access</span>
              </div>
            )}

            {course.mobileAccess && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>Mobile Access</span>
              </div>
            )}

            {course.downloadableResources && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Download className="w-4 h-4 text-purple-600" />
                <span>Downloadable Resources</span>
              </div>
            )}
          </div>

          <Separator className="my-6" />

          {/* Secure Payment */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Secure Payment:</h4>
            <div className="flex items-center gap-2">
              <Image
                src="/images/course-detail/paypal.svg"
                alt="PayPal"
                width={20}
                height={20}
                className="rounded"
              />
              <Image src="/images/course-detail/visa.svg" alt="Visa" width={40} height={24} className="rounded" />
              <Image
                src="/images/course-detail/mastercard.svg"
                alt="Mastercard"
                width={40}
                height={24}
                className="rounded"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Share Course */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Share this course:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-blue-400 hover:bg-blue-50 bg-transparent"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-green-600 hover:bg-green-50 bg-transparent"
              onClick={() => handleShare("whatsapp")}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-600 hover:bg-gray-50 bg-transparent"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-blue-500 hover:bg-blue-50 bg-transparent"
              onClick={() => handleShare("copy")}
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* See All Instructors */}
      <Card>
        <CardContent className="p-6 text-center">
          <Button variant="outline" className="w-full bg-transparent">
            See All Instructors →
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
