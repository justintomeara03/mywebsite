"use client";

import { useRef, useState } from "react";
import { useInView } from "./_hooks/useInView";

const collabTypes = [
  "Looking for Beats",
  "Vocalist / Singer Collab",
  "Producer Collab",
  "Mixing & Mastering",
  "Something Else",
];

type FormState = "idle" | "submitting" | "success";

export default function Collab() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const [form, setForm] = useState({ name: "", email: "", type: "", project: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "What should we call you?";
    if (!form.email.trim()) e.email = "We need an email to get back to you.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email doesn't look right.";
    if (!form.type) e.type = "Pick an option that fits.";
    if (!form.project.trim()) e.project = "Tell us a bit about what you're working on.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  const errBorder = (field: keyof typeof form): React.CSSProperties =>
    errors[field] ? { borderColor: "var(--accent)" } : {};

  return (
    <section
      id="collab"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--surface)", borderBottom: "2px solid var(--text)" }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Heading */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Collab</p>
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
            Let&apos;s make{" "}
            <span style={{ color: "var(--accent)" }}>something</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              maxWidth: "500px",
              lineHeight: 1.7,
            }}
          >
            Vocalist, producer, visual artist, or something we haven&apos;t even thought of — we&apos;re
            genuinely open to all kinds of collabs. If you&apos;ve got something interesting going on,
            we want to hear about it.
          </p>
        </div>

        {/* Form card */}
        <div
          className="card"
          style={{
            padding: "2.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s",
          }}
        >
          {formState === "success" ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
                animation: "fadeUp 0.5s ease forwards",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "var(--accent)",
                  border: "2px solid var(--text)",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  boxShadow: "var(--shadow)",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 900,
                  fontSize: "1.6rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                We got your message!
              </h3>
              <p style={{ fontFamily: "var(--font-brand)", fontSize: "0.95rem", fontWeight: 500, color: "var(--text-muted)", maxWidth: "340px" }}>
                Sick — we&apos;ll be in touch soon. Keep making cool things.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <Label>Name</Label>
                  <input type="text" className="form-input" placeholder="Your name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={errBorder("name")} />
                  {errors.name && <FieldError msg={errors.name} />}
                </div>
                <div>
                  <Label>Email</Label>
                  <input type="email" className="form-input" placeholder="you@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={errBorder("email")} />
                  {errors.email && <FieldError msg={errors.email} />}
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <Label>What are you looking for?</Label>
                <select className="form-input" value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  style={errBorder("type")}>
                  <option value="">Pick an option</option>
                  {collabTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.type && <FieldError msg={errors.type} />}
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <Label>Tell us about your project</Label>
                <textarea className="form-input" rows={5}
                  placeholder="What are you working on? What kind of vibe are you going for? The more you tell us, the better..."
                  value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
                  style={{ ...errBorder("project"), resize: "vertical", minHeight: "120px" }} />
                {errors.project && <FieldError msg={errors.project} />}
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={formState === "submitting"}
                style={{ width: "100%", fontSize: "1rem", padding: "0.9rem", opacity: formState === "submitting" ? 0.65 : 1 }}
              >
                {formState === "submitting" ? "Sending..." : "Send it over 🚀"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: "block",
      fontFamily: "var(--font-brand)",
      fontSize: "0.8rem",
      fontWeight: 800,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "0.4rem",
    }}>
      {children}
    </label>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p style={{
      color: "var(--accent)",
      fontSize: "0.78rem",
      fontWeight: 700,
      marginTop: "0.3rem",
      fontFamily: "var(--font-brand)",
    }}>
      {msg}
    </p>
  );
}
