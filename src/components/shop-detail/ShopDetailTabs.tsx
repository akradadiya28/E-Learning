"use client"

import { useState } from "react"

export function ShopDetailTabs() {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
  ]

  return (
    <div className="mb-12">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl">
        {activeTab === "description" && (
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm summ ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. y to follow tutorials, Exercises, and solutions. This course does start from the beginning with very little knowledge and gives a great overview of common tools used for data science and progresses into more.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}