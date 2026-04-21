"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Our Sound",  href: "#sound" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Collab",     href: "#collab" },
  { label: "Booking",    href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: scrolled ? "2px solid var(--text)" : "2px solid transparent",
        transition: "border-color 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 900,
              fontSize: "1.45rem",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Open{" "}
            <span style={{ color: "var(--accent)" }}>Book</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul
          className="hidden-mobile"
          style={{ display: "flex", gap: "0.1rem", listStyle: "none", alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-brand)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  padding: "0.45rem 0.8rem",
                  borderRadius: "var(--radius-sm)",
                  transition: "color 0.15s ease, background 0.15s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = "var(--text)";
                  b.style.background = "rgba(240,237,228,0.07)";
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = "var(--text-muted)";
                  b.style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li style={{ marginLeft: "0.5rem" }}>
            <button
              onClick={() => handleNavClick("#booking")}
              className="btn-primary"
              style={{ padding: "0.45rem 1.2rem", fontSize: "0.88rem" }}
            >
              Book Us
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: "none",
            border: "2px solid var(--text)",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            padding: "0.4rem 0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text)",
                transition: "all 0.25s ease",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" :
                  menuOpen && i === 1 ? "scaleX(0)" : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "340px" : "0",
          transition: "max-height 0.3s ease",
          background: "var(--bg)",
          borderTop: menuOpen ? "2px solid var(--text)" : "none",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.15rem",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-brand)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  padding: "0.65rem 0.5rem",
                  transition: "color 0.15s ease",
                  borderBottom: "1px solid var(--border-muted)",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li style={{ paddingTop: "0.75rem" }}>
            <button
              onClick={() => handleNavClick("#booking")}
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Book Us
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
