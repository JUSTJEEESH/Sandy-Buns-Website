import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Photos",
  description:
    "Photos of Sandy Buns Bakery & Cafe in West End, Roatán. See our famous cinnamon buns, Texas benedicts, handmade burgers, and laid-back Caribbean vibes.",
  openGraph: {
    title: "Gallery — Sandy Buns Bakery & Cafe",
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
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-4">
            A taste of Sandy Buns
          </h1>
          <p className="font-body text-charcoal/70 text-lg max-w-xl mx-auto">
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
    </div>
  );
}
