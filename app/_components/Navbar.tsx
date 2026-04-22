"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import BookSpeaker from "./BookSpeaker";

const links = ["Members", "Tracks", "Booking", "Collabs"];

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
      <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
        Open Book
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const idFor = (label: string) => label === "Collabs" ? "collab" : label.toLowerCase();

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Desktop nav */}
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 40,
          background: "rgba(14,14,14,0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "2px solid var(--line)",
        }}
        className="nav-desktop"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <div style={{ display: "flex", gap: 4, border: "2px solid var(--ink)", borderRadius: 40, padding: 4, background: "var(--bg-2)" }}>
            {links.map((l) => (
              <PillLink key={l} label={l} onClick={() => scrollTo(idFor(l))} amber={l === "Booking" || l === "Collabs"} />
            ))}
          </div>
          <button onClick={() => setContactOpen(true)} className="btn amber" style={{ padding: "12px 18px", fontSize: 12 }}>
            CONTACT
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 40,
          background: "rgba(14,14,14,0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "2px solid var(--ink)",
        }}
        className="nav-mobile"
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px" }}>
          <Logo />
          <button onClick={() => setOpen((o) => !o)} className="btn amber" style={{ padding: "10px 14px", fontSize: 12, boxShadow: "3px 3px 0 0 var(--ink)" }}>
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
        {open && (
          <div style={{ borderTop: "2px solid var(--ink)", padding: "10px 18px 22px", background: "var(--bg)" }}>
            {links.map((l) => (
              <a
                key={l}
                href={"#" + idFor(l)}
                onClick={(e) => { e.preventDefault(); scrollTo(idFor(l)); }}
                style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "16px 0", borderBottom: "1px solid var(--line)",
                  fontSize: 24, fontWeight: 900, letterSpacing: "-0.01em",
                }}
              >
                <span>{l}</span>
                <span style={{ color: "var(--amber)" }}>→</span>
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        .nav-desktop { display: block !important; }
        .nav-mobile  { display: none !important; }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
}

function PillLink({ label, onClick, amber }: { label: string; onClick: () => void; amber?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "10px 18px", fontSize: 13, fontWeight: 700,
        letterSpacing: "0.04em", textTransform: "uppercase",
        borderRadius: 40, border: "none",
        background: hov ? "var(--amber)" : "transparent",
        color: hov ? "#000" : amber ? "var(--amber)" : "var(--ink)",
        transition: "all .15s", cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
