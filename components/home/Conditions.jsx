import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Conditions = ({
  eyebrow,
  label,
  title,
  description,
  categories,
  items = []
}) => {
  const displayEyebrow = eyebrow || label;
  
  // Use state for category selection, default to first category if available
  const [activeCategory, setActiveCategory] = useState(
    categories && categories.length > 0 ? categories[0] : null
  );

  // Filter items if categories are present, otherwise show all
  const filteredItems = activeCategory 
    ? items.filter(item => item.category === activeCategory)
    : items;

  return (
    <section className="bg-[#F6F1EA] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          {displayEyebrow && (
            <span className="text-[13px] font-sans font-bold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
              {displayEyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[18px] text-[#6B6B6B] font-sans max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}

          {/* Categories Tab Selection */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[14px] font-sans font-medium transition-all border ${
                    activeCategory === cat
                      ? 'bg-[#184C3A] text-white border-[#184C3A]'
                      : 'bg-white text-[#4A4A4A] border-[#E5E5E5] hover:border-[#C9A961]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || '#'}
              className="bg-white p-6 rounded-lg border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex-1">
                {/* For Ayurveda it's empty, for home it shows the tag */}
                <span className={`text-[13px] font-sans font-medium ${item.tag ? 'text-[#184C3A]' : 'text-[#C9A961]'} block mb-3`}>
                  {item.tag || ''}
                </span>
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A] leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#4A4A4A] font-sans leading-relaxed">
                  {item.description || item.text}
                </p>
                {item.programme && (
                  <p className="text-[13px] text-[#C9A961] font-sans font-medium mt-4">
                    {item.programme}
                  </p>
                )}
              </div>
              <div className="pt-6 mt-auto">
                <ArrowRight size={18} className="text-[#184C3A] group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* 'Browse all conditions' fallback logic as in HTML string (Optional but matches HTML) */}
        {categories && categories.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-[#C9A961] font-sans font-medium text-[15px] flex items-center justify-center gap-2">
              Browse all conditions
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Conditions;
