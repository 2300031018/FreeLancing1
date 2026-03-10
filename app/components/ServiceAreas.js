'use client';

const serviceAreas = [
  { name: 'Vijayawada', icon: '🏙️', isMain: true },
  { name: 'Guntur', icon: '🏘️', isMain: true },
  { name: 'Mangalagiri', icon: '🏘️', isMain: true },
  { name: 'Tenali', icon: '🏘️', isMain: true },
  { name: 'Pedapalli', icon: '🌳', isMain: false },
  { name: 'Nunna', icon: '🌳', isMain: false },
  { name: 'Ibrahimpatnam', icon: '🌳', isMain: false },
  { name: 'Tadepalli', icon: '🌳', isMain: false },
];

export default function ServiceAreas() {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve Vijayawada and nearby regions with fast, reliable waterproofing services
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-center transition-all duration-300 ${
                area.isMain
                  ? 'bg-primary-900 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-light border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-2">{area.icon}</div>
              <p className="font-bold text-sm md:text-base">{area.name}</p>
            </div>
          ))}
        </div>

        {/* Coverage Area Info */}
        <div className="bg-light border-l-4 border-accent rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-primary-900 mb-2">✓ Extensive Coverage</h3>
          <p className="text-gray-700">
            In addition to major cities, we also serve residential and commercial areas around Vijayawada. 
            <strong> Call us to confirm service availability in your specific location.</strong>
          </p>
        </div>

        {/* Emergency Service Highlight */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">🚨 Emergency Roof Leak Service</h3>
          <p className="mb-4">24-hour emergency waterproofing and leak repair service available</p>
          <a
            href="tel:+91 96031 14112"
            className="inline-block px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Call Emergency Service: +91 96031 14112
          </a>
        </div>
      </div>
    </section>
  );
}
