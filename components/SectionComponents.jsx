import React from 'react';

// Design tokens – match the project's color scheme
export const GOLD = '#C9A55A'; // primary gold color
export const INK = 'rgb(26,26,26)'; // primary text color
export const STONE = 'rgb(107,107,107)'; // secondary text color
export const RUST = '#C0392B'; // rust accent
export const RUST_BG = '#F5C6B8'; // rust background
export const SAGE_BG = '#F0EBE3'; // sage background (used for non‑rust icons)

/**
 * Eyebrow – small uppercase heading used above titles.
 * Accepts children (text) and an optional `color` prop to override the default GOLD.
 */
export const Eyebrow = ({ children, color = GOLD }) => (
  <p className="text-xs tracking-[0.2e] uppercase mb-3 font-semibold" style={{ color }}>
    {children}
  </p>
);

/**
 * IconBadge – circular badge that holds an icon.
 * `tone` can be "rust" (red‑brown) or any other value for the default sage background.
 */
export const IconBadge = ({ Icon, tone = 'default' }) => {
  const iconColor = tone === 'rust' ? RUST : GOLD;
  const bgColor = tone === 'rust' ? RUST_BG : SAGE_BG;
  return (
    <div
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
      style={{ background: bgColor }}
    >
      <Icon size={20} color={iconColor} />
    </div>
  );
};

// Export a small wrapper that combines both components for convenience
export const SectionHeader = ({ eyebrow, title, sub }) => (
  <div className="text-center mb-12">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
      {title}
    </h2>
    {sub && (
      <p className="text-base mt-3" style={{ color: STONE, lineHeight: '1.7' }}>
        {sub}
      </p>
    )}
  </div>
);
