"use client";
import Link from "next/link";

const categories = [
  { name: "Aesthetic Clothing", count: 23, slug: "aesthetic-clothing", image: "/categories/aesthetic.jpg" },
  { name: "Bottoms & Pants", count: 15, slug: "bottoms-pants", image: "/categories/bottpant.jpg" },
  { name: "Outerwear", count: 8, slug: "outerwear", image: "/categories/outer.jpg" },
  { name: "Footwear", count: 12, slug: "footwear", image: "/categories/foowera.jpg" },
  { name: "Jewelry & Details", count: 31, slug: "jewelry-details", image: "/categories/jew.jpg" },
  { name: "Aesthetic Essentials", count: 19, slug: "aesthetic-essentials", image: "/categories/aess.jpg" },
  { name: "Accessories", count: 27, slug: "accessories", image: "/categories/acces.jpg" },
  { name: "Lifestyle", count: 14, slug: "lifestyle", image: "/categories/life.jpg" },
  { name: "Tops & Blouses", count: 18, slug: "tops-blouses", image: "/categories/tops.jpg" },
  { name: "Bags & Totes", count: 16, slug: "bags-totes", image: "/categories/bagss.jpg" },
  { name: "Dresses", count: 22, slug: "dresses", image: "/categories/dressess.jpg" },
  { name: "Sunglasses", count: 9, slug: "sunglasses", image: "/categories/sungl.jpg" },
  { name: "Activewear", count: 10, slug: "activewear", image: "/categories/act.jpg" },
  { name: "Hats & Caps", count: 11, slug: "hats-caps", image: "/categories/hcpe.jpg" },
];

export default function HeroSection() {
  return (
    <main className="bg-[#f9f6f2]">

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 sm:pb-8">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
            Aesthetic{" "}
            <span className="italic text-[#c9a96e] font-normal">Collections</span>
            <br />
            with Newest Style
          </h1>
          <p className="text-gray-400 text-sm mt-3">
            Trusted by the most innovative companies worldwide
          </p>
        </div>

        {/* Images */}
        <div className="relative flex gap-2 sm:gap-3 items-stretch h-[260px] sm:h-[340px] lg:h-[420px]">

          {/* Left image */}
          <div className="hidden sm:block flex-1 rounded-2xl overflow-hidden bg-[#e8e0d8]">
            <img src="/dress1.jpg" alt="model 1" className="w-full h-full object-cover object-top" />
          </div>

          {/* Center image */}
          <div className="flex-1 sm:flex-[1.3] rounded-2xl overflow-hidden bg-[#ede8e3] relative">
            <img src="/dress3.jpg" alt="model 2" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-[80%] bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-center">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-2">
                Discover a Wide Range of Fashion Options, Including Clothing, Shoes, Accessories, and More
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
            <img src="/dress4.jpg" alt="model 3" className="w-full h-full object-cover object-top" />
          </div>

          {/* Explore button */}
          <Link
            href="/categories/aesthetic-clothing"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#8b7355] text-white flex flex-col items-center justify-center text-[10px] sm:text-xs font-medium hover:bg-[#7a6448] transition-colors"
          >
            <span className="text-base sm:text-lg leading-none">↗</span>
            <span>Explore</span>
          </Link>
        </div>
      </section>

      {/* ── Top Categories ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">

          {/* Left heading */}
          <div className="mb-5 sm:mb-0 sm:min-w-[180px]">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">Top Categories</h2>
            <p className="text-xl sm:text-2xl italic text-[#c9a96e] font-normal mt-1">Collections</p>
          </div>

          {/* Categories grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 sm:gap-y-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide border-b border-gray-200 pb-3 group transition-colors duration-200"
                >
                  {/* Circular Image */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#e8c27a] flex-shrink-0 bg-[#ede8e3] transition-transform duration-200 group-hover:scale-105">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span>{cat.name}</span>

                  <span className="ml-auto bg-[#e8c27a] text-[#4a3200] text-[10px] font-medium rounded-full px-1.5 py-0.5">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>

            {/* See More */}
            <div className="mt-5 sm:mt-6 flex justify-end">
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
