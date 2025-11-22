import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="yarn-cursor rounded-[28px] overflow-hidden border border-[var(--pastel-border)] bg-white relative transition-transform transform hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(255,109,149,0.12)] hover:border-[#FF9EBB] duration-200 shadow-[0_6px_18px_rgba(255,109,149,0.06)]">
            <div className="w-full aspect-[4/5] overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-[#5B2E3C]">{product.title}</h3>
                    {product.stock !== undefined && product.stock <= 5 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FFE6F3] text-[#B33B63]">Only {product.stock} left!</span>
                    )}
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-semibold text-[#FF6D95]">${product.price}</div>
                    <button className="yarn-cursor btn-pill bg-white border border-[var(--pastel-border)] text-[#6B3442] text-sm">Add</button>
                </div>
            </div>
        </div>
    );
}
