"use client";

import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function MyAccountHero() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center mb-20">
      <div className="w-10/12 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
        {/* Left side - Login form */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center text-center space-y-6 bg-stone-200 px-10 py-20 rounded-lg">
            <Image
              src="/fresheat.svg"
              alt="Fresh Eat Logo"
              width={200}
              height={200}
            />
            <h1 className="text-4xl font-extrabold">Welcome Back</h1>
            <span className="-mt-2 mb-8">Please enter your details</span>

            {/* Example form inputs (optional) */}
            <form className="w-full space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded bg-white"
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded bg-white pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-red-600 text-sm hover:underline font-bold"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="30 days" className="mt-1 border-black" />
                <label
                  htmlFor="remember for 30 days"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  Remember For 30 Days
                </label>
              </div>

              <button className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition">
                Login
              </button>

              <button className="w-full bg-white py-2 rounded-full hover:bg-orange-400 transition font-bold border border-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    src="/google.png"
                    alt="Google Logo"
                    width={24}
                    height={24}
                  />
                  <span className="text-black">Log in with Google</span>
                </div>
              </button>
              <div>
                <span>
                  Dont have a account?{" "}
                  <a href="" className="text-red-500 hover:underline">
                    {" "}
                    Sign Up
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/womanpizza.png"
            alt="Woman holding a slice of pizza ready to eat"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
