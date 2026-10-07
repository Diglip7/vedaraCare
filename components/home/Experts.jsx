import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const Experts = ({
  eyebrow,
  title,
  intro,
  items = [],
  allLink
}) => {
  const visibleItems = items.filter(item => !item.hidden);

  return (
    <section id="experts" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#184C3A] mb-4">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-4xl lg:text-5xl font-serif text-[#184C3A] mb-4">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto mb-12">
              {intro}
            </p>
          )}
        </div>

        {/* Swipe row on mobile, wrap after 4 on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {visibleItems.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group min-w-[280px] md:min-w-0 snap-start">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                {doc.image && (
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                )}
                {doc.licence && (
                  <div className="absolute top-4 right-4 bg-[#184C3A]/90 backdrop-blur-sm text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    DHA Verified
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#184C3A] mb-1">
                    {doc.name}
                  </h3>
                  <h4 className="font-semibold text-sm text-[#4A4A4A]">
                    {doc.role}
                  </h4>
                  {doc.qualification && (
                    <p className="text-[13px] text-[#6B6B6B] mt-2">
                      {doc.qualification}
                    </p>
                  )}
                  {doc.licence && (
                    <p className="text-[12px] text-gray-500 mt-1">
                      {doc.licence}
                    </p>
                  )}
                </div>

                <Link href={doc.href || '#'} className="w-full py-2.5 rounded-md border border-[#184C3A]/20 bg-[#FCFCFA] text-[#184C3A] font-medium text-sm hover:bg-[#184C3A] hover:text-white transition-all duration-300 mt-auto text-center block">
                  View profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {allLink && (
          <div className="text-center mt-8">
            <Link href={allLink.href} className="inline-flex items-center text-[#184C3A] font-semibold hover:underline">
              {allLink.label}
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
export default Experts;
