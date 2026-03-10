'use client';

const reasons = [
  {
    id: 1,
    icon: '⏰',
    title: '25+ Years Experience',
    description: 'Decades of proven expertise in waterproofing and construction maintenance.',
  },
  {
    id: 2,
    icon: '🏆',
    title: 'Professional Materials',
    description: 'We use only premium quality, certified waterproofing materials and coatings.',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality and service excellence.',
  },
  {
    id: 4,
    icon: '🏢',
    title: 'Residential & Commercial',
    description: 'Experience handling projects of all sizes, from homes to large commercial buildings.',
  },
  {
    id: 5,
    icon: '⚡',
    title: 'Quick Inspection',
    description: 'Same-day inspection service enabling quick assessment and immediate solutions.',
  },
  {
    id: 6,
    icon: '✅',
    title: 'Satisfaction Guarantee',
    description: 'We stand behind our work with a complete customer satisfaction guarantee.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Yashwanth Hemanth?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of customers across Vijayawada and nearby regions for reliable waterproofing solutions
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>

              {/* Description */}
              <p className="text-gray-200 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-accent mb-2">412</p>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-accent mb-2">98%</p>
            <p className="text-gray-300">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-accent mb-2">24hrs</p>
            <p className="text-gray-300">Emergency Response</p>
          </div>
        </div>
      </div>
    </section>
  );
}
