"use client";

import { Utensils } from "lucide-react"; // 🍽️ icon
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="bg-white py-16 relative overflow-hidden min-h-[500px]"
      style={{
        backgroundImage: `url('/left.png'), url('/right.png')`,
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto 100%, auto 100%",
      }}
    >
      {/* Rotating image on top of left.png */}
      <motion.div
        className="absolute left-12 top-1/2 transform -translate-y-1/2 z-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <Image
          src="/noodelsrotate.png"
          alt="Rotating Left"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Rotating image on top of right.png */}
      <motion.div
        className="absolute right-12 top-1/2 transform -translate-y-1/2 z-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <Image
          src="/prawnrotate.png"
          alt="Rotating Right"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Top icon + label */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Utensils className="text-orange-500 w-5 h-5" />
          <span className="uppercase font-semibold text-orange-500 text-sm tracking-wide">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Variety Of Flavours From
          <br />
          American Cuisine
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 px-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at layout the point
          established fact that
        </p>

        {/* Button */}
        <Link
          href="#"
          className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
        >
          ORDER NOW <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
