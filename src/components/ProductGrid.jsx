import React, { useState } from 'react';
import ProductCard from './ProductCard';
import PRODUCTS from '../data/products';

export default function ProductGrid({ onSelect }) {
  return (
    <section className="grid-section px-4 sm:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {PRODUCTS.map(p => (
          <button key={p.id} className="card" onClick={() => onSelect(p)}>
            <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-2xl" />
            <div className="py-3 px-2">
              <h3 className="text-[#4A4A4A] font-semibold">{p.name}</h3>
              <p className="text-[#FF6D95] font-bold">₹{p.price}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}