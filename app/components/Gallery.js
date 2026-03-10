'use client';

import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Terrace Waterproofing Project',
    location: 'Vijayawada',
    before: '/images/terrace-before.jpg.jpg',
    after: '/images/terrace-after.jpg.jpg',
  },
  {
    id: 3,
    title: 'Bathroom Waterproofing',
    location: 'Mangalagiri',
    before: '/images/bathroom-before.jpg.jpg',
    after: '/images/bathroom-after.jpg.jpg',
  },
  {
    id: 5,
    title: 'Ceiling Leakage Repair',
    location: 'Vijayawada',
    before: '/images/celling-before.jpg.jpg',
    after: '/images/celling-after.png.png',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Before & After Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformation of our waterproofing projects across Vijayawada region
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
              {/* Image Pair */}
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <div className="relative w-full aspect-video bg-gray-200">
                    <Image
                      src={item.before}
                      alt={`Before: ${item.title}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Before
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full aspect-video bg-gray-200">
                    <Image
                      src={item.after}
                      alt={`After: ${item.title}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Transform Your Property?</h3>
          <a
            href="tel:+91 96031 14112"
            className="inline-block px-8 py-3 bg-accent hover:bg-yellow-500 text-primary-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Schedule Free Inspection Today
          </a>
        </div>
      </div>
    </section>
  );
}
