"use client";

import { useState, useEffect } from "react";
import { formatName, formatEmail } from "./formatters";
import Field from "./Field";

const FORMSPREE_URL = "https://formspree.io/f/xreryrep";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => setStatus("idle"), 300);
  }

  if (!open) return null;

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.72)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 480,
          border: "2px solid var(--ink)",
          borderRadius: 4,
          background: "var(--bg)",
          boxShadow: "8px 8px 0 0 var(--amber)",
          padding: 32,
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 32, height: 32,
            border: "2px solid var(--ink)", borderRadius: 3,
            background: "transparent", color: "var(--ink)",
            fontWeight: 900, fontSize: 14, cursor: "pointer",
            display: "grid", placeItems: "center",
          }}
        >
          ✕
        </button>

        <div className="label" style={{ color: "var(--amber)", marginBottom: 6 }}>GET IN TOUCH</div>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em", marginBottom: 24 }}>
          Say hello.
        </div>

        {status === "sent" ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
            <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 10 }}>Message received.</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-dim)", margin: 0 }}>
              Watch your email for our response — we usually get back within 24–48 hours.
            </p>
            <button onClick={handleClose} className="btn amber" style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
              Close →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Field
              label="Your name"
              value={data.name}
              onChange={(v) => setData({ ...data, name: v })}
              placeholder="First and last"
              format={formatName}
              required
            />
            <Field
              label="Email"
              value={data.email}
              onChange={(v) => setData({ ...data, email: v })}
              placeholder="you@domain.com"
              type="email"
              format={formatEmail}
              required
            />

            <div style={{ padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
              <div className="label" style={{ marginBottom: 8 }}>
                Message <span style={{ color: "var(--amber)", marginLeft: 6 }}>*</span>
              </div>
              <textarea
                rows={5}
                required
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="What's on your mind?"
                style={{ fontSize: 15, lineHeight: 1.5, resize: "vertical", padding: "6px 0", width: "100%" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn amber"
              style={{ width: "100%", justifyContent: "center", marginTop: 20, opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>

            {status === "error" && (
              <p style={{ marginTop: 10, fontSize: 13, color: "#e05c5c", fontWeight: 700 }}>
                Something went wrong — please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
