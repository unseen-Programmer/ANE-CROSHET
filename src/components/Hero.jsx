import React from "react";

export default function Hero() {
  const items = [
    "/assets/images/item2.jpg",
    "/assets/images/item5.jpg",
    "/assets/images/item7.jpg",
    "/assets/images/item9.jpg",
  ];

  return (
    <section className="relative w-full bg-[#FFFBFA] overflow-hidden">

      {/* 🩷 Background Glow Orbs */}
      <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] bg-[#FFD7E6]/50 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-[#FFC3DA]/40 blur-[140px] rounded-full"></div>

      {/* 🎈 Floating Images */}
      {items.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="floating crochet"
          className={`
            absolute rounded-2xl shadow-lg border border-[#FADCE7] object-cover opacity-90
            hover:scale-[1.05] transition-transform duration-300
            animate-float${i + 1}
          `}
          style={{
            width: `${110 + i * 20}px`,
            height: `${110 + i * 20}px`,
            top: `${20 + i * 12}%`,
            left: `${15 + i * 18}%`,
            transform: `rotate(${i * 6}deg)`
          }}
        />
      ))}

      {/* Make sure you have these Tailwind keyframes added */}
      {/* If not, I will provide them */}

      {/* 💕 Text Section */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-[#5B2E3C]">
          Floating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9EBB] to-[#FF6D95]">handmade</span> cuteness
        </h1>

        <p className="mt-3 text-sm md:text-lg text-[#6B3442] max-w-md">
          Little pieces of joy stitched slowly for cozy souls 🧶✨
        </p>

        {/* 🎀 Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="yarn-cursor px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-br from-[#FF9EBB] to-[#FF6D95] shadow-lg hover:scale-[1.06] transition duration-200">
            Shop Now
          </button>

          <button className="yarn-cursor px-5 py-3 rounded-full bg-white/70 border border-[#FADCE7] text-[#6B3442] hover:shadow-sm transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
