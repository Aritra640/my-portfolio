import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aritra Chaterjee | Portfolio",
  description: "Hi I am Aritra, this is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
