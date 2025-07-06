import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[]
  showLogo?: boolean
  title?: string
  className?: string
}

export function PageBreadcrumb({ items, showLogo = true, title, className = "" }: PageBreadcrumbProps) {
  return (
    <header className={`relative z-10 py-4 md:py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Full width title (when logo is not shown) */}
          {!showLogo && title && (
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h1>
            </div>
          )}

          {/* Breadcrumb Navigation */}
          <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}

                {item.href && !item.current ? (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors flex items-center space-x-1">
                    {index === 0 && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className={`flex items-center space-x-1 ${
                      item.current ? "text-blue-600 font-medium" : "text-gray-900 font-medium"
                    }`}
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Breadcrumb (simplified) */}
          <nav className="sm:hidden flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {items.length > 1 && (
              <>
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <span className="text-blue-600 font-medium text-xs">{items[items.length - 1].label}</span>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
