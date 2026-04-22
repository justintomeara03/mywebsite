"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import Field from "./Field";
import { formatName, formatEmail, ensureHttps } from "./formatters";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbysKTO6gxv-9atRzgfQ38xFdLJ6F-Zb310kTia_xZG9TF4eGiL-6V0jnbquWlmQhChn/exec";

const ROLES = ["Vocalist", "Producer", "Instrumentalist", "Songwriter", "Engineer", "Visual / Video", "Other"];

type Status = "idle" | "sending" | "sent" | "error";

export default function Collab() {
  const [data, setData] = useState({ name: "", email: "", roles: [] as string[], otherRole: "", link: "", note: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet: "Collab",
          row: [new Date().toISOString(), data.name, data.email, data.roles.map(r => r === "Other" ? `Other: ${data.otherRole}` : r).join(", "), data.link, data.note],
        }),
      });
      setStatus("sent");
      setData({ name: "", email: "", roles: [], otherRole: "", link: "", note: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="collab"
      style={{ padding: "110px 40px", borderBottom: "2px solid var(--ink)", background: "var(--bg-2)" }}
      className="collab-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHead num="04" label="COLLABS" title={<span>Want to work together?</span>} />

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: 44,
            border: "2px solid var(--ink)",
            borderRadius: 4,
            background: "var(--bg)",
            boxShadow: "6px 6px 0 0 var(--amber)",
            padding: 28,
          }}
          className="collab-form"
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
            <Field label="Name"  value={data.name}  onChange={(v) => setData({ ...data, name: v })}  placeholder="Your name" format={formatName} />
            <Field label="Email" value={data.email} onChange={(v) => setData({ ...data, email: v })} placeholder="you@domain.com" type="email" required format={formatEmail} />
          </div>

          <div style={{ marginTop: 18 }}>
            <div className="label" style={{ marginBottom: 10 }}>
              I am a… <span style={{ color: "var(--amber)" }}>*</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {ROLES.map((r) => {
                const active = data.roles.includes(r);
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => {
                      const next = active
                        ? data.roles.filter((x) => x !== r)
                        : [...data.roles, r];
                      setData({ ...data, roles: next, otherRole: next.includes("Other") ? data.otherRole : "" });
                    }}
                    style={{
                      padding: "10px 14px",
                      border: "2px solid var(--ink)",
                      borderRadius: 3,
                      background: active ? "var(--amber)" : "transparent",
                      color: active ? "#000" : "var(--ink)",
                      fontWeight: 700, fontSize: 13,
                      boxShadow: active ? "3px 3px 0 0 var(--ink)" : "none",
                      transition: "all .1s", cursor: "pointer",
                    }}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
            {data.roles.includes("Other") && (
              <div style={{ marginTop: 12, borderBottom: "1px solid var(--line)", padding: "6px 0" }}>
                <input
                  type="text"
                  value={data.otherRole}
                  onChange={(e) => setData({ ...data, otherRole: e.target.value })}
                  placeholder="Describe your role"
                  style={{ fontSize: 15, fontWeight: 700, padding: "6px 0", width: "100%" }}
                  autoFocus
                />
              </div>
            )}
            {data.roles.length === 0 && (
              <div className="label" style={{ marginTop: 10, color: "#7a7166" }}>Required — pick at least one.</div>
            )}
          </div>

          <div style={{ marginTop: 18 }}>
            <Field
              label="Link to your work (SoundCloud, reel, portfolio)"
              value={data.link}
              onChange={(v) => setData({ ...data, link: v })}
              onBlur={() => setData((d) => ({ ...d, link: ensureHttps(d.link) }))}
              placeholder="https://"
            />
          </div>

          <div style={{ padding: "14px 0" }}>
            <div className="label" style={{ marginBottom: 8 }}>What you want to do together</div>
            <textarea
              rows={4}
              value={data.note}
              onChange={(e) => setData({ ...data, note: e.target.value })}
              placeholder="A sentence or two is enough."
              style={{ fontSize: 15, lineHeight: 1.5, resize: "vertical", padding: "10px 0", borderBottom: "1px solid var(--line)" }}
            />
          </div>

          <button
            type="submit"
            disabled={data.roles.length === 0 || status === "sending" || status === "sent"}
            className="btn amber"
            style={{ width: "100%", justifyContent: "center", marginTop: 6, opacity: data.roles.length > 0 && status !== "sending" ? 1 : 0.5, cursor: data.roles.length > 0 ? "pointer" : "not-allowed" }}
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "Pitch sent ✓" : "Send pitch →"}
          </button>
          {status === "error" && (
            <p style={{ marginTop: 10, fontSize: 13, color: "#e05c5c", fontWeight: 700 }}>
              Something went wrong — please try again or email us directly.
            </p>
          )}
        </form>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .collab-section { padding: 60px 20px !important; }
          .collab-form { padding: 20px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
