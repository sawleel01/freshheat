"use client";

import React, { useState, useEffect } from "react";
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

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] =
    React.useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Listen to scroll event
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    if (itemName !== "Home") {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  // Navbar JSX (shared menu structure)
  const NavbarContent = ({
    textColor = "text-white",
  }: {
    textColor?: string;
    bgColor?: string;
  }) => (
    <nav className={`flex items-center space-x-8 ${textColor}`}>
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={`flex items-center gap-2 hover:text-orange-500 transition-colors font-medium relative ${textColor}`}
          >
            {item.name}
            {item.name !== "Home" && (
              <Plus className={`h-4 w-4 ${textColor}`} />
            )}
          </Link>

          {activeDropdown === item.name &&
            dropdownItems[item.name as keyof typeof dropdownItems] && (
              <div
                className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownItems[item.name as keyof typeof dropdownItems]?.map(
                  (dropdownItem, dropdownIndex) => (
                    <div key={dropdownIndex} className="relative group/submenu">
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
                          <div className="absolute left-full top-0 ml-1 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                            {dropdownItem.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            )}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <header className="w-full flex flex-col">
        {/* Old Navbar: visible only at top */}
        <div
          className={`w-full flex flex-row transition-opacity duration-500 ease-in-out ${
            scrolled
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          {/* Logo Section */}
          <div
            className="bg-white flex items-center justify-center px-6 min-w-[280px]"
            style={{ minWidth: "280px" }}
          >
            <Link href="/" className="flex items-center">
              <img
                src="/fresheat.svg"
                alt="FreshEat Respondent Logo"
                className="h-16 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            {/* Top Bar with red bg */}
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

            {/* Navigation with dark bg */}
            <div className="bg-slate-900 text-white px-4">
              <div className="flex items-center justify-between h-20">
                <div className="hidden lg:flex items-center space-x-8">
                  {NavbarContent({ textColor: "text-white" })}
                </div>

                <div className="flex items-center gap-4 ml-auto mr-24 relative">
                  {/* Search Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-orange-500 hover:bg-slate-800"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>

                  {/* Hamburger Icon */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-orange-500 hover:bg-slate-800"
                    onClick={() => setIsPopupOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>

                  {/* Cart Button */}
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
                            {item.name !== "Home" && (
                              <Plus className="h-5 w-5" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Navbar */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-opacity duration-500 ease-in-out bg-white shadow-md ${
            scrolled
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ minHeight: "80px" }}
        >
          {/* Logo */}
          <div
            className="flex items-center justify-center px-10 min-w-[280px]"
            style={{ minWidth: "280px" }}
          >
            <Link href="/" className="flex items-center">
              <img
                src="/fresheat.svg"
                alt="FreshEat Respondent Logo"
                className="h-16 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Nav menu */}
          <div className="flex-1">
            <div className="px-4">
              <div className="flex items-center justify-between h-20">
                <div className="hidden lg:flex items-center space-x-8 text-gray-800">
                  {NavbarContent({ textColor: "text-gray-800" })}
                </div>

                <div className="flex items-center gap-4 ml-auto mr-24 relative">
                  {/* Search Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-800 hover:text-orange-500 hover:bg-gray-100"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>

                  {/* Hamburger Icon */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-800 hover:text-orange-500 hover:bg-gray-100"
                    onClick={() => setIsPopupOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>

                  {/* Cart Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-800 hover:text-orange-500 hover:bg-gray-100 relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      3
                    </span>
                    <span className="sr-only">Shopping cart</span>
                  </Button>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-gray-800 hover:text-orange-500 hover:bg-gray-100"
                      >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="bg-white text-gray-800 border-gray-300"
                    >
                      <div className="flex flex-col gap-6 mt-8">
                        {navigationItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center justify-between text-lg font-medium hover:text-orange-500 transition-colors"
                          >
                            {item.name}
                            {item.name !== "Home" && (
                              <Plus className="h-5 w-5" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Popup and backdrop */}
      {isPopupOpen && (
        <>
          {/* Backdrop blur and dark overlay */}
          <div
            onClick={() => setIsPopupOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] cursor-default"
          ></div>

          {/* Right side popup */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[1000] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                aria-label="Close menu"
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {/* Example content */}
              <p>This is your right side popup content.</p>
              {/* You can add menu links or other content here */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
