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
    "Splunk",
    "Wazuh",
    "Microsoft Sentinel",
    "Python",
    "Networking",
    "Incident Response",
    "SIEM",
    "Threat Detection",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rahul Singh",
    },
  ],

  creator: "Rahul Singh",

  openGraph: {
    title: "Rahul Singh | Cybersecurity Analyst",
    description:
      "Cybersecurity portfolio featuring SOC projects, SIEM monitoring, Splunk, Wazuh, Microsoft Sentinel, Python, and certifications.",
    url: "https://rahul-cyber.vercel.app",
    siteName: "Rahul Singh Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Singh | Cybersecurity Analyst",
    description:
      "Cybersecurity portfolio showcasing SOC projects, SIEM tools, certifications, and security skills.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}