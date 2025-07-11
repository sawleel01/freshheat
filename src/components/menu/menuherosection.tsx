"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const tabs = [
  {
    title: "Fast Food",
    image: "/fflogo.png",

    items: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      image: "/food.png",
      name: `Food ${i + 1}`,
      description: "Variety of Fast Foods",
      price: `$${(5 + i).toFixed(2)}`,
    })),
  },
  {
    title: "Drink and Juice",
    image: "/drinkslogo.png",

    items: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      image: "/food.png",
      name: `drink ${i + 1}`,
      description: "Drinks and juice for refreshment",
      price: `$${(10 + i).toFixed(2)}`,
    })),
  },
  {
    title: "Chicken Pizza",
    image: "/pizzalogo.png",

    items: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      image: "/food.png",
      name: `pizza ${i + 1}`,
      description: "Cheesy pizza delicious",
      price: `$${(3 + i).toFixed(2)}`,
    })),
  },
  {
    title: "Fresh Pasta",
    image: "/pastalogo.png",

    items: Array.from({ length: 10 }, (_, i) => ({
      id: i,
      image: "/food.png",
      name: `Pasta ${i + 1}`,
      description: "Fresh Pasta to Eat",
      price: `$${(2 + i).toFixed(2)}`,
    })),
  },
];

export default function MenuHeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg px-10 py-20">
        {/* Section Title */}

        <div className="flex flex-col items-center justify-center mb-15">
          <span className="inline-flex items-center gap-2 mb-3">
            <Image
              src="/titleIcon.svg"
              alt="Hand holding covered food"
              width={16}
              height={16}
            />
            <span className="text-orange-500 font-bold uppercase">
              Food Menu
            </span>
            <Image
              src="/titleIcon.svg"
              alt="Hand holding covered food"
              width={16}
              height={16}
            />
          </span>
          <div className="text-5xl font-extrabold">Fresheat Foods Menu</div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-14 border-b pb-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-xl font-medium pb-2 ${
                activeTab === index
                  ? "border-red-500 text-red-600"
                  : "border-transparent  hover:text-red-500"
              }`}
            >
              <span key={index} className="flex items-center gap-2">
                <Image
                  src={tab.image}
                  alt={tab.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {tabs[activeTab].items.map((item) => (
            <div key={item.id} className="bg-white p-4 flex gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded object-cover"
              />
              <div>
                <h3 className="mt-3 text-2xl font-bold ">{item.name}</h3>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {item.description}
                </p>
              </div>
              <p className="text-xl font-bold mt-2 ml-auto ">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Marquee className="overflow-visible min-h-[14rem]">
          {["Burger", "Burger", "Burger", "Burger"].map((text, index) => (
            <span
              key={index}
              className="text-8xl font-semibold mr-12 mb-5 uppercase leading-tight whitespace-nowrap text-gray-400 border-b-3 border-transparent hover:text-red-500 hover:border-red-500 transition-colors duration-700 ease-in-out"
            >
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
