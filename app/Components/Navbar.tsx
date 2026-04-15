"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, User, Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "POPULAR", href: "/popular" },
  { label: "NEW ARRIVALS", href: "/new-arrivals", badge: "NEW" },
  { label: "12.12 FASHION SALE", href: "/sale", highlight: true },
  { label: "SHOWCASE", href: "/showcase" },
  { label: "ACCESSORIES", href: "/accessories" },
];

export default function Navbar() {
  const [cartCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Announcement bar */}
      <div className="bg-[#1a1a1a] text-[#f5e6c8] text-xs text-center py-2 flex items-center justify-center gap-2">
        <span className="text-[#e8c27a]">★</span>
        20% discount on all brand this weekend
      </div>

      {/* Logo + currency + social — hidden on mobile */}
      <div className="bg-white border-b border-gray-100 px-6 py-2.5 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight text-gray-900">
          toko<span className="text-[#c9a96e]">FASH</span>
        </Link>

        {/* Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <select className="text-xs border border-gray-200 rounded px-2 py-1 text-gray-500 bg-white">
            <option>United States (USD $)</option>
          </select>
          <select className="text-xs border border-gray-200 rounded px-2 py-1 text-gray-500 bg-white">
            <option>English (US)</option>
          </select>
          <div className="flex gap-3 text-gray-400">
            {/* X (Twitter) */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {/* LinkedIn */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {/* Facebook */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Search + nav + icons */}
      <div className="bg-white border-b border-gray-100 px-4 md:px-6 py-2.5 flex items-center gap-3 md:gap-5">
        {/* Hamburger — visible on mobile only */}
        <button
          className="md:hidden text-gray-700 flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Search */}
        <div className="relative flex-1 md:flex-none">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Product..."
            className="text-sm pl-8 pr-3 py-1.5 border border-gray-200 rounded-full w-full md:w-44 bg-gray-50 focus:outline-none focus:border-[#c9a96e]"
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 flex-1 ml-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-xs font-medium tracking-wide ${
                link.highlight
                  ? "text-[#c9a96e]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="absolute -top-2 -right-3 bg-[#e8c27a] text-[#4a3200] text-[9px] font-medium rounded-full px-1">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3.5 ml-auto">
          <div className="relative cursor-pointer">
            <ShoppingBag size={20} className="text-gray-700" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#c9a96e] text-white text-[9px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <Heart size={20} className="text-gray-700 cursor-pointer" strokeWidth={1.5} />
          <User size={20} className="text-gray-700 cursor-pointer" strokeWidth={1.5} />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`relative text-xs font-medium tracking-wide px-5 py-3 border-b border-gray-100 flex items-center gap-2 ${
                  link.highlight
                    ? "text-[#c9a96e]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="bg-[#e8c27a] text-[#4a3200] text-[9px] font-medium rounded-full px-1.5 py-0.5">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Currency + Language selects in mobile menu */}
          <div className="flex gap-3 px-5 py-3 border-t border-gray-100">
            <select className="text-xs border border-gray-200 rounded px-2 py-1.5 text-gray-500 bg-white flex-1">
              <option>United States (USD $)</option>
            </select>
            <select className="text-xs border border-gray-200 rounded px-2 py-1.5 text-gray-500 bg-white flex-1">
              <option>English (US)</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
