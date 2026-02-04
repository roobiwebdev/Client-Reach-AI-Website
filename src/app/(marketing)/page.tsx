import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/fade-in";
import { Hero } from "@/components/sections/hero";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { Features } from "@/components/sections/features";
import { Transformation } from "@/components/sections/transformation";
import { Testimonials } from "@/components/sections/testimonials";
import { EfficiencyCallout } from "@/components/sections/efficiency-callout";
import { WeeklyInsiderForm } from "@/components/sections/weekly-insider-form";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clientreach.ai";

export const metadata: Metadata = {
  title:
    "AI Workforce for Businesses | Automated Revenue Growth & Lead Generation",
  description:
    "Scale your business without increasing headcount. Client Reach AI provides AI-powered customer acquisition, automated outreach, and intelligent lead management. Increase revenue, expand capacity, and reduce operational costs with our digital workforce of AI agents.",
  keywords: [
    "AI lead generation",
    "automated outreach",
    "AI workforce for business",
    "business automation",
    "AI receptionist",
    "automated booking",
    "revenue optimization AI",
    "digital workforce",
    "sales AI agents",
    "customer support AI",
  ],
  openGraph: {
    title: "AI Workforce for Businesses | Automated Revenue Growth",
    description:
      "Scale your business without increasing headcount. AI-powered customer acquisition and lead generation.",
    url: baseUrl,
    siteName: "ClientReach.ai",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ClientReach.ai - AI Workforce for Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workforce for Businesses | Automated Revenue Growth",
    description:
      "Scale your business without increasing headcount. AI-powered lead generation and revenue recovery.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

// Dynamically import Guarantee to prevent SSR hydration issues with useScroll
const Guarantee = dynamic(
  () =>
    import("@/components/sections/guarantee").then((mod) => ({
      default: mod.Guarantee,
    })),
  {
    ssr: false,
    loading: () => (
      <section className="relative bg-white dark:bg-dark-bg w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            CLIENT REACH AI GUARANTEE
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-brand-500 font-semibold mb-2">
            See Real Results in 30 Days or Get Your Money Back
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Launch your AI workforce within your business, with no risk.
          </p>
        </div>
      </section>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <ComparisonSection />
      </FadeIn>
      <FadeIn>
        <Features />
      </FadeIn>
      <FadeIn>
        <Guarantee />
      </FadeIn>
      <FadeIn>
        <Transformation />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <EfficiencyCallout />
      </FadeIn>
      <FadeIn>
        <WeeklyInsiderForm />
      </FadeIn>
    </>
  );
}
