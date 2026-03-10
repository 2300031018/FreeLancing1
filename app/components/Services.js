'use client';

const services = [
  {
    id: 1,
    title: 'Terrace Waterproofing',
    description: 'Complete terrace waterproofing solutions using premium materials. Prevents water seepage and ensures long-term protection.',
    icon: '🏢',
  },
  {
    id: 2,
    title: 'Roof Protective Coating',
    description: 'Long-lasting protective roof coatings that block seepage and protect surfaces from weather damage.',
    icon: '🔧',
  },
  {
    id: 3,
    title: 'Bathroom Waterproofing',
    description: 'Professional bathroom waterproofing to prevent water damage and mold growth. Complete tile and wall protection.',
    icon: '🚿',
  },
  {
    id: 4,
    title: 'Basement Waterproofing',
    description: 'Protect your basement from water seepage and flooding. Keep your foundation dry and safe.',
    icon: '🏠',
  },
  {
    id: 5,
    title: 'External Wall Waterproofing',
    description: 'Exterior wall waterproofing treatment to prevent dampness, seepage, and paint damage.',
    icon: '🧱',
  },
  {
    id: 6,
    title: 'Water Tank Waterproofing',
    description: 'Waterproof coatings for water tanks and cisterns. Ensures clean water storage and prevents leakage.',
    icon: '💧',
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive waterproofing solutions for residential and commercial properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:translate-y-[-4px] border border-gray-100"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>


            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom waterproofing solution?</p>
          <a
            href="tel:+91 96031 14112"
            className="inline-block px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
