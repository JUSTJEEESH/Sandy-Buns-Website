import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Photos of Sandy Buns Bakery & Cafe",
  description:
    "See what's cooking at Sandy Buns Bakery & Cafe in West End, Roatán. Photos of our famous cinnamon buns, Texas benedicts, brisket biscuits, handmade burgers, and laid-back island vibes.",
  openGraph: {
    title: "Gallery — Sandy Buns Bakery & Cafe | West End, Roatán",
    description:
      "Photos of our famous cinnamon buns, Texas benedicts, handmade burgers, and West End vibes.",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-driftwood mb-4">
            A taste of Sandy Buns
          </h1>
          <p className="font-body text-text-body/70 text-lg max-w-xl mx-auto">
            From the kitchen to the patio — here&apos;s what it looks like when
            everything&apos;s made fresh and served with love.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <FadeInSection>
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-container px-6">
            <GalleryGrid />
          </div>
        </section>
      </FadeInSection>

      {/* Internal Links */}
      <FadeInSection>
        <section className="py-12">
          <div className="mx-auto max-w-container px-6 text-center">
            <p className="font-body text-text-body mb-4">
              Hungry yet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-block bg-ocean text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-ocean-dark transition"
              >
                See the Menu
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-driftwood text-driftwood rounded-full px-8 py-3 font-body font-semibold hover:bg-driftwood hover:text-white transition"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
