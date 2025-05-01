'use client';

import { useState, useCallback } from 'react';
import { FaBars, FaGlobe, FaAngleDown, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Bars', href: '/Bars' },
  { label: 'Clubs', href: '/Clubs' },
  { label: 'Events', href: '/Events' },
  { label: 'Contact Us', href: '/ContactUs' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="bg-white shadow-md py-5 px-4 md:px-10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">Seeker</h1>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-gradient-to-br from-[#f9e076] to-[#fc6a03] text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105"
              >
                DOWNLOAD APP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                <FaGlobe /> English <FaAngleDown />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden  absolute top-full left-0 w-full bg-white shadow-md  z-40">
          <ul className="flex flex-col ml-5 gap-4 p-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-gradient-to-br from-[#f9e076] to-[#fc6a03] text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105"
              >
                DOWNLOAD APP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                <FaGlobe /> English <FaAngleDown />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
