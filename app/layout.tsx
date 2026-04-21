import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Book — Creative Collective",
  description: "Open Book is a creative collective built around a DJ and music producer. High-energy sets, original productions, and open-minded collabs.",
  keywords: ["Open Book", "creative collective", "DJ", "music producer", "house music", "EDM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
