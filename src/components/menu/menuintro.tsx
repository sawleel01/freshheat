import Link from "next/link";

export default function MenuIntro() {
  return (
    <div className="relative bg-[url('/breadcumb.jpg')] bg-no-repeat bg-top bg-cover h-[500px] w-screen">
      {/* Optional: Add a dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase">
          Menu
        </h1>

        <span className="text-white text-sm md:text-base">
          <Link href="/" className="hover:underline hover:text-red-500">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/menu" className="hover:underline hover:text-red-500">
            Menu
          </Link>
        </span>
      </div>
    </div>
  );
}
