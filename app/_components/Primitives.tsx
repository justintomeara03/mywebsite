"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

export function SectionHeader({
  num,
  eyebrow,
  title,
  right,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
      <div>
        <div className="label" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span className="num">{num}</span>
          <span style={{ width: 24, height: 2, background: "var(--amber)" }} />
          <span>{eyebrow}</span>
        </div>
        <h2
          className="serif"
          style={{ margin: 0, fontSize: "clamp(42px,6vw,84px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--ink)", fontStyle: "italic" }}
        >
          {title}
        </h2>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}

export function Tag({ children, amber }: { children: ReactNode; amber?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        border: "2px solid " + (amber ? "var(--amber)" : "var(--ink)"),
        color: amber ? "var(--amber)" : "var(--ink)",
        borderRadius: 3,
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
        background: amber ? "rgba(255,184,0,0.06)" : "transparent",
      }}
    >
      {children}
    </span>
  );
}

export function BoxStat({ k, v, suffix }: { k: string; v: string; suffix?: string }) {
  return (
    <div style={{ padding: "22px 20px", border: "2px solid var(--ink)", borderRadius: 4, background: "var(--bg-2)" }}>
      <div className="label" style={{ marginBottom: 8 }}>{k}</div>
      <div style={{ fontFamily: "var(--font-sans, 'Nunito', sans-serif)", fontSize: 44, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>
        {v}<span style={{ color: "var(--amber)" }}>{suffix}</span>
      </div>
    </div>
  );
}

export function Magnetic({ strength = 14, children, style }: { strength?: number; children: ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }
  return (
    <span onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: "inline-block", ...style }}>
      <span ref={ref} style={{ display: "inline-block", transition: "transform .2s cubic-bezier(.2,.7,.2,1)" }}>
        {children}
      </span>
    </span>
  );
}

export function useInView(opts: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.2, ...opts }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

export function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div style={{ padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="label" style={{ marginBottom: 6 }}>{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ fontSize: 17, fontWeight: 700, padding: "6px 0" }}
      />
    </div>
  );
}
