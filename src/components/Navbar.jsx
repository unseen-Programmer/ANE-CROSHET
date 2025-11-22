import React from 'react';
import Logo from './Logo';

const NavLink = ({ children }) => (
    <a className="text-sm font-medium text-[#6B3442] hover:text-[#FF6D95] transition-colors">{children}</a>
);

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#FDF4F5]/90 backdrop-blur-sm border-b border-[#FADCE7]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink>New In</NavLink>
                        <NavLink>Toys</NavLink>
                        <NavLink>Home</NavLink>
                        <NavLink>Gifts</NavLink>
                        <NavLink>About</NavLink>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="yarn-cursor relative inline-flex items-center justify-center p-1 rounded-full hover:scale-105 transform transition-all">
                            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h13" /></svg>
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold leading-none text-white bg-gradient-to-br from-[#FF9EBB] to-[#FF6D95] rounded-full shadow">3</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
