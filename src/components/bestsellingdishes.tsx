"use client";

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Eye,
  X,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  HeartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BestSellingDishes() {
  const dishes = [
    {
      id: 1,
      name: "Chicken Fried Rice",
      price: "$100.99",
      description: "Delicious fried rice with chicken and fresh veggies.",
      image: "/food.png?height=200&width=200",
    },
    {
      id: 2,
      name: "Chinese Pasta",
      price: "$15.99",
      description: "Savory Chinese-style pasta with special sauce.",
      image: "/food.png?height=200&width=200",
    },
    {
      id: 3,
      name: "Chicken Pizza",
      price: "$69",
      description:
        "Aliquam hendrerit a augue iaculis. Etiam aliquam massa quis des mauris commodo venenatis.",
      image: "/food.png?height=200&width=200",
    },
    {
      id: 4,
      name: "Chicken Noodles",
      price: "$39.00",
      description: "Stir-fried noodles with chicken and fresh herbs.",
      image: "/food.png?height=200&width=200",
    },
    {
      id: 5,
      name: "Grilled Chicken",
      price: "$20.99",
      description: "Perfectly grilled chicken with smoky flavor.",
      image: "/food.png?height=200&width=200",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<(typeof dishes)[0] | null>(
    null
  );

  function openModal(dish: (typeof dishes)[0]) {
    setSelectedDish(dish);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedDish(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40">
        <Image
          src="/lettucemushroom.png"
          alt="Leaf decoration"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      <div className="absolute top-16 right-8 w-64 h-64 float-vertical">
        <Image
          src="/brokenchilli.png"
          alt="Chili pepper decoration"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">🍔</span>
            <span className="text-orange-500 font-semibold tracking-wider">
              POPULAR DISHES
            </span>
            <span className="text-orange-500 text-lg">🍔</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Best Selling Dishes
          </h1>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-black relative"
            >
              {/* Icon Stack */}
              <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-30">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="flex flex-col gap-2 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                    <ShoppingCart className="w-4 h-4 text-red-500" />
                  </div>
                  <button
                    onClick={() => openModal(dish)}
                    className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
                    aria-label={`View details of ${dish.name}`}
                  >
                    <Eye className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              {/* Dish Image */}
              <div className="mb-4 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Dish Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 whitespace-nowrap">
                  {dish.name}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-3">
                  The Registration Fee
                </p>
                <p className="text-red-500 font-bold text-lg">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-semibold">
            VIEW ALL ITEM
          </Button>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && selectedDish && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-5xl w-full p-6 md:p-10 flex flex-col md:flex-row gap-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image section */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#fef6f0] p-6 rounded-[30px]">
                <div className="relative w-64 h-64 rounded-full border-2 border-dashed border-red-300 flex items-center justify-center">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    width={200}
                    height={200}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {selectedDish.name}
              </h2>
              <div className="flex items-center gap-2 text-yellow-400">
                {"★".repeat(5)}
                <span className="text-sm text-gray-500">
                  (2 customer reviews)
                </span>
              </div>
              <hr />
              <p className="text-gray-600">{selectedDish.description}</p>

              <div className="flex items-center gap-3 mt-2">
                <span className="font-medium text-gray-700">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button className="px-3 py-1 text-lg hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-1 text-lg hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded">
                  Add to Cart
                </button>
                <button className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded">
                  ADD TO wishlist
                  <HeartIcon className="text-white ml-2" />
                </button>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Share With Friends
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-sky-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-pink-500 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
