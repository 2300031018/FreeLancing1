'use client';

import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Pranav_tummala',
    location: 'Local Guide · 12 reviews · 5 photos',
    rating: 5,
    review: 'Excellent service very good quality 👍👍👍👍👍',
    avatar: '👨',
  },
  {
    id: 2,
    name: 'Gantabhavni143 Ganta Bhavani143',
    location: '1 review · a month ago',
    rating: 5,
    review: 'Good exlent quality very good ❤️',
    avatar: '👩',
  },
  {
    id: 3,
    name: 'Balaji Ramasetty',
    location: '1 review · 2 weeks ago',
    rating: 5,
    review: 'Super quality very good excellent service 👍👍👍👍👍👍💗',
    avatar: '👨',
  },
  {
    id: 4,
    name: 'John Dany',
    location: '1 review · 6 photos · 7 months ago',
    rating: 5,
    review: "Excellent quality since 2010. It's been more than a decade, not even a single mistake found. Worth giving a contract to these guys. Suggested to more than 10 new customers and no one found a single mistake. Worth of 7 lakhs amount.",
    avatar: '👩',
  },
  {
    id: 5,
    name: 'Gopichandu',
    location: '1 review · 3 weeks ago',
    rating: 5,
    review: 'Good quality super 👌👌👌👌👌',
    avatar: '👨',
  },
  {
    id: 6,
    name: 'Kiran Kiran',
    location: '2 reviews · 2 weeks ago',
    rating: 5,
    review: 'Good quality super 👌👌👌👌👌',
    avatar: '👨',
  },
  {
    id: 7,
    name: 'Talluri Sunny',
    location: '1 review · 2 weeks ago',
    rating: 5,
    review: 'Good quality 💯',
    avatar: '👨',
  },
  {
    id: 8,
    name: 'Yaswanth Chinnu',
    location: '2 reviews · a month ago',
    rating: 5,
    review: 'Excellent quality 👌🏻👌🏻👌🏻👌🏻👌🏻💯',
    avatar: '👨',
  },
  {
    id: 9,
    name: 'Sai Lokesh Chekuri',
    location: '1 review · 5 months ago',
    rating: 5,
    review: 'Good quality 👍👍👍👍👍 Excellent 👌👌👌👌',
    avatar: '👨',
  },
  {
    id: 10,
    name: 'Challagulla Sri',
    location: '4 reviews · 2 weeks ago',
    rating: 5,
    review: 'Excellent quality very good service excellent team work very good 👍👍👍👍👍',
    avatar: '👩',
  },
  {
    id: 11,
    name: 'Bunny Alaparthi',
    location: '3 reviews · 3 weeks ago',
    rating: 5,
    review: 'Excellent quality 👌👌👌👌👌💯',
    avatar: '👨',
  },
  {
    id: 12,
    name: 'Yesu Sai',
    location: '2 reviews · 3 months ago',
    rating: 5,
    review: 'Super quality very good 👍👍👍👍👍',
    avatar: '👨',
  },
  {
    id: 13,
    name: 'Nagu 143',
    location: '1 review · 3 months ago',
    rating: 5,
    review: 'Super quality good service 💯🙏🙏🙏🙏🙏',
    avatar: '👨',
  },
  {
    id: 14,
    name: 'Talakanti Tulasinadh',
    location: '1 review · 2 weeks ago',
    rating: 5,
    review: 'Super quality Good, 👍👍👍👍👍👍',
    avatar: '👨',
  },
  {
    id: 15,
    name: 'Vasanthi Thodeti',
    location: '1 review · 3 months ago',
    rating: 5,
    review: 'Good quality, great service',
    avatar: '👩',
  },
  {
    id: 16,
    name: 'vamsi krishna jampana',
    location: '2 reviews · 4 months ago',
    rating: 5,
    review: 'Excellent quality very good 👍👍👍👍👍',
    avatar: '👨',
  },
  {
    id: 17,
    name: 'Koushik Nelluri',
    location: '1 review · 2 months ago',
    rating: 5,
    review: 'Excellent quality good 👍🏻👍🏻👍🏻👍🏻👍🏻',
    avatar: '👨',
  },
  {
    id: 18,
    name: 'Yugendhar Yuga',
    location: '1 review · 2 months ago',
    rating: 5,
    review: 'Excellent quality Good👌👌👌👌👌💯',
    avatar: '👨',
  },
  {
    id: 19,
    name: 'Tirumalasetty Sulochana',
    location: '1 review · 2 weeks ago',
    rating: 5,
    review: 'Excellent quality very good service excellent teamwork good 👌👌👌👌👌💯',
    avatar: '👩',
  },
  {
    id: 20,
    name: 'Sindhu Princess',
    location: '1 review · 2 weeks ago',
    rating: 5,
    review: 'Super quality 👍🏼👍🏼👍🏼👍🏼👍🏼💯',
    avatar: '👩',
  },
  {
    id: 21,
    name: 'Narendhrasai Uppala',
    location: '1 review · 2 months ago',
    rating: 5,
    review: 'excellent quality very good service 🙏🙏🙏🙏💯',
    avatar: '👨',
  },
  {
    id: 22,
    name: 'Sai manoj Komarthi',
    location: '4 reviews · 3 weeks ago',
    rating: 5,
    review: 'Excellent quality very good service, Good team work 👍🏻👍🏻👍🏻👍🏻👍🏻',
    avatar: '👨',
  },
  {
    id: 23,
    name: 'Pranay Y',
    location: '1 review · a month ago',
    rating: 5,
    review: 'Excellent quality 👌🏼👌🏼👌🏼👌🏼👌🏼',
    avatar: '👨',
  },
  {
    id: 24,
    name: 'anish kumar',
    location: '1 review · a month ago',
    rating: 5,
    review: 'Excellent quality.👍👍👍👍👍',
    avatar: '👨',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <span key={i} className="text-accent text-lg">⭐</span>
    ))}
  </div>
);

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section className="w-full py-16 md:py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Vijayawada region
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">"{review.review}"</p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-primary-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 4 && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-block px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-lg transition-all duration-200"
            >
              {showAll ? 'Show less' : 'See more'}
            </button>
          </div>
        )}

        {/* Trust Callout */}
        <div className="mt-12 bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our 412+ Satisfied Customers</h3>
          <p className="mb-6 text-gray-200">Experience professional waterproofing and repair services with guaranteed satisfaction.</p>
          <a
            href="tel:+91 96031 14112"
            className="inline-block px-8 py-3 bg-accent text-primary-900 font-bold rounded-lg hover:bg-yellow-500 transition-all duration-200"
          >
            Call Today for Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
