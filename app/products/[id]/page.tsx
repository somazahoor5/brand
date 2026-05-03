"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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
    img: "pleated-maxi-skirts.jpg",
    colors: 2,
    description:
      "Elegant pleated maxi skirt with a flowing design. Adds movement and sophistication to both casual and formal outfits.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Polyester",
    care: "Machine wash cold, hang dry",
  },
];

const colorOptions = [
  { swatch: "#c9a96e", name: "Camel" },
  { swatch: "#8b7355", name: "Walnut" },
  { swatch: "#d4c5b0", name: "Linen" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "care">("details");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F2EDE6] flex flex-col items-center justify-center gap-6">
        <p
          className="text-[#7a6f65] text-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Product not found.
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase text-[#7a6f65] border border-[#c9a96e] px-8 py-3 hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const isOnSale = !!product.originalPrice;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .pd-page { background: #F2EDE6; min-height: 100vh; font-family: 'Jost', sans-serif; }

        /* Announcement bar */
        .pd-announce {
          background: #1c1916;
          color: #c9a96e;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.25em;
          padding: 9px 16px;
          text-transform: uppercase;
        }

        /* Nav */
        .pd-nav {
          background: #F2EDE6;
          border-bottom: 1px solid #d9d2c8;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pd-nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #1c1916;
          letter-spacing: 0.05em;
        }
        .pd-nav-logo em { font-style: italic; color: #c9a96e; }
        .pd-nav-links { display: flex; gap: 28px; }
        .pd-nav-links a {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6b6259;
          text-decoration: none;
          transition: color 0.2s;
        }
        .pd-nav-links a:hover { color: #1c1916; }

        /* Breadcrumb */
        .pd-breadcrumb {
          padding: 14px 40px;
          display: flex;
          gap: 8px;
          align-items: center;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #9e9188;
        }
        .pd-breadcrumb a { color: #9e9188; text-decoration: none; }
        .pd-breadcrumb a:hover { color: #1c1916; }
        .pd-breadcrumb-sep { color: #c9a96e; font-size: 10px; }

        /* Main grid */
        .pd-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 40px 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }

        /* Image column */
        .pd-image-wrap {
          position: relative;
        }
        .pd-image-frame {
          aspect-ratio: 3/4;
          background: #e6dfd5;
          overflow: hidden;
          position: relative;
        }
        .pd-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s ease;
        }
        .pd-image-frame:hover img { transform: scale(1.03); }

        /* Corner accent lines */
        .pd-corner {
          position: absolute;
          width: 28px;
          height: 28px;
          z-index: 2;
        }
        .pd-corner-tl { top: -1px; left: -1px; border-top: 1.5px solid #c9a96e; border-left: 1.5px solid #c9a96e; }
        .pd-corner-tr { top: -1px; right: -1px; border-top: 1.5px solid #c9a96e; border-right: 1.5px solid #c9a96e; }
        .pd-corner-bl { bottom: -1px; left: -1px; border-bottom: 1.5px solid #c9a96e; border-left: 1.5px solid #c9a96e; }
        .pd-corner-br { bottom: -1px; right: -1px; border-bottom: 1.5px solid #c9a96e; border-right: 1.5px solid #c9a96e; }

        .pd-sale-tag {
          position: absolute;
          top: 20px;
          left: 0;
          background: #c9a96e;
          color: #fff;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 5px 14px 5px 12px;
          clip-path: polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%);
          z-index: 3;
        }

        .pd-wishlist-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          background: #F2EDE6;
          border: 1px solid #d9d2c8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
          transition: background 0.2s;
        }
        .pd-wishlist-btn:hover { background: #fff; }

        /* Info column */
        .pd-info { display: flex; flex-direction: column; gap: 0; padding-top: 4px; }

        .pd-cat-tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 10px;
        }

        .pd-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          color: #1c1916;
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
        }

        .pd-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #d9d2c8;
        }
        .pd-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #1c1916;
          letter-spacing: 0.03em;
        }
        .pd-price-orig {
          font-size: 16px;
          color: #b0a898;
          text-decoration: line-through;
          font-family: 'Cormorant Garamond', serif;
        }
        .pd-sale-pill {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #fdf3e7;
          color: #c9a96e;
          padding: 3px 10px;
          border: 1px solid #e8d0a8;
        }

        .pd-desc {
          font-size: 14px;
          color: #6b6259;
          line-height: 1.8;
          margin-bottom: 28px;
          font-weight: 300;
        }

        /* Color picker */
        .pd-section-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #1c1916;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pd-section-label span {
          color: #9e9188;
          font-weight: 300;
          text-transform: none;
          letter-spacing: 0.05em;
          font-size: 12px;
        }

        .pd-colors { display: flex; gap: 10px; margin-bottom: 24px; }
        .pd-color-swatch {
          width: 30px;
          height: 30px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .pd-color-swatch.active::after {
          content: '';
          position: absolute;
          inset: -5px;
          border: 1px solid #c9a96e;
        }

        /* Sizes */
        .pd-sizes { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .pd-size {
          min-width: 44px;
          height: 44px;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d9d2c8;
          background: transparent;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #6b6259;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pd-size:hover { border-color: #c9a96e; color: #1c1916; }
        .pd-size.active { background: #1c1916; color: #F2EDE6; border-color: #1c1916; }

        /* Quantity */
        .pd-qty-wrap { display: flex; align-items: center; gap: 0; margin-bottom: 28px; }
        .pd-qty-btn {
          width: 44px;
          height: 44px;
          border: 1px solid #d9d2c8;
          background: transparent;
          font-size: 18px;
          color: #6b6259;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-family: 'Jost', sans-serif;
        }
        .pd-qty-btn:hover { border-color: #c9a96e; color: #1c1916; }
        .pd-qty-num {
          width: 52px;
          height: 44px;
          border-top: 1px solid #d9d2c8;
          border-bottom: 1px solid #d9d2c8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 400;
          color: #1c1916;
        }

        /* CTA buttons */
        .pd-cta-row { display: flex; gap: 10px; margin-bottom: 28px; }
        .pd-add-btn {
          flex: 1;
          height: 52px;
          border: none;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          background: #1c1916;
          color: #F2EDE6;
        }
        .pd-add-btn:hover { background: #c9a96e; }
        .pd-add-btn.success { background: #5a7a4a; color: #fff; }
        .pd-save-btn {
          width: 52px;
          height: 52px;
          border: 1px solid #d9d2c8;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .pd-save-btn:hover { border-color: #c9a96e; }

        /* Info tabs */
        .pd-tabs { border-top: 1px solid #d9d2c8; }
        .pd-tab-header { display: flex; }
        .pd-tab-btn {
          flex: 1;
          padding: 14px 0;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9e9188;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pd-tab-btn.active { color: #1c1916; border-bottom-color: #c9a96e; }
        .pd-tab-content {
          padding: 18px 0;
          font-size: 13px;
          color: #6b6259;
          line-height: 1.8;
          font-weight: 300;
        }
        .pd-tab-row { display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #ede8e1; }
        .pd-tab-key { color: #1c1916; font-weight: 400; min-width: 80px; font-size: 12px; letter-spacing: 0.05em; }

        .pd-back-link {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9e9188;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-top: 12px;
          transition: color 0.2s;
        }
        .pd-back-link:hover { color: #c9a96e; }

        /* Decorative ornament */
        .pd-ornament {
          text-align: center;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          color: #c9a96e;
          letter-spacing: 0.1em;
          padding: 8px 0;
        }
      `}</style>

      <div className="pd-page">
        <div className="pd-announce">✦ 20% discount on all trend this weekend ✦</div>

        <nav className="pd-nav">
          <div className="pd-nav-logo">
            Æsthetic <em>Collections</em>
          </div>
          <div className="pd-nav-links">
            <a href="#">Popular</a>
            <a href="#">New Arrivals</a>
            <a href="#">Showcase</a>
            <a href="#">Accessories</a>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6259" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6259" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
        </nav>

        <div className="pd-breadcrumb">
          <Link href="/">Home</Link>
          <span className="pd-breadcrumb-sep">›</span>
          <Link href="/products">Products</Link>
          <span className="pd-breadcrumb-sep">›</span>
          <span style={{ color: "#1c1916" }}>{product.name}</span>
        </div>

        <div className="pd-main">
          {/* ── Image Column ── */}
          <div className="pd-image-wrap">
            <div className="pd-corner pd-corner-tl" />
            <div className="pd-corner pd-corner-tr" />
            <div className="pd-corner pd-corner-bl" />
            <div className="pd-corner pd-corner-br" />

            <div className="pd-image-frame">
              <img src={`/${product.img}`} alt={product.name} />
              {isOnSale && <div className="pd-sale-tag">Sale</div>}
            </div>

            <button
              className="pd-wishlist-btn"
              onClick={() => setWishlist(!wishlist)}
              aria-label="Add to wishlist"
            >
              <svg width="18" height="18" viewBox="0 0 24 24"
                fill={wishlist ? "#c9a96e" : "none"}
                stroke={wishlist ? "#c9a96e" : "#6b6259"}
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* ── Info Column ── */}
          <div className="pd-info">
            <p className="pd-cat-tag">{product.category}</p>

            <h1 className="pd-name">{product.name}</h1>

            <div className="pd-price-row">
              <span className="pd-price">Rp {product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="pd-price-orig">Rp {product.originalPrice}</span>
                  <span className="pd-sale-pill">On Sale</span>
                </>
              )}
            </div>

            <p className="pd-desc">{product.description}</p>

            {/* Color */}
            <div>
              <p className="pd-section-label">
                Color <span>— {colorOptions[selectedColor].name}</span>
              </p>
              <div className="pd-colors">
                {Array.from({ length: product.colors }).map((_, i) => (
                  <button
                    key={i}
                    className={`pd-color-swatch ${selectedColor === i ? "active" : ""}`}
                    style={{ background: colorOptions[i].swatch }}
                    onClick={() => setSelectedColor(i)}
                    aria-label={colorOptions[i].name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="pd-section-label">
                Size{" "}
                {selectedSize && <span>— {selectedSize}</span>}
              </p>
              <div className="pd-sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`pd-size ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="pd-section-label">Quantity</p>
              <div className="pd-qty-wrap">
                <button className="pd-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <div className="pd-qty-num">{qty}</div>
                <button className="pd-qty-btn" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            {/* CTA */}
            <div className="pd-cta-row">
              <button
                className={`pd-add-btn ${added ? "success" : ""}`}
                onClick={handleAddToCart}
              >
                {added ? "✓  Added to Cart" : "Add to Cart"}
              </button>
              <button
                className="pd-save-btn"
                onClick={() => setWishlist(!wishlist)}
                aria-label="Save to wishlist"
              >
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill={wishlist ? "#c9a96e" : "none"}
                  stroke={wishlist ? "#c9a96e" : "#6b6259"}
                  strokeWidth="1.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="pd-tabs">
              <div className="pd-tab-header">
                <button
                  className={`pd-tab-btn ${activeTab === "details" ? "active" : ""}`}
                  onClick={() => setActiveTab("details")}
                >
                  Product Details
                </button>
                <button
                  className={`pd-tab-btn ${activeTab === "care" ? "active" : ""}`}
                  onClick={() => setActiveTab("care")}
                >
                  Care Guide
                </button>
              </div>
              <div className="pd-tab-content">
                {activeTab === "details" ? (
                  <div>
                    <div className="pd-tab-row">
                      <span className="pd-tab-key">Material</span>
                      <span>{product.material}</span>
                    </div>
                    <div className="pd-tab-row" style={{ borderBottom: "none" }}>
                      <span className="pd-tab-key">Category</span>
                      <span>{product.category}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="pd-tab-row" style={{ borderBottom: "none" }}>
                      <span className="pd-tab-key">Wash</span>
                      <span>{product.care}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pd-ornament">~ est. 2024 · Aesthetic Collections ~</div>

            <Link href="/" className="pd-back-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
