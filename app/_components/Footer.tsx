"use client";

import BookSpeaker from "./BookSpeaker";

function Logo() {
  return (
    <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", flexShrink: 0 }}>
      <div style={{ width: 36, height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 600 380" width="100%" aria-hidden>
          <g fill="var(--amber)">
            <path d="M 40 100 Q 170 70, 285 150 L 285 290 Q 170 220, 60 240 Z" />
            <path d="M 560 100 Q 430 70, 315 150 L 315 290 Q 430 220, 540 240 Z" />
            <path d="M 270 290 Q 300 310, 330 290 L 328 320 Q 300 332, 272 320 Z" />
          </g>
        </svg>
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
