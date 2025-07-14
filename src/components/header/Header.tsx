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

// "use client";
// import { useState } from "react";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaSearch,
//   FaBars,
//   FaTimes,
//   FaChevronDown,
// } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const navItems = [
//   { label: "Home", active: true },
//   {
//     label: "Courses",
//     dropdown: ["All Courses", "Popular", "New", "Categories"],
//   },
//   { label: "Pages", dropdown: ["About Us", "Contact", "FAQ"] },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/contact-us" },
//   // { label: "Shop", dropdown: ["All Products", "Cart", "Checkout"] },
//   // { label: "Blog", dropdown: ["Latest Posts", "Categories", "Tags"] },
// ];

// const categoryOptions = [
//   "Design",
//   "Development",
//   "Marketing",
//   "Business",
//   "Photography",
//   "Music",
// ];

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
//   const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
//   const [categoryDropdown, setCategoryDropdown] = useState(false);
//   const [mobileCategoryDropdown, setMobileCategoryDropdown] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-100 bg-white sticky -top-1 z-50">
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex items-center justify-between px-6 py-2 max-w-[1440px] mx-auto">
//         {/* Left: Logo */}
//         <div className="flex items-center gap-3 min-w-[180px]">
//           <Image
//             src="/images/logo/logo.svg"
//             alt="SkillGro Logo"
//             width={120}
//             height={48}
//             className="object-contain"
//           />
//           {/* <div className="flex flex-col leading-tight">
//             <span className="font-bold text-xl text-black">SkillGro</span>
//             <span className="text-xs text-gray-500 -mt-1 tracking-wide">
//               GROW YOUR SKILLS
//             </span>
//           </div> */}
//         </div>
//         {/* Center: Nav + Search (side by side) */}
//         <div className="flex flex-1 items-center justify-center gap-8">
//           {/* Nav */}
//           <nav className="flex gap-6">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative flex items-center group cursor-pointer"
//                 onMouseEnter={() =>
//                   item.dropdown && setDesktopDropdown(item.label)
//                 }
//                 onMouseLeave={() => item.dropdown && setDesktopDropdown(null)}
//               >
//                 <Link
//                   href={item.path || "#"}
//                   className={`text-sm font-medium ${
//                     item.active
//                       ? "text-purple-600"
//                       : "text-black hover:text-purple-600"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//                 {item.dropdown && (
//                   <FaChevronDown className="ml-1 text-xs text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
//                 )}
//                 {item.active && (
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 rounded" />
//                 )}
//                 {/* Dropdown (Desktop) */}
//                 {item.dropdown && (
//                   <div
//                     className={`absolute left-0 top-full min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md mt-2 overflow-hidden transition-all duration-200 z-30
//                       ${
//                         desktopDropdown === item.label
//                           ? "opacity-100 visible translate-y-0"
//                           : "opacity-0 invisible -translate-y-2"
//                       }
//                     `}
//                   >
//                     {item.dropdown.map((drop) => (
//                       <a
//                         key={drop}
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
//                       >
//                         {drop}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           {/* Search Bar */}
//           <div className="relative flex items-center w-[400px] bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm">
//             {/* Categories Dropdown Trigger */}
//             <div
//               className="flex items-center px-2 text-sm text-gray-500 cursor-pointer gap-1 border-r border-gray-200 relative select-none"
//               onClick={() => setCategoryDropdown((v) => !v)}
//               tabIndex={0}
//             >
//               <Image
//                 src={`/images/icons/category.svg`}
//                 height={16}
//                 width={16}
//                 alt="noimage"
//               />
//               <span>Categories</span>
//               <FaChevronDown
//                 className={`text-xs ml-1 transition-transform duration-200 ${
//                   categoryDropdown ? "rotate-180" : ""
//                 }`}
//               />
//               {/* Dropdown */}
//               <div
//                 className={`absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden transition-all duration-200 z-40
//                 ${
//                   categoryDropdown
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }
//               `}
//               >
//                 {categoryOptions.map((cat) => (
//                   <a
//                     key={cat}
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
//                     onClick={() => setCategoryDropdown(false)}
//                   >
//                     {cat}
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <input
//               className="flex-1 px-3 py-1 outline-none bg-transparent text-sm"
//               placeholder="Search For Course…"
//               type="text"
//             />
//             <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 ml-2">
//               <FaSearch className="text-purple-600 text-lg" />
//             </button>
//           </div>
//         </div>
//         {/* Right: Icons + Login */}
//         <div className="flex items-center gap-4 min-w-[180px] justify-end">
//           {/* Heart */}
//           <div className="relative">
//             <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
//               <FaHeart className="text-gray-700 text-lg" />
//             </div>
//             <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
//               0
//             </span>
//           </div>
//           {/* Cart */}
//           <div className="relative">
//             <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
//               <FaShoppingCart className="text-gray-700 text-lg" />
//             </div>
//             <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
//               0
//             </span>
//           </div>
//           {/* Login Button */}
//           <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
//             Log in
//           </button>
//         </div>
//       </div>
//       {/* Mobile Navbar */}
//       <div className="flex md:hidden items-center justify-between px-4 py-2 border-b border-gray-100 bg-white">
//         {/* Hamburger */}
//         <button
//           onClick={() => setMobileOpen(true)}
//           className="p-2 border rounded-full"
//         >
//           <FaBars className="text-xl text-gray-700" />
//         </button>
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/next.svg"
//             alt="SkillGro Logo"
//             width={36}
//             height={36}
//             className="object-contain"
//           />
//           <span className="font-bold text-lg text-black">SkillGro</span>
//         </div>
//         {/* Login Button */}
//         <button className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition text-sm">
//           Log in
//         </button>
//       </div>
//       {/* Mobile Drawer */}
//       {mobileOpen && (
//         <div className="fixed inset-0 md:hidden  bg-black bg-opacity-40 z-50 flex">
//           <div className="bg-white w-80 max-w-full h-full flex flex-col p-6 relative animate-slide-in-left">
//             {/* Top: Logo + Close */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/images/logo/logo.svg"
//                   alt="SkillGro Logo"
//                   width={120}
//                   height={48}
//                   className="object-contain"
//                 />
//                 {/* <span className="font-bold text-lg text-black">SkillGro</span> */}
//               </div>
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="p-2 border rounded-full"
//               >
//                 <FaTimes className="text-xl text-gray-700" />
//               </button>
//             </div>
//             {/* Search Bar (Mobile) */}
//             <div className="relative w-full mb-6">
//               <div className="flex w-full bg-white border border-gray-200 rounded-full px-2 py-2 shadow-sm items-center gap-2">
//                 {/* Categories Dropdown Trigger (Mobile) */}
//                 <div
//                   className="flex items-center px-2 text-sm text-gray-500 cursor-pointer gap-1 border-r border-gray-200 relative select-none min-w-[120px]"
//                   onClick={() => setMobileCategoryDropdown((v) => !v)}
//                   tabIndex={0}
//                 >
//                   <Image
//                     src={`/images/icons/category.svg`}
//                     height={16}
//                     width={16}
//                     alt="noimage"
//                   />
//                   <span>Categories</span>
//                   <FaChevronDown
//                     className={`text-xs ml-1 transition-transform duration-200 ${
//                       mobileCategoryDropdown ? "rotate-180" : ""
//                     }`}
//                   />
//                   {/* Dropdown */}
//                   <div
//                     className={`absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden transition-all duration-200 z-40
//                     ${
//                       mobileCategoryDropdown
//                         ? "opacity-100 visible translate-y-0"
//                         : "opacity-0 invisible -translate-y-2"
//                     }
//                   `}
//                   >
//                     {categoryOptions.map((cat) => (
//                       <a
//                         key={cat}
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
//                         onClick={() => setMobileCategoryDropdown(false)}
//                       >
//                         {cat}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//                 <input
//                   className="flex-1 px-4 py-2 outline-none bg-transparent text-sm min-w-0"
//                   placeholder="Search For Course…"
//                   type="text"
//                 />
//                 <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 ml-1 flex items-center justify-center">
//                   <FaSearch className="text-purple-600 text-lg" />
//                 </button>
//               </div>
//             </div>
//             {/* Nav Items */}
//             <nav className="flex flex-col gap-2 mb-8">
//               {navItems.map((item) => (
//                 <div key={item.label} className="flex flex-col">
//                   <button
//                     className={`flex items-center gap-2 text-lg font-medium cursor-pointer group w-full text-left px-2 py-2 rounded ${
//                       item.active
//                         ? "text-purple-600"
//                         : "text-black group-hover:text-purple-600"
//                     }`}
//                     onClick={() =>
//                       item.dropdown
//                         ? setMobileDropdown(
//                             mobileDropdown === item.label ? null : item.label
//                           )
//                         : setMobileOpen(false)
//                     }
//                   >
//                     <span>{item.label}</span>
//                     {item.dropdown && (
//                       <FaChevronDown
//                         className={`text-xs text-gray-400 group-hover:text-purple-600 transition-transform duration-200 ${
//                           mobileDropdown === item.label ? "rotate-180" : ""
//                         }`}
//                       />
//                     )}
//                   </button>
//                   {/* Dropdown (Mobile) */}
//                   {item.dropdown && (
//                     <div
//                       className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-md ml-6
//                         ${
//                           mobileDropdown === item.label
//                             ? "max-h-60 py-1 opacity-100"
//                             : "max-h-0 py-0 opacity-0"
//                         }
//                       `}
//                     >
//                       {item.dropdown.map((drop) => (
//                         <a
//                           key={drop}
//                           href="#"
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {drop}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//             {/* Bottom: Icons + Login */}
//             <div className="mt-auto flex flex-col gap-4">
//               <div className="flex gap-4 justify-center">
//                 {/* Heart */}
//                 <div className="relative">
//                   <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
//                     <FaHeart className="text-gray-700 text-lg" />
//                   </div>
//                   <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
//                     0
//                   </span>
//                 </div>
//                 {/* Cart */}
//                 <div className="relative">
//                   <div className="border rounded-full p-2 hover:bg-gray-50 cursor-pointer">
//                     <FaShoppingCart className="text-gray-700 text-lg" />
//                   </div>
//                   <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-white">
//                     0
//                   </span>
//                 </div>
//               </div>
//               <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
//                 Log in
//               </button>
//             </div>
//           </div>
//           {/* Click outside to close */}
//           <div className="flex-1" onClick={() => setMobileOpen(false)} />
//         </div>
//       )}
//       {/* Animation keyframes for mobile drawer */}
//       <style jsx>{`
//         @keyframes slide-in-left {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//       `}</style>
//     </header>
//   );
// }



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

export default function Header() {
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