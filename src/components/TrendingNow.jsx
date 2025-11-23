import React from "react";
import PRODUCTS from "../data/products.js";

export default function TrendingNow() {
  const trending = PRODUCTS.slice(0, 5).map((item) => ({
    ...item,
    demand: Math.floor(Math.random() * 50) + 15,
  }));

  return (
    <section className="mt-16 w-full px-6 py-12 relative">
      {/* Soft Gradient Background Bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="w-40 h-40 bg-pink-200 opacity-40 blur-2xl rounded-full absolute top-0 left-8 animate-pulse"></div>
        <div className="w-48 h-48 bg-purple-200 opacity-40 blur-3xl rounded-full absolute bottom-0 right-8 animate-pulse"></div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[#9F2B68] text-4xl font-extrabold tracking-wide mb-3 drop-shadow-sm">
        Trending Now
      </h2>
      <p className="text-center text-[#C77F9F] font-medium text-sm mb-10">
        You girls are loving these picks! ✨
      </p>

      {/* Slider */}
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
        {trending.map((p) => (
          <div
            key={p.id}
            className="snap-center min-w-[200px] bg-white rounded-3xl p-4 border border-pink-200 shadow-sm 
            hover:shadow-[0_8px_20px_rgba(255,182,193,0.4)] transition-all hover:-translate-y-1 hover:scale-[1.03] relative"
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-[150px] object-cover rounded-2xl border-[3px] border-pink-100"
            />

            {/* Title */}
            <h3 className="mt-3 text-sm font-semibold text-[#7A3E62] truncate">
              {p.name}
            </h3>

            {/* Trend Badge */}
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-[3px] text-[10px] bg-pink-100 text-pink-600 rounded-full animate-pulse border border-pink-200">
                Popular
              </span>
              <span className="text-[11px] text-[#A06481] font-medium">
                ✨ {p.demand} bought
              </span>
            </div>

            {/* Price + Add Button */}
            <div className="mt-3 flex justify-between items-center">
              <span className="text-[14px] font-bold text-pink-600">
                ₹{p.price}
              </span>
              <button
                className="px-3 py-1 text-[12px] rounded-full bg-pink-50 text-pink-600 border border-pink-200
                hover:bg-pink-100 transition-all hover:scale-105 shadow-sm"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
