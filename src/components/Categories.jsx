import React from 'react';

const pastelMap = {
    All: 'bg-white',
    Toys: 'bg-[#FFE6F3]',
    'Home Decor': 'bg-[#FFF1DC]',
    Keychains: 'bg-[#E8F5FF]',
    Accessories: 'bg-[#F3FFE9]',
};

export default function Categories({ selected, onSelect }) {
    const categories = ['All', 'Toys', 'Home Decor', 'Keychains', 'Accessories'];

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center space-x-3 md:space-x-4 py-4">
                {categories.map((cat) => {
                    const isActive = selected === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => onSelect(cat)}
                            className={`yarn-cursor min-w-[88px] px-4 py-2 rounded-full text-sm font-medium transition-transform duration-150 ${isActive ? 'shadow-[0_8px_24px_rgba(255,109,149,0.08)] border border-[#FADCE7]' : 'hover:scale-95'} ${pastelMap[cat]}`}>
                            <span className={`${isActive ? 'text-[#5B2E3C]' : 'text-[#6B3442]'}`}>{cat}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
