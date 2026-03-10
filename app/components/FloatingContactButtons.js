'use client';

import { useState } from 'react';

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+91 96031 14112';
  const whatsappLink = `https://wa.me/919603114112?text=Hello%20Yashwanth%20Hemanth%20Waterproofing%2C%20I%20need%20a%20free%20roof%20inspection.%20Please%20help.`;

  return (
    <>
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-accent hover:bg-yellow-500 text-primary-900 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center font-bold text-2xl transition-all duration-300 hover:scale-110"
          aria-label="Contact options"
        >
          💬
        </button>

        {/* Expanded Buttons */}
        {isOpen && (
          <div className="flex flex-col gap-2 animate-in fade-in zoom-in duration-200">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center font-bold text-2xl transition-all duration-300 hover:scale-110 group relative"
              aria-label="WhatsApp"
            >
              💬
              <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
            </a>

            {/* Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center font-bold text-2xl transition-all duration-300 hover:scale-110 group relative"
              aria-label="Call Now"
            >
              📞
              <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Call Now
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Mobile Bottom Bar (Optional alternative layout) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 md:hidden z-30 flex gap-3 justify-center">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-center transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>📞</span>
          <span className="text-sm">Call Now</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-center transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>💬</span>
          <span className="text-sm">WhatsApp</span>
        </a>
      </div>

      {/* Spacer for mobile bar */}
      <div className="h-20 md:hidden"></div>
    </>
  );
}
