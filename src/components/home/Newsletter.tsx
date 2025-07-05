import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Newsletter() {
  return (
      <div>
          {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Want To Stay <span className="text-yellow-300">Informed</span> About
                <br />
                New Courses & Study?
              </h2>
              <p className="text-purple-100 mb-6">
                Subscribe to our newsletter and get updates on new courses and study materials.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">Subscribe Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter