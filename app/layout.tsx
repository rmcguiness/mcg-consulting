import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCG Consulting - Web Development & Digital Solutions",
  description: "Professional web consulting services for modern businesses",
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

