"use client"

import type React from "react"

import { DecorativeBackground } from "./DecorativeBackground"
import { PageBreadcrumb } from "./PageBreadcrumb"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  breadcrumbs: BreadcrumbItem[]
  backgroundVariant?: "default" | "purple" | "blue" | "gradient"
  backgroundIntensity?: "light" | "medium" | "strong"
  showAnimations?: boolean
  showLogo?: boolean
  showScrollTop?: boolean
  className?: string
}

export function PageLayout({
  children,
  title,
  breadcrumbs,
  backgroundVariant = "default",
  backgroundIntensity = "medium",
  showAnimations = true,
  showLogo = true,
  className = "",
}: PageLayoutProps) {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "purple":
        return "bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100"
      case "blue":
        return "bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100"
      case "gradient":
        return "bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100"
      default:
        return "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    }
  }

  return (
    <div className={`min-h-screen ${getBackgroundClass()} relative overflow-hidden ${className}`}>
      {/* Decorative Background */}
      <DecorativeBackground
        variant={backgroundVariant}
        intensity={backgroundIntensity}
        showAnimations={showAnimations}
      />

      {/* Breadcrumb Header */}
      <PageBreadcrumb items={breadcrumbs} showLogo={showLogo} title={title} />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

    </div>
  )
}
