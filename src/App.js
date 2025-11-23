import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Toast from "./components/Toast";

import { useState } from "react";
import { useCart } from "./context/CartContext";

function App() {
  const { toast } = useCart(); // 🔔 Toast state

  return (
    <div className="min-h-screen bg-[#FFFBFA] text-[#5B2E3C]">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Trending Products */}
        <TrendingNow />

        {/* Shop Section */}
        <section id="shop" className="max-w-6xl mx-auto px-4 py-12">
          <div className="rounded-2xl bg-white/60 p-6 md:p-8 shadow-sm border border-[#FADCE7]">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold">New In</h2>
              <p className="mt-2 md:mt-0 text-sm text-gray-600">
                Small-batch pieces, handcrafted with care.
              </p>
            </div>

            {/* Shop Area */}
            <div className="mt-6">
              <ShopArea />
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* 🧶 Toast Notification */}
        <Toast message="Added to cart!" show={toast} />
      </main>
    </div>
  );
}

// 🛍️ Shop Filters + Products
function ShopArea() {
  const [selected, setSelected] = useState("All");

  return (
    <>
      <Categories selected={selected} onSelect={setSelected} />
      <ProductGrid filter={selected} />
    </>
  );
}

export default App;
