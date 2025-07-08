"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Marquee from "react-fast-marquee";

const comments = [
  {
    id: 1,
    name: "John Doe",
    Occupation: "Web Developer",
    comment: "Amazing food and great service!",
    image: "/food.png?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    Occupation: "Web Developer",
    comment: "The best dining experience I've ever had.",
    image: "/food.png?height=100&width=100",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    Occupation: "Web Developer",
    comment: "Loved the ambiance and the food was delicious!",
    image: "/food.png?height=100&width=100",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          {/* Left side - Woman's image */}
          <div className="relative lg:-mr-24 z-10">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/womanchef.png"
                alt="Professional woman working in kitchen"
                width={1200}
                height={400}
                className="w-full h-[400px] lg:h-[600px] object-cover"
                priority
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>

                  {/* Circular text around play button */}
                  <div className="absolute inset-0 w-20 h-20">
                    <svg
                      className="w-full h-full animate-spin"
                      style={{ animationDuration: "20s" }}
                    >
                      <defs>
                        <path
                          id="circle"
                          d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                        />
                      </defs>
                      <text className="text-xs fill-white font-medium">
                        <textPath href="#circle">
                          PLAY VIDEO PLAY VIDEO PLAY VIDEO
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="relative z-30 -ml-16">
            {/* Heading */}
            <div className="inline-flex items-center gap-2 text-orange-400 pl-32 font-bold mb-4">
              <span className="w-8 h-px bg-orange-400"></span>
              TESTIMONIALS
              <span className="w-8 h-px bg-orange-400"></span>
            </div>
            <h2 className="text-5xl lg:text-5xl font-extrabold text-white mb-6">
              What Our Clients Say
            </h2>

            {/* Marquee */}
            <div className="relative w-full max-w-3xl">
              <Marquee pauseOnHover={true} speed={40} gradient={false}>
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white backdrop-blur-sm rounded-2xl p-6 shadow-lg mx-6 flex-shrink-0 h-80 w-120"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={comment.image}
                        alt={comment.name}
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-black">
                          {comment.name}
                        </h3>
                        <p className="text-sm text-gray-800">
                          {comment.Occupation}
                        </p>

                        {/* ⭐ Star Ratings */}
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={i < comment.rating ? "#FACC15" : "none"} // yellow-400
                              viewBox="0 0 24 24"
                              stroke="#FACC15"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.087 6.43h6.763c.969 0 1.371 1.24.588 1.81l-5.479 3.985 2.087 6.43c.3.921-.755 1.688-1.539 1.117L12 18.347l-5.459 3.352c-.783.57-1.838-.196-1.539-1.117l2.087-6.43-5.479-3.985c-.783-.57-.38-1.81.588-1.81h6.763l2.087-6.43z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-3xl">{comment.comment}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Text */}
      <div className="w-full">
        <Marquee className="overflow-visible min-h-[14rem]">
          {["Burger", "Burger", "Burger", "Burger"].map((text, idx) => (
            <span
              key={idx}
              className="text-9xl font-bold mr-12 mb-5 uppercase leading-tight whitespace-nowrap text-gray-600 border-b-3 border-transparent hover:text-red-500 hover:border-red-500 transition-colors duration-700 ease-in-out"
            >
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
