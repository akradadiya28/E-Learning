"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Courses
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
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
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
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
