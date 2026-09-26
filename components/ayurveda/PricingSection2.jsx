import React from 'react';

const PricingSection2 = ({ pricingData }) => {
  if (!pricingData || !pricingData.pricingCards) return null;

  const groupedCards = pricingData.pricingCards.reduce((acc, card) => {
    if (!acc[card.category]) {
      acc[card.category] = [];
    }
    acc[card.category].push(card);
    return acc;
  }, {});

  return (
    <section className={`${pricingData.bgColor || 'bg-[#f5f1e8]'} py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">{pricingData.label || 'TRANSPARENT PRICING'}</div>
          <h2 className="text-4xl font-serif mb-6">{pricingData.title}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: pricingData.description}} />
        </div>
        <div className="space-y-8">
          {Object.entries(groupedCards).map(([category, cards]) => (
            <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">{category}</h3>
              <div className="space-y-4">
                {cards.map((card, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start py-3 border-b border-gray-100 last:border-0">
                    <div className="mb-2 md:mb-0 md:mr-4">
                      <span className="text-gray-900 font-medium block">{card.title}</span>
                      {card.description && <span className="text-gray-500 text-sm block mt-1">{card.description}</span>}
                      {card.savings && <span className="text-green-600 text-sm font-medium block mt-1">{card.savings}</span>}
                    </div>
                    <span className="font-semibold text-gray-900 whitespace-nowrap">{card.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Integrated Programmes</h3>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-700">Integrated Ayurveda + Physiotherapy programmes</span>
              <a href="/conditions" className="text-[#d4af37] hover:underline">See condition pages</a>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          We accept all major insurance providers on a reimbursement basis  -  full documentation provided for your claim. WhatsApp your card to confirm.
        </p>
      </div>
    </section>
  );
};

export default PricingSection2;
