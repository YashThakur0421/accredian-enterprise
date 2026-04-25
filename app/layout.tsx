import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce at Scale",
  description: "The complete operating system for enterprise learning. Custom programs, live mentorship, and real-time analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
