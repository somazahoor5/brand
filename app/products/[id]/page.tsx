"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ─── Product Data ────────────────────────────────────────────────────────────
// (same list – in a real project, move this to a shared lib/data.ts file)
const products = [
  {
    id: 1,
    category: "BLOUSE",
    name: "Sheer Droopy High Neck",
    price: "199,000",
    originalPrice: null,
    img: "Sheer Droopy High Neck.jpg",
    colors: 2,
    description:
      "A delicate sheer blouse with a graceful droopy high neck silhouette. Crafted from lightweight chiffon fabric that drapes beautifully, perfect for layering or wearing solo on warm days.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Polyester Chiffon",
    care: "Hand wash cold, lay flat to dry",
  },
  {
    id: 2,
    category: "DRESS",
    name: "Gentle Oversized Up Jacket",
    price: "229,000",
    originalPrice: "310,000",
    img: "Gentle Oversized Up Jacket.jpg",
    colors: 3,
    description:
      "An effortlessly chic oversized jacket dress that transitions from day to night. The relaxed silhouette offers comfort without sacrificing style, available in three refined colorways.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "65% Cotton, 35% Polyester",
    care: "Machine wash cold, tumble dry low",
  },
  {
    id: 3,
    category: "DRESS",
    name: "Vintage Soft Classic Dresse",
    price: "ADD TO CART",
    originalPrice: "219,000",
    img: "Vintage Soft Classic Dresse.jpg",
    colors: 2,
    description:
      "A timeless vintage-inspired dress with a soft, flowing silhouette. The classic cut flatters all body types and the premium soft fabric ensures all-day comfort.",
    sizes: ["XS", "S", "M", "L"],
    material: "95% Rayon, 5% Spandex",
    care: "Dry clean recommended",
  },
  {
    id: 4,
    category: "TOP",
    name: "Soft Woven Skort Shirt",
    price: "419,000",
    originalPrice: null,
    img: "Soft Woven Skort Shirt.jpg",
    colors: 2,
    description:
      "A premium woven shirt with a unique skort-inspired design. The intricate weave pattern adds texture and depth, making this a standout piece in any wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Cotton",
    care: "Machine wash cold, hang dry",
  },
  {
    id: 5,
    category: "BLOUSE",
    name: "Soft Embossed Crepe Tube",
    price: "199,000",
    originalPrice: null,
    img: "Soft Embossed Crepe Tube.jpg",
    colors: 2,
    description:
      "A sleek tube top crafted from soft embossed crepe fabric. The subtle texture adds dimension while the fitted silhouette creates a polished, modern look.",
    sizes: ["XS", "S", "M", "L"],
    material: "100% Polyester Crepe",
    care: "Hand wash cold, do not wring",
  },
  {
    id: 6,
    category: "PANTS",
    name: "Burgundy Wide-Leg Jumpsuit",
    price: "309,000",
    originalPrice: null,
    img: "Burgundy Wide-Leg Jumpsuit.jpg",
    colors: 3,
    description:
      "A sophisticated wide-leg jumpsuit in a rich burgundy hue. The relaxed wide-leg cut offers freedom of movement while the tailored bodice ensures a polished appearance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Viscose",
    care: "Machine wash cold, hang dry",
  },
  {
    id: 7,
    category: "TOP",
    name: "Suede Shiroi Wrapped Tube",
    price: "199,000",
    originalPrice: null,
    img: "Suede Shiroi Wrapped Tube.jpg",
    colors: 2,
    description:
      "A luxurious suede-finish wrapped tube top with an elegant drape. The wrap design is adjustable for a custom fit, and the suede texture elevates any outfit effortlessly.",
    sizes: ["XS", "S", "M", "L"],
    material: "90% Polyester, 10% Elastane",
    care: "Hand wash cold, lay flat to dry",
  },
  {
    id: 8,
    category: "TOP",
    name: "Sand Wren Newest Shirt",
    price: "189,000",
    originalPrice: null,
    img: "Sand Wren Newest Shirt.jpg",
    colors: 2,
    description:
      "A fresh seasonal release in a warm sand tone. This versatile shirt features a relaxed fit with thoughtful detailing — the perfect everyday essential that pairs with everything.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Cotton",
    care: "Machine wash warm, tumble dry low",
  },
  {
  id: 9,
  category: "DRESS",
  name: "Floral Wrap Midi Dress",
  price: "259,000",
  originalPrice: null,
  img: "fw.jpg",
  colors: 2,
  description:
    "A feminine floral wrap midi dress designed with a flattering silhouette and soft flowing fabric. Perfect for casual outings or special occasions.",
  sizes: ["XS", "S", "M", "L", "XL"],
  material: "100% Viscose",
  care: "Machine wash cold, hang dry",
},
{
  id: 10,
  category: "PANTS",
  name: "Linen Wide Trousers",
  price: "299,000",
  originalPrice: null,
  img: "linen wide trousers.jpg",
  colors: 2,
  description:
    "Lightweight linen trousers with a relaxed wide-leg fit. Breathable and comfortable, ideal for warm weather styling.",
  sizes: ["XS", "S", "M", "L", "XL"],
  material: "100% Linen",
  care: "Machine wash cold, do not tumble dry",
},
{
  id: 11,
  category: "TOP",
  name: "Knit Crop Cardigan",
  price: "219,000",
  originalPrice: null,
  img: "knit crop cardigan.jpg",
  colors: 3,
  description:
    "A cozy knit crop cardigan with a modern silhouette. Soft texture and versatile styling make it a wardrobe essential.",
  sizes: ["XS", "S", "M", "L"],
  material: "80% Cotton, 20% Acrylic",
  care: "Hand wash cold, lay flat to dry",
},
{
  id: 12,
  category: "BOTTOMS",
  name: "Pleated Maxi Skirt",
  price: "279,000",
  originalPrice: null,
  img: "pleated-maxi-skirtss.jpg",
  colors: 2,
  description:
    "Elegant pleated maxi skirt with a flowing design. Adds movement and sophistication to both casual and formal outfits.",
  sizes: ["XS", "S", "M", "L", "XL"],
  material: "100% Polyester",
  care: "Machine wash cold, hang dry",
},
  
];

