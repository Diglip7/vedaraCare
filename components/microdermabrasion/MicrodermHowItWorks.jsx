import React from 'react';
import Image from 'next/image';

const MicrodermHowItWorks = ({ data }) => {
  return (
    <section className="bg-[#F8F5F0] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%]">
            <h2 className="text-[32px] md:text-[40px] font-serif font-medium text-[#1A1A1A] leading-tight mb-12">
              {data.title}
            </h2>

            {/* Block 1: Microdermabrasion */}
            <div className="mb-10">
              <h3 className="text-[#C9A961] font-sans font-bold text-[15px] mb-3">
                {data.block1.title}
              </h3>
              <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed mb-4">
                {data.block1.description}
              </p>
              <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed mb-3">
                {data.block1.subtext}
              </p>
              <ul className="space-y-2 pl-4">
                {data.block1.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed relative">
                    <span className="absolute left-[-16px] top-[7px] w-1.5 h-1.5 bg-[#C9A961] rounded-full"></span>
                    <strong className="text-[#1A1A1A] font-medium">{bullet.bold}</strong> {bullet.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2: What microdermabrasion actually does */}
            <div className="mb-10">
              <h3 className="text-[#C9A961] font-sans font-bold text-[15px] mb-4">
                {data.block2.title}
              </h3>
              <ul className="space-y-2.5">
                {data.block2.checks.map((check, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                      <strong className="text-[#1A1A1A] font-medium">{check.bold}</strong>  -  {check.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 3: Dermaplaning */}
            <div className="mb-10">
              <h3 className="text-[#C9A961] font-sans font-bold text-[15px] mb-3">
                {data.block3.title}
              </h3>
              <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                {data.block3.description}
              </p>
            </div>

            {/* Block 4: Comparison */}
            <div className="mb-12">
              <h3 className="text-[#C9A961] font-sans font-bold text-[15px] mb-4">
                {data.block4.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Col 1 */}
                <div className="bg-white border border-[#E5DFD3] rounded p-5">
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] font-sans mb-3">{data.block4.col1.title}</h4>
                  <ul className="space-y-2">
                    {data.block4.col1.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C9A961] mt-1 text-[10px]">â– </span>
                        <span className="text-[13px] text-[#6B6B6B] font-sans leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Col 2 */}
                <div className="bg-white border border-[#E5DFD3] rounded p-5">
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] font-sans mb-3">{data.block4.col2.title}</h4>
                  <ul className="space-y-2">
                    {data.block4.col2.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C9A961] mt-1 text-[10px]">â– </span>
                        <span className="text-[13px] text-[#6B6B6B] font-sans leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#C9A961] pl-6 py-1">
              <p className="text-[18px] md:text-[20px] font-serif text-[#C9A961] italic leading-relaxed">
                {data.quote}
              </p>
            </div>
            
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-[45%]">
            <div className="sticky top-24 rounded-xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] lg:h-[calc(100vh-8rem)] lg:max-h-[800px] w-full">
              <Image 
                src={data.image}
                alt={data.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MicrodermHowItWorks;
