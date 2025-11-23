// src/components/ProductCard.jsx
import React from "react";

const pastelMap = {
  Toy: "bg-[#FFEBF4]",
  Toys: "bg-[#FFEBF4]",
  "Home Decor": "bg-[#FFF3E1]",
  Keychains: "bg-[#EAF6FF]",
  Accessories: "bg-[#F2FFEE]",
};

export default function ProductCard({ product, onClick }) {
  return (
    <button
      onClick={() => onClick && onClick(product)}
      className="group w-full text-left rounded-[24px] overflow-hidden border
      bg-gradient-to-br from-[#FFB6D9]/65 via-[#FFD6E5]/80 to-[#FFF1F6]/90
      border-[#FFD3E6] shadow-[0_0_0_0_rgba(0,0,0,0)]
      hover:shadow-[0_10px_38px_rgba(255,165,199,0.28)]
      transition-all duration-300 backdrop-blur-sm"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* CATEGORY TAG */}
        <div
          className={`absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full ${
            pastelMap[product.category] || "bg-white"
          } text-[#884158]`}
        >
          {product.category}
        </div>

        {/* LOW STOCK BADGE */}
        {product.stock !== undefined && product.stock <= 5 && (
          <div className="absolute top-3 right-3 text-[11px] font-semibold px-2 py-1 rounded-full bg-[#FFE6F3] text-[#C44468]">
            Only {product.stock} left!
          </div>
        )}

        {/* HOVER FILM TINT */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8BB6]/20 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* PRODUCT NAME + PRICE + ADD BUTTON */}
      <div className="p-4 flex items-center justify-between">
        <div className="text-[14px] font-semibold text-[#6F3E53] max-w-[120px] truncate">
          {product.name}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[15px] font-bold text-[#D9487B]">
            ₹{product.price}
          </div>

          <button
            className="px-3 py-1.5 rounded-full text-[12px] font-medium 
            bg-[#FFE6F1] text-[#A74C6E] border border-[#FFD3E6] 
            hover:bg-[#FFCFE5] transition-all"
          >
            Add
          </button>
        </div>
      </div>
    </button>
  );
}
