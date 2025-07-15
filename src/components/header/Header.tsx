// // "use client"

// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import {
// //   BookOpen,
// //   Menu,
// //   Search,
// //   ShoppingCart,
// //   User,
// //   X,
// // } from "lucide-react"
// // import Link from "next/link"

// // export default function Header() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// //   return (
// //     <div>
// //       {/* Header */}
// //       <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex items-center justify-between">
// //             {/* Logo */}
// //             <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
// //               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
// //                 <BookOpen className="w-5 h-5 text-white" />
// //               </div>
// //               <span className="text-xl font-bold text-gray-900">SkillGro</span>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden lg:flex items-center space-x-8">
// //               <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
// //                 Home
// //               </Link>
// //               <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
// //                 Courses
// //               </Link>
// //               <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
// //                 About
// //               </Link>
// //               <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
// //                 Contact
// //               </Link>
// //             </nav>

// //             {/* Right Side Actions */}
// //             <div className="flex items-center space-x-3">
// //               {/* Search Button - Mobile/Tablet */}
// //               <Button variant="ghost" size="sm" className="xl:hidden">
// //                 <Search className="w-4 h-4" />
// //               </Button>

// //               {/* Cart */}
// //               <Button variant="ghost" size="sm" className="hidden md:flex relative">
// //                 <ShoppingCart className="w-4 h-4 mr-2" />
// //                 <span className="hidden lg:inline">Cart</span>
// //                 <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
// //                   2
// //                 </Badge>
// //               </Button>

// //               {/* Login */}
// //               <Button variant="ghost" size="sm">
// //                 <User className="w-4 h-4 mr-2" />
// //                 <span className="hidden sm:inline">Login</span>
// //               </Button>

// //               {/* Sign Up */}
// //               <Button size="sm" className="bg-orange-500 hover:bg-orange-600 hidden sm:flex">
// //                 Sign Up
// //               </Button>

// //               {/* Mobile Menu Button */}
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="lg:hidden"
// //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               >
// //                 {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
// //               </Button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="lg:hidden border-t bg-white">
// //             <div className="container mx-auto px-4 py-4">
// //               {/* Mobile Navigation */}
// //               <nav className="space-y-4">
// //                 <Link
// //                   href="/"
// //                   className="block text-gray-700 hover:text-blue-600 font-medium py-2"
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                 >
// //                   Home
// //                 </Link>
// //                 <Link
// //                   href="/courses"
// //                   className="block text-gray-700 hover:text-blue-600 font-medium py-2"
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                 >
// //                   Courses
// //                 </Link>
// //                 <Link
// //                   href="/about"
// //                   className="block text-gray-700 hover:text-blue-600 font-medium py-2"
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                 >
// //                   About
// //                 </Link>
// //                 <Link
// //                   href="/contact"
// //                   className="block text-gray-700 hover:text-blue-600 font-medium py-2"
// //                   onClick={() => setIsMobileMenuOpen(false)}
// //                 >
// //                   Contact
// //                 </Link>
// //               </nav>

// //               {/* Mobile Actions */}
// //               <div className="flex space-x-3 mt-6 pt-4 border-t">
// //                 <Button variant="outline" size="sm" className="flex-1 bg-transparent">
// //                   <ShoppingCart className="w-4 h-4 mr-2" />
// //                   Cart (2)
// //                 </Button>
// //                 <Button size="sm" className="bg-orange-500 hover:bg-orange-600 flex-1">
// //                   Sign Up
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </header>
// //     </div>
// //   )
// // }

"use client";
import { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", active: true },
  {
    label: "Courses",
    dropdown: ["All Courses", "Popular", "New", "Categories"],
  },
  { label: "Pages", dropdown: ["About Us", "Contact", "FAQ"] },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact-us" },
  { label: "Shop", dropdown: ["All Products", "Cart", "Checkout"] },
  { label: "Blog", dropdown: ["Latest Posts", "Categories", "Tags"] },
];

