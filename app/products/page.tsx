"use client";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Sheer Droopy High Neck", category: "BLOUSE", price: "Rp 199,000", image: "/black.jpg" },
  { id: 2, name: "Gentle Oversized Up Jacket", category: "DRESS", price: "Rp 229,000", image: "/up.jpg" },
  { id: 3, name: "Vintage Soft Classic Dresse", category: "DRESS", price: "Rp 219,000", image: "/soft.jpg" },
  { id: 4, name: "Soft Woven Skort Shirt", category: "TOP", price: "Rp 419,000", image: "/skort.jpg" },
  { id: 5, name: "Soft Embossed Crepe Tube", category: "BLOUSE", price: "Rp 199,000", image: "/tube.jpg" },
  { id: 6, name: "Burgundy Wide-Leg Jumpsuit", category: "PANTS", price: "Rp 309,000", image: "/leg.jpg" },
  { id: 7, name: "Suede Shiroi Wrapped Tube", category: "TOP", price: "Rp 199,000", image: "/suede.jpg" },
  { id: 8, name: "Sand Wren Newest Shirt", category: "TOP", price: "Rp 189,000", image: "/st.jpg" },
  // ✅ Apne naaye products yahan add karein — image public folder mein rakhein
  { id: 9, name: "Floral Wrap Midi Dress", category: "DRESS", price: "Rp 259,000", image: "/midi.jpg" },
  { id: 10, name: "Linen Wide Trousers", category: "PANTS", price: "Rp 299,000", image: "/tr.jpg" },
  { id: 11, name: "Knit Crop Cardigan", category: "TOP", price: "Rp 219,000", image: "/knit.jpg" },
  { id: 12, name: "Pleated Maxi Skirt", category: "BOTTOMS", price: "Rp 279,000", image: "/mixi.jpg" },
];

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleProducts = allProducts.slice(0, visibleCount);
  const hasMore = visibleCount < allProducts.length;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-2">All Products</h1>
      <p className="text-center text-gray-400 mb-10">Discover our full collection</p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            
            {/* Image */}
            <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3 px-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</p>
              <h3 className="text-sm font-medium mt-1 text-gray-800">{product.name}</h3>
              <p className="text-sm font-semibold mt-1 text-gray-900">{product.price}</p>
            </div>

          </div>
        ))}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(visibleCount + 4)}
            className="px-8 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            View More Products ›
          </button>
        </div>
      )}

      {/* Sab dikha diye */}
      {!hasMore && (
        <p className="text-center text-gray-400 mt-12 text-sm">✓ All products shown</p>
      )}

    </main>
  );
}