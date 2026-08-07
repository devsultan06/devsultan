import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Sultan | Full-Stack & Smart Contract Developer",
  description:
    "Full-Stack & Smart Contract Developer experienced in building modern web, mobile, FinTech, and decentralized applications using React, Next.js, Node.js, NestJS, Rust, and Anchor.",
  keywords: [
    "Sultan",
    "Full-Stack Developer",
    "Smart Contract Developer",
    "Solana Developer",
    "Rust",
    "Anchor",
    "Web3 Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "Web Development",
    "Mobile App Development",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Sultan" }],
  creator: "Sultan",
  metadataBase: new URL("https://devsultan.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB", // Updated to GB/US as common
    title: "Sultan | Full-Stack & Smart Contract Developer",
    description:
      "Full-Stack & Smart Contract Developer specializing in React, Next.js, Node.js, NestJS, Rust, and Anchor. Check out my projects and experience.",
    siteName: "Sultan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultan | Full-Stack & Smart Contract Developer",
    description:
      "Full-Stack & Smart Contract Developer specializing in React, Next.js, Node.js, NestJS, Rust, and Anchor.",
    creator: "@devsultan", // Update with your actual twitter handle if different
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/avatar.png", type: "image/png" },
      { url: "/avatar.png", sizes: "any" },
    ],
    apple: [{ url: "/avatar.png", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
