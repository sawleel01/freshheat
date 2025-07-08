"use client";

import {
  ArrowRight,
  ArrowUp,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "./ui/input";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen relative bg-slate-900 pt-32">
      {/* COntact Bar */}
      <div className="bg-orange-500 px-6 py-4 w-10/12 rounded-2xl mx-auto">
        <div className="container mx-auto py-8">
          <div className="flex flex-cols gap-16 text-white justify-around">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-3">
                <MapPin className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-sm">Address</div>
                <div className="font-semibold text-xl">
                  Bouddha, Kathmandu, Nepal
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-3">
                <Mail className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-sm">Send Email</div>
                <div className="font-semibold text-xl">
                  whoever@whatever.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-3">
                <PhoneCall className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="font-semibold text-sm">Call Emergency</div>
                <div className="font-semibold text-xl">+88 123456789047</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="w-10/12 mx-auto my-20">
        <div className="grid grid-cols-4 justify-between">
          <div>
            <div>
              <Image
                src="/logoWhite.svg"
                alt="Logo of the Company"
                width={200}
                height={100}
              />
            </div>
            <p className="text-white text-sm mt-4 pr-12">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="flex items-center gap-4 mt-4 p-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 border-2 text-white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 border-2 text-white" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 border-2 text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6 border-2 text-white" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white text-[24px]">
              Quick Links
            </h3>
            <div className="w-12 h-0.5 bg-orange-500"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Our Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Our Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Menu */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white text-[24px]">
              Our Menu
            </h3>
            <div className="w-12 h-0.5 bg-orange-500"></div>
            <ul className="space-y-3 mb-20px">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Burger King
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Pizza King
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Fresh Food
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Vegetable
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" /> Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white text-[24px]">
              Contact Us
            </h3>
            <div className="w-12 h-0.5 bg-orange-500"></div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-400">Monday – Friday: </span>
                <span className="text-orange-500 font-semibold">8am – 4pm</span>
              </div>
              <div>
                <span className="text-gray-400">Saturday: </span>
                <span className="text-orange-500 font-semibold">
                  8am – 12am
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Your email address"
                  className="bg-white text-gray-900 border-0 flex-1"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" className="border-gray-400" />
                <label htmlFor="privacy" className="text-sm text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-orange-500 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-sm">
            © All Copyright 2025 by FreshEat
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              Terms & Condition
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </div>
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-orange-500 hover:bg-orange-600 shadow-lg z-60"
        size="sm"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 font-extrabold" />
      </Button>
    </div>
  );
}
