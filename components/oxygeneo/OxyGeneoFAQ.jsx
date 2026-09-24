import React, { useState } from 'react';
import Link from 'next/link';

const OxyGeneoFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Accordion Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-12">
              What patients ask about OxyGeneo<br className="hidden md:block" /> at our JVC clinic.
            </h2>

            <div className="space-y-4">
              {faqs && faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                  >
                    <span className="font-serif text-[#2C3E3A] text-lg">{faq.question}</span>
                    <span className="text-[#C9A55A] ml-4 flex-shrink-0">
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
              <h3 className="text-white font-serif text-xl mb-6">Book OxyGeneo at our JVC clinic</h3>
              <div className="space-y-3">
                <Link href="/book" className="block w-full bg-white text-[#C9A55A] py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  Book Now
                </Link>
                <a href="https://wa.me/971555736312" target="_blank" rel="noopener noreferrer" className="block w-full border border-white text-white py-3 rounded font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Related Pages Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">Related pages</h3>
              <ul className="space-y-3 text-sm text-[#2C3E3A]">
                <li><Link href="/team/arfah-owais-aesthetician-jvc/" className="hover:text-[#C9A55A] transition-colors">Arfah Owais — Aesthetician Profile</Link></li>
                <li><Link href="/treatments/skin-analysis/" className="hover:text-[#C9A55A] transition-colors">Comprehensive Skin Analysis</Link></li>
                <li><Link href="/treatments/oxy-geneo-jvc/" className="hover:text-[#C9A55A] transition-colors">Oxy-Geneo Facial JVC</Link></li>
                <li><Link href="/treatments/dermaplaning-jvc/" className="hover:text-[#C9A55A] transition-colors">Dermaplaning JVC</Link></li>
                <li><Link href="/treatments/carbon-laser-peel-jvc/" className="hover:text-[#C9A55A] transition-colors">Carbon Laser Peel JVC</Link></li>
                <li><Link href="/conditions/pigmentation-treatment-dubai/" className="hover:text-[#C9A55A] transition-colors">Pigmentation & Melasma</Link></li>
              </ul>
            </div>

            {/* Clinic Hours Box */}
            <div className="bg-[#F5F1EA] p-8 rounded-lg border border-[#E8E1D5]">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">Clinic Hours</h3>
              <div className="text-sm text-[#2C3E3A] space-y-1 mb-4">
                <p>Monday - Sunday : 9AM-10PM</p>

              </div>
              <a href="https://wa.me/971555736312" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9A55A] hover:text-[#8A795D] transition-colors flex items-center gap-1">
                WhatsApp for hours query →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OxyGeneoFAQ;
