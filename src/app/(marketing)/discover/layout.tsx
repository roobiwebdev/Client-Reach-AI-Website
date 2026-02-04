import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clientreach.ai";

export const metadata: Metadata = {
  title: "Free Business Revenue Audit | Unlock Hidden Revenue with AI",
  description:
    "Book a free consultation with Client Reach AI to discover where your business is losing time, money, and potential customers. Get a comprehensive audit showing how AI can fix revenue leaks and increase conversion rates without spending more on marketing.",
  keywords: [
    "free business audit",
    "business revenue audit",
    "AI business consultation",
    "revenue optimization",
    "business ROI analysis",
    "customer acquisition audit",
    "business efficiency audit",
  ],
  openGraph: {
    title: "Free Business Revenue Audit | Unlock Hidden Revenue with AI",
    description:
      "Book a free consultation to discover where your business is losing revenue and how AI can fix it without spending more on marketing.",
    url: `${baseUrl}/discover`,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ClientReach.ai - Free Business Revenue Audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Business Revenue Audit | Unlock Hidden Revenue with AI",
    description:
      "Book a free consultation to discover where your business is losing revenue and how AI can fix it.",
  },
  alternates: {
    canonical: `${baseUrl}/discover`,
  },
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
