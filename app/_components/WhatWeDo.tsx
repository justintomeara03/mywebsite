"use client";

import { useState } from "react";
import { SectionHeader } from "./Primitives";

const services = [
  {
    num: "S.01",
    title: "Producing",
    body: "We build records from idea to master. Sessions are long-form; decisions stay reversible until the final mix.",
    items: ["Artist development", "Full production", "In-studio writing", "Session players"],
  },
  {
    num: "S.02",
    title: "Mixing & Mastering",
    body: "Analog-leaning mixes out of Studio A. Stereo and immersive masters delivered on tape, DSD or digital.",
    items: ["Mix (stereo / Atmos)", "Master (tape or digital)", "Stem mastering", "Vinyl pre-masters"],
  },
  {
    num: "S.03",
    title: "Releases",
    body: "We self-release through our label arm. Short runs on vinyl and tape, unlimited digital — no perpetual rights contracts.",
    items: ["Distribution", "Vinyl · Tape runs", "Licensing", "Publishing admin"],
  },
  {
    num: "S.04",
    title: "Live & Residencies",
    body: "A rotating live show and curated residencies in intimate rooms. We book our own nights and host invited artists.",
    items: ["Live shows", "Residencies", "Curation", "Showcase slots"],
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="work"
      style={{ position: "relative", background: "var(--bg)", borderBottom: "2px solid var(--ink)", padding: "120px 40px" }}
      className="wwd-section"
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader num="03" eyebrow="WHAT WE DO" title={<span>Four practices.<br />One studio floor.</span>} />

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, marginTop: 80, alignItems: "start" }} className="wwd-grid">
          {/* Accordion */}
          <div style={{ borderTop: "2px solid var(--ink)" }}>
            {services.map((s, i) => {
              const open = active === i;
              return (
                <div key={s.num} style={{ borderBottom: "2px solid var(--ink)" }}>
                  <button
                    onClick={() => setActive(open ? -1 : i)}
                    style={{
                      width: "100%", padding: "32px 8px",
                      background: "transparent", border: "none", color: "var(--ink)",
                      display: "flex", alignItems: "center", gap: 20,
                      cursor: "pointer", textAlign: "left", transition: "background .15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,184,0,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span className="num" style={{ fontSize: 13, width: 52, flexShrink: 0 }}>{s.num}</span>
                    <span
                      style={{
                        flex: 1,
                        fontFamily: "var(--font-sans)",
                        fontWeight: 900,
                        fontSize: "clamp(28px,4vw,50px)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1,
                        color: open ? "var(--amber)" : "var(--ink)",
                      }}
                    >
                      {s.title}
                    </span>
                    <span
                      style={{
                        width: 44, height: 44,
                        border: "2px solid var(--ink)",
                        borderRadius: 3,
                        display: "grid", placeItems: "center",
                        background: open ? "var(--amber)" : "transparent",
                        color: open ? "#000" : "var(--ink)",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform .25s, background .2s",
                        flexShrink: 0, fontSize: 18, fontWeight: 800,
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div style={{ maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
                    <div style={{ padding: "0 8px 32px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="wwd-panel">
                      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "var(--ink-dim)" }}>{s.body}</p>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        {s.items.map((it) => (
                          <li key={it} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--line)", fontSize: 14 }}>
                            <span style={{ color: "var(--amber)" }}>—</span>{it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky right panel */}
          <div style={{ position: "sticky", top: 100 }} className="wwd-sticky">
            <div className="stripes" style={{ height: 380, border: "2px solid var(--ink)", borderRadius: 4, boxShadow: "6px 6px 0 0 var(--amber)", position: "relative" }}>
              <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 8, alignItems: "center" }}>
                <span className="label">IMAGE</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--amber)" }}>STUDIO A · LIVE ROOM</span>
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                <div className="serif" style={{ fontSize: 24, fontStyle: "italic" }}>"Cut to tape, always."</div>
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-dim)" }}>03 / 07</span>
              </div>
            </div>

            <div className="card" style={{ marginTop: 20, padding: 24 }}>
              <div className="label" style={{ marginBottom: 10 }}>ENGAGEMENT FORMATS</div>
              {[
                ["Weekly residency", "Monthly"],
                ["Full record", "8–14 wks"],
                ["Mix only", "2–4 wks"],
                ["One-off session", "2 days"],
              ].map(([k, v], i, arr) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <span style={{ fontWeight: 700 }}>{k}</span>
                  <span className="mono" style={{ fontSize: 13, color: "var(--amber)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .wwd-section { padding: 64px 20px !important; }
          .wwd-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .wwd-sticky { position: static !important; }
          .wwd-sticky > div:first-child { height: 240px !important; }
          .wwd-panel { grid-template-columns: 1fr !important; }
          button > span[style*="clamp"] { font-size: 32px !important; }
          button > span:first-of-type { width: auto !important; }
        }
      `}</style>
    </section>
  );
}