// ─── Color palette per slot ───────────────────────────────────────────────────
const colorOptions = ["#c9a96e", "#8b7355", "#d4c5b0"];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9f6f2] flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link
          href="/"
          className="text-sm border border-gray-300 rounded-full px-5 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isOnSale = !!product.originalPrice;

  return (
    <div className="min-h-screen bg-[#f9f6f2]">

      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-3 flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-gray-700 transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* ── Image column ── */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#f0ece6]">
              <img
                src={`/${product.img}`}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Sale badge */}
            {isOnSale && (
              <div className="absolute top-4 left-4 bg-[#c9a96e] text-white text-[10px] tracking-widest font-semibold px-3 py-1 rounded-full uppercase">
                Sale
              </div>
            )}

            {/* Wishlist button */}
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={wishlist ? "#c9a96e" : "none"}
                stroke={wishlist ? "#c9a96e" : "#999"}
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* ── Info column ── */}
          <div className="flex flex-col gap-5">

            {/* Category */}
            <p className="text-[10px] tracking-widest text-gray-400 uppercase">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-gray-900">
                Rp {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  Rp {product.originalPrice}
                </span>
              )}
              {isOnSale && (
                <span className="text-xs text-[#c9a96e] font-medium">
                  On Sale
                </span>
              )}
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
                Color
              </p>
              <div className="flex gap-2">
                {Array.from({ length: product.colors }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor === i
                        ? "border-gray-700 scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: colorOptions[i] }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
                Size
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <span className="text-sm font-medium text-gray-800 w-5 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Product details */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex gap-2">
                <span className="font-medium text-gray-700 w-20">Material</span>
                <span>{product.material}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-gray-700 w-20">Care</span>
                <span>{product.care}</span>
              </div>
            </div>

            {/* Back link */}
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors mt-2 inline-flex items-center gap-1"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
