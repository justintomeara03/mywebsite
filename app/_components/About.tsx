"use client";

import SectionHead from "./SectionHead";

const members = [
  { tag: "JT",  name: "JT",     role: "Producer",  bio: "Beats, mixes, and the back end of every release.", photo: "/jt-photo.jpg" },
  { tag: "BK",  name: "Booker", role: "DJ Booker",  bio: "Live sets, club nights, and private events.",     photo: "/booker-photo.jpg" },
];

export default function About() {
  return (
    <section
      id="members"
      style={{ padding: "110px 40px", borderBottom: "2px solid var(--ink)" }}
      className="members-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHead num="01" label="MEMBERS" title={<span>Our Creatives</span>} />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 56 }}
          className="members-grid"
        >
          {members.map((m, i) => (
            <MemberCard key={m.tag} member={m} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .members-section { padding: 60px 20px !important; }
          .members-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function MemberCard({ member, index }: { member: (typeof members)[0]; index: number }) {
  return (
    <div
      className="card"
      style={{ padding: 0, overflow: "hidden", transition: "transform .15s, box-shadow .15s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-3px,-3px)";
        e.currentTarget.style.boxShadow = "7px 7px 0 0 var(--amber)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
    >
      {/* Photo */}
      <div
        style={{ aspectRatio: "4/5", borderBottom: "2px solid var(--ink)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
        <span className="mono" style={{ position: "absolute", top: 12, left: 14, fontSize: 11, color: "var(--amber)", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          0{index + 1}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em" }}>
            {member.name}
          </div>
          <span className="label" style={{ whiteSpace: "nowrap" }}>{member.role}</span>
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.5, color: "var(--ink-dim)" }}>{member.bio}</p>
      </div>
    </div>
  );
}
