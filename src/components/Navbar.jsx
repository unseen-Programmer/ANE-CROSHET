import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ label }) => (
    <a className="px-4 py-2 text-sm font-medium text-[#6B3442] rounded-full hover:bg-[#FFD7E5] hover:text-[#D14670] transition-all cursor-pointer">
      {label}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF7F8]/90 backdrop-blur-md border-b border-[#FFDDE8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Logo />

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-2 bg-[#FFE9F1] px-4 py-1 rounded-full border border-[#FFD4E4] shadow-sm">
            <NavLink label="Home" />
            <NavLink label="New In" />
            <NavLink label="Gifts" />
            <NavLink label="About" />
          </div>

          {/* CART */}
          <button className="relative inline-flex items-center justify-center p-2 rounded-full bg-[#FFE1EC] hover:bg-[#FFC7DA] transition-all">
            <svg className="w-6 h-6 text-[#D14670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h13" />
            </svg>
            <span className="absolute -top-1 -right-1 px-2 py-[1px] text-[10px] font-semibold text-white bg-[#FF6D95] rounded-full shadow-md">
              2
            </span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-7 h-7 text-[#D14670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#FFF1F6] border-t border-[#FFD5E5] py-3 mt-2 rounded-lg shadow-sm">
            {["Home", "New In", "Gifts", "About"].map((item) => (
              <p key={item}
                className="block px-4 py-2 text-[#6B3442] hover:bg-[#FFD7E5] hover:text-[#D14670] text-sm font-medium rounded-md transition-all cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
