"use client";

function Logo() {
  return (
    <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", flexShrink: 0 }}>
      <div
        style={{
          width: 36, height: 36,
          border: "2px solid var(--ink)",
          borderRadius: 4,
          background: "var(--amber)",
          display: "grid", placeItems: "center",
          color: "#000", fontWeight: 900, fontSize: 15,
          boxShadow: "3px 3px 0 0 var(--ink)",
        }}
      >
        OB
      </div>
      <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-0.01em" }}>Open Book</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ padding: "56px 40px 32px", background: "#0a0a0a", borderTop: "2px solid var(--ink)" }} className="footer-el">
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <Logo />
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".08em", textTransform: "uppercase" }}>
          © Open Book · JT &amp; Booker · {new Date().getFullYear()}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .footer-el { padding: 36px 20px 24px !important; }
        }
      `}</style>
    </footer>
  );
}
