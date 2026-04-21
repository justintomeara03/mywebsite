"use client";

import { useRef } from "react";
import { useInView } from "./_hooks/useInView";

const services = [
  {
    emoji: "🎛️",
    number: "01",
    title: "DJ Sets",
    description:
      "From intimate club nights to festival main stages — we bring the energy every single time. Expect a journey, not a playlist. We read the room, we feel the crowd, and we keep things moving.",
    tags: ["Club Nights", "Festivals", "Private Events", "Parties"],
  },
  {
    emoji: "🎚️",
    number: "02",
    title: "Music Production",
    description:
      "Original beats, full track production, custom instrumentals — whatever the project needs. We like to experiment, which means your music won't sound like a template. Every track is built from scratch.",
    tags: ["Original Beats", "Full Productions", "Instrumentals", "Custom Tracks"],
  },
  {
    emoji: "🤝",
    number: "03",
    title: "Collaborations",
    description:
      "Open Book means open doors. We love working with vocalists, other producers, visual artists — honestly, anyone who has something interesting to bring to the table. Hit us up.",
    tags: ["Vocalists", "Artists", "Producers", "Creatives"],
  },
  {
    emoji: "✨",
    number: "04",
    title: "Events",
    description:
      "We don't just show up, we show out. Whether we're headlining or helping put together a night from scratch, we care about the experience as much as the music itself.",
    tags: ["Curating", "Headlining", "Residencies", "Pop-ups"],
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="what-we-do"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", borderBottom: "2px solid var(--text)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Heading */}
        <div
          style={{
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>What we do</p>
          <h2
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            We do a lot of{" "}
            <span style={{ color: "var(--accent)" }}>things</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              maxWidth: "460px",
            }}
          >
            Turns out when you genuinely love music, you end up doing all kinds of stuff around it.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card"
              style={{
                padding: "1.75rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, box-shadow 0.15s ease, transform 0.15s ease`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translate(-3px, -3px)";
                el.style.boxShadow = "7px 7px 0px var(--accent)";
                el.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = inView ? "translateY(0)" : "translateY(32px)";
                el.style.boxShadow = "var(--shadow)";
                el.style.borderColor = "var(--text)";
              }}
            >
              {/* Number + emoji row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-brand)",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: "var(--accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.number}
                </span>
                <span style={{ fontSize: "1.6rem" }}>{s.emoji}</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 900,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-brand)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-brand)",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      border: "2px solid var(--accent)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.15rem 0.55rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
