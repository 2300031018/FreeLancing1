'use client';

export default function FloatingContactButtons() {
  const phoneNumber = '+91 96031 14112';
  const whatsappLink = `https://wa.me/919603114112?text=Hello%20Yashwant%20Hemant%20Waterproofing%20Service%20Vijayawada%2C%20I%20need%20a%20free%20roof%20inspection.%20Please%20help.`;

  return (
    <>
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
