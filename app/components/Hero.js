'use client';

export default function Hero() {
  const phoneNumber = '+91 96031 14112';
  const whatsappLink = `https://wa.me/919603114112?text=Hello%20Yashwant%20Hemant%20Waterproofing%20Service%20Vijayawada%2C%20I%20need%20a%20free%20roof%20inspection.%20Please%20help.`;

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center py-12 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-[0.03] rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Trust badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-accent bg-opacity-10 border border-accent border-opacity-30 rounded-full">
          <p className="text-sm font-semibold text-accent">✓ 25+ Years of Excellence</p>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-pulse-slow">
          Yashwant Hemant Waterproofing Service<br className="hidden sm:block" /> Vijayawada
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-2 font-light">
          Professional Waterproofing Solutions
        </p>

        {/* CTA message */}
        <div className="bg-accent bg-opacity-20 border-l-4 border-accent rounded-lg p-4 mb-8 inline-block">
          <p className="text-lg md:text-xl font-semibold text-accent">
            🎁 Free Inspection Available
          </p>
        </div>

        {/* Service areas */}
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Serving Vijayawada & Nearby Areas
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {/* Call Now Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-yellow-500 text-primary-900 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <span className="mr-2">📞</span>
            Call Now: {phoneNumber}
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <span className="mr-2">💬</span>
            WhatsApp Chat
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">25+</p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">412</p>
            <p className="text-sm text-gray-300">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">98%</p>
            <p className="text-sm text-gray-300">Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
