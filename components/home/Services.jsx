import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';

const Services = ({
  eyebrow,
  title,
  intro,
  items = []
}) => {
  return (
    <section id="departments" className="py-20 bg-gradient-to-b from-[#F6F1EA] to-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && (
            <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#184C3A] mb-4">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-4xl lg:text-5xl text-[#184C3A] mb-6">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-lg text-[#5a5a5a]">
              {intro}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-serif text-2xl text-[#184C3A] mb-3">
                {service.title}
              </h3>

              <p className="text-[#4a4a4a] mb-6 flex-grow">
                {service.text}
              </p>

              {service.chips && service.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6F1EA] text-[#184C3A] text-xs font-semibold rounded-full"
                    >
                      <Check size={12} strokeWidth={3} />
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href={service.href}
                data-track="department_click"
                data-department={service.dept}
                data-location="departments"
                className="mt-auto inline-flex items-center text-[#184C3A] font-bold text-sm hover:underline group"
              >
                Learn more
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
