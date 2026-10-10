import React from 'react';

const TherapyGrid = ({
  bgColor = "bg-[#FAF8F3]",
  label = "THE SPECIFIC TREATMENTS",
  title = "",
  subtitle = "",
  items = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-wider text-[#B8860B] mb-3 uppercase" dangerouslySetInnerHTML={{ __html: label }}/>
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, serif' }} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && (
            <p className="text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-7 shadow-sm border-t-4 border-[#B8860B] flex flex-col">
              <h3 className="text-xl text-[#B8860B] mb-2" style={{ fontFamily: 'Georgia, serif' }} dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm mb-3" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
              <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }} />
              {item.link && (
                <a 
                  href={item.link} 
                  className="text-[#B8860B] text-sm hover:underline mt-auto inline-block"
                  dangerouslySetInnerHTML={{ __html: (item.linkText || "Read more") + " →" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyGrid;
