import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import MapEmbed from '../ui/MapEmbed';

const Location = ({
  eyebrow,
  label,
  title,
  text,
  subtitle,
  address,
  hours,
  contact,
  parking,
  parkingText,
  directions,
  mapCard,
  imageAlt,
  mapEmbed
}) => {
  const displayEyebrow = eyebrow || label;
  const displayAddressLabel = typeof address === 'object' && address?.label ? address.label : 'Address';
  const displayAddressText = typeof address === 'string' ? address : (address ? [address.area, address.city].filter(Boolean).join(' ') : '');

  const displayContactLabel = typeof contact === 'object' && contact?.label ? contact.label : 'Contact';
  const displayContactText = typeof contact === 'string' ? contact : (contact ? [contact.phone, contact.whatsapp, contact.email].filter(Boolean).join(' · ') : '');

  const directionsHref = directions?.href || mapCard?.directionsHref || '#';
  const directionsLabel = directions?.label || mapCard?.linkText || 'Get Directions';

  return (
    <section className="bg-[#FAF8EF] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Content */}
          <div className="relative aspect-square bg-[#F6F1EA] rounded-[2rem] overflow-hidden shadow-sm">
            <MapEmbed
              src={mapEmbed || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus"}
              title={imageAlt || (mapCard && mapCard.alt) || "Vedara Care JVC Dubai Location"}
            />
            {/* Location Card Overlay */}
            {(directions || mapCard?.directionsHref) && (
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] z-10">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="directions_click"
                  className="text-[#184C3A] font-sans font-bold text-[14px] flex items-center gap-2 hover:underline"
                >
                  <Navigation size={14} />
                  {directionsLabel}
                </a>
              </div>
            )}
          </div>

          {/* Contact Content */}
          <div className="lg:pl-12 space-y-10">
            <div className="space-y-4">
              {displayEyebrow && (
                <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase font-bold block">
                  {displayEyebrow}
                </span>
              )}
              {title && (
                <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                  {title}
                </h2>
              )}
              {(text || subtitle) && (
                <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
                  {text || subtitle}
                </p>
              )}
            </div>

            <div className="space-y-8">
              {/* Address */}
              {displayAddressText && (
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                    <MapPin size={20} className="text-[#184C3A]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[16px] font-sans font-bold text-[#1A1A1A]">{displayAddressLabel}</h3>
                    <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                      {displayAddressText}
                    </p>
                  </div>
                </div>
              )}

              {/* Contact */}
              {displayContactText && (
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                    <Phone size={20} className="text-[#184C3A]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[16px] font-sans font-bold text-[#1A1A1A]">{displayContactLabel}</h3>
                    <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                      {displayContactText}
                    </p>
                  </div>
                </div>
              )}

              {/* Hours */}
              {hours && (
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                    <Clock size={20} className="text-[#184C3A]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[16px] font-sans font-bold text-[#1A1A1A]">Hours</h3>
                    <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                      {typeof hours === 'string' ? hours : (hours.text || hours.value || '')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {(parking || parkingText) && (
              <div className="pt-4">
                <p className="text-[14px] text-[#6B6B6B] font-sans">
                  {parking || parkingText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
