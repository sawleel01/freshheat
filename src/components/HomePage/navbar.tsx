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

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dropdownItems = {
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
  };

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "/about" },
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
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    if (dropdownItems[itemName as keyof typeof dropdownItems]) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 300);
    setDropdownTimeout(timeout);
  };

  const NavbarContent = ({
    textColor = "text-white",
  }: {
    textColor?: string;
  }) => (
    <nav className={`flex items-center space-x-8 ${textColor}`}>
      {navigationItems.map((item, index) => {
        const hasDropdown =
          !!dropdownItems[item.name as keyof typeof dropdownItems];

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-2 hover:text-orange-500 transition-colors font-medium ${textColor}`}
            >
              {item.name}
              {hasDropdown && <Plus className={`h-4 w-4 ${textColor}`} />}
            </Link>

            {activeDropdown === item.name && hasDropdown && (
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
        );
      })}
    </nav>
  );

  const InlinePopup = () => <div className="">Wt</div>;

  return (
    <header className="w-full flex flex-col">
      {/* Top Nav */}
      <div
        className={`w-full flex flex-row transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="bg-white flex items-center justify-center px-6 min-w-[280px]">
          <Link href="/">
            <img src="/fresheat.svg" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        <div className="flex-1">
          {/* Red Bar */}
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
                      aria-label={social.label}
                      className="hover:opacity-80"
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav */}
          <div className="bg-slate-900 text-white px-4">
            <div className="flex items-center justify-between h-20 relative">
              <div className="hidden lg:flex">
                {NavbarContent({ textColor: "text-white" })}
              </div>

              <div className="flex items-center gap-4 ml-auto mr-24 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-orange-500"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-orange-500"
                    onClick={() => setIsPopupOpen(!isPopupOpen)}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                  {isPopupOpen && <InlinePopup />}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-orange-500 relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    3
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky White Nav */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 bg-white shadow-md ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ minHeight: "80px" }}
      >
        <div className="flex items-center justify-between px-10 h-20 relative">
          <div className="min-w-[280px]">
            <Link href="/">
              <img src="/fresheat.svg" alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex">
            {NavbarContent({ textColor: "text-gray-800" })}
          </div>

          <div className="flex items-center gap-4 ml-auto mr-24 relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:text-orange-500"
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsPopupOpen(!isPopupOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              {isPopupOpen && <InlinePopup />}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:text-orange-500 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
