import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clientreach.ai";

export const metadata: Metadata = {
  title: "Newsletter | Stay Updated on AI Business Automation",
  description:
    "Subscribe to the Client Reach AI newsletter for the latest insights on AI-powered customer acquisition, business automation, and lead generation strategies.",
  keywords: [
    "business AI newsletter",
    "AI automation news",
    "business automation insights",
    "AI customer acquisition tips",
    "lead generation strategies",
  ],
  openGraph: {
    title: "Newsletter | Stay Updated on AI Business Automation",
    description:
      "Subscribe to the Client Reach AI newsletter for the latest insights on AI-powered revenue growth and business automation.",
    url: `${baseUrl}/newsletter`,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ClientReach.ai - Newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter | Stay Updated on AI Business Automation",
    description:
      "Subscribe to the Client Reach AI newsletter for the latest insights on AI-powered revenue growth.",
  },
  alternates: {
    canonical: `${baseUrl}/newsletter`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
