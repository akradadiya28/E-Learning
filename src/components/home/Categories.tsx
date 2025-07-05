import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Code,
  DollarSign,
  Heart,
  Palette,
  Settings,
} from "lucide-react";
import React from "react";

function Categories() {
  return (
    <div>
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top Category We Have
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our goal is to be at the forefront of innovation in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Palette,
                name: "Graphic Design",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: DollarSign,
                name: "Finance",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Code,
                name: "Development",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: BarChart3,
                name: "Marketing",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Heart,
                name: "Life Style",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: Settings,
                name: "Management",
                color: "bg-gray-100 text-gray-600",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
