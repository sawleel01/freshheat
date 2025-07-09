"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import NewsCard from "./newscard";

const newsItems = [
  {
    id: 1,
    title: "Fast Food Frenzy A Taste Of Convenience",
    image: "/thumbnail.jpg",
    dateDay: "15",
    dateMonth: "Dec",
    category: "Noodles",
    postedBy: "Admin",
  },
  {
    id: 2,
    title: "Fresh Recipes You Must Try",
    image: "/thumbnail.jpg",
    dateDay: "10",
    dateMonth: "Nov",
    category: "Health",
    postedBy: "Admin",
  },
  {
    id: 3,
    title: "Meet Our Amazing Team Members",
    image: "/thumbnail.jpg",
    dateDay: "22",
    dateMonth: "Oct",
    postedBy: "Admin",
    category: "People",
  },
  {
    id: 4,
    title: "Sustainability And Eco Packaging",
    image: "/thumbnail.jpg",
    dateDay: "01",
    dateMonth: "Sep",
    postedBy: "Admin",
    category: "Environment",
  },
  {
    id: 5,
    title: "We're Opening New Branches Soon!",
    image: "/thumbnail.jpg",
    dateDay: "03",
    dateMonth: "Aug",
    postedBy: "Customer",
    category: "Business",
  },
];

const CARD_WIDTH = 320;
const GAP = 16;

export default function NewsSlider() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const totalCards = newsItems.length;

  useEffect(() => {
    controls.start({
      x: -(index * (CARD_WIDTH + GAP)),
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [index, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === totalCards) {
          // Reset instantly to 0 (start) without animation
          controls.set({ x: 0 });
          return 1; // start sliding from the 2nd card immediately after reset
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [controls, totalCards]);

  return (
    <div className="min-h-screen py-10">
      <div className="pt-16 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src="/titleicon.svg"
            alt="small icon of a hand holding a covered food"
            className=""
          />
          <span className="text-orange-500 uppercase text-[19px] font-bold">
            latest news
          </span>
          <img
            src="/titleicon.svg"
            alt="small icon of a hand holding a covered food"
            className=""
          />
        </div>
        <div className="text-5xl font-extrabold">Our Latest Food News</div>
      </div>

      <div className="overflow-hidden w-full max-w-[1024px] mx-auto py-10 px-4">
        <div className="relative h-[600px]">
          <motion.div
            className="flex gap-4 absolute top-0 left-0"
            animate={controls}
            style={{ width: `${totalCards * 2 * (CARD_WIDTH + GAP)}px` }}
          >
            {/* render original items */}
            {newsItems.map((item) => (
              <NewsCard key={"orig-" + item.id} item={item} />
            ))}
            {/* render duplicated items */}
            {newsItems.map((item) => (
              <NewsCard key={"dup-" + item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
