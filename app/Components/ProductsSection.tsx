"use client";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    category: "BLOUSE",
    name: "Sheer Droopy High Neck",
    price: "199,000",
    originalPrice: null,
    img: "h.jpg",
    colors: 2,
  },
  {
    id: 2,
    category: "DRESS",
    name: "Gentle Oversized Up Jacket",
    price: "229,000",
    originalPrice: "310,000",
    img: "G.jpg",
    colors: 3,
  },
  {
    id: 3,
    category: "DRESS",
    name: "Vintage Soft Classic Dresse",
    price: "ADD TO CART",
    originalPrice: "219,000",
    img: "f.jpg",
    colors: 2,
  },
  {
    id: 4,
    category: "TOP",
    name: "Soft Woven Skort Shirt",
    price: "419,000",
    originalPrice: null,
    img: "r.jpg",
    colors: 2,
  },
  {
    id: 5,
    category: "BLOUSE",
    name: "Soft Embossed Crepe Tube",
    price: "199,000",
    originalPrice: null,
    img: "d.jpg",
    colors: 2,
  },
  {
    id: 6,
    category: "PANTS",
    name: "Burgundy Wide-Leg Jumpsuit",
    price: "309,000",
    originalPrice: null,
    img: "p.jpg",
    colors: 3,
  },
  {
    id: 7,
    category: "TOP",
    name: "Suede Shiroi Wrapped Tube",
    price: "199,000",
    originalPrice: null,
    img: "s.jpg",
    colors: 2,
  },
  {
    id: 8,
    category: "TOP",
    name: "Sand Wren Newest Shirt",
    price: "189,000",
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
    colors: 2,
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [wishlist, setWishlist] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#f0ece6]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Wishlist + options */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5">
          <button
            onClick={() => setWishlist(!wishlist)}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill={wishlist ? "#c9a96e" : "none"}
              stroke={wishlist ? "#c9a96e" : "#999"}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
        {/* Color dots */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {Array.from({ length: product.colors }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border border-white ${
                i === 0 ? "bg-[#c9a96e]" : "bg-[#8b7355]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-gray-400 tracking-widest mb-1">
          {product.category}
        </p>
        <p className="text-sm font-medium text-gray-800 mb-2 leading-snug">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">
              Rp {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                Rp {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="bg-[#f9f6f2] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className="text-xs border border-gray-300 rounded-full px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            View More Products ›
          </Link>
        </div>
      </div>
    </section>
  );
}