const categoryOptions = [
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Photography",
  "Music",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [mobileCategoryDropdown, setMobileCategoryDropdown] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky -top-1 z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 max-w-[1440px] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 min-w-[180px]">
          <Image
            src="/images/logo/logo.svg"
            alt="SkillGro Logo"
            width={120}
            height={48}
            className="object-contain"
          />
          {/* <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl text-black">SkillGro</span>
            <span className="text-xs text-gray-500 -mt-1 tracking-wide">
              GROW YOUR SKILLS
            </span>
          </div> */}
        </div>
        {/* Center: Nav + Search (side by side) */}
        <div className="flex flex-1 items-center justify-center gap-8">
          {/* Nav */}
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative flex items-center group cursor-pointer"
                onMouseEnter={() =>
                  item.dropdown && setDesktopDropdown(item.label)
                }
                onMouseLeave={() => item.dropdown && setDesktopDropdown(null)}
              >
                <Link
                  href={item.path || "#"}
                  className={`text-sm font-medium ${
                    item.active
                      ? "text-purple-600"
                      : "text-black hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <FaChevronDown className="ml-1 text-xs text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
                )}
                {item.active && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 rounded" />
                )}
                {/* Dropdown (Desktop) */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md mt-2 overflow-hidden transition-all duration-200 z-30
                      ${
                        desktopDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }
                    `}
                  >
                    {item.dropdown.map((drop) => (
                      <a
                        key={drop}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                      >
                        {drop}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Search Bar */}
          <div className="relative flex items-center w-[400px] bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm">
            {/* Categories Dropdown Trigger */}
            <div
              className="flex items-center px-2 text-sm text-gray-500 cursor-pointer gap-1 border-r border-gray-200 relative select-none"
              onClick={() => setCategoryDropdown((v) => !v)}
              tabIndex={0}
            >
              <Image
                src={`/images/icons/category.svg`}
                height={16}
                width={16}
                alt="noimage"
              />
              <span>Categories</span>
              <FaChevronDown
                className={`text-xs ml-1 transition-transform duration-200 ${
                  categoryDropdown ? "rotate-180" : ""
                }`}
              />
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden transition-all duration-200 z-40
                ${
                  categoryDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }
              `}
              >
                {categoryOptions.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                    onClick={() => setCategoryDropdown(false)}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
            <input
              className="flex-1 px-3 py-1 outline-none bg-transparent text-sm"
              placeholder="Search For Course…"
              type="text"
            />
            <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 ml-2">
              <FaSearch className="text-purple-600 text-lg" />
            </button>
          </div>
        </div>
        {/* Right: Icons + Login */}
        <div className="flex items-center gap-4 min-w-[180px] justify-end">
          {/* Heart */}
          <div className="relative">
            <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
              <FaHeart className="text-gray-700 text-lg" />
            </div>
            <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
              0
            </span>
          </div>
          {/* Cart */}
          <div className="relative">
            <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
              <FaShoppingCart className="text-gray-700 text-lg" />
            </div>
            <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
              0
            </span>
          </div>
          {/* Login Button */}
          <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
            Log in
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 border-b border-gray-100 bg-white">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 border rounded-full"
        >
          <FaBars className="text-xl text-gray-700" />
        </button>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="SkillGro Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-bold text-lg text-black">SkillGro</span>
        </div>
        {/* Login Button */}
        <button className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition text-sm">
          Log in
        </button>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 md:hidden  bg-black bg-opacity-40 z-50 flex">
          <div className="bg-white w-80 max-w-full h-full flex flex-col p-6 relative animate-slide-in-left">
            {/* Top: Logo + Close */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo/logo.svg"
                  alt="SkillGro Logo"
                  width={120}
                  height={48}
                  className="object-contain"
                />
                {/* <span className="font-bold text-lg text-black">SkillGro</span> */}
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 border rounded-full"
              >
                <FaTimes className="text-xl text-gray-700" />
              </button>
            </div>
            {/* Search Bar (Mobile) */}
            <div className="relative w-full mb-6">
              <div className="flex w-full bg-white border border-gray-200 rounded-full px-2 py-2 shadow-sm items-center gap-2">
                {/* Categories Dropdown Trigger (Mobile) */}
                <div
                  className="flex items-center px-2 text-sm text-gray-500 cursor-pointer gap-1 border-r border-gray-200 relative select-none min-w-[120px]"
                  onClick={() => setMobileCategoryDropdown((v) => !v)}
                  tabIndex={0}
                >
                  <Image
                    src={`/images/icons/category.svg`}
                    height={16}
                    width={16}
                    alt="noimage"
                  />
                  <span>Categories</span>
                  <FaChevronDown
                    className={`text-xs ml-1 transition-transform duration-200 ${
                      mobileCategoryDropdown ? "rotate-180" : ""
                    }`}
                  />
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden transition-all duration-200 z-40
                    ${
                      mobileCategoryDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }
                  `}
                  >
                    {categoryOptions.map((cat) => (
                      <a
                        key={cat}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                        onClick={() => setMobileCategoryDropdown(false)}
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
                <input
                  className="flex-1 px-4 py-2 outline-none bg-transparent text-sm min-w-0"
                  placeholder="Search For Course…"
                  type="text"
                />
                <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 ml-1 flex items-center justify-center">
                  <FaSearch className="text-purple-600 text-lg" />
                </button>
              </div>
            </div>
            {/* Nav Items */}
            <nav className="flex flex-col gap-2 mb-8">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <button
                    className={`flex items-center gap-2 text-lg font-medium cursor-pointer group w-full text-left px-2 py-2 rounded ${
                      item.active
                        ? "text-purple-600"
                        : "text-black group-hover:text-purple-600"
                    }`}
                    onClick={() =>
                      item.dropdown
                        ? setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        : setMobileOpen(false)
                    }
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <FaChevronDown
                        className={`text-xs text-gray-400 group-hover:text-purple-600 transition-transform duration-200 ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {/* Dropdown (Mobile) */}
                  {item.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-md ml-6
                        ${
                          mobileDropdown === item.label
                            ? "max-h-60 py-1 opacity-100"
                            : "max-h-0 py-0 opacity-0"
                        }
                      `}
                    >
                      {item.dropdown.map((drop) => (
                        <a
                          key={drop}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {drop}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Bottom: Icons + Login */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex gap-4 justify-center">
                {/* Heart */}
                <div className="relative">
                  <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                    <FaHeart className="text-gray-700 text-lg" />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
                    0
                  </span>
                </div>
                {/* Cart */}
                <div className="relative">
                  <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                    <FaShoppingCart className="text-gray-700 text-lg" />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
                    0
                  </span>
                </div>
              </div>
              <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
                Log in
              </button>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
      {/* Animation keyframes for mobile drawer */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </header>
  );
}