"use client";

import { useRef } from "react";
import { useInView } from "./_hooks/useInView";

const members = [
  {
    role: "The DJ",
    name: "DJ Placeholder",
    emoji: "🎧",
    bio: "On the decks, they're in their element. Known for reading a room like a book and flipping the energy at exactly the right moment, they bring a mix of house, tech-house, and anything else that just *works*. No two sets sound the same — that's kind of the whole point.",
    tags: ["House", "Tech-House", "Club Nights", "Festivals"],
  },
  {
    role: "The Producer",
    name: "Producer Placeholder",
    emoji: "🎹",
    bio: "Behind every track is a whole bunch of late nights, weird samples, and a stubborn refusal to make music that sounds like everyone else. They handle the beats, the arrangements, the weird synths — basically all the stuff that makes a song feel like *something*.",
    tags: ["Original Beats", "Sound Design", "Mixing", "Mastering"],
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", borderBottom: "2px solid var(--text)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Heading block */}
        <div
          style={{
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Who we are</p>
          <h2
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              color: "var(--text)",
            }}
          >
            Two artists,{" "}
            <span style={{ color: "var(--accent)" }}>one vision</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1.05rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Open Book started because we wanted a space where music could be made and shared
            without any of the usual industry nonsense. We&apos;re a DJ and a producer
            who genuinely love what we do — and we think that comes through in everything we put out.
          </p>
        </div>

        {/* Member cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {members.map((member, i) => (
            <div
              key={member.role}
              className="card"
              style={{
                padding: "2.25rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              {/* Avatar block */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: i === 0 ? "var(--accent)" : "var(--bg)",
                  border: "2px solid var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  borderRadius: "var(--radius)",
                }}
              >
                {member.emoji}
              </div>

              {/* Role label */}
              <span
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  display: "inline-block",
                  marginBottom: "0.5rem",
                  borderBottom: "2px solid var(--accent)",
                  paddingBottom: "1px",
                }}
              >
                {member.role}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                  color: "var(--text)",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-brand)",
                  fontSize: "0.93rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                {member.bio}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-brand)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      border: "2px solid var(--border-muted)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.2rem 0.65rem",
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
