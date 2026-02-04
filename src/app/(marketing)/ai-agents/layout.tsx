import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clientreach.ai";

export const metadata: Metadata = {
  title: "AI Agents for Businesses | Receptionist & Call Analysis Agents",
  description:
    "Unlock hidden revenue in your business with Client Reach AI's AI Receptionist and Call Analysis Agents. Recover lost leads, automate enquiries, and increase conversion rates for growing businesses.",
  keywords: [
    "AI receptionist",
    "AI call analysis",
    "automated booking",
    "business AI agents",
    "enquiry automation",
    "missed call recovery",
    "AI lead capture",
    "business automation",
    "digital workforce",
  ],
  openGraph: {
    title: "AI Agents for Businesses | Receptionist & Call Analysis Agents",
    description:
      "Unlock hidden revenue in your business with AI Receptionist and Call Analysis Agents. Recover lost leads and automate enquiries.",
    url: `${baseUrl}/ai-agents`,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ClientReach.ai - AI Agents for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents for Businesses | Receptionist & Call Analysis Agents",
    description:
      "Unlock hidden revenue in your business with AI Receptionist and Call Analysis Agents.",
  },
  alternates: {
    canonical: `${baseUrl}/ai-agents`,
  },
};

export default function AiAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
