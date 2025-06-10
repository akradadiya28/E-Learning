"use client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];
import { PREFIX } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { DropdownMenuCheckboxes } from "../re-shadcn/CustomDropdown";
function Header() {
  const navlinks = [
    {
      title: "Home",
      isChildren: true,
      children: [
        { name: "Home1", href: "/home1.in" },
        { name: "Home2", href: "/home1.in" },
        { name: "Home3", href: "/home1.in" },
        { name: "Home4", href: "/home1.in" },
      ],
    },
    {
      title: "Course",
      isChildren: true,
      children: [
        { name: "Python Course", href: "/home1.in" },
        { name: "Html Course", href: "/home1.in" },
      ],
    },
    {
      title: "Pages",
      isChildren: true,
      children: [
        { name: "Page1", href: "/home1.in" },
        { name: "Page2", href: "/home1.in" },
        { name: "Page3", href: "/home1.in" },
        { name: "Page4", href: "/home1.in" },
      ],
    },
    {
      title: "Shop",
      isChildren: true,
      children: [
        { name: "Shope 1", href: "/home1.in" },
        { name: "Shope 2", href: "/home1.in" },
        { name: "Shope 3", href: "/home1.in" },
        { name: "Shope 4", href: "/home1.in" },
      ],
    },
    {
      title: "Blog",
      isChildren: true,
      children: [
        { name: "Blog 1", href: "/home1.in" },
        { name: "Blog 2", href: "/home1.in" },
        { name: "Blog 3", href: "/home1.in" },
        { name: "Blog 4", href: "/home1.in" },
      ],
    },
  ];

  return (
    <div>
      <div>
        <div
          title="main"
          className="flex items-center justify-between gap-8  h-20"
        >
          <div className="flex items-center gap-8">
            <div title="logo">
              <Image
                alt="logo image"
                height={120}
                width={120}
                src={PREFIX + `/images/logo/logo.svg`}
              />
            </div>
            <div title="links">
              <div>
                <ul className="flex items-center text-sm13 gap-3">
                  {navlinks.map((link, index) => {
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <span>{link.title}</span>
                        <span>
                          {link.isChildren && <FaAngleDown size={14} />}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div title="search-cart-login">
            <div title="search-input">
              <div className="flex border px-3 py-1 rounded-4xl">
                <div className=" border-r-[1px]  border-black">
                  <DropdownMenuCheckboxes text="Categories" />
                </div>
                <div className="flex items-center pl-2">
                  <input
                    type="text"
                    className="text-sm12 outline-none"
                    placeholder="Search For Course..."
                  />
                  <FiSearch
                    className="bg-violet-500 h-8 w-8 p-1 rounded-full"
                    color="white"
                    size={22}
                  />
                </div>
              </div>
            </div>
            <div title="cart-whishlist"></div>
            <div title="Login-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
