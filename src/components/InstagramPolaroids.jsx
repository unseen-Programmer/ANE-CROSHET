import React from 'react';

const photos = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1532339142463-f1b07f7fb38f?auto=format&fit=crop&w=800&q=60',
        caption: 'Morning tea & tiny stitches',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1549187774-b4f7b5f6d1c7?auto=format&fit=crop&w=800&q=60',
        caption: 'Handmade for soft moments',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1599476062645-2687f8b7b1d8?auto=format&fit=crop&w=800&q=60',
        caption: 'A tiny gift, wrapped with care',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1616627459382-0a4f6e0f0b27?auto=format&fit=crop&w=800&q=60',
        caption: 'Slow living, stitched slowly',
    },
];

function Polaroid({ photo, style }) {
    return (
        <div className={`relative bg-white rounded-sm shadow-md`} style={{ width: 180, ...style }}>
            <div className="relative bg-white border border-[var(--pastel-border)] rounded-sm overflow-hidden">
                <img src={photo.src} alt={photo.caption} className="w-full h-44 object-cover block" />
                <div className="p-2">
                    <div className="handwriting text-xs text-[#5B2E3C]">{photo.caption}</div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-10 h-4 bg-gradient-to-r from-[#FFF1DC] to-[#FFE6F3] rounded-sm rotate-2 opacity-95" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}></div>
        </div>
    );
}

export default function InstagramPolaroids() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="rounded-2xl bg-white/60 p-6 md:p-8 shadow-sm border border-[#FADCE7]">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">From my feed</h3>
                    <p className="text-sm text-gray-600">Little snapshots of handmade moments</p>
                </div>

                <div className="relative mt-6 h-56 md:h-60">
                    <div className="absolute left-0 top-0 flex items-center" style={{ gap: 18 }}>
                        <Polaroid photo={photos[0]} style={{ transform: 'rotate(-6deg)', marginLeft: 8 }} />
                        <Polaroid photo={photos[1]} style={{ transform: 'rotate(8deg)', marginTop: 18 }} />
                        <Polaroid photo={photos[2]} style={{ transform: 'rotate(-3deg)', marginLeft: 24, marginTop: -6 }} />
                        <Polaroid photo={photos[3]} style={{ transform: 'rotate(10deg)', marginLeft: 36, marginTop: 8 }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
