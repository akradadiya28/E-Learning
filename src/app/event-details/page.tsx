import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Bell,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  Clock,
  BookOpen,
  HelpCircle,
  Award,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function SkillGroCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="relative mb-8">
              <Image
                src="/images/banner/mainImage.webp"
                alt="Students walking together"
                width={800}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">Development</Badge>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.5 (5 Reviews)</span>
              </div>
            </div>

            {/* Course Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How To Become Ridiculously Self-Aware In 20 Minutes
            </h2>

            {/* Instructor Info */}
            <div className="flex items-center gap-4 mb-8">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span>
                  By{" "}
                  <span className="font-medium text-gray-900">
                    David Millar
                  </span>
                </span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Location: Washington DC, MI 2726</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>2,250 Students</span>
                </div>
              </div>
            </div>

            {/* Event Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Event Overview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis dolor sit amet,
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            {/* What you'll learn */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What you'll learn in this event?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
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
                Mortem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </p>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Map</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map placeholder</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
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
                      <span className="text-gray-900">26/08/2024</span>
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

                {/* Share Course */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Share this course:
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Join Event Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Join This Event
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
