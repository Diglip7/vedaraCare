import Image from 'next/image';
import { Star, Shield, MapPin, Clock } from 'lucide-react';

const Hero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  microLine,
  trust = [],
  image,
  imageAlt,
  rating,
  count
}) => {
  const getIcon = (type) => {
    switch (type) {
      case 'shield': return <Shield size={16} className="text-[#C8A76A] shrink-0" />;
      case 'star': return <Star className="text-[#C8A76A] fill-[#C8A76A]" size={16} />;
      case 'clock': return <Clock size={16} className="text-[#C8A76A] shrink-0" />;
      case 'pin': return <MapPin size={16} className="text-[#C8A76A] shrink-0" />;
      default: return null;
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Image and Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#184C3A]">
        {image && (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center opacity-60 mix-blend-overlay"
          />
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {eyebrow && (
              <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#C8A76A] mb-4">
                {eyebrow}
              </p>
            )}

            <h1 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight text-white">
              {title}
            </h1>

            <p className="text-lg lg:text-xl mb-8 text-white/90 font-light leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              {primaryCta && (
                <a href={primaryCta.href} data-track={primaryCta.track} data-location="hero"
                  className="px-8 py-3.5 bg-[#184C3A] text-white rounded-lg font-semibold hover:bg-[#11382A] transition-all flex items-center justify-center text-center flex-1 sm:flex-none">
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href} data-track={secondaryCta.track} data-location="hero"
                  className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center text-center flex-1 sm:flex-none">
                  {secondaryCta.label}
                </a>
              )}
            </div>

            {microLine && (
              <p className="text-sm text-white/70 mb-10">{microLine}</p>
            )}

            {/* Bottom Badges */}
            <div className="flex flex-col gap-3">
              {trust.map((item, index) => {
                let labelText = item.label;
                if (labelText === 'GOOGLE_RATING' && rating && count) {
                  labelText = `${rating} on Google · ${count} reviews`;
                } else if (labelText === 'GOOGLE_RATING') {
                  labelText = `4.7 on Google`; // fallback before step 9 live data is hooked up
                }

                return (
                  <div key={index} className="flex items-center gap-3 text-white">
                    {getIcon(item.type)}
                    <span className="text-[15px] font-medium">{labelText}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
