import { AppleIcon, BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsAndroid } from 'react-icons/bs'

function Footer() {
  return (
    <div>{/* Footer */}
     <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xl font-bold">SkillGro</span>
              </Link>
              <p className="text-purple-100 leading-relaxed">
                We are always providing people with the opportunity to learn the practical skills and achieve their
                goals. Start your learning journey with us today.
              </p>
              <div className="space-y-2 text-purple-100">
                <p>Call Us: +1 (555) 123-4567</p>
                <p>Email: info@skillgro.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Useful Links</h3>
              <div className="space-y-3">
                {[
                  "All Courses",
                  "About Us",
                  "Contact Us",
                  "Become Instructor",
                  "Student Login",
                  "Terms & Conditions",
                ].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block text-purple-100 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Our Company</h3>
              <div className="space-y-3">
                {["Contact Us", "Become Teacher", "Blog", "Instructor", "Events", "Careers"].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block text-purple-100 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Get In Touch</h3>
              <p className="text-purple-100 mb-4">
                Subscribe to our newsletter and get updates on new courses and study materials.
              </p>
              <div className="flex space-x-3 mb-6">
                {[
                  { name: "Facebook", icon: Facebook },
                  { name: "Twitter", icon: Twitter },
                  { name: "Instagram", icon: Instagram },
                  { name: "LinkedIn", icon: Linkedin },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors cursor-pointer">
                    <BsAndroid className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors cursor-pointer">
                    <AppleIcon className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-xs text-gray-300">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-purple-100 text-sm">&copy; 2024 SkillGro. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-purple-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-purple-100 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer