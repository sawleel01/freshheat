"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Welcome to Fresheat",
    name: "Chicago deep Burger king",
    image: "/burger.png",
  },
  {
    id: 2,
    title: "Welcome to Fresheat",
    name: "Chicago deep Pizza king",
    image: "/pizza.png",
  },
  {
    id: 3,
    title: "Welcome to Fresheat",
    name: "Spicy Fried Chicken",
    image: "/spicychicken.png",
  },
];

export default function Welcome() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Reset tilt on slide change
  useEffect(() => {
    setTilt({ x: 0, y: 0 });
  }, [current]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/wall.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur" />

      {/* Slide content */}
      <div className="relative z-10 w-full h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 w-full h-full"
          >
            {/* Text Column */}
            <div className="flex flex-col justify-center h-full px-2">
              <span className="text-orange-500 mb-2 block text-xl font-extrabold">
                {slides[current].title}
              </span>
              <h1 className="text-[96px] font-bold mb-6 text-white uppercase leading-tight max-w-5xl break-words">
                {slides[current].name}
              </h1>
              <button className="items-center w-56 bg-red-500 text-white text-2xl hover:bg-orange-500 py-3">
                Order Now
                <ArrowRight className="inline ml-2 bg-white text-red-500 p-1" />
              </button>
            </div>

            {/* Image Column with Tilt Effect */}
            <div
              ref={imageRef}
              onMouseMove={(e) => {
                const bounds = imageRef.current?.getBoundingClientRect();
                if (!bounds) return;

                const x = e.clientX - bounds.left;
                const y = e.clientY - bounds.top;

                const centerX = bounds.width / 2;
                const centerY = bounds.height / 2;

                const rotateX = ((y - centerY) / centerY) * 10;
                const rotateY = ((x - centerX) / centerX) * 10;

                setTilt({ x: -rotateX, y: rotateY });
              }}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              className="w-full h-full pt-12"
            >
              <motion.img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-contain rounded-xl shadow-lg"
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  transition: { type: "spring", stiffness: 120, damping: 10 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
