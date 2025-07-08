"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LimitedTimeOffers() {
  return (
    <div className="bg-gray-100 pt-8 pb-60">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 max-w-7xl mx-auto justify-center">
          {/* Card 1 - Spicy Fried Chicken */}
          <div className="relative min-w-[480px] h-[280px] bg-gray-900 overflow-hidden flex-shrink-0">
            {/* Wooden texture background */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  "linear-gradient(to top, #8B4513, #A0522D, transparent)",
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="mt-5">
                <p className="text-red-500 font-bold text-sm mb-1">
                  ON THIS WEEK
                </p>
                <h2 className="text-white font-bold text-2xl mb-1 leading-tight">
                  SPICY FRIED CHICKEN
                </h2>
                <p className="text-orange-400 text-sm mb-4">
                  Limited Time Offer
                </p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 flex items-center gap-2 w-fit transition-colors mb-15">
                ORDER NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* New animated image above the food image */}
            <motion.div
              className="absolute top-6 right-16 w-24 h-24"
              animate={{ x: [0, 10, 0] }} // slide right 10px and back
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/50percent.png"
                alt="50% off"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Food Image */}
            <div className="absolute top-16 right-16 w-44 h-44">
              <Image
                src="/BCFcombo.png"
                alt="Spicy fried chicken with fries and drink"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 2 - Today Special Food */}
          <div className="relative min-w-[480px] h-[280px] bg-gray-900 overflow-hidden flex-shrink-0">
            {/* Wooden texture background */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  "linear-gradient(to top, #8B4513, #A0522D, transparent)",
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="mt-5">
                <p className="text-red-500 font-bold text-sm mb-1">
                  WELCOME TO FRESHEAT
                </p>
                <h2 className="text-white font-bold text-2xl mb-1 leading-tight">
                  TODAY SPECIAL FOOD
                </h2>
                <p className="text-orange-400 text-sm mb-4">
                  Limited Time Offer
                </p>
              </div>

              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 flex items-center gap-2 w-fit transition-colors mb-15">
                ORDER NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* New animated image above the food image */}
            <motion.div
              className="absolute top-6 right-16 w-24 h-24"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/50percent.png"
                alt="50% off"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Food Image */}
            <div className="absolute top-16 right-16 w-44 h-44">
              <Image
                src="/crispyburger.png"
                alt="Special burger with fresh ingredients"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 3 - Special Chicken Roll */}
          <div className="relative min-w-[480px] h-[280px] bg-gray-900 overflow-hidden flex-shrink-0">
            {/* Wooden texture background */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  "linear-gradient(to top, #8B4513, #A0522D, transparent)",
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="mt-5">
                <p className="text-red-500 font-bold text-sm mb-1">
                  ON THIS WEEK
                </p>
                <h2 className="text-white font-bold text-2xl mb-1 leading-tight">
                  SPECIAL CHICKEN ROLL
                </h2>
                <p className="text-orange-400 text-sm mb-4">
                  Limited Time Offer
                </p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 flex items-center gap-2 w-fit transition-colors mb-15">
                ORDER NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* New animated image above the food image */}
            <motion.div
              className="absolute top-6 right-12 w-24 h-24"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/50percent.png"
                alt="50% off"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Food Image */}
            <div className="absolute top-16 right-12 w-44 h-44">
              <Image
                src="/chickenroll.png"
                alt="Special chicken roll wraps"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
