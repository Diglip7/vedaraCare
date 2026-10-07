import React, { useState } from 'react';
import Image from 'next/image';

const MapEmbed = ({ src, title, mapImage = "/images/vedara-care-polyclinic-jvc-location.webp", alt = "Vedara Care JVC Dubai Location" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#F6F1EA] rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center">
      {!isLoaded ? (
        <div 
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-100 z-10"
          onClick={() => setIsLoaded(true)}
        >
          {/* Static map placeholder */}
          <div className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <Image 
              src={mapImage}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Play/Load button overlay */}
          <div className="relative z-20 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
          </div>
          <p className="relative z-20 mt-3 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#1A1A1A] shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
            Click to load interactive map
          </p>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={src}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      )}
    </div>
  );
};

export default MapEmbed;
