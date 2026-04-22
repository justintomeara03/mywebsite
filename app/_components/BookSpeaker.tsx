export default function BookSpeaker({ size = 480 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 600 380"
      width="100%"
      style={{ maxWidth: size, display: "block" }}
      aria-label="Open Book logo"
      role="img"
    >
      <g fill="var(--ink)">
        <path d="M 40 100 Q 170 70, 285 150 L 285 290 Q 170 220, 60 240 Z" />
        <path d="M 560 100 Q 430 70, 315 150 L 315 290 Q 430 220, 540 240 Z" />
        <path d="M 270 290 Q 300 310, 330 290 L 328 320 Q 300 332, 272 320 Z" />
      </g>
    </svg>
  );
}
