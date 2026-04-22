"use client";

function BookSpeaker({ size = 480 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 600 380"
      width="100%"
      style={{ maxWidth: size, display: "block" }}
      aria-label="Open Book logo"
      role="img"
    >
      <g fill="var(--ink)">
        <path d="M 40 100 Q 170 70, 285 150 L 285 290 Q 170 220, 60 240 Z" />
        <path d="M 560 100 Q 430 70, 315 150 L 315 290 Q 430 220, 540 240 Z" />
        <path d="M 270 290 Q 300 310, 330 290 L 328 320 Q 300 332, 272 320 Z" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 40px 110px",
        borderBottom: "2px solid var(--ink)",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div className="rise" style={{ width: "100%", maxWidth: 560, marginBottom: 40 }} aria-hidden>
          <BookSpeaker size={560} />
        </div>

        <h1
          className="rise d1"
          style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: 900,
            fontSize: "clamp(80px,13vw,200px)",
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
          }}
        >
          Open Book<span style={{ color: "var(--amber)" }}>.</span>
        </h1>

        <p
          className="rise d2"
          style={{
            margin: "22px 0 0",
            fontWeight: 600,
            fontSize: 22,
            color: "var(--ink-dim)",
            maxWidth: 560,
            lineHeight: 1.4,
          }}
        >
          By JT &amp; Booker — mixing & music production
        </p>

        <div className="rise d3" style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => scrollTo("tracks")} className="btn amber">
            Listen
          </button>
          <button onClick={() => scrollTo("booking")} className="btn ghost">
            Book our DJ
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-section { padding: 40px 20px 60px !important; }
          .hero-section .rise:first-child { max-width: 320px !important; margin-bottom: 24px !important; }
          .hero-section h1 { font-size: clamp(64px,18vw,96px) !important; }
          .hero-section p  { font-size: 18px !important; }
        }
      `}</style>
    </section>
  );
}
