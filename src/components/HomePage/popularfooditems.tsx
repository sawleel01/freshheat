"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const foodItems = [
  {
    id: 1,
    name: "Chicken and Cucumber",
    description: "The Registration Fee",
    price: "$28.00",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    description: "The Registration Fee",
    price: "$100.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 3,
    name: "Chicken Leg Piece",
    description: "The Registration Fee",
    price: "$20.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 4,
    name: "Chicken Pizza",
    description: "The Registration Fee",
    price: "$26.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 5,
    name: "Egg Sandwich",
    description: "The Registration Fee",
    price: "$15.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 6,
    name: "Beef Burger",
    description: "The Registration Fee",
    price: "$32.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 7,
    name: "Fish Curry",
    description: "The Registration Fee",
    price: "$45.99",
    image: "/food.png?height=200&width=200",
  },
  {
    id: 8,
    name: "Vegetable Salad",
    description: "The Registration Fee",
    price: "$18.99 ",
    image: "/food.png?height=200&width=200",
  },
];

export default function PopularFoodItems() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % foodItems.length;
      items.push(foodItems[index]);
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="w-32 h-32 border-2 border-gray-300 rounded-full"></div>
        <div className="w-24 h-24 border-2 border-gray-300 rounded-full mt-4 ml-8"></div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="w-28 h-28 border-2 border-gray-300 rounded-full"></div>
        <div className="w-20 h-20 border-2 border-gray-300 rounded-full mt-6 mr-6"></div>
      </div>

      <div className="container mx-auto px-16 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🍽️</span>
            <span className="text-orange-500 font-bold text-lg">BEST FOOD</span>
            <span className="text-2xl">🍽️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Popular Food Items
          </h1>
        </div>

        {/* Food Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 ">
            {getVisibleItems().map((item, currentIndex) => (
              <motion.div
                key={`${item.id}-${currentIndex}`}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  duration: 3,
                }}
                className="flex flex-col items-center text-center shadow-lg rounded-4xl"
              >
                {/* Food Image with Animated Dotted Circle */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 w-48 h-48 rounded-full border-4 border-dashed border-red-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <div className="relative w-48 h-48 rounded-full overflow-hidden bg-white shadow-lg">
                    <Image
                      src={
                        item.image || "/placeholder.svg?height=200&width=200"
                      }
                      alt={item.name}
                      fill
                      className="object-cover p-4"
                    />
                  </div>
                </div>

                {/* Food Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {item.description}
                  </p>
                  <p className="text-2xl font-bold text-red-500">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-40 h-40 absolute bottom-24 left-0 z-50 float-vertical">
        <Image
          src="/bwburger.png"
          alt="black and white burger outline"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-40 h-40 absolute top-24 right-5 z-50 slide-animation">
        <Image
          src="/bwpizzaslice.png"
          alt="Black and white pizza slice"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
