import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libre — AI-First Website Publishing",
  description:
    "Libre is an AI-first website publishing launchpad. Beautiful editorial experience, deployable everywhere.",
  openGraph: {
    title: "Libre — AI-First Website Publishing",
    description:
      "Libre is an AI-first website publishing launchpad. Beautiful editorial experience, deployable everywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
