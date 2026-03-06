import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Sultan | Full-Stack JavaScript Developer",
  description:
    "Full-Stack JavaScript Developer experienced in building modern web and mobile applications using React, Next.js, Node.js, NestJS, and React Native. Focused on performance, maintainability, and clean user-centered interfaces.",
  keywords: [
    "Sultan",
    "Full-Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "React Native",
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
    title: "Sultan | Full-Stack JavaScript Developer",
    description:
      "Full-Stack JavaScript Developer specializing in React, Next.js, Node.js, and NestJS. Check out my projects and experience.",
    siteName: "Sultan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultan | Full-Stack JavaScript Developer",
    description:
      "Full-Stack JavaScript Developer specializing in React, Next.js, Node.js, and NestJS.",
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
