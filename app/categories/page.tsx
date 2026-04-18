"use client";

import { useState } from "react";

const categories = [
  // Default visible (pehli 8)
  { name: "Aesthetic Clothing", count: 23 },
  { name: "Bottoms & Pants", count: 15 },
  { name: "Outerwear", count: 8 },
  { name: "Footwear", count: 12 },
  { name: "Jewelry & Details", count: 31 },
  { name: "Aesthetic Essentials", count: 19 },
  { name: "Accessories", count: 27 },
  { name: "Lifestyle", count: 14 },

  // See More ke baad dikhne wali categories
  { name: "Tops & Blouses", count: 18 },
  { name: "Bags & Totes", count: 16 },
  { name: "Dresses", count: 22 },
  { name: "Sunglasses", count: 9 },
  { name: "Activewear", count: 10 },
  { name: "Hats & Caps", count: 11 },
];

export default function TopCategories() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 8);
  const half = Math.ceil(visibleCategories.length / 2);
  const leftCol = visibleCategories.slice(0, half);
  const rightCol = visibleCategories.slice(half);

  return (
    <section className="bg-[#f5f0e8] px-10 py-12">
      <div className="flex gap-10">

        {/* Heading */}
        <div className="min-w-[160px]">
          <h2 className="text-3xl font-medium text-gray-900">Top Categories</h2>
          <p className="text-[#b8943a] italic text-base mt-1">Collections</p>
        </div>

        {/* Categories Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-x-8">

            {/* Left Column */}
            <div>
              {leftCol.map((cat) => (
                <div
                  key={cat.name}
                  className="flex justify-between items-center py-3 border-b border-[#d8d0c0] cursor-pointer group"
                >
                  <span className="text-xs tracking-widest uppercase text-gray-800 group-hover:text-[#b8943a] transition-colors duration-200">
                    {cat.name}
                  </span>
                  <span className="bg-[#c9a96e] text-white text-xs font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="border-l border-[#d8d0c0] pl-8">
              {rightCol.map((cat) => (
                <div
                  key={cat.name}
                  className="flex justify-between items-center py-3 border-b border-[#d8d0c0] cursor-pointer group"
                >
                  <span className="text-xs tracking-widest uppercase text-gray-800 group-hover:text-[#b8943a] transition-colors duration-200">
                    {cat.name}
                  </span>
                  <span className="bg-[#c9a96e] text-white text-xs font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* See More / See Less Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-gray-800 rounded-full px-5 py-2 text-sm text-gray-800 hover:bg-[#ede8de] transition-colors duration-200"
            >
              {showAll ? "‹ See Less" : "See More ›"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
