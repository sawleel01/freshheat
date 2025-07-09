"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 176,
    hours: 3,
    minutes: 38,
    seconds: 51,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };
  return (
    <div
      className="h-[600px] bg-cover bg-center bg-no-repeat mb-20 relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="grid grid-cols-2">
        <div className=" 2-128 h-128 m-auto flex items-center pt-44 pl-20">
          <Image
            src="/Burgerchilli.png"
            alt=" Burger with chillies close up shot"
            width={600}
            height={600}
          />
        </div>
        <div className="flex items-center justify-center pt-5">
          <div className="bg-gray-800 text-white p-8 rounded-lg max-w-2xl mx-auto">
            {/* Special Offer Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-orange-500 text-lg">🍔</span>
                <span className="text-orange-500 font-bold text-lg tracking-wider">
                  SPECIAL OFFER
                </span>
                <span className="text-orange-500 text-lg">🍔</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Get 30% Discount Every Item
              </h1>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[80px]">
                <div className="text-3xl font-bold">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-sm font-medium mt-1">DAYS</div>
              </div>

              <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[80px]">
                <div className="text-3xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-sm font-medium mt-1">HRS</div>
              </div>

              <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[80px]">
                <div className="text-3xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-sm font-medium mt-1">MINS</div>
              </div>

              <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[80px]">
                <div className="text-3xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-sm font-medium mt-1">SECS</div>
              </div>
            </div>

            {/* Order Now Button */}
            <div className="text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-colors">
                ORDER NOW
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
