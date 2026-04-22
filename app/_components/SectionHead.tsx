import { ReactNode } from "react";

export default function SectionHead({
  num,
  label,
  title,
  right,
}: {
  num: string;
  label: string;
  title: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
      <div>
        <div className="label" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span className="num">{num}</span>
          <span style={{ width: 24, height: 2, background: "var(--amber)" }} />
          <span style={{ whiteSpace: "nowrap" }}>{label}</span>
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sans, 'Nunito', sans-serif)",
            fontWeight: 900,
            fontSize: "clamp(38px,6vw,72px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
          }}
        >
          {title}
        </h2>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}
