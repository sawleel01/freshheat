"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Eye, X } from "lucide-react";
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
      price: "$26.99",
      description: "Cheesy pizza topped with grilled chicken pieces.",
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
          src="/lettucemushroom.png?"
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
                {/* Heart Icon */}
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-30">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>

                {/* Extra Icons on Hover */}
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
                    src={dish.image || "/placeholder.svg"}
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

      {/* Modal Overlay */}
      {/* Modal Overlay with blur background */}
      {modalOpen && selectedDish && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white bg-opacity-90 rounded-lg p-6 max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2
              id="modal-title"
              className="text-2xl font-bold mb-4 text-center"
            >
              {selectedDish.name}
            </h2>
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src={selectedDish.image}
                alt={selectedDish.name}
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 mb-2">{selectedDish.description}</p>
            <p className="text-red-500 font-bold text-lg">
              {selectedDish.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
