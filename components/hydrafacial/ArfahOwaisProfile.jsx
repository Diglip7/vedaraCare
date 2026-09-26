import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArfahOwaisProfile = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
            {/* Using a placeholder since exact image path isn't provided, adjust path if known */}
            <div className="absolute inset-0 bg-gray-200">
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
              DHA-LICENSED AESTHETICIAN - CIBTAC-UK - 8+ YEARS EXPERIENCE
            </p>
            
            <div className="text-gray-600 space-y-4 mb-8 text-sm leading-relaxed">
              <p>
                HydraFacial at Vedara Care JVC is delivered by Arfah Owais  -  DHA-licensed aesthetician with a CIBTAC-UK 
                diploma (Confederation of International Beauty Therapy and Cosmetology, a UK gold-standard awarding body), 
                NCLC certification, PMU certification, and 8+ years of hands-on clinical experience across the aesthetic 
                treatment spectrum. HydraFacial is one of her signature treatments  -  she's delivered it across thousands of 
                sessions with the full range of protocol tiers, boosters, and add-on integrations. Her approach starts with 
                proper skin analysis before treatment selection, honest framing of what HydraFacial can and cannot achieve, 
                and appropriate booster selection based on skin analysis findings rather than door-sold package upsells.
              </p>
              <p>
                Multi-language capability: Arabic, English, Hindi, and Urdu. Female practitioner. Female patients requiring 
                female practitioner (cultural preference or personal preference) served in comfortable private treatment room 
                with proper privacy protocols.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "DHA-Licensed",
                "CIBTAC-UK Diploma",
                "NCLC Certified",
                "PMU Certified",
                "8+ Years Experience",
                "AR/EN/HI/UR"
              ].map((chip, index) => (
                <span key={index} className="inline-block px-3 py-1 rounded-full border border-gray-200 text-gray-500 text-xs">
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <Link href="/team/arfah-owais-aesthetician-jvc/" className="text-[#C9A55A] hover:text-[#8A795D] transition-colors">
                Read Arfah's full profile →
              </Link>
              <Link href="/book" className="text-[#C9A55A] hover:text-[#8A795D] transition-colors">
                Book HydraFacial with Arfah →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArfahOwaisProfile;
