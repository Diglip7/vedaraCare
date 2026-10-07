import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ = ({
  eyebrow,
  label,
  title,
  intro,
  description,
  cta,
  buttonText,
  buttonHref,
  sidebarLinks,
  items = [],
  faqs = [] // Accept faqs as well
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqList = items.length > 0 ? items : faqs;
  const displayEyebrow = eyebrow || label;
  const displayIntro = intro || description;
  
  // Normalize CTA data with a global fallback so it appears on every page
  const defaultWhatsApp = "https://wa.me/971555736312?text=Hi,%20I'm%20interested%20in%20your%20treatments%20and%20would%20like%20to%20book%20a%20consultation.";
  const finalCta = cta || 
    (buttonText && buttonHref ? { label: buttonText, href: buttonHref } : null) || 
    { label: "Ask Our Team on WhatsApp", href: defaultWhatsApp };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          {/* Left Side: Header Content */}
          <div className="space-y-6">
            {displayEyebrow && (
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block font-bold">
                {displayEyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                {title}
              </h2>
            )}
            {displayIntro && (
              <p 
                className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed"
                dangerouslySetInnerHTML={{ __html: displayIntro }}
              />
            )}
            {finalCta && (
              <a href={finalCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#184C3A] text-white rounded-lg hover:bg-[#123a2c] transition-colors font-sans font-semibold text-[16px]">
                <MessageCircle size={18} />
                {finalCta.label}
              </a>
            )}
            
            {/* Sidebar Links */}
            {sidebarLinks && sidebarLinks.length > 0 && (
              <div className="flex flex-col gap-3 pt-4">
                {sidebarLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    className="text-[15px] text-[#C9A961] hover:text-[#184C3A] transition-colors font-medium flex items-center gap-2"
                  >
                    {link.text} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Accordion */}
          <div className="divide-y divide-gray-200 lg:max-h-[650px] lg:overflow-y-auto lg:pr-8 pr-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {faqList.map((faq, index) => (
              <div key={index} className="py-2 first:pt-0">
                <h3 className="m-0">
                  <button
                    aria-expanded={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left group min-h-[44px] py-4"
                  >
                    <span className={`text-[18px] font-sans font-semibold transition-colors ${openIndex === index ? 'text-[#184C3A]' : 'text-[#1A1A1A] group-hover:text-[#184C3A]'}`}>
                      {faq.question || faq.q}
                    </span>
                    <span className="text-[#C8A76A] shrink-0 ml-4">
                      {openIndex === index ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                    </span>
                  </button>
                </h3>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'}`}
                  aria-hidden={openIndex !== index}
                >
                  <p 
                    className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer || faq.a }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
