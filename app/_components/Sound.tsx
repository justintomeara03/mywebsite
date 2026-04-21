"use client";

import { useRef } from "react";
import { useInView } from "./_hooks/useInView";

export default function Sound() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="sound"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--surface)", borderBottom: "2px solid var(--text)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Heading */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Latest Drops</p>
          <h2
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}
          >
            Our{" "}
            <span style={{ color: "var(--accent)" }}>Sound</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-muted)",
            }}
          >
            This is what we&apos;ve been working on. Turn it up.
          </p>
        </div>

        {/* Embeds grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "1.75rem",
          }}
        >
          {/* SoundCloud embed */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <div className="card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M1.175 12.225c-.15 0-.3.15-.3.3l-.45 2.55.45 2.4c0 .15.15.3.3.3s.3-.15.3-.3l.525-2.4-.525-2.55c0-.15-.15-.3-.3-.3zm1.875-.6c-.15 0-.3.15-.3.3l-.6 3.15.6 3c0 .15.15.3.3.3s.3-.15.3-.3l.675-3-.675-3.15c0-.15-.15-.3-.3-.3zm1.95-.375c-.2 0-.375.175-.375.375L4.1 15.075l.525 2.85c0 .2.175.375.375.375s.375-.175.375-.375l.6-2.85-.6-2.85c0-.2-.175-.375-.375-.375zM11.95 9c-.425 0-.85.075-1.25.2-.275-3.025-2.8-5.375-5.9-5.375-1.6 0-3.025.625-4.1 1.65-.425.4-.65.9-.65 1.45v9.6c0 .525.425.95.95.95H11.95c2.2 0 4-1.8 4-4s-1.8-4-4-4z" fill="#ff5500" />
                </svg>
                <span style={{ fontFamily: "var(--font-brand)", fontWeight: 800, fontSize: "0.9rem", color: "#ff5500" }}>
                  SoundCloud
                </span>
              </div>

              {/* ── paste your SoundCloud embed link here ── */}
              {/* Replace the placeholder div below with an <iframe> tag.
                  Example:
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=YOUR_TRACK_URL&color=%23ffb800&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  />
              */}
              <div
                style={{
                  width: "100%",
                  height: "166px",
                  border: "2px dashed rgba(255,85,0,0.35)",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "rgba(255,85,0,0.55)",
                  fontFamily: "var(--font-brand)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}
              >
                <span style={{ fontSize: "1.6rem" }}>🎵</span>
                <span>SoundCloud embed goes here</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>
                  // paste your SoundCloud embed link here
                </span>
              </div>
            </div>
          </div>

          {/* Spotify embed */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s",
            }}
          >
            <div className="card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 01-.857.208c-2.348-1.435-5.304-1.759-8.785-.964a.623.623 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.856zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.793c3.533-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.612z" fill="#1DB954" />
                </svg>
                <span style={{ fontFamily: "var(--font-brand)", fontWeight: 800, fontSize: "0.9rem", color: "#1DB954" }}>
                  Spotify
                </span>
              </div>

              {/* ── paste your Spotify embed link here ── */}
              {/* Replace the placeholder div below with an <iframe> tag.
                  Example:
                  <iframe
                    style={{ borderRadius: "6px" }}
                    src="https://open.spotify.com/embed/track/YOUR_TRACK_ID?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
              */}
              <div
                style={{
                  width: "100%",
                  height: "166px",
                  border: "2px dashed rgba(29,185,84,0.35)",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "rgba(29,185,84,0.55)",
                  fontFamily: "var(--font-brand)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}
              >
                <span style={{ fontSize: "1.6rem" }}>🎧</span>
                <span>Spotify embed goes here</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>
                  // paste your Spotify embed link here
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Extra track slots */}
        <div
          style={{
            marginTop: "1.75rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s",
          }}
        >
          <div className="card" style={{ padding: "1.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1rem",
              }}
            >
              More tracks
            </p>

            {/* ── Add more SoundCloud or Spotify embeds below ── */}
            {/* Duplicate the iframe examples above and paste them here */}
            <div
              style={{
                width: "100%",
                height: "72px",
                border: "2px dashed var(--border-muted)",
                borderRadius: "var(--radius)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "var(--text-dim)",
                fontFamily: "var(--font-brand)",
                fontSize: "0.82rem",
                fontWeight: 700,
              }}
            >
              <span>🎶</span>
              <span>Drop more embeds here — as many tracks as you like</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
