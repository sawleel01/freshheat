import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="min-w-screen my-5 py-5">
      <div className="h-[500px]">
        <div className="grid grid-cols-2 gap-1">
          <div>
            <Image
              src="/friedchicken.png"
              alt="Juicy friend chicken"
              width={800}
              height={800}
            />
          </div>

          <div className="w-11/12">
            <form className="space-y-6 mr-20 rounded-lg shadow-lg  gap-4 px-10">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 border-gray-300 rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 border-gray-300 rounded-lg"
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  className="h-12 border-gray-300 rounded-lg"
                />
              </div>

              <Textarea
                placeholder="Write your message here..."
                className="min-h-[120px] border-gray-300 rounded-lg resize-none"
              />

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1" />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  Collaboratively formulate principle capital. Progressively
                  evolve user
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                SUBMIT NOW
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
