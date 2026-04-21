"use client";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Our Sound",  href: "#sound" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Collab",     href: "#collab" },
  { label: "Booking",    href: "#booking" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "SoundCloud",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.175 12.225c-.15 0-.3.15-.3.3l-.45 2.55.45 2.4c0 .15.15.3.3.3s.3-.15.3-.3l.525-2.4-.525-2.55c0-.15-.15-.3-.3-.3zm1.875-.6c-.15 0-.3.15-.3.3l-.6 3.15.6 3c0 .15.15.3.3.3s.3-.15.3-.3l.675-3-.675-3.15c0-.15-.15-.3-.3-.3zm1.95-.375c-.2 0-.375.175-.375.375L4.1 15.075l.525 2.85c0 .2.175.375.375.375s.375-.175.375-.375l.6-2.85-.6-2.85c0-.2-.175-.375-.375-.375zM11.95 9c-.425 0-.85.075-1.25.2-.275-3.025-2.8-5.375-5.9-5.375-1.6 0-3.025.625-4.1 1.65-.425.4-.65.9-.65 1.45v9.6c0 .525.425.95.95.95H11.95c2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 01-.857.208c-2.348-1.435-5.304-1.759-8.785-.964a.623.623 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.856zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.793c3.533-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.612z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "2px solid var(--text)",
        padding: "4rem 1.5rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: 900,
                fontSize: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: "0.6rem",
                lineHeight: 1,
              }}
            >
              Open{" "}
              <span style={{ color: "var(--accent)" }}>Book</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontSize: "0.88rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: "240px",
                marginBottom: "1.5rem",
              }}
            >
              A creative collective making music with no filters and no limits. Come as you are.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "var(--radius-sm)",
                    background: "transparent",
                    border: "2px solid var(--border-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "color 0.15s ease, background 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--bg)";
                    el.style.background = "var(--accent)";
                    el.style.borderColor = "var(--accent)";
                    el.style.transform = "translate(-2px, -2px)";
                    el.style.boxShadow = "var(--shadow-sm)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--text-muted)";
                    el.style.background = "transparent";
                    el.style.borderColor = "var(--border-muted)";
                    el.style.transform = "none";
                    el.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: 800,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.1rem",
                borderBottom: "2px solid var(--accent)",
                paddingBottom: "0.4rem",
                display: "inline-block",
              }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-brand)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      padding: 0,
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: 800,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.1rem",
                borderBottom: "2px solid var(--accent)",
                paddingBottom: "0.4rem",
                display: "inline-block",
              }}
            >
              Get Involved
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                className="btn-primary"
                onClick={() => scrollTo("#booking")}
                style={{ justifyContent: "flex-start", width: "fit-content" }}
              >
                Book Us
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo("#collab")}
                style={{ justifyContent: "flex-start", width: "fit-content" }}
              >
                Collab With Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "2px solid var(--border-muted)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-brand)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-dim)" }}>
            Open Book Creative Collective © 2025
          </p>
          <p style={{ fontFamily: "var(--font-brand)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-dim)" }}>
            Made with love and loud music 🎶
          </p>
        </div>
      </div>
    </footer>
  );
}
