"use client";
import Link from "next/link";

const categories = [
  { name: "AESTHETIC CLOTHING", count: 23 },
  { name: "BOTTOMS & PANTS", count: 15 },
  { name: "OUTERWEAR", count: 8 },
  { name: "FOOTWEAR", count: 12 },
  { name: "JEWELRY & DETAILS", count: 31 },
  { name: "AESTHETIC ESSENTIALS", count: 19 },
  { name: "ACCESSORIES", count: 27 },
  { name: "LIFESTYLE", count: 14 },
];

export default function HeroSection() {
  return (
    <main className="bg-[#f9f6f2]">
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-medium text-gray-900 leading-tight">
            Aesthetic{" "}
            <span className="italic text-[#c9a96e] font-normal">
              Collections
            </span>
            <br />
            with Newest Style
          </h1>
          <p className="text-gray-400 text-sm mt-3">
            Trusted by the most innovative companies worldwide
          </p>
        </div>

        {/* 3 Images + Explore button */}
        <div className="relative flex gap-3 items-stretch h-[420px]">
          {/* Left image */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-[#e8e0d8]">
            <img
              src="c.jpg"
              alt="model 1"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Center image — taller with overlay text */}
          <div className="flex-[1.3] rounded-2xl overflow-hidden bg-[#ede8e3] relative">
            <img
              src="b.jpg"
              alt="model 2"
              className="w-full h-full object-cover object-top"
            />
            {/* Center card overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
              <p className="text-xs text-gray-500 mb-2">
                Discover a Wide Range of Fashion Options, Including Clothing,
                Shoes, Accessories, and More
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-1 text-xs font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-700 hover:bg-gray-50"
              >
                Shop Now <span>›</span>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-[#ddd6ce]">
            <img
              src="wo.jpg"
              alt="model 3"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Explore button */}
          <Link
            href="/explore"
            className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#8b7355] text-white flex flex-col items-center justify-center text-xs font-medium hover:bg-[#7a6448] transition-colors"
          >
            <span className="text-lg leading-none">↗</span>
            <span>Explore</span>
          </Link>
        </div>
      </section>

      {/* ── Top Categories ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-start gap-12">
          {/* Left heading */}
          <div className="min-w-[180px]">
            <h2 className="text-3xl font-medium text-gray-900">
              Top Categories
            </h2>
            <p className="text-2xl italic text-[#c9a96e] font-normal mt-1">
              Collections
            </p>
          </div>

          {/* Categories grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide border-b border-gray-200 pb-3"
                >
                  {cat.name}
                  <span className="bg-[#e8c27a] text-[#4a3200] text-[10px] font-medium rounded-full px-1.5 py-0.5">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>

            {/* See More */}
            <div className="mt-6 flex justify-end">
              <Link
                href="/categories"
                className="inline-flex items-center gap-1 text-xs font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-600 hover:bg-gray-50"
              >
                See More <span>›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}