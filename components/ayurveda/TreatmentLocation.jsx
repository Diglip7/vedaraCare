import React from 'react';
import Link from 'next/link';

const TreatmentLocation = ({
  bgColor = "bg-[#FAF8F5]",
  label = "VISIT OUR JVC CLINIC",
  title = "Walking distance from Circle Mall, Jumeirah Village Circle.",
  address = "Jumeirah Village Circle (JVC), Dubai, UAE",
  phone = "+971 55 573 6312",
  hours = "MON-SAT<br/>9:00 AM - 9:00 PM<br/>SUNDAY<br/>9:00 AM - 6:00 PM",
  landmarks = [
    "Walking distance from Circle Mall",
    "3 min from FIVE Jumeirah Village Hotel",
    "5 min from JSS Private School",
    "Free patient parking"
  ],
  distances = [
    { name: "Marina", time: "20 min" },
    { name: "Downtown", time: "20 min" },
    { name: "Business Bay", time: "20 min" },
    { name: "Al Barsha", time: "15 min" },
    { name: "Dubai Hills", time: "15 min" },
    { name: "Palm Jumeirah", time: "20 min" },
    { name: "JLT", time: "15 min" },
    { name: "Mirdif", time: "25 min" }
  ],
  buttonText = "Book Detox Consultation at Our JVC Clinic",
  buttonHref = "/book",
  mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 md:px-12`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Map Block */}
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-sm h-[400px] md:h-[480px] border border-[#E5DFD3]">
              <iframe
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            </div>
            <div className="text-center">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Vedara%20Care%20Polyclinic%20JVC%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white px-6 py-2.5 rounded-lg text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right Column: Location Details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
                {label}
              </p>
              <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
                {title}
              </h2>
            </div>

            {/* Address, Phone, Hours */}
            <div className="space-y-6 pt-4 border-t border-[#E5DFD3]/40">
              {address && (
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase block">
                    ADDRESS
                  </span>
                  <span className="text-[14px] font-sans text-gray-700 font-medium">
                    {address}
                  </span>
                </div>
              )}

              {phone && (
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase block">
                    PHONE
                  </span>
                  <a href={`tel:${phone}`} className="text-[14px] font-sans text-gray-700 font-medium hover:underline">
                    {phone}
                  </a>
                </div>
              )}

              {hours && (
                <div className="space-y-2">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase block">
                    OPERATING HOURS
                  </span>
                  {typeof hours === 'string' ? (
                    <div 
                      className="text-[13.5px] font-sans text-gray-700 font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: hours }}
                    />
                  ) : Array.isArray(hours) ? (
                    <div className="text-[13.5px] font-sans text-gray-700 font-medium leading-relaxed space-y-1">
                      {hours.map((h, i) => (
                        <div key={i}>
                          <span className="block font-semibold uppercase">{h.label || h.day}</span>
                          <span className="block">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  ) : typeof hours === 'object' ? (
                    <div className="text-[13.5px] font-sans text-gray-700 font-medium leading-relaxed space-y-1">
                      {hours.weekdays || hours.label ? (
                        <>
                          {hours.label && <span className="block font-semibold uppercase">{hours.label}</span>}
                          {hours.weekdays && <span className="block">{hours.weekdays}</span>}
                          {hours.sunday && <span className="block">{hours.sunday}</span>}
                        </>
                      ) : (
                        Object.entries(hours).map(([key, value], i) => value ? (
                          <div key={i}>
                            <span className="block font-semibold uppercase">{key}</span>
                            <span className="block">{value}</span>
                          </div>
                        ) : null)
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Landmarks */}
            {landmarks && landmarks.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[11px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase">
                  NEARBY LANDMARKS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {landmarks.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[12.5px] text-[#5A5A5A] font-sans">
                      <span className="text-[#C9A961] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Distances from Dubai Communities */}
            {distances && distances.length > 0 && (
              <div className="bg-white rounded-xl border border-[#E5DFD3] p-6 shadow-sm space-y-4">
                <h4 className="text-[11px] font-sans font-bold tracking-wider text-[#C9A961] uppercase text-center border-b border-[#FAF6EF] pb-3">
                  DISTANCE FROM DUBAI COMMUNITIES
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[12.5px] font-sans">
                  {distances.map((dist, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-[#FAF6EF]">
                      <span className="text-gray-500">{dist.name}</span>
                      <span className="text-gray-900 font-semibold">{dist.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={buttonHref}
                className="w-full inline-flex items-center justify-center bg-[#C9A961] hover:bg-[#b8915a] text-white py-4 rounded-lg font-sans font-semibold tracking-wider text-[13.5px] uppercase transition-all duration-200"
              >
                {buttonText}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentLocation;
