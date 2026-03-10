'use client';

export default function Footer() {
  const phoneNumber = '+91 96031 14112';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🏗️</span>
              Yashwant Hemant
            </h3>
            <p className="text-sm leading-relaxed">
              Professional waterproofing service with 25+ years of expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terrace Waterproofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roof Protective Coating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bathroom Waterproofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">More Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-400">Phone</p>
                <a href={`tel:${phoneNumber}`} className="text-white hover:text-accent font-semibold">
                  {phoneNumber}
                </a>
              </div>
              <div>
                <p className="text-gray-400">Service Areas</p>
                <p>Vijayawada, Guntur, Mangalagiri, Tenali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} Yashwant Hemant Waterproofing Service. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 mb-4">Trusted by 412+ satisfied customers</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded">✓ 25+ Years Experience</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded">✓ Professional Materials</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded">✓ 24/7 Emergency Service</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded">✓ Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
