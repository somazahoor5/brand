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
    img: "Sheer Droopy High Neck.jpg",
    colors: 2,
  },
  {
    id: 2,
    category: "DRESS",
    name: "Gentle Oversized Up Jacket",
    price: "229,000",
    originalPrice: "310,000",
    img: "Gentle Oversized Up Jacket.jpg",
    colors: 3,
  },
  {
    id: 3,
    category: "DRESS",
    name: "Vintage Soft Classic Dresse",
    price: "ADD TO CART",
    originalPrice: "219,000",
    img: "Vintage Soft Classic Dresse.jpg",
    colors: 2,
  },
  {
    id: 4,
    category: "TOP",
    name: "Soft Woven Skort Shirt",
    price: "419,000",
    originalPrice: null,
    img: "Soft Woven Skort Shirt.jpg",
    colors: 2,
  },
  {
    id: 5,
    category: "BLOUSE",
    name: "Soft Embossed Crepe Tube",
    price: "199,000",
    originalPrice: null,
    img: "Soft Embossed Crepe Tube.jpg",
    colors: 2,
  },
  {
    id: 6,
    category: "PANTS",
    name: "Burgundy Wide-Leg Jumpsuit",
    price: "309,000",
    originalPrice: null,
    img: "Burgundy Wide-Leg Jumpsuit.jpg",
    colors: 3,
  },
  {
    id: 7,
    category: "TOP",
    name: "Suede Shiroi Wrapped Tube",
    price: "199,000",
    originalPrice: null,
    img: "Suede Shiroi Wrapped Tube.jpg",
    colors: 2,
  },
  {
    id: 8,
    category: "TOP",
    name: "Sand Wren Newest Shirt",
    price: "189,000",
    originalPrice: null,
    img: "Sand Wren Newest Shirt.jpg",
    colors: 2,
  },
  {
    id: 9,
    category: "DRESS",
    name: "Floral Wrap Midi Dress",
    price: "259,000",
    originalPrice: null,
    img: "/floral-wrap-midi-dress.jpg",
    colors: 2,
  },
  {
    id: 10,
    category: "PANTS",
    name: "Linen Wide Trousers",
    price: "299,000",
    originalPrice: null,
    img: "/linen wide trousers.jpg",
    colors: 2,
  },
  {
    id: 11,
    category: "TOP",
    name: "Knit Crop Cardigan",
    price: "219,000",
    originalPrice: null,
    img: "/knit crop cardigan.jpg",
    colors: 3,
  },
  {
    id: 12,
    category: "BOTTOMS",
    name: "Pleated Maxi Skirt",
    price: "279,000",
    originalPrice: null,
    img: "/Pleated Maxi Skirt.jpg",
    colors: 2,
  },
];

// Export products so the detail page can import them
export { products };

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [wishlist, setWishlist] = useState(false);

  return (
    // ✅ Wrap the entire card in a Link to navigate to the detail page
    <Link href={`/products/${product.id}`} className="block group">
      <div className="relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">

        {/* Image */}
        <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden bg-[#f0ece6]">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* Wishlist — stop propagation so click doesn't also navigate */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5">
            <button
              onClick={(e) => {
                e.preventDefault(); // prevent Link navigation
                setWishlist(!wishlist);
              }}
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
        <div className="p-3 sm:p-4">
          <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest mb-1">
            {product.category}
          </p>

          <p className="text-xs sm:text-sm font-medium text-gray-800 mb-2 leading-snug">
            {product.name}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
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
    </Link>
  );
}

export default function ProductsSection() {
  return (
    <section className="bg-[#f9f6f2] py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Responsive Grid */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3 sm:gap-4
        ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Link
            href="/products"
            className="text-xs sm:text-sm border border-gray-300 rounded-full px-5 sm:px-6 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            View More Products ›
          </Link>
        </div>
      </div>
    </section>
  );
}
