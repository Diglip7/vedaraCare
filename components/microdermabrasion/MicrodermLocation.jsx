import React from 'react';

const MicrodermLocation = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F0EBE3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* Map Column */}
          <div className="lg:w-1/2 min-h-[400px] relative">
            <iframe
              src={data.mapSrc}
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
              {data.title}
            </h2>

            <div className="mb-8">
              <h3 className="font-serif text-[#2C3E3A] text-lg mb-2">{data.clinicName}</h3>
              <div className="text-gray-600 text-sm space-y-1">
                {data.contactDetails.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">{data.landmarkNavigation.label}</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                {data.landmarkNavigation.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">{data.travelTimes.label}</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-gray-600 text-sm">
                {data.travelTimes.items.map((time, idx) => (
                  <div key={idx} className="flex justify-between"><span>{time.location}</span><span>{time.time}</span></div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-4">{data.openingHours.label}</h3>
              <div className="text-gray-600 text-sm space-y-1">
                {data.openingHours.hours.map((hour, idx) => (
                  <p key={idx}>{hour}</p>
                ))}
                {data.openingHours.note && (
                  <p className="text-xs mt-2 italic">{data.openingHours.note}</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrodermLocation;
