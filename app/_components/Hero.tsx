"use client";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        borderBottom: "2px solid var(--text)",
        overflow: "hidden",
      }}
    >
      {/* Large decorative background letter */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-brand)",
          fontWeight: 900,
          fontSize: "clamp(280px, 45vw, 540px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "2px rgba(240,237,228,0.05)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}
      >
        OB
      </div>

      {/* Accent rectangle top-right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          right: "6%",
          width: "clamp(60px, 10vw, 120px)",
          height: "clamp(60px, 10vw, 120px)",
          background: "var(--accent)",
          border: "2px solid var(--text)",
        }}
      />

      {/* Outline square bottom-left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "12%",
          left: "5%",
          width: "clamp(40px, 6vw, 80px)",
          height: "clamp(40px, 6vw, 80px)",
          border: "2px solid var(--text)",
          background: "transparent",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <div
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--font-brand)",
            fontWeight: 800,
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "0.35rem 1rem",
            border: "2px solid var(--text)",
            borderRadius: "var(--radius-sm)",
            marginBottom: "1.75rem",
            animation: "fadeUp 0.5s ease forwards",
            opacity: 0,
          }}
        >
          Creative Collective
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 900,
            fontSize: "clamp(4rem, 12vw, 8.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.6s ease 0.1s forwards",
            opacity: 0,
          }}
        >
          Open{" "}
          <span style={{ color: "var(--accent)" }}>Book</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "var(--text-muted)",
            marginBottom: "0.6rem",
            animation: "fadeUp 0.6s ease 0.2s forwards",
            opacity: 0,
          }}
        >
          A Creative Collective
        </p>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 500,
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            color: "var(--text-dim)",
            maxWidth: "500px",
            margin: "0 auto 2.75rem",
            animation: "fadeUp 0.6s ease 0.3s forwards",
            opacity: 0,
          }}
        >
          We make music that moves you — raw energy, real soul, and zero gatekeeping.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.6s ease 0.4s forwards",
            opacity: 0,
          }}
        >
          <button
            className="btn-primary"
            onClick={() => scrollTo("#booking")}
            style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}
          >
            🎤 Book Us
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo("#collab")}
            style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}
          >
            Work With Us
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "fadeIn 0.8s ease 1s forwards",
          opacity: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "2px",
            height: "32px",
            background: "var(--text-dim)",
          }}
        />
      </div>
    </section>
  );
}
