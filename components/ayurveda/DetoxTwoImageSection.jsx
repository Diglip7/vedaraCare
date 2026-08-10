import React from 'react';
import Image from 'next/image';

const DetoxTwoImageSection = ({
  bgColor = "bg-[#F5F1EA]",
  label = "UNDERSTANDING DETOX",
  title = "What authentic Ayurvedic detox is — and what it isn't.",
  subtitle = "",
  introParagraph = "",
  sections = [],
  quote = "",
  images = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 md:px-12`}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[40px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content & Images Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {introParagraph && (
              <p className="text-[15px] font-sans text-[#1A1A1A] leading-relaxed">
                {introParagraph}
              </p>
            )}

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-[17px] font-serif font-bold text-[#1A1A1A] hover:text-[#C9A961] transition-colors duration-200">
                    {section.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#5A5A5A] font-sans">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {quote && (
              <div className="border-l-2 border-[#C9A961] pl-6 py-2 mt-8">
                <p className="text-[15px] font-serif italic text-[#C9A961] leading-relaxed">
                  "{quote}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Stacked Images */}
          <div className="space-y-6">
            {images[0] && (
              <div className="relative aspect-[4/3] md:aspect-[1.1] w-full rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
            {images[1] && (
              <div className="relative aspect-[2.2/1] w-full rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetoxTwoImageSection;
