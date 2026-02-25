import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import MenuCategorySection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import { menuSections, popularPicks } from "@/lib/menuData";

export const metadata: Metadata = {
  title: "Menu — Breakfast, Bakery & Comfort Food",
  description:
    "Full menu for Sandy Buns Bakery & Cafe in West End, Roatán. Famous cinnamon buns, Texas benedicts, brisket biscuits, handmade burgers, and more. Breakfast served all day.",
  openGraph: {
    title: "Menu — Sandy Buns Bakery & Cafe",
    description:
      "Famous cinnamon buns, Texas benedicts, brisket biscuits, handmade burgers, and more. Breakfast served all day in West End, Roatán.",
  },
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Intro */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ink mb-4">
            Breakfast, Bakery & Comfort Food
          </h1>
          <p className="font-body text-charcoal/70 text-lg max-w-xl mx-auto">
            Everything is made fresh daily. Portions are generous. You&apos;ve
            been warned.
          </p>
        </div>
      </section>

      {/* Popular Picks */}
      <FadeInSection>
        <section className="py-12 bg-ocean/10">
          <div className="mx-auto max-w-container px-6">
            <h2 className="font-heading text-2xl md:text-3xl text-ink mb-8 text-center">
              Popular Picks
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
              <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2 pb-4 border-b-2 border-ocean/30">
                {section.title}
              </h2>
              <p className="font-body text-charcoal/50 text-sm mb-10">
                {section.title === "Breakfast" && "Served all day"}
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
    </div>
  );
}
