"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Menu,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  X,
  Code,
  Palette,
  BarChart3,
  DollarSign,
  Heart,
  Settings,
  Star,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const courseCategories = [
    { icon: Code, name: "Development", courses: 120, color: "bg-blue-100 text-blue-600" },
    { icon: Palette, name: "Design", courses: 85, color: "bg-purple-100 text-purple-600" },
    { icon: BarChart3, name: "Marketing", courses: 95, color: "bg-green-100 text-green-600" },
    { icon: DollarSign, name: "Business", courses: 110, color: "bg-orange-100 text-orange-600" },
    { icon: Heart, name: "Lifestyle", courses: 65, color: "bg-pink-100 text-pink-600" },
    { icon: Settings, name: "IT & Software", courses: 75, color: "bg-gray-100 text-gray-600" },
  ]

  const featuredCourses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      rating: 4.8,
      students: "12.5k",
      price: "$49.99",
      originalPrice: "$199.99",
      image: "/placeholder.svg?height=80&width=120",
      badge: "Bestseller",
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: "8.2k",
      price: "$39.99",
      originalPrice: "$149.99",
      image: "/placeholder.svg?height=80&width=120",
      badge: "New",
    },
  ]

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ]

  const blogCategories = [
    { name: "Education Tips", count: 45 },
    { name: "Career Advice", count: 32 },
    { name: "Technology", count: 28 },
    { name: "Design Trends", count: 21 },
    { name: "Business", count: 19 },
  ]

  return (
    <div>
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SkillGro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>

              {/* Courses Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("courses")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu */}
                {activeDropdown === "courses" && (
                  <div className="absolute top-full left-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl p-6 mt-2 -translate-x-1/4">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Categories */}
                      <div className="col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-4">Browse Categories</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {courseCategories.map((category, index) => (
                            <Link
                              key={index}
                              href={`/courses/${category.name.toLowerCase()}`}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div
                                className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                              >
                                <category.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {category.name}
                                </div>
                                <div className="text-sm text-gray-500">{category.courses} courses</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Featured Courses */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Featured Courses</h3>
                        <div className="space-y-4">
                          {featuredCourses.map((course, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-3">
                                <div className="flex space-x-3">
                                  <div className="relative flex-shrink-0">
                                    <Image
                                      src={course.image || "/placeholder.svg"}
                                      alt={course.title}
                                      width={60}
                                      height={40}
                                      className="rounded object-cover"
                                    />
                                    {course.badge && (
                                      <Badge
                                        className={`absolute -top-1 -right-1 text-xs ${
                                          course.badge === "Bestseller" ? "bg-orange-500" : "bg-green-500"
                                        }`}
                                      >
                                        {course.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
                                      {course.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mb-1">By {course.instructor}</p>
                                    <div className="flex items-center space-x-2 text-xs">
                                      <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span>{course.rating}</span>
                                      </div>
                                      <span className="text-gray-400">•</span>
                                      <span className="text-gray-600">{course.students}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-1">
                                      <span className="font-semibold text-sm">{course.price}</span>
                                      <span className="text-xs text-gray-500 line-through">{course.originalPrice}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <Link
                          href="/courses"
                          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium mt-3"
                        >
                          <span>View all courses</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 mt-2">
                    {aboutLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>

              {/* Blog Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("blog")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span>Blog</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === "blog" && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 mt-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Blog Categories</h3>
                    <div className="space-y-2">
                      {blogCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/blog/${category.name.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-700 hover:text-blue-600">{category.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{category.count}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/blog"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium mt-3"
                    >
                      <span>View all posts</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Bar - Desktop */}
              <div className="hidden xl:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 w-64">
                <Search className="w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  className="border-0 bg-transparent focus-visible:ring-0 text-sm flex-1"
                />
              </div>

              {/* Search Button - Mobile/Tablet */}
              <Button variant="ghost" size="sm" className="xl:hidden">
                <Search className="w-4 h-4" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="hidden md:flex relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Cart</span>
                <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                  2
                </Badge>
              </Button>

              {/* Login */}
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Login</span>
              </Button>

              {/* Sign Up */}
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 hidden sm:flex">
                Sign Up
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 mb-4">
                <Search className="w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  className="border-0 bg-transparent focus-visible:ring-0 text-sm flex-1"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Courses */}
                <div>
                  <div className="text-gray-900 font-semibold py-2">Courses</div>
                  <div className="pl-4 space-y-2">
                    {courseCategories.slice(0, 4).map((category, index) => (
                      <Link
                        key={index}
                        href={`/courses/${category.name.toLowerCase()}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium py-1 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View all courses →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/blog"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="flex space-x-3 mt-6 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (2)
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
