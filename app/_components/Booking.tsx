"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import Field from "./Field";
import { formatPhone, formatName, formatEmail, formatDate } from "./formatters";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwIFCU8XbPMGhRmt0CYfJ8GoaBSz-IfeERI8j-ALxZ5ZvXG2lNm0OlKnm-UPBEeY0LYoA/exec";

type Status = "idle" | "sending" | "sent" | "error";

export default function Booking() {
  const [data, setData] = useState({ name: "", email: "", phone: "", date: "", notes: "" });
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
          sheet: "Booking",
          row: [new Date().toISOString(), data.name, data.email, data.phone, data.date, data.notes],
        }),
      });
      setStatus("sent");
      setData({ name: "", email: "", phone: "", date: "", notes: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="booking"
      style={{ padding: "110px 40px", borderBottom: "2px solid var(--ink)" }}
      className="booking-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHead
          num="03"
          label="BOOK BOOKER"
          title={<span>Book our <span style={{ color: "var(--amber)" }}>DJ</span>.</span>}
        />

        <div
          style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, marginTop: 50, alignItems: "start" }}
          className="booking-grid"
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              border: "2px solid var(--ink)",
              borderRadius: 4,
              background: "var(--bg-2)",
              boxShadow: "6px 6px 0 0 var(--amber)",
              padding: 28,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
              <Field label="Your name" value={data.name}  onChange={(v) => setData({ ...data, name: v })}  placeholder="First and last" format={formatName} />
              <Field label="Email"     value={data.email} onChange={(v) => setData({ ...data, email: v })} placeholder="you@domain.com" type="email" format={formatEmail} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 0 }} className="form-row">
              <Field label="Phone" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} placeholder="(000) 000-0000" type="tel" format={formatPhone} />
              <Field label="Event Date"  value={data.date}  onChange={(v) => setData({ ...data, date: v })}  placeholder="MM-DD-YYYY" format={formatDate} />
            </div>

            <div style={{ padding: "14px 0" }}>
              <div className="label" style={{ marginBottom: 8 }}>Notes</div>
              <textarea
                rows={4}
                value={data.notes}
                onChange={(e) => setData({ ...data, notes: e.target.value })}
                placeholder="Venue, expected attendance, set length, budget."
                style={{ fontSize: 15, lineHeight: 1.5, resize: "vertical", padding: "10px 0", borderBottom: "1px solid var(--line)" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn amber"
              style={{ width: "100%", justifyContent: "center", marginTop: 10, opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Request sent ✓" : "Send request →"}
            </button>
            {status === "error" && (
              <p style={{ marginTop: 10, fontSize: 13, color: "#e05c5c", fontWeight: 700 }}>
                Something went wrong — please try again or email us directly.
              </p>
            )}
          </form>

          {/* Info cards */}
          <div>
            <div className="card" style={{ padding: 22 }}>
              <div className="label" style={{ marginBottom: 12 }}>WHAT BOOKER PLAYS</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-dim)" }}>
                House, UKG, breaks, and whatever the room asks for. 1–4 hour sets, open to b2b.
              </p>
            </div>

            <div className="card" style={{ padding: 22, marginTop: 16 }}>
              <div className="label" style={{ marginBottom: 12 }}>BASICS</div>
              {[
                ["Set length",  "1–4 hrs"],
                ["Travel",      "Based San Jose"],
                ["Lead time",   "≥ 3 weeks preferred"],
                ["Contact",     "booker@openbook"],
              ].map(([k, v], i, a) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i < a.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <span className="label">{k}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .booking-section { padding: 60px 20px !important; }
          .booking-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .booking-grid form { padding: 20px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
