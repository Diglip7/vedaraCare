import React from 'react';

const HydraFacialLocation = () => {
  return (
    <section className="bg-[#F0EBE3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* Map Column */}
          <div className="lg:w-1/2 min-h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.986873133649!2d55.1979402!3d25.0680608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6fac57df4cc9%3A0x6b42b58d04dd1445!2sJumeirah%20Village%20Circle%20-%20Dubai!5e0!3m2!1sen!2sae!4v1714470876123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vedara Care JVC Map"
            ></iframe>
          </div>

          {/* Details Column */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-8">
              Where HydraFacial happens at Vedara Care JVC.
            </h2>

            <div className="mb-8">
              <h3 className="font-serif text-[#2C3E3A] text-lg mb-2">Vedara Care Polyclinic</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC), Dubai</p>
                <p>📞 +971 55 573 6312</p>
                <p>💬 WhatsApp Available</p>
                <p>✉️ booking@vedaracare.ae</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">Landmark navigation</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Walking distance from Circle Mall</li>
                <li>3 minutes from FIVE Jumeirah Village Hotel</li>
                <li>5 minutes from JSS Private School</li>
                <li>Ample free parking on-site</li>
                <li>Access via Sheikh Mohammed Bin Zayed Road and Al Khail Road</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">Approximate travel times</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-gray-600 text-sm">
                <div className="flex justify-between"><span>Dubai Marina</span><span>10 min</span></div>
                <div className="flex justify-between"><span>Downtown</span><span>15 min</span></div>
                <div className="flex justify-between"><span>Business Bay</span><span>12 min</span></div>
                <div className="flex justify-between"><span>Palm Jumeirah</span><span>15 min</span></div>
                <div className="flex justify-between"><span>Al Barsha</span><span>5 min</span></div>
                <div className="flex justify-between"><span>Dubai Hills</span><span>8 min</span></div>
                <div className="flex justify-between"><span>JLT</span><span>12 min</span></div>
                <div className="flex justify-between"><span>Mirdif</span><span>20 min</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">Opening Hours</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Monday - Sunday: 9AM-10PM</p>

                <p className="text-xs mt-2 italic">Extended and Ramadan hours available - confirm via WhatsApp.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HydraFacialLocation;
