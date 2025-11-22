import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import InstagramPolaroids from './components/InstagramPolaroids';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFBFA] text-[#5B2E3C]">
      <Navbar />
      <main className="">
        <Hero />

        <section id="shop" className="max-w-6xl mx-auto px-4 py-12">
          <div className="rounded-2xl bg-white/60 p-6 md:p-8 shadow-sm border border-[#FADCE7]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold">New In</h2>
              <p className="mt-2 md:mt-0 text-sm text-gray-600">Small-batch pieces, handcrafted with care.</p>
            </div>

            <div className="mt-6">
              <ShopArea />
            </div>
          </div>
        </section>
        <InstagramPolaroids />
      </main>
    </div>
  );
}

function ShopArea() {
  const [selected, setSelected] = useState('All');

  return (
    <>
      <Categories selected={selected} onSelect={setSelected} />
      <ProductGrid filter={selected} />
    </>
  );
}

export default App;
