import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul-cyber.vercel.app"),

  title: {
    default: "Rahul Singh | Cybersecurity Analyst",
    template: "%s | Rahul Singh",
  },

  description:
    "Cybersecurity Analyst portfolio showcasing SOC operations, Splunk, Wazuh, Microsoft Sentinel, Python, Networking, Incident Response, Security Projects and Certifications.",

  keywords: [
    "Rahul Singh",
    "Cybersecurity",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "SOC",
    "Splunk",
    "Wazuh",
    "Microsoft Sentinel",
    "SIEM",
    "Python",
    "Networking",
    "Incident Response",
    "Threat Detection",
    "Blue Team",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rahul Singh",
      url: "https://rahul-cyber.vercel.app",
    },
  ],

  creator: "Rahul Singh",

  publisher: "Rahul Singh",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rahul Singh | Cybersecurity Analyst",
    description:
      "Cybersecurity portfolio featuring SOC projects, SIEM monitoring, Splunk, Wazuh, Microsoft Sentinel, Python, Networking, and professional certifications.",

    url: "https://rahul-cyber.vercel.app",

    siteName: "Rahul Singh Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Singh Cybersecurity Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rahul Singh | Cybersecurity Analyst",

    description:
      "Cybersecurity portfolio showcasing SOC projects, SIEM tools, certifications, networking, and security skills.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}