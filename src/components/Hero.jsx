// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeartRain from "./HeartRain";

export default function Hero() {
  const items = [
    "/assets/images/item2.jpg",
    "/assets/images/item5.jpg",
    "/assets/images/item7.jpg",
    "/assets/images/item9.jpg",
    "/assets/images/item3.jpg",
    "/assets/images/item6.jpg",
    "/assets/images/item8.jpg",
    "/assets/images/item1.jpg",
  ];

  const PINK = {
    p1: "#FF8BB6",
    p2: "#FFB6D9",
    p3: "#FFD6E5",
    p4: "#FFF1F6",
  };

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };
  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(() => slideNext(), 3500);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 250 : -250, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -250 : 250, opacity: 0 }),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-transparent">
      <HeartRain />

      {/* 🌸 Left Vertical Label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[#B88A9F] opacity-50 text-xs tracking-[0.25em]">
        SOFT LUXE CROCHET
      </div>

      {/* 🌸 Right Vertical Label */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[#B88A9F] opacity-50 text-xs tracking-[0.25em]">
        HANDMADE WITH LOVE
      </div>

      {/* 🌸 Soft Glow Blobs */}
      <div className="pointer-events-none">
        <div className="absolute -top-36 -left-28 w-80 h-80 rounded-full blur-[120px] opacity-30 bg-[#FF8BB6]" />
        <div className="absolute bottom-[-120px] right-[-60px] w-96 h-96 rounded-full blur-[130px] opacity-30 bg-[#FFB6D9]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 lg:px-16 py-20 md:py-24 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">
        {/* ================= LEFT TEXT ================= */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-10 md:space-y-12 text-[#653444]">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/60 shadow-sm text-xs md:text-sm font-medium text-[#A55D78] backdrop-blur-md"
          >
            <span className="text-base">♡</span> Customized Crochet
          </motion.div>

          {/* 🌸 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-bold leading-[1.05] tracking-[0.04em]"
            style={{ fontSize: "var(--scale-title)" }}
          >
            <span
              className="block tracking-[0.35em] uppercase text-[#B0758A] mb-3"
              style={{ fontSize: "var(--scale-subtitle)" }}
            >
              Ane Soft Luxe Studio
            </span>

            <span className="block">
              ANE{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${PINK.p1}, ${PINK.p3})`,
                }}
              >
                Crochet
              </span>
            </span>
          </motion.h1>

          {/* 🌸 Subtitle */}
          <p
            className="text-[#7D4656] max-w-xl mx-auto md:mx-0 font-medium"
            style={{ fontSize: "var(--scale-text)" }}
          >
            Bringing pastel couture to life through dreamy crochet reels.
          </p>

          {/* 🌼 Poetic Mini Line */}
          <div className="text-[#B88A9F] text-[11px] md:text-xs tracking-wide opacity-80 flex justify-center md:justify-start gap-4">
            <span>✦ Crafted Slowly</span>
            <span>✦ Loved Deeply</span>
            <span>✦ Made to Treasure</span>
          </div>

          {/* 🌸 Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-full text-white text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition bg-gradient-to-r from-[#FF8BB6] to-[#FFB6D9]">
              View Collection
            </button>
            <button className="px-6 py-3 rounded-full bg-white/70 border border-white text-[#A06481] text-sm md:text-base font-medium hover:bg-white hover:-translate-y-0.5 transition">
              WhatsApp Contact
            </button>
          </div>
        </div>

        {/* ================= RIGHT CINEMATIC FRAME ================= */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            className="relative w-[280px] h-[340px] sm:w-[330px] sm:h-[420px] lg:w-[480px] lg:h-[560px] xl:w-[520px] xl:h-[600px] rounded-[32px] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: `linear-gradient(145deg, ${PINK.p4}AA, ${PINK.p3})`,
              border: `2px solid ${PINK.p2}`,
              boxShadow: `0 26px 70px rgba(255, 182, 217, 0.55)`,
              backdropFilter: "blur(18px)",
            }}
          >
            {/* Image Slider */}
            <div className="absolute inset-[10px] rounded-[26px] overflow-hidden bg-white/30 backdrop-blur-md border border-[#FFEBF4]/60">
              <AnimatePresence custom={direction}>
                <motion.img
                  key={items[index]}
                  src={items[index]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Film Bars */}
              <div className="absolute top-0 left-0 right-0 h-9 bg-white/50 backdrop-blur-md text-[#A06382] text-[10px] tracking-[0.28em] uppercase flex items-center justify-between px-4">
                <span>Ane Pastel Reel</span>
                <span>Scene 01</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-10 bg-white/40 backdrop-blur-md text-[#A06382] text-[10px] flex items-center justify-between px-4 font-mono">
                <span>REC ● 00:00:07:12</span>
                <span>F 2.0 • ISO 400 • 35MM</span>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
              <button
                onClick={slidePrev}
                className="w-8 h-8 rounded-full text-[#6B3D52] text-lg flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                style={{ background: PINK.p3 }}
              >
                ‹
              </button>
              <button
                onClick={slideNext}
                className="w-8 h-8 rounded-full text-[#6B3D52] text-lg flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                style={{ background: PINK.p1 }}
              >
                ›
              </button>
            </div>

            {/* 🌼 Poetic Right Text */}
            <div className="absolute -right-6 top-[38%] rotate-90 text-[#B88A9F] opacity-80 text-[11px] tracking-widest leading-snug">
              Pastel Dreams
              <br />
              In Every Stitch ✦
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
