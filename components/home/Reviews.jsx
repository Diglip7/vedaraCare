import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

const Reviews = ({
  eyebrow,
  title,
  allLink,
  rating,
  count,
  reviews = []
}) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1F4538] py-24 px-6 relative overflow-hidden">
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          {eyebrow && (
            <span className="text-[13px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-bold block mb-4">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6 text-white">
              {title}
            </h2>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 flex flex-col shadow-lg relative h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C9A961] text-[#C9A961]" />
                ))}
              </div>

              <p className="text-[14px] font-sans leading-[1.75] mb-8 flex-grow text-[#4A4A4A]">
                {review.text}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px] text-[#1A1A1A]">
                    {review.author_name}
                  </p>
                  <p className="text-[12px] font-sans text-gray-500">
                    {review.relative_time_description}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold bg-[#4285F4]">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {(rating && count) && (
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16">
            <div className="text-center">
              <div className="text-[48px] font-serif font-medium text-white leading-none mb-2">{rating}</div>
              <p className="text-[13px] font-sans tracking-widest text-white/70">stars on Google</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-serif font-medium text-white leading-none mb-2">{count}</div>
              <p className="text-[13px] font-sans tracking-widest text-white/70">reviews</p>
            </div>
          </div>
        )}

        {allLink && (
          <div className="text-center">
            <a 
              href={allLink.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-3.5 border border-white text-white font-sans font-bold text-[14px] rounded-md hover:bg-white hover:text-[#1F4538] transition-all duration-300"
            >
              {allLink.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
