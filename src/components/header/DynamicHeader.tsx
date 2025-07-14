"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { navigationData, megaMenuSections, type NavigationItem } from "@/data/navigation";

export default function DynamicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Handle mega menu hover with delay
  const handleMegaMenuEnter = (itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMegaMenu(itemId);
  };

  const handleMegaMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const renderMegaMenu = (itemId: string) => {
    const sections = megaMenuSections[itemId];
    if (!sections) return null;

    return (
      <div
        className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-50"
        onMouseEnter={() => handleMegaMenuEnter(itemId)}
        onMouseLeave={handleMegaMenuLeave}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href || "#"}
                      className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.image ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.label}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : item.icon ? (
                        <div className="w-8 h-8 flex items-center justify-center text-lg flex-shrink-0">
                          {item.icon}
                        </div>
                      ) : null}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </h4>
                          {item.badge && (
                            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileMenuItem = (item: NavigationItem, level = 0) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={`${level > 0 ? "ml-4" : ""}`}>
        <div className="flex items-center justify-between">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex-1 py-3 px-4 text-left font-medium transition-colors ${
                isActiveLink(item.href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <span className="flex-1 py-3 px-4 font-medium text-gray-900">{item.label}</span>
          )}
          {hasChildren && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 text-gray-500 hover:text-gray-700"
            >
              <ChevronRight
                className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
              />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="bg-gray-50 border-l-2 border-gray-200">
            {item.children?.map((child) => renderMobileMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/images/logo/logo.svg"
              alt="SkillGro Logo"
              width={120}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={megaMenuRef}>
            {navigationData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = item.href ? isActiveLink(item.href) : false;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleMegaMenuEnter(item.id)}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center space-x-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                        activeMegaMenu === item.id
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                  {/* Mega Menu */}
                  {hasChildren && activeMegaMenu === item.id && renderMegaMenu(item.id)}
                </div>
              );
            })}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 text-sm text-gray-500">
                    Search results for "{searchQuery}"...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <Button variant="ghost" size="sm" className="md:hidden p-2">
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <div className="relative hidden sm:block">
              <Button variant="ghost" size="sm" className="p-2">
                <Heart className="w-5 h-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                0
              </Badge>
            </div>

            {/* Cart */}
            <div className="relative">
              <Button variant="ghost" size="sm" className="p-2">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                0
              </Badge>
            </div>

            {/* Login Button */}
            <Button
              asChild
              className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6"
            >
              <Link href="/login">
                <User className="w-4 h-4 mr-2" />
                Log in
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              {navigationData.map((item) => renderMobileMenuItem(item))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist (0)
                </Button>
                <Button className="flex-1 ml-2 bg-yellow-400 hover:bg-yellow-500 text-black">
                  <User className="w-4 h-4 mr-2" />
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}