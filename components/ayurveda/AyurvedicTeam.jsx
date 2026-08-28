import React from 'react';
import Link from 'next/link';

const AyurvedicTeam = ({
  eyebrow = "THE TEAM",
  title = "Ayurvedic doctors for insomnia and sleep concerns at our JVC clinic.",
  subtitle = "DHA-licensed BAMS-qualified Ayurvedic doctors with substantial expertise in sleep management, stress-related sleep concerns, and coordinated care. Female practitioner available for hormonal sleep concerns. Multi-language: Arabic, English, Hindi, Malayalam, Urdu.",
  cards = []
}) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[rgb(200,168,127)] mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-[rgb(26,26,26)] mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-[17px] text-[rgb(85,85,85)] leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 ${cards.length >= 3 ? 'lg:grid-cols-3' : ''} gap-8`}>
          {cards.map((card, index) => (
            <div key={index} className="bg-[rgb(245,240,232)] p-10 rounded-lg flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {card.initial && (
                    <div className="w-12 h-12 rounded-full border border-[rgb(200,168,127)] flex items-center justify-center text-[rgb(200,168,127)] font-serif text-xl bg-[rgba(200,168,127,0.1)]">
                      {card.initial}
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-2xl text-[rgb(26,26,26)] mb-1">
                      {card.name}
                    </h3>
                    <p className="text-sm text-[rgb(119,119,119)]">
                      {card.role}
                    </p>
                  </div>
                </div>
                
                {card.tag && (
                  <div className="inline-block bg-[rgba(200,168,127,0.15)] text-[rgb(200,168,127)] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded whitespace-nowrap ml-4">
                    {card.tag}
                  </div>
                )}
              </div>

              <p className="text-[15px] text-[rgb(85,85,85)] leading-relaxed flex-grow mb-8">
                {card.description}
              </p>

              {card.linkText && card.link && (
                <Link href={card.link}>
                  <span className="font-semibold text-sm border-b border-black pb-0.5 hover:text-[rgb(200,168,127)] hover:border-[rgb(200,168,127)] transition-colors w-fit">
                    {card.linkText}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicTeam;
