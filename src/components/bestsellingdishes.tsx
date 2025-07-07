import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BestSellingDishes() {
  const dishes = [
    {
      id: 1,
      name: "Chicken Fried Rice",
      price: "$100.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Chinese Pasta",
      price: "$15.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Chicken Pizza",
      price: "$26.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Chicken Noodles",
      price: "$39.00",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Grilled Chicken",
      price: "$20.99",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 opacity-30">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Leaf decoration"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-20 left-8 w-20 h-20 opacity-40">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Leaf decoration"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="absolute top-8 right-8 w-32 h-32 opacity-60">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="Chili pepper decoration"
          width={128}
          height={128}
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
              {/* Heart Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
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
    </div>
  );
}
