import type { Metadata } from "next";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speak your mind",
  description:
    "Speak your mind is a dynamic platform where users can freely share and discuss their opinions on various topics. Honest Opinion provides a space for meaningful conversations and diverse perspectives.",
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
