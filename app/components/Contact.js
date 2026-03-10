'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Hi Yashwanth Hemanth Waterproofing! I'm ${formData.name}. Service: ${formData.serviceType}. Message: ${formData.message}. Contact: ${formData.phone}`;
    const whatsappLink = `https://wa.me/919603114112?text=${encodeURIComponent(whatsappMessage)}`;
    
    // In production, you would send this to a backend service
    window.location.href = whatsappLink;
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      message: '',
    });
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const phoneNumber = '+91 96031 14112';
  const whatsappLink = `https://wa.me/919603114112?text=Hello%20Yashwanth%20Hemanth%20Waterproofing%2C%20I%20need%20a%20free%20roof%20inspection.`;

  return (
    <section id="contact" className="w-full py-16 md:py-20 px-4 bg-primary-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contact us for a free inspection or to discuss your waterproofing needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            </div>

            {/* Phone */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-accent hover:text-yellow-300 font-semibold text-lg"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-sm text-gray-300 mt-1">Available 24/7 for emergency calls</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">WhatsApp Chat</h4>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-semibold text-lg"
                  >
                    Send Message
                  </a>
                  <p className="text-sm text-gray-300 mt-1">Quick response to your queries</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Service Area</h4>
                  <p className="text-gray-300">
                    Vijayawada, Guntur, Mangalagiri, Tenali and nearby areas in Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Working Hours</h4>
                  <p className="text-gray-300">
                    Monday - Sunday: 7:00 AM - 8:00 PM<br/>
                    Emergency Service: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your email"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">
                    Service Needed
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="Terrace Waterproofing" className="text-gray-900">Terrace Waterproofing</option>
                    <option value="Roof Protective Coating" className="text-gray-900">Roof Protective Coating</option>
                    <option value="Bathroom Waterproofing" className="text-gray-900">Bathroom Waterproofing</option>
                    <option value="Basement Waterproofing" className="text-gray-900">Basement Waterproofing</option>
                    <option value="External Wall Waterproofing" className="text-gray-900">External Wall Waterproofing</option>
                    <option value="Water Tank Waterproofing" className="text-gray-900">Water Tank Waterproofing</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Describe your waterproofing issue..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-yellow-500 text-primary-900 font-bold rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Send via WhatsApp
                </button>

                {submitted && (
                  <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Find Us on the Map</h3>
          <div className="w-full border border-white border-opacity-20 rounded-lg overflow-hidden bg-white bg-opacity-10">
            <iframe
              title="Yashwanth Hemanth Waterproofing Service Location"
              src="https://maps.google.com/maps?q=Yashwanth%20Hemanth%20Waterproofing%20Service%20Vijayawada&z=14&output=embed"
              className="w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 text-center">
              <a
                href="https://maps.app.goo.gl/Eoc97GpWpcyRVSRS8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent hover:bg-yellow-500 text-primary-900 font-bold rounded-lg transition-all duration-200"
              >
                Open Exact Location in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
