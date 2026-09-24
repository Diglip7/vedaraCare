import React, { useState } from 'react';
import Link from 'next/link';

const MicrodermFAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!data) return null;

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Accordion Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-12" dangerouslySetInnerHTML={{ __html: data.title }}>
            </h2>

            <div className="space-y-4">
              {data.faqs && data.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                  >
                    <span className="font-serif text-[#2C3E3A] text-lg pr-4">{faq.question}</span>
                    <span className="text-[#C9A55A] ml-4 flex-shrink-0 text-xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 text-gray-600 text-sm leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-6">
            {/* Booking Box */}
            <div className="bg-[#C9A55A] p-8 rounded-lg text-center">
              <h3 className="text-white font-serif text-xl mb-6">{data.bookingBox.title}</h3>
              <div className="space-y-3">
                <Link href={data.bookingBox.primaryButtonHref} className="block w-full bg-white text-[#C9A55A] py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  {data.bookingBox.primaryButtonText}
                </Link>
                <a href={data.bookingBox.whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full border border-white text-white py-3 rounded font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <span>{data.bookingBox.whatsappButtonText}</span>
                </a>
              </div>
            </div>

            {/* Related Pages Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">{data.relatedPages.label}</h3>
              <ul className="space-y-3 text-sm text-[#2C3E3A]">
                {data.relatedPages.links.map((link, i) => (
                  <li key={i}><Link href={link.href} className="hover:text-[#C9A55A] transition-colors">{link.text}</Link></li>
                ))}
              </ul>
            </div>

            {/* Clinic Hours Box */}
            <div className="bg-[#F5F1EA] p-8 rounded-lg border border-[#E8E1D5]">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">{data.clinicHours.label}</h3>
              <div className="text-sm text-[#2C3E3A] space-y-1 mb-4">
                <p>{data.clinicHours.hours}</p>
              </div>
              <a href={data.clinicHours.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9A55A] hover:text-[#8A795D] transition-colors flex items-center gap-1">
                {data.clinicHours.whatsappLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrodermFAQ;
