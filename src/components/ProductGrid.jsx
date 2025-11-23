import React from "react";
import PRODUCTS from "../data/products.js";
import ProductCard from "./ProductCard";


export default function ProductGrid() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-16 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#6E3C51] mb-8 text-center">
        Our Collection
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
