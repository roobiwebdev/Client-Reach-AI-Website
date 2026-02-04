import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clientreach.ai";

export const metadata: Metadata = {
  title: "About Us | ClientReach.ai Founders & Mission",
  description:
    "Meet the founders of Client Reach AI - Mahbhir Mahmud and Alfie Tilson. Learn about our mission to help businesses unlock the full power of AI for customer acquisition, lead generation, and automated business management.",
  keywords: [
    "Client Reach AI founders",
    "AI business founders",
    "Mahbhir Mahmud",
    "Alfie Tilson",
    "business AI mission",
    "AI automation vision",
    "business AI company",
    "business automation",
  ],
  openGraph: {
    title: "About Us | Client Reach AI Founders & Mission",
    description:
      "Meet the founders of Client Reach AI and learn about our mission to help businesses unlock the full power of AI for customer acquisition and lead generation.",
    url: `${baseUrl}/about`,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ClientReach.ai - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Client Reach AI Founders & Mission",
    description:
      "Meet the founders of Client Reach AI and learn about our mission to help businesses unlock the full power of AI.",
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
