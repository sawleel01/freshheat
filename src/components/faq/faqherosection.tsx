"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FAQHeroSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const faqItems = [
    {
      question: "What Types Of Cuisines Do You Cover On This Blog?",
      answer:
        "We cover a wide variety of cuisines including Italian, Asian, Mexican, Mediterranean, American, and many more. Our goal is to explore diverse culinary experiences from around the world.",
    },
    {
      question: "How Do You Choose The Restaurants You Review?",
      answer:
        "We select restaurants based on recommendations from our community, new openings, unique concepts, and places that offer exceptional dining experiences. We aim to feature both hidden gems and popular establishments.",
    },
    {
      question: "Do You Get Paid To Review Restaurants?",
      answer:
        "Yes, Restaurants that have recently opened often generate buzz, and reviewing them can provide timely content.",
    },
    {
      question: "How Can I Find The Best Restaurants In My Area ?",
      answer:
        "You can use our search feature to filter restaurants by location, cuisine type, and rating. We also regularly update our 'Best Of' lists for different cities and neighborhoods.",
    },
    {
      question: "Can I Subscribe To Your Newsletter?",
      answer:
        "You can subscribe to our weekly newsletter to get the latest restaurant reviews, food trends, and exclusive dining recommendations delivered straight to your inbox.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-w-screen my-20">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/titleIcon.svg"
              alt="Hand holding covered food"
              width={16}
              height={16}
            />
            <span className="text-orange-500 font-bold">FAQ</span>
            <Image
              src="/titleIcon.svg"
              alt="Hand holding covered food"
              width={16}
              height={16}
            />
          </span>
          <div className="text-4xl font-extrabold">
            Frequently Asked Questions
          </div>
        </div>

        <div className="grid grid-cols-[2fr_3fr]">
          <div>
            <Image
              src="/multilayerburger.png"
              alt="A burger with multilayered patty"
              width={500}
              height={500}
            />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3
                    className={`text-2xl font-bold pr-4 transition-colors ${
                      openItem === index ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Minus className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <Plus className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </button>

                {openItem === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
