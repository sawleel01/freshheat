import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export default function Component() {
  return (
    <div className="max-w-10/12 mx-auto p-6 bg-stone-200 min-h-screen">
      <div className="bg-stone-200 rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h1>

        {/* Order Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-2 font-semibold text-gray-900">
                  Image
                </th>
                <th className="text-left py-4 px-2 font-semibold text-gray-900">
                  Product Name
                </th>
                <th className="text-left py-4 px-2 font-semibold text-gray-900">
                  Price
                </th>
                <th className="text-left py-4 px-2 font-semibold text-gray-900">
                  Quantity
                </th>
                <th className="text-left py-4 px-2 font-semibold text-gray-900">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-6 px-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Brick Oven Pepperoni Pizza"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="py-6 px-2">
                  <span className="text-gray-600">Brick Oven Pepperoni</span>
                </td>
                <td className="py-6 px-2">
                  <span className="font-medium">$281</span>
                </td>
                <td className="py-6 px-2">
                  <span className="font-medium">01</span>
                </td>
                <td className="py-6 px-2">
                  <span className="font-medium">$281</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold text-gray-900">Subtotal</span>
            <span className="font-medium">$281.05</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold text-gray-900">Shipping</span>
            <span className="text-gray-600 text-sm">
              Enter your address to view shipping options.
            </span>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-red-600 text-lg">$281.05</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <RadioGroup defaultValue="bank-transfer" className="space-y-4">
            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value="bank-transfer"
                id="bank-transfer"
                className="text-red-600 border-black"
              />
              <Label
                htmlFor="bank-transfer"
                className="text-gray-700 font-medium cursor-pointer"
              >
                Direct bank transfer
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value="cheque"
                id="cheque"
                className="text-red-600 border-black"
              />
              <Label
                htmlFor="cheque"
                className="text-gray-700 font-medium cursor-pointer"
              >
                Cheque Payment
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value="credit-card"
                id="credit-card"
                className="text-red-600 border-black"
              />
              <Label
                htmlFor="credit-card"
                className="text-gray-700 font-medium cursor-pointer"
              >
                Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem
                value="paypal"
                id="paypal"
                className="text-red-600 border-black "
              />
              <Label
                htmlFor="paypal"
                className="text-gray-700 font-medium cursor-pointer"
              >
                Paypal
              </Label>
            </div>
          </RadioGroup>
          <div className="pt-8">
            <Button
              type="submit"
              className="bg-red-500 hover:bg-orange-500 rounded-lg"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
