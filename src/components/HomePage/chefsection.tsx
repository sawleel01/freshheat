import Image from "next/image";
import { Share2 } from "lucide-react";

export default function ChefSection() {
  const chefs = [
    {
      name: "Ralph Edwards",
      role: "Chef Lead",
      image: "/chef.png?height=300&width=300",
    },
    {
      name: "Leslie Alexander",
      role: "Chef Assistant",
      image: "/chef.png?height=300&width=300",
    },
    {
      name: "Ronald Richards",
      role: "Chef Assistant",
      image: "/chef.png?height=300&width=300",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="w-40 h-40 absolute left-5 top-10 z-50 float-vertical">
        <Image
          src="/halftomato.png"
          alt="Half tomato and 2 leaves"
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🍔</span>
            </div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              OUR CHEFS
            </span>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🍔</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our Expert Chefs
          </h2>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center group">
              {/* Chef Image Container */}
              <div className="relative mb-6">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Decorative background shape */}
                  <div
                    className={`absolute inset-0 rounded-t-full ${
                      index === 0
                        ? "bg-gradient-to-br from-red-400 to-orange-400"
                        : index === 1
                        ? "bg-gradient-to-br from-orange-400 to-yellow-400"
                        : "bg-gradient-to-br from-red-500 to-pink-400"
                    } transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}
                  ></div>

                  {/* Chef Image */}
                  <div className="absolute inset-2 bg-gray-800 rounded-t-full overflow-hidden">
                    <Image
                      src={chef.image || "/placeholder.svg"}
                      alt={chef.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Share Icon */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Chef Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {chef.name}
                </h3>
                <p className="text-gray-600 font-medium">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=""></div>
    </section>
  );
}
