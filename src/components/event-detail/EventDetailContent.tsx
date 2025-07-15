"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowLeft,
  ArrowRight,
  Tag,
  Star,
  BookOpen,
  HelpCircle,
  Award,
  ChevronRight,
  Heart,
  Eye
} from "lucide-react"
import type { Event } from "@/types/events"

interface EventDetailContentProps {
  event: Event
  relatedEvents: Event[]
}

export function EventDetailContent({ event, relatedEvents }: EventDetailContentProps) {
  const [isInterested, setIsInterested] = useState(false)
  const [attendees] = useState(Math.floor(Math.random() * 200) + 50)
  const views = Math.floor(Math.random() * 1000) + 100

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const handleInterested = () => {
    setIsInterested(!isInterested)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = event.title
    
    let shareUrl = ""
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url)
        return
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  const handleJoinEvent = () => {
    // Handle event registration logic
    console.log("Joining event:", event.id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back to Events Button */}
        <div className="mb-6">
          <Link href="/events">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                  {event.category}
                </Badge>
              </div>
              {event.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                    Featured
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.5 (5 Reviews)</span>
              </div>
            </div>

            {/* Event Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{attendees} attending</span>
                </div>
              </div>

              {/* Instructor/Organizer Info */}
              <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Millar" />
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">David Millar</h3>
                    <p className="text-sm text-gray-600">Event Organizer & Expert</p>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleInterested}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isInterested 
                        ? "bg-red-100 text-red-600" 
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isInterested ? "fill-current" : ""}`} />
                    <span className="text-sm font-medium">Interested</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("facebook")}
                      className="p-2"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("twitter")}
                      className="p-2"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("linkedin")}
                      className="p-2"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("copy")}
                      className="p-2"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            {/* Event Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </section>

            {/* What you'll learn */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What you&apos;ll learn in this event?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/images/banner/image.webp"
                    alt="Learning environment"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Four Major Elements That We Offer For This Event
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <span className="text-gray-700">
                        Work with color & Gradients & Grids
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <span className="text-gray-700">
                        All the useful shortcuts
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <span className="text-gray-700">
                        Be able to create Flyers, Brochures, Advertisements
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <span className="text-gray-700">
                        How to work with Images & Text
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-6">
                Mortem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </section>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <Link key={index} href={`/events?tag=${tag.toLowerCase()}`}>
                    <Badge 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map will be displayed here</p>
                  <p className="text-sm text-gray-400">{event.location}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Event Registration Card */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  {/* Event Fee */}
                  <div className="text-center mb-6">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
                      <span className="text-sm">Event Fee</span>
                    </div>
                    <div className="bg-blue-50 px-4 py-4 rounded-b-lg">
                      <span className="text-3xl font-bold text-blue-600">
                        $19.00
                      </span>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Event Information:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Date</span>
                        </div>
                        <span className="text-gray-900">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Start Time</span>
                        </div>
                        <span className="text-gray-900">10:00am</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Topics</span>
                        </div>
                        <span className="text-gray-900">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Quizzes</span>
                        </div>
                        <span className="text-gray-900">145</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Certifications</span>
                        </div>
                        <span className="text-gray-900">Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Total Seat</span>
                        </div>
                        <span className="text-gray-900">300</span>
                      </div>
                    </div>
                  </div>

                  {/* Secure Payment */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Secure Payment:
                    </h4>
                    <div className="flex gap-2">
                      <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PP</span>
                      </div>
                      <div className="w-8 h-6 bg-blue-500 rounded"></div>
                      <div className="w-8 h-6 bg-red-500 rounded"></div>
                      <div className="w-8 h-6 bg-blue-400 rounded"></div>
                      <div className="w-8 h-6 bg-orange-500 rounded"></div>
                    </div>
                  </div>

                  {/* Share Event */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Share this event:
                    </h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleShare("facebook")}>
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleShare("twitter")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")}>
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Join Event Button */}
                  <Button 
                    onClick={handleJoinEvent}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Join This Event
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Related Events */}
              {relatedEvents.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Events</h3>
                    <div className="space-y-4">
                      {relatedEvents.map((relatedEvent) => (
                        <Link key={relatedEvent.id} href={`/events/${relatedEvent.slug}`}>
                          <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <Image
                              src={relatedEvent.image || "/placeholder.svg"}
                              alt={relatedEvent.title}
                              width={60}
                              height={60}
                              className="w-15 h-15 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                                {relatedEvent.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(relatedEvent.date)}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
          <Link href="/events">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              All Events
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2"
            >
              Back to Top
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}