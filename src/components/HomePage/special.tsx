import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Special() {
  return (
    <div
      className="h-[600px] bg-cover bg-center bg-no-repeat mb-20 relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="grid grid-cols-2 w-full h-full">
        {/* Left Text Column */}
        <div className="flex flex-col mx-auto my-auto text-[16px]">
          <div className="text-red-700 font-extrabold uppercase mb-3 text-xl">
            Welcome Fresheat
          </div>
          <div className="text-white uppercase font-bold text-[48px] mb-5">
            today Special Food
          </div>
          <div className="text-orange-500 uppercase font-bold text-xl mb-5">
            Limited Time Offer
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 flex items-center gap-2 w-fit transition-colors mb-15">
            ORDER NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-160 h-160 relative slide-animation">
          <Image
            src="/45pizzaoff.png"
            alt="45% off on pizza"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Floating Tomato */}
      <div className="w-40 h-40 absolute bottom-5 right-1 z-50 float-vertical">
        <Image src="/tomato.png" alt="Tomato" fill className="object-contain" />
      </div>
    </div>
  );
}
