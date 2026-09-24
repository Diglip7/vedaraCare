import React from 'react';
import Link from 'next/link';

const OxyGeneoArfahProfile = () => {
  return (
    <section className="bg-[#F0EBE3] py-16 md:py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-2/5 relative">
            <div className="aspect-[4/5] md:aspect-auto md:h-full">
              <img
                src="/images/arfah-owais-portrait.webp"
                alt="Arfah Owais DHA licensed aesthetician CIBTAC-UK Vedara Care JVC portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl font-serif text-[#2C3E3A] mb-2">
              Arfah Owais
            </h2>
            <p className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-6">
              DHA-LICENSED AESTHETICIAN · CIBTAC-UK · 8+ YEARS EXPERIENCE
            </p>

            <div className="text-gray-600 space-y-4 mb-8 text-sm leading-relaxed">
              <p>
                Oxy-Geneo at Vedara Care JVC is delivered by Arfah Owais — DHA-licensed aesthetician with a CIBTAC-UK
                diploma (Confederation of International Beauty Therapy and Cosmetology, a UK gold-standard awarding body),
                NCLC certification, PMU certification, and 8+ years of hands-on clinical experience. Oxy-Geneo is one of her
                signature treatments — delivered across the full OxyPod range with and without TriPollar RF and Ultrasound
                add-ons across thousands of sessions. Her approach starts with proper skin analysis, honest OxyPod
                recommendation based on skin analysis findings, particular attention to sensitive skin and medium-to-deep
                skin tone considerations.
              </p>
              <p>
                Multi-language: Arabic, English, Hindi, and Urdu. Female practitioner. Female patients requiring
                female practitioner served in comfortable private treatment room with proper privacy protocols.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "DHA Licensed",
                "CIBTAC-UK Diploma",
                "NCLC Certified",
                "PMU Certified",
                "8+ Years Experience",
                "AR/EN/HI/UR"
              ].map((chip, index) => (
                <span key={index} className="inline-block px-3 py-1 rounded border border-gray-200 text-gray-600 text-[11px] uppercase tracking-wider font-semibold">
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-100">
              <Link href="/team/arfah-owais-aesthetician-jvc/" className="text-[#C9A55A] text-sm font-medium hover:text-[#B8963E] transition-colors flex items-center">
                Read Arfah's full profile <span className="ml-1">→</span>
              </Link>
              <Link href="/book" className="text-[#C9A55A] text-sm font-medium hover:text-[#B8963E] transition-colors flex items-center">
                Book Oxy-Geneo with Arfah <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OxyGeneoArfahProfile;
