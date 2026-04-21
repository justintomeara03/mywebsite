"use client";

import { useRef, useState } from "react";
import { useInView } from "./_hooks/useInView";

const eventTypes = ["House Party", "Club Night", "Festival", "Private Event", "Corporate Event", "Other"];

type FormState = "idle" | "submitting" | "success";

export default function Booking() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const [form, setForm] = useState({ name: "", email: "", eventType: "", date: "", location: "", details: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Doesn't look like a valid email.";
    if (!form.eventType) e.eventType = "What kind of event is it?";
    if (!form.date) e.date = "When's the event?";
    if (!form.location.trim()) e.location = "Where's it happening?";
    if (!form.details.trim()) e.details = "Give us a few details about the event.";
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
      id="booking"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", borderBottom: "2px solid var(--text)" }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Heading */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Booking</p>
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
            Book{" "}
            <span style={{ color: "var(--accent)" }}>Open Book</span>
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
            Got an event coming up? We&apos;d love to be part of it. Fill in the details below
            and we&apos;ll get back to you. No ghost, promise.
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
                  color: "var(--bg)",
                  fontWeight: 900,
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
                Booking request sent!
              </h3>
              <p style={{ fontFamily: "var(--font-brand)", fontSize: "0.95rem", fontWeight: 500, color: "var(--text-muted)", maxWidth: "340px" }}>
                We&apos;ll be in touch with the details. This is going to be a good one.
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
                  <BookingLabel>Name</BookingLabel>
                  <input type="text" className="form-input" placeholder="Your name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={errBorder("name")} />
                  {errors.name && <FieldError msg={errors.name} />}
                </div>
                <div>
                  <BookingLabel>Email</BookingLabel>
                  <input type="email" className="form-input" placeholder="you@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={errBorder("email")} />
                  {errors.email && <FieldError msg={errors.email} />}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <BookingLabel>Event Type</BookingLabel>
                  <select className="form-input" value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    style={errBorder("eventType")}>
                    <option value="">Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.eventType && <FieldError msg={errors.eventType} />}
                </div>
                <div>
                  <BookingLabel>Event Date</BookingLabel>
                  <input type="date" className="form-input" value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    style={{ ...errBorder("date"), colorScheme: "dark" }} />
                  {errors.date && <FieldError msg={errors.date} />}
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <BookingLabel>Location</BookingLabel>
                <input type="text" className="form-input" placeholder="City, venue, or general area"
                  value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                  style={errBorder("location")} />
                {errors.location && <FieldError msg={errors.location} />}
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <BookingLabel>Tell us about your event</BookingLabel>
                <textarea className="form-input" rows={5}
                  placeholder="Expected crowd size, vibe, set length, anything else we should know..."
                  value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })}
                  style={{ ...errBorder("details"), resize: "vertical", minHeight: "120px" }} />
                {errors.details && <FieldError msg={errors.details} />}
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={formState === "submitting"}
                style={{ width: "100%", fontSize: "1rem", padding: "0.9rem", opacity: formState === "submitting" ? 0.65 : 1 }}
              >
                {formState === "submitting" ? "Sending..." : "Send Booking Request 🎤"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function BookingLabel({ children }: { children: React.ReactNode }) {
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
