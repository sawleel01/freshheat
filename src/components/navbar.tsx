"use client";

import {
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Search,
  ShoppingCart,
  Menu,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

export default function FresheatNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [hoveredHomeOption, setHoveredHomeOption] = useState<string | null>(
    null
  );

  const homeOptions = [
    {
      id: "home01",
      title: "Home 01",
      image: "/next.svg?height=200&width=300",
      options: ["View Demo", "Download", "Customize"],
    },
    {
      id: "home02",
      title: "Home 02",
      image: "/next.svg?height=200&width=300",
      options: ["View Demo", "Download", "Customize"],
    },
    {
      id: "home03",
      title: "Home 03",
      image: "/next.svg?height=200&width=300",
      options: ["View Demo", "Download", "Customize"],
    },
  ];

  const dropdownItems = {
    "About Us": ["Our Story", "Team", "Mission", "Values"],
    Shop: ["All Products", "Categories", "New Arrivals", "Best Sellers"],
    Pages: [
      "1",
      "2",
      "3",
      {
        name: "4",
        submenu: ["5", "6", "7", "8"],
      },
      {
        name: "1",
        submenu: ["2", "3", "4", "5"],
      },
    ],
    Blog: ["Recent Posts", "Categories", "Archives"],
    "Contact Us": ["Contact Form", "Location", "Phone", "Email"],
  };

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredHomeOption(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <header className="w-full flex">
      {/* Logo Section - Full Height White Column */}
      <div
        className="bg-white flex items-center justify-center px-6 min-w-[280px]"
        // style={{ minWidth: "280px" }}
      >
        <Link href="/" className="flex items-center">
          <img
            src="/images/fresheat-logo.png"
            alt="FreshEat Respondent Logo"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Right Section - Top Bar and Navigation */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-red-600 text-white px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>09:00 am - 06:00 pm</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm hidden sm:inline">Follow Us:</span>
              <div className="flex items-center gap-2 pr-20">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-slate-900 text-white px-4">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-medium relative"
                  >
                    {item.name}
                    <Plus className="h-4 w-4" />
                  </Link>

                  {/* Home Mega Menu */}
                  {activeDropdown === "Home" && item.name === "Home" && (
                    <div
                      className="absolute top-full left-0 mt-0 w-[900px] bg-white shadow-lg rounded-lg border border-gray-200 p-6 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {homeOptions.map((option) => (
                          <div
                            key={option.id}
                            className="relative group/home"
                            onMouseEnter={() => setHoveredHomeOption(option.id)}
                            onMouseLeave={() => setHoveredHomeOption(null)}
                          >
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={option.image || "/placeholder.svg"}
                                alt={option.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 text-center">
                                  {option.title}
                                </h3>
                              </div>
                            </div>

                            {/* Hover Options */}
                            {hoveredHomeOption === option.id && (
                              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex items-center justify-center">
                                <div className="text-center space-y-2">
                                  {option.options.map(
                                    (optionItem, optionIndex) => (
                                      <Link
                                        key={optionIndex}
                                        href="#"
                                        className="block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                                      >
                                        {optionItem}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown Menu for other items */}
                  {activeDropdown === item.name && item.name !== "Home" && (
                    <div
                      className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {dropdownItems[
                        item.name as keyof typeof dropdownItems
                      ]?.map((dropdownItem, dropdownIndex) => (
                        <div
                          key={dropdownIndex}
                          className="relative group/submenu"
                        >
                          {typeof dropdownItem === "string" ? (
                            <Link
                              href="#"
                              className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            >
                              {dropdownItem}
                            </Link>
                          ) : (
                            <>
                              <div className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                                {dropdownItem.name}
                                <Plus className="h-3 w-3" />
                              </div>
                              {/* Nested Submenu */}
                              <div
                                className="absolute left-full top-0 ml-1 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                              >
                                {dropdownItem.submenu.map(
                                  (subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href="#"
                                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                    >
                                      {subItem}
                                    </Link>
                                  )
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 ml-auto mr-20">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-orange-500 hover:bg-slate-800"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-orange-500 hover:bg-slate-800 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  3
                </span>
                <span className="sr-only">Shopping cart</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-white hover:text-orange-500 hover:bg-slate-800"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-slate-900 text-white border-slate-800"
                >
                  <div className="flex flex-col gap-6 mt-8">
                    {navigationItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center justify-between text-lg font-medium hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                        <Plus className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
