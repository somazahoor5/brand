"use client";

import { useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categoryProducts: Record<string, {
  title: string;
  products: { id: number; name: string; price: number; image: string }[];
}> = {
  "aesthetic-clothing": {
    title: "Aesthetic Clothing",
    products: [
      { id: 1, name: "Floral Corset Top", price: 1800, image: "/products/aesthetic-clothing/Floral Corset Top.jpg" },
      { id: 2, name: "Linen Wide Pants", price: 2200, image: "/products/aesthetic-clothing/Linen Wide Pants.jpg" },
      { id: 3, name: "Vintage Slip Dress", price: 2800, image: "/products/aesthetic-clothing/Vintage Slip Dress.jpg" },
      { id: 4, name: "Oversized Blazer", price: 3500, image: "/products/aesthetic-clothing/Oversized Blazer.jpg" },
      { id: 5, name: "Knit Crop Cardigan", price: 1600, image: "/products/aesthetic-clothing/Knit Crop Cardigan.jpg" },
      { id: 6, name: "Satin Midi Skirt", price: 2100, image: "/products/aesthetic-clothing/Satin Midi Skirt.jpg" },
    ],
  },
  "footwear": {
    title: "Footwear",
    products: [
      { id: 1, name: "Mary Jane Heels", price: 3200, image: "/products/aesthetic-clothing/footwear/Mary Jane Heels.jpg" },
      { id: 2, name: "Platform Loafers", price: 2900, image: "/products/aesthetic-clothing/footwear/Platform Loafers.jpg" },
      { id: 3, name: "Strappy Sandals", price: 1800, image: "/products/aesthetic-clothing/footwear/Strappy Sandals.jpg" },
      { id: 4, name: "Chelsea Boots", price: 4000, image: "/products/aesthetic-clothing/footwear/Chelsea Boots.jpg" },
    ],
  },
  "accessories": {
    title: "Accessories",
    products: [
      { id: 1, name: "Pearl Hair Clip", price: 800, image: "/products/aesthetic-clothing/accessories/Pearl Hair Clip.jpg" },
      { id: 2, name: "Silk Scarf", price: 1200, image: "/products/aesthetic-clothing/accessories/Silk Scarf.jpg" },
      { id: 3, name: "Gold Chain Belt", price: 1500, image: "/products/aesthetic-clothing/accessories/Gold Chain Belt.jpg" },
      { id: 4, name: "Claw Clip Set", price: 600, image: "/products/aesthetic-clothing/accessories/Claw Clip Set.jpg" },
    ],
  },
  "bottoms-pants": {
    title: "Bottoms & Pants",
    products: [
      { id: 1, name: "High Waist Trousers", price: 2000, image: "/products/aesthetic-clothing/bottoms-pants/High Waist Trousers.jpg" },
      { id: 2, name: "Pleated Mini Skirt", price: 1500, image: "/products/aesthetic-clothing/bottoms-pants/Pleated Mini Skirt.jpg" },
      { id: 3, name: "Cargo Wide Leg", price: 2400, image: "/products/aesthetic-clothing/bottoms-pants/Cargo Wide Leg.jpg" },
      { id: 4, name: "Denim Flare Jeans", price: 2700, image: "/products/aesthetic-clothing/bottoms-pants/Denim Flare Jeans.jpg" },
    ],
  },
  "outerwear": {
    title: "Outerwear",
    products: [
      { id: 1, name: "Wool Trench Coat", price: 5500, image: "/products/outerwear/Wool Trench Coat.jpg" },
      { id: 2, name: "Puffer Jacket", price: 4200, image: "/products/outerwear/Puffer Jacket.jpg" },
      { id: 3, name: "Denim Jacket", price: 3100, image: "/products/outerwear/Denim Jacket.jpg" },
      { id: 4, name: "Leather Bomber", price: 4800, image: "/products/outerwear/Leather Bomber.jpg" },
    ],
  },
  "jewelry-details": {
    title: "Jewelry & Details",
    products: [
      { id: 1, name: "Pearl Necklace", price: 1200, image: "/products/jewelry-details/Pearl Necklace.jpg" },
      { id: 2, name: "Gold Hoop Earrings", price: 900, image: "/products/jewelry-details/Gold Hoop Earrings.jpg" },
      { id: 3, name: "Layered Bracelet", price: 750, image: "/products/jewelry-details/Layered Bracelet.jpg" },
      { id: 4, name: "Dainty Ring Set", price: 650, image: "/products/jewelry-details/Dainty Ring Set.jpg" },
    ],
  },
  "aesthetic-essentials": {
    title: "Aesthetic Essentials",
    products: [
      { id: 1, name: "Mini Shoulder Bag", price: 2200, image: "/products/aesthetic-essentials/Mini Shoulder Bag.jpg" },
      { id: 2, name: "Sunglasses Round", price: 1400, image: "/products/aesthetic-essentials/Sunglasses Round.jpg" },
      { id: 3, name: "Satin Hair Bow", price: 500, image: "/products/aesthetic-essentials/Satin Hair Bow.jpg" },
      { id: 4, name: "Perfume Roll-On", price: 1100, image: "/products/aesthetic-essentials/Perfume Roll-On.jpg" },
    ],
  },
  "lifestyle": {
    title: "Lifestyle",
    products: [
      { id: 1, name: "Scented Candle", price: 1800, image: "/products/lifestyle/Scented Candle.jpg" },
      { id: 2, name: "Journal Notebook", price: 850, image: "/products/lifestyle/Journal Notebook.jpg" },
      { id: 3, name: "Ceramic Mug", price: 950, image: "/products/lifestyle/Ceramic Mug.jpg" },
      { id: 4, name: "Linen Tote Bag", price: 1300, image: "/products/lifestyle/Linen Tote Bag.jpg" },
    ],
  },
  "tops-blouses": {
    title: "Tops & Blouses",
    products: [
      { id: 1, name: "Ruffle Blouse", price: 1700, image: "/products/tops-blouses/Ruffle Blouse.jpg" },
      { id: 2, name: "Lace Cami Top", price: 1400, image: "/products/tops-blouses/Lace Cami Top.jpg" },
      { id: 3, name: "Puff Sleeve Top", price: 1900, image: "/products/tops-blouses/Puff Sleeve Top.jpg" },
      { id: 4, name: "Crop Knit Tee", price: 1200, image: "/products/tops-blouses/Crop Knit Tee.jpg" },
    ],
  },
  "bags-totes": {
    title: "Bags & Totes",
    products: [
      { id: 1, name: "Woven Straw Bag", price: 2100, image: "/products/bags-totes/Woven Straw Bag.jpg" },
      { id: 2, name: "Canvas Tote", price: 1300, image: "/products/bags-totes/Canvas Tote.jpg" },
      { id: 3, name: "Leather Crossbody", price: 3400, image: "/products/bags-totes/Leather Crossbody.jpg" },
      { id: 4, name: "Bucket Bag", price: 2800, image: "/products/bags-totes/Bucket Bag.jpg" },
    ],
  },
  "dresses": {
    title: "Dresses",
    products: [
      { id: 1, name: "Floral Maxi Dress", price: 3200, image: "/products/dresses/Floral Maxi Dress.jpg" },
      { id: 2, name: "Linen Shirt Dress", price: 2600, image: "/products/dresses/Linen Shirt Dress.jpg" },
      { id: 3, name: "Satin Mini Dress", price: 2900, image: "/products/dresses/Satin Mini Dress.jpg" },
      { id: 4, name: "Knit Sweater Dress", price: 2400, image: "/products/dresses/Knit Sweater Dress.jpg" },
    ],
  },
  "sunglasses": {
    title: "Sunglasses",
    products: [
      { id: 1, name: "Cat Eye Frames", price: 1600, image: "/products/sunglasses/Cat Eye Frames.jpg" },
      { id: 2, name: "Oversized Square", price: 1800, image: "/products/sunglasses/Oversized Square.jpg" },
      { id: 3, name: "Round Vintage", price: 1400, image: "/products/sunglasses/Round Vintage.jpg" },
      { id: 4, name: "Rimless Tinted", price: 1200, image: "/products/sunglasses/Rimless Tinted.jpg" },
    ],
  },
  "activewear": {
    title: "Activewear",
    products: [
      { id: 1, name: "Ribbed Leggings", price: 1900, image: "/products/activewear/Ribbed Leggings.jpg" },
      { id: 2, name: "Sports Bra Set", price: 2100, image: "/products/activewear/Sports Bra Set.jpg" },
      { id: 3, name: "Yoga Flare Pants", price: 2300, image: "/products/activewear/Yoga Flare Pants.jpg" },
      { id: 4, name: "Zip-Up Hoodie", price: 2700, image: "/products/activewear/Zip-Up Hoodie.jpg" },
    ],
  },
  "hats-caps": {
    title: "Hats & Caps",
    products: [
      { id: 1, name: "Bucket Hat", price: 900, image: "/products/hats-caps/Bucket Hat.jpg" },
      { id: 2, name: "Wide Brim Hat", price: 1400, image: "/products/hats-caps/Wide Brim Hat.jpg" },
      { id: 3, name: "Baseball Cap", price: 800, image: "/products/hats-caps/Baseball Cap.jpg" },
      { id: 4, name: "Knit Beanie", price: 700, image: "/products/hats-caps/Knit Beanie.jpg" },
    ],
  },
};

const relatedCategories: Record<string, string[]> = {
  "aesthetic-clothing": ["tops-blouses", "dresses"],
  "bottoms-pants": ["aesthetic-clothing", "footwear"],
  "outerwear": ["aesthetic-clothing", "footwear"],
  "footwear": ["bottoms-pants", "accessories"],
  "jewelry-details": ["accessories", "aesthetic-essentials"],
  "aesthetic-essentials": ["jewelry-details", "bags-totes"],
  "accessories": ["jewelry-details", "bags-totes"],
  "lifestyle": ["aesthetic-essentials", "bags-totes"],
  "tops-blouses": ["aesthetic-clothing", "bottoms-pants"],
  "bags-totes": ["accessories", "lifestyle"],
  "dresses": ["aesthetic-clothing", "footwear"],
  "sunglasses": ["accessories", "aesthetic-essentials"],
  "activewear": ["footwear", "accessories"],
  "hats-caps": ["accessories", "sunglasses"],
};

type Product = { id: number; name: string; price: number; image: string };

function ProductCard({
  product,
  onAddToCart,
  categoryLabel,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
  categoryLabel?: string;
}) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-[#d8d0c0] bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#f9f6f0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-3 pt-3 pb-4 flex-1">
        {categoryLabel && (
          <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#b8943a] font-medium truncate">
            {categoryLabel}
          </p>
        )}
        <h3 className="text-[11px] sm:text-xs tracking-wider uppercase text-gray-800 leading-snug line-clamp-2 flex-1">
          {product.name}
        </h3>
        <p className="text-[#b8943a] font-semibold text-sm sm:text-base mt-0.5">
          Rs. {product.price.toLocaleString()}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="
            mt-2 w-full
            bg-[#c9a96e] hover:bg-[#b8943a] active:scale-95
            text-white text-[10px] sm:text-xs tracking-widest uppercase
            py-2.5 sm:py-2 rounded-full
            transition-all duration-200
            min-h-[40px] sm:min-h-0
            touch-manipulation
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = categoryProducts[slug];
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const router = useRouter();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0e8]">
        <p className="text-gray-500 text-sm">Category nahi mili.</p>
      </div>
    );
  }

  let filtered = data.products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === "name-asc") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "name-desc") filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));

  const handleAddToCart = (product: Product) => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    const alreadyIn = existing.find((item: Product & { quantity: number }) => item.id === product.id);
    if (alreadyIn) {
      alreadyIn.quantity += 1;
    } else {
      existing.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(existing));
    router.push("/cart");
  };

  const related = relatedCategories[slug] || [];

  return (
    <main className="bg-[#f5f0e8] min-h-screen">
      {/* ── Container with safe padding for all screen sizes ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-14">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="
            flex items-center gap-2
            text-sm text-gray-600 hover:text-[#b8943a]
            transition-colors duration-200 mb-6
            min-h-[44px] touch-manipulation
          "
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[#b8943a] italic text-xs sm:text-sm mb-1">Collections</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
            {data.title}
          </h1>
          <div className="h-px bg-[#d8d0c0] mt-4" />
        </div>

        {/* ── Search + Sort Bar ──
            Mobile  : stacked vertically, full width
            Tablet+ : side by side row
        */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                border border-[#d8d0c0] bg-white
                rounded-full pl-10 pr-4 py-3 sm:py-2.5
                text-sm text-gray-800 placeholder-gray-400
                outline-none focus:border-[#b8943a] focus:ring-1 focus:ring-[#b8943a]
                transition-colors duration-200
                min-h-[48px] sm:min-h-0
              "
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              border border-[#d8d0c0] bg-white
              rounded-full px-4 py-3 sm:py-2.5
              text-sm text-gray-800
              outline-none focus:border-[#b8943a] focus:ring-1 focus:ring-[#b8943a]
              transition-colors duration-200
              min-h-[48px] sm:min-h-0
              w-full sm:w-auto sm:min-w-[180px]
              cursor-pointer
            "
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
          </select>
        </div>

        {/* Product count */}
        {filtered.length > 0 && (
          <p className="text-xs text-gray-400 mb-4">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* ── Products Grid ──
            Mobile  : 2 columns
            sm      : 3 columns
            md+     : 4 columns
        */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-400 text-4xl mb-3">🔍</p>
            <p className="text-gray-500 text-sm">Koi product nahi mila.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 text-xs text-[#b8943a] underline underline-offset-2"
            >
              Search clear karein
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <section className="mt-14 sm:mt-16">
            <div className="h-px bg-[#d8d0c0] mb-8" />
            <p className="text-[#b8943a] italic text-xs sm:text-sm mb-1">Related Collections</p>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {related.flatMap((relSlug) =>
                (categoryProducts[relSlug]?.products.slice(0, 2) || []).map((product) => (
                  <ProductCard
                    key={`${relSlug}-${product.id}`}
                    product={product}
                    onAddToCart={handleAddToCart}
                    categoryLabel={categoryProducts[relSlug]?.title}
                  />
                ))
              )}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
