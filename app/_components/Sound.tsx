"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

type Track = { id: number; title: string; meta: string };

// Pre-computed so SSR and client produce identical values
const BAR_HEIGHTS: number[][] = Array.from({ length: 10 }, (_, i) =>
  Array.from({ length: 26 }, (_, k) =>
    Math.round((30 + Math.abs(Math.sin((k + i) / 3)) * 70) * 10) / 10
  )
);

const SEED_TRACKS: Track[] = [
  { id: 1, title: "Untitled Demo 01",        meta: "JT · 3:20" },
  { id: 2, title: "Night Route",             meta: "Booker (live set cut) · 5:42" },
  { id: 3, title: "Rooms",                   meta: "JT · 4:05" },
];

export default function Tracks() {
  const [playing, setPlaying] = useState<number | null>(null);
  const tracks = SEED_TRACKS;

  return (
    <section
      id="tracks"
      style={{ padding: "110px 40px", borderBottom: "2px solid var(--ink)", background: "var(--bg-2)" }}
      className="tracks-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHead
          num="02"
          label="TRACKS"
          title={<span>Recent &amp; in progress.</span>}
        />

        <div
          style={{ marginTop: 44, border: "2px solid var(--ink)", borderRadius: 4, overflow: "hidden", background: "var(--bg)" }}
          className="tracks-list"
        >
          {tracks.map((t, i) => {
            const active = playing === t.id;
            return (
              <div
                key={t.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto",
                  alignItems: "center",
                  gap: 20,
                  padding: "18px 22px",
                  borderBottom: i < tracks.length - 1 ? "1px solid var(--line)" : "none",
                  background: active ? "rgba(255,184,0,0.06)" : "transparent",
                  transition: "background .15s",
                }}
                className="track-row"
              >
                <button
                  onClick={() => setPlaying(active ? null : t.id)}
                  style={{
                    width: 44, height: 44,
                    border: "2px solid var(--ink)",
                    background: active ? "var(--amber)" : "transparent",
                    color: active ? "#000" : "var(--ink)",
                    borderRadius: 3, fontWeight: 800, fontSize: 14,
                    boxShadow: active ? "3px 3px 0 0 var(--ink)" : "none",
                    transition: "all .12s",
                  }}
                >
                  {active ? "❚❚" : "▶"}
                </button>

                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {t.title}
                  </div>
                  <div className="label" style={{ fontSize: 11, marginTop: 4 }}>{t.meta}</div>
                </div>

                <div style={{ display: "flex", gap: 2, alignItems: "end", height: 28, width: 120 }} className="waveform-bars">
                  {(BAR_HEIGHTS[i % BAR_HEIGHTS.length]).map((h, k) => (
                    <div
                      key={k}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: active && k < 12 ? "var(--amber)" : "rgba(240,237,228,0.2)",
                      }}
                    />
                  ))}
                </div>

                <span className="mono" style={{ fontSize: 11, color: "var(--ink-dim)" }}>
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}

          {tracks.length === 0 && (
            <div style={{ padding: 40, textAlign: "center", color: "var(--ink-dim)" }}>
              No tracks yet. Upload a preview above.
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .tracks-section { padding: 60px 20px !important; }
          .track-row { grid-template-columns: auto 1fr auto !important; gap: 14px !important; padding: 16px 14px !important; }
          .waveform-bars { display: none !important; }
        }
      `}</style>
    </section>
  );
}
