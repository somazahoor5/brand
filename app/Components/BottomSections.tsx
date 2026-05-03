"use client";
import Link from "next/link";

const articles = [
  {
    id: 1,
    category: "bags",
    date: "Jul 15, 2023",
    title: "Minimalist Bags, but Maximum in Style",
    desc: "Explore the ever-evolving world of minimalist bags and how they have become a staple in contemporary fashion.",
    author: "Julia Stone",
    comments: 3,
    img: "bb.jpg",
  },
  {
    id: 2,
    category: "news",
    date: "Jul 18, 2023",
    title: "Modern Menswear Essentials",
    desc: "Discover curated modern menswear pieces that bring together style, comfort, and versatility for the urban man.",
    author: "Mark Chen",
    comments: 5,
    img: "Modern Menswear Essentials.jpg",
  },
  {
    id: 3,
    category: "pants",
    date: "Jul 22, 2023",
    title: "Step Up with Statement Aesthetic Pants",
    desc: "From wide-leg trousers to tailored cuts, statement pants are redefining how we approach everyday fashion.",
    author: "Sara Kim",
    comments: 7,
    img: "Step Up with Statement Aesthetic Pants.jpg",
  },
];

const marqueeItems = [
  "flexible price",
  "WHAT CUSTOMERS SAY",
  "FASHION SUPPORT",
  "100% secure",
];

export default function BottomSections() {
  return (
    <div className="bg-[#f9f6f2]">

      {/* ── Marquee Banner ── */}
      <section className="bg-[#c9a96e] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-white font-medium text-sm italic"
            >
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs not-italic">
                ↗
              </span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">Our Newest</h2>
            <p className="text-xl sm:text-2xl italic text-[#c9a96e] font-normal">Articles</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="flex -space-x-2">
              {["👩", "👨", "👩"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#e8e0d8] border-2 border-white flex items-center justify-center text-xs"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">100K</span>
              <br />
              popular article online
            </div>
            <Link
              href="/articles"
              className="text-xs border border-gray-300 rounded-full px-4 py-1.5 text-gray-600 hover:bg-gray-100"
            >
              See More ›
            </Link>
          </div>
        </div>

        {/* Article Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              <div className="h-48 sm:h-52 overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium text-[#c9a96e] tracking-widest uppercase">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {article.desc}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#e8e0d8] flex items-center justify-center text-xs">
                      👤
                    </div>
                    <span className="text-xs text-gray-500">{article.author}</span>
                    <span className="text-xs text-gray-300">· {article.comments} comments</span>
                  </div>
                  <Link
                    href="#"
                    className="text-[10px] border border-gray-200 rounded-full px-3 py-1 text-gray-500 hover:bg-gray-50"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#c9a96e]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="text-center py-10 sm:py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
          Subscribe to{" "}
          <span className="italic text-[#c9a96e] font-normal">Newsletter</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2 mb-6">
          Sign up for exclusive offers, original stories, events and more.
        </p>
        {/* Stacks vertically on small screens */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email Address..."
            className="w-full sm:flex-1 text-sm border border-gray-200 rounded-full px-5 py-2.5 bg-white focus:outline-none focus:border-[#c9a96e]"
          />
          <button className="w-full sm:w-auto bg-[#c9a96e] text-white text-sm rounded-full px-6 py-2.5 hover:bg-[#b8945a] transition-colors">
            Subscribe
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1a1a1a] text-white px-4 sm:px-6 pt-10 sm:pt-12 pb-6">
        <div className="max-w-6xl mx-auto">

          {/* Big logo */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-4xl sm:text-6xl font-medium tracking-tight">
              toko<span className="italic text-[#c9a96e]">FASH</span>
            </span>
          </div>

          {/* Footer links — 2 col on mobile, 4 col on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-gray-700 pt-8 text-sm">
            <div>
              <h4 className="font-medium mb-3 text-gray-300 text-xs tracking-widest">POPULAR</h4>
              {["New Arrivals", "Best Sellers", "Sale", "Showcase"].map((item) => (
                <Link key={item} href="#" className="block text-gray-500 hover:text-white mb-2 text-xs">
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-3 text-gray-300 text-xs tracking-widest">CATEGORIES</h4>
              {["Clothing", "Accessories", "Footwear", "Lifestyle"].map((item) => (
                <Link key={item} href="#" className="block text-gray-500 hover:text-white mb-2 text-xs">
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-3 text-gray-300 text-xs tracking-widest">SUPPORT</h4>
              {["FAQ", "Shipping", "Returns", "Contact Us"].map((item) => (
                <Link key={item} href="#" className="block text-gray-500 hover:text-white mb-2 text-xs">
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-3 text-gray-300 text-xs tracking-widest">FOLLOW US</h4>
              {["Twitter / X", "LinkedIn", "Facebook", "Instagram"].map((item) => (
                <Link key={item} href="#" className="block text-gray-500 hover:text-white mb-2 text-xs">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-600">
            © 2024 tokoFASH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
