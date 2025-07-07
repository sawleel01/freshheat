import Image from "next/image";
import { Play } from "lucide-react";
import Marquee from "react-fast-marquee";

const comments = [
  {
    id: 1,
    name: "John Doe",
    Occupation: "Web Developer",
    comment: "Amazing food and great service!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jane Smith",
    Occupation: "Web Developer",
    comment: "The best dining experience I've ever had.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    Occupation: "Web Developer",
    name: "Alice Johnson",
    comment: "Loved the ambiance and the food was delicious!",
    image: "/placeholder.svg?height=100&width=100",
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

          {/* Right side - Testimonials overlapping left image */}
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
                      </div>
                    </div>
                    <p className="text-gray-300 text-3xl">{comment.comment}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Marquee className="overflow-visible min-h-[14rem]">
          {["Burger", "Burger", "Burger", "Burger"].map((text, idx) => (
            <span
              key={idx}
              className="
              text-9xl
              font-bold
              mr-12
              mb-5
              transition-colors duration-700 ease-in-out
              uppercase
              leading-tight
              whitespace-nowrap
              text-gray-600
              border-b-3 border-transparent
              hover:text-red-500
              hover:border-red-500
            "
            >
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
