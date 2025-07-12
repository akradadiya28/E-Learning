"use client"

// import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Users,
  BookOpen,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Instructor } from "@/types/instructor"

interface InstructorCardProps {
  instructor: Instructor
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  // const [isHovered, setIsHovered] = useState(false)

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="w-4 h-4" />
      case "twitter":
        return <Twitter className="w-4 h-4" />
      case "linkedin":
        return <Linkedin className="w-4 h-4" />
      case "instagram":
        return <Instagram className="w-4 h-4" />
      case "website":
        return <Globe className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header with Avatar and Badges */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
              <Image
                src={instructor.avatar || "/placeholder.svg"}
                alt={instructor.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {instructor.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
            )}
            {/* {instructor.isTopRated && (
              <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1">Top Rated</Badge>
            )} */}
          </div>

          {/* Name and Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {instructor.name}
          </h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{instructor.specialization}</p>
          <p className="text-xs text-gray-600 mb-3">{instructor.title}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold ml-1">{instructor.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({instructor.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-center">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-center mb-1">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-gray-900">{instructor.studentCount.toLocaleString()}</p>
            <p className="text-xs text-gray-600">Students</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-center mb-1">
              <BookOpen className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm font-semibold text-gray-900">{instructor.courseCount}</p>
            <p className="text-xs text-gray-600">Courses</p>
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{instructor.bio}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-2 mb-4">
          {Object.entries(instructor.socialLinks).map(
            ([platform, url]) =>
              url && (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group/social"
                >
                  <span className="text-gray-600 group-hover/social:text-blue-600 transition-colors">
                    {getSocialIcon(platform)}
                  </span>
                </Link>
              ),
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent py-2">
                View Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <Image
                    src={instructor.avatar || "/placeholder.svg"}
                    alt={instructor.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <p className="text-blue-600 font-medium">{instructor.specialization}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Bio */}
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-blue-600">{instructor.rating}</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-green-600">{instructor.studentCount.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-purple-600">{instructor.courseCount}</p>
                    <p className="text-xs text-gray-600">Courses</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-600">{instructor.experience}</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-2">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <ul className="space-y-1">
                    {instructor.education.map((edu, index) => (
                      <li key={index} className="text-gray-600 text-sm">
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="border-green-200 text-green-800">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <p className="text-gray-600">{instructor.languages.join(", ")}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 py-2">
            <MessageCircle className="w-4 h-4 mr-1" />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
