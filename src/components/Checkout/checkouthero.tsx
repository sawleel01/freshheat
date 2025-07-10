"use client";

import { Info } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

export default function CheckoutHero() {
  const [selectedOption, setSelectedOption] = useState("United Kingdom (UK)");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full my-10">
      <div className="w-10/12 mx-auto ">
        <div
          role="alert"
          className="bg-red-600 text-white px-4 py-3 flex items-center gap-2"
        >
          <Info className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">
            Returning customer?{" "}
            <Link
              href="/login"
              className="hover:underline hover:text-black font-medium"
            >
              Click here to login
            </Link>
          </span>
        </div>

        <div className="bg-white my-5 pb-10">
          <div className="w-11/12 px-8">
            <div className="pt-8">
              <div className="text-gray-500">Username or Email*</div>
              <Input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-lg bg-gray-100"
              />
            </div>
            <div className="pt-8">
              <div className="text-gray-500">Password*</div>
              <Input
                type="password"
                placeholder="Password"
                className="h-12 rounded-lg bg-gray-100"
              />
            </div>
            <div className="pt-8">
              <span>
                <Checkbox id="remember me" className="border-black mt-1" />
                <span className="text-gray-500"> Remember Me</span>
              </span>
            </div>
            <div className="pt-8">
              <Button
                type="submit"
                className="bg-red-500 hover:bg-orange-500 rounded-lg"
              >
                Login
              </Button>
            </div>
            <div className="mt-5">
              <Link href="#">Forgot Your Password?</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto ">
        <div
          role="alert"
          className="bg-red-600 text-white px-4 py-3 flex items-center gap-2"
        >
          <Info className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">
            Have a coupon?{" "}
            <Link
              href="/login"
              className="hover:underline hover:text-black font-medium"
            >
              Click here to enter your code
            </Link>
          </span>
        </div>

        <div className="bg-white my-5 pb-10">
          <div className="w-11/12 px-8">
            <div className="pt-8">
              <div className="text-gray-500">Coupon code*</div>
              <Input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-lg bg-gray-100"
              />
            </div>

            <div className="pt-8">
              <Button
                type="submit"
                className="bg-red-500 hover:bg-orange-500 rounded-lg"
              >
                Apply Coupon
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="text-gray-600 text-3xl">Billing Details</div>

        <div className="grid grid-cols-2 mx-auto gap-10">
          <div className="pt-8">
            <select
              id="selectOption"
              aria-label="Select an Option"
              value={selectedOption}
              onChange={handleChange}
              className="h-12 w-full rounded-lg bg-gray-100 px-4 text-gray-700 focus:outline-none"
            >
              <option value="United Kingdom">United Kingdom (UK)</option>
              <option value="United States">United States (US)</option>
              <option value="United States">Equatorial Guinea (EQG)</option>
              <option value="Australia">Australia (AUS)</option>
              <option value="Germany">Germnay (DEU)</option>
            </select>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <Input
                type="text"
                placeholder="First Name"
                className="h-12 rounded-lg bg-gray-100"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="h-12 rounded-lg bg-gray-100"
              />
            </div>

            <Input
              type="text"
              placeholder="Your Company Name"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <Input
              type="text"
              placeholder="Street Address"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <Input
              type="text"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <Input
              type="text"
              placeholder="Town / City"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <div className="grid grid-cols-2 gap-5">
              <Input
                type="text"
                placeholder="Country"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Input
                type="text"
                placeholder="Last Name"
                className="h-12 rounded-lg bg-white mt-5"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <Input
              type="text"
              placeholder="Phone Number"
              className="h-12 rounded-lg bg-white mt-5"
            />

            <div className="mt-5">
              <span>
                <Checkbox
                  id="create and account"
                  className="border-black mt-1"
                />
                <span className="text-gray-500"> Create an account?</span>
              </span>
            </div>
          </div>

          <div className="pt-8">
            <div className="mt-5">
              <span>
                <Checkbox
                  id="different shipping address"
                  className="border-black mt-1"
                />
                <span className="text-gray-500">
                  {" "}
                  Ship to different address
                </span>
              </span>
            </div>

            <div className="pt-5">
              <select
                id="selectOption"
                aria-label="Select an Option"
                value={selectedOption}
                onChange={handleChange}
                className="h-12 w-full rounded-lg bg-gray-100 px-4 text-gray-700 focus:outline-none"
              >
                <option value="United Kingdom">United Kingdom (UK)</option>
                <option value="United States">United States (US)</option>
                <option value="United States">Equatorial Guinea (EQG)</option>
                <option value="Australia">Australia (AUS)</option>
                <option value="Germany">Germnay (DEU)</option>
              </select>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="h-12 rounded-lg bg-gray-100"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 rounded-lg bg-gray-100"
                />
              </div>

              <Input
                type="text"
                placeholder="Your Company Name"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Input
                type="text"
                placeholder="Street Address"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Input
                type="text"
                placeholder="Apartment, Suite, Unit, etc. (optional)"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Input
                type="text"
                placeholder="Town / City"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <div className="grid grid-cols-2 gap-5">
                <Input
                  type="text"
                  placeholder="Country"
                  className="h-12 rounded-lg bg-white mt-5"
                />

                <Input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 rounded-lg bg-white mt-5"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Input
                type="text"
                placeholder="Phone Number"
                className="h-12 rounded-lg bg-white mt-5"
              />

              <Textarea
                id="message"
                placeholder="Note about your orders, (special notes for your delivery)"
                className="w-full h-32 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 resize-none focus:outline-none mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
