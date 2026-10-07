import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

const CTA = ({
  eyebrow,
  label,
  title,
  text,
  description,
  primaryCta,
  secondaryCta,
  callCta,
  button1Text,
  button1Href,
  button2Text,
  button2Href,
  phoneText,
  phoneHref,
  subtext
}) => {
  const displayEyebrow = eyebrow || label;
  const displayText = text || description;

  const btn1 = primaryCta || (button1Text && button1Href ? { label: button1Text, href: button1Href } : null);
  const btn2 = secondaryCta || (button2Text && button2Href ? { label: button2Text, href: button2Href } : null);
  const btnCall = callCta || (phoneText && phoneHref ? { label: phoneText, href: phoneHref } : null);

  const isExternal = (url) => url && (url.startsWith('http') || url.startsWith('tel:'));

  return (
    <section className="bg-[#FAF8EF] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
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
            {displayText && (
              <p className="text-[18px] text-[#1A1A1A] font-sans leading-relaxed max-w-2xl mx-auto">
                {displayText}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 flex-wrap">
            {btn1 && (
              isExternal(btn1.href) ? (
                <a 
                  href={btn1.href || '#'}
                  data-track={btn1.track}
                  data-location="final_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#184C3A] text-white rounded-lg transition-all font-sans font-bold text-[16px] hover:bg-[#123a2c]"
                >
                  <MessageCircle size={20} />
                  {btn1.label}
                </a>
              ) : (
                <Link
                  href={btn1.href || '#'}
                  data-track={btn1.track}
                  data-location="final_cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#184C3A] text-white rounded-lg transition-all font-sans font-bold text-[16px] hover:bg-[#123a2c]"
                >
                  <Calendar size={20} />
                  {btn1.label}
                </Link>
              )
            )}
            
            {btn2 && (
              isExternal(btn2.href) ? (
                <a
                  href={btn2.href || '#'}
                  data-track={btn2.track}
                  data-location="final_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#4A7C59] text-white rounded-lg transition-all font-sans font-semibold text-[16px] hover:bg-[#3d664a]"
                >
                  <MessageCircle size={20} />
                  {btn2.label}
                </a>
              ) : (
                <Link
                  href={btn2.href || '#'}
                  data-track={btn2.track}
                  data-location="final_cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#4A7C59] text-white rounded-lg transition-all font-sans font-semibold text-[16px] hover:bg-[#3d664a]"
                >
                  <Calendar size={20} />
                  {btn2.label}
                </Link>
              )
            )}

            {btnCall && (
              <a 
                href={btnCall.href || '#'}
                data-track={btnCall.track}
                data-location="final_cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#184C3A] text-[#184C3A] rounded-lg transition-all font-sans font-semibold text-[16px] hover:bg-[#184C3A] hover:text-white"
              >
                <Phone size={20} />
                {btnCall.label}
              </a>
            )}
          </div>
          {subtext && (
            <p className="text-[14px] text-[#6B6B6B] font-sans pt-2">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
