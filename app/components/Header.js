'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '+91 96031 14112';

  return (
    <header className="sticky top-0 z-50 bg-primary-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏗️</span>
            <div>
              <h1 className="text-lg font-bold">Yashwant Hemant</h1>
              <p className="text-xs text-gray-300">Waterproofing Expert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/gallery" className="hover:text-accent transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            <a
              href={`tel:${phoneNumber}`}
              className="px-6 py-2 bg-accent text-primary-900 font-bold rounded hover:bg-yellow-500 transition-all"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="/gallery" className="hover:text-accent transition-colors py-2">Gallery</a>
            <a href="#contact" className="hover:text-accent transition-colors py-2">Contact</a>
            <a
              href={`tel:${phoneNumber}`}
              className="px-6 py-2 bg-accent text-primary-900 font-bold rounded hover:bg-yellow-500 transition-all text-center"
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
