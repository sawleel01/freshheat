import { Utensils } from "lucide-react"; // 🍽️ icon
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
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
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
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
