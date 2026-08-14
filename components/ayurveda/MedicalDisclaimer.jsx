import { Info } from 'lucide-react';

const COLORS = {
  ink: 'rgb(26,26,26)',
  rust: '#A24E3B',
  rustBg: '#FFF4F0',
  rustLine: '#F5C6B8',
  sectionBg: '#F2F0E6',
  cardBg: '#FBF9F5',
  cardBorder: '#DED6C8',
  line: '#E5DFD3',
  text: '#625D56',
};

export default function MedicalDisclaimer({ text }) {
  return (
    <section className="py-16 md:py-20 border-t" style={{ backgroundColor: COLORS.sectionBg, borderColor: COLORS.line }}>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl border px-7 py-8 md:px-12 md:py-10"
          style={{ borderColor: COLORS.cardBorder, backgroundColor: COLORS.cardBg }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: COLORS.rust }}
          />

          <div className="flex flex-col items-center text-center">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor: COLORS.rustBg,
                border: `1px solid ${COLORS.rustLine}`,
                color: COLORS.rust,
              }}
            >
              <Info size={18} strokeWidth={1.6} />
            </div>

            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-3"
              style={{ color: COLORS.rust }}
            >
              Important Information
            </p>

            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                color: COLORS.ink,
              }}
            >
              Medical Disclaimer
            </h3>

            <div
              className="w-12 h-px mb-5"
              style={{ backgroundColor: COLORS.rustLine }}
            />

            <p
              className="max-w-2xl text-sm md:text-[15px] leading-7"
              style={{ color: COLORS.text }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
