import React from 'react';

const TeamSectionGrid = ({ 
  eyebrow = "The Team", 
  title = "Ayurvedic doctors for back pain care at our JVC clinic serving Dubai.", 
  intro = "DHA-licensed BAMS-qualified Ayurvedic doctors with substantial musculoskeletal expertise. Female practitioner (Dr. Neethu) available. Multi-language: Arabic, English, Hindi, Malayalam, Urdu.", 
  teamMembers = [] 
}) => {
  return (
    <section style={{ background: "rgb(255, 255, 255)", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgb(200, 168, 127)",
          fontWeight: 600,
          marginBottom: "16px",
          textAlign: "center"
        }}>
          {eyebrow}
        </p>
        <h2 style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 500,
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.15,
          color: "rgb(31, 31, 31)",
          marginBottom: "20px",
          letterSpacing: "-0.02em",
          textAlign: "center"
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "16px",
          color: "rgb(85, 85, 85)",
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto 56px",
          lineHeight: 1.7
        }}>
          {intro}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {teamMembers.map((member, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 20px",
                background: "rgb(245, 240, 232)"
              }}>
                <img
                  alt={member.alt || member.name}
                  src={member.image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h4 style={{
                fontFamily: "Fraunces, serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "rgb(31, 31, 31)",
                marginBottom: "4px"
              }}>
                {member.name}
              </h4>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "13px",
                color: "rgb(200, 168, 127)",
                fontWeight: 600,
                marginBottom: "4px"
              }}>
                {member.role}
              </p>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "11px",
                color: "rgb(119, 119, 119)",
                letterSpacing: "0.04em",
                marginBottom: "16px"
              }}>
                {member.tags}
              </p>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "14px",
                lineHeight: 1.75,
                color: "rgb(85, 85, 85)",
                textAlign: "left"
              }}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionGrid;
