import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import MenuCategorySection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import { menuSections, popularPicks } from "@/lib/menuData";

export const metadata: Metadata = {
  title: "Menu — Breakfast, Burgers & Bakery | Served All Day",
  description:
    "Full menu for Sandy Buns Bakery & Cafe in West End, Roatán. Famous cinnamon buns, Texas benedicts, smoked brisket biscuits, handmade burgers & more. Breakfast served all day, 8am–3pm.",
  openGraph: {
    title: "Menu — Sandy Buns Bakery & Cafe | West End, Roatán",
    description:
      "Famous cinnamon buns, Texas benedicts, smoked brisket, handmade burgers & more. Breakfast served all day in West End, Roatán.",
  },
};

const sectionEmojis: Record<string, string> = {
  Breakfast: "🍳",
  Lunch: "🍔",
  Beverages: "☕",
  Bakery: "🧁",
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Intro */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-driftwood mb-4">
            Breakfast, Bakery & Comfort Food
          </h1>
          <p className="font-body text-text-body/70 text-lg max-w-xl mx-auto">
            Everything is made fresh daily. Portions are generous. You&apos;ve
            been warned.
          </p>
          <div className="mt-4 inline-block bg-sunset-light text-sunset font-body font-semibold text-sm px-4 py-1.5 rounded-full">
            Breakfast Served All Day ☀️
          </div>
        </div>
      </section>

      {/* Popular Picks */}
      <FadeInSection>
        <section className="py-12 bg-ocean-light/30">
          <div className="mx-auto max-w-container px-6">
            <h2 className="font-heading text-2xl md:text-3xl text-driftwood mb-8 text-center">
              ⭐ Popular Picks
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {popularPicks.map((item) => (
                <div
                  key={item.name}
                  className="bg-warm-white rounded-2xl p-6 shadow-sm border border-sand"
                >
                  <MenuItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* All Menu Sections */}
      {menuSections.map((section) => (
        <FadeInSection key={section.title}>
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-container px-6">
              {/* ★ Seafoam divider */}
              <div className="w-full h-px bg-seafoam/50 mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl text-driftwood mb-2 pb-4 border-b-2 border-ocean/30">
                {sectionEmojis[section.title] || ""} {section.title}
              </h2>
              <p className="font-body text-text-body/50 text-sm mb-10">
                {section.title === "Breakfast" && "Served all day ☀️"}
              </p>
              {section.categories.map((category) => (
                <MenuCategorySection
                  key={category.title}
                  category={category}
                />
              ))}
            </div>
          </section>
        </FadeInSection>
      ))}

      {/* Bottom CTA */}
      <FadeInSection>
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-container px-6 text-center">
            <p className="font-body text-text-body text-lg mb-4">
              Ready to come in? We&apos;re on Main Road in West End.
            </p>
            <Link
              href="/visit"
              className="inline-block bg-ocean text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-ocean-dark transition"
            >
              Get Directions & Hours
            </Link>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
