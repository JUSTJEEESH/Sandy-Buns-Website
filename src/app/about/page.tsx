import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "Sandy Buns started as a small bakery in West End, Roatán with a simple goal — make great food and treat people right. Texas-style comfort food on the Caribbean coast.",
  openGraph: {
    title: "About — Sandy Buns Bakery & Cafe",
    description:
      "Sandy Buns started as a small bakery with a simple goal — make great food and treat people right.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-4">
            Good food, no shortcuts
          </h1>
        </div>
      </section>

      {/* Story */}
      <FadeInSection>
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-6">
                <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                  Sandy Buns started as a small bakery with a simple goal — make
                  great food and treat people right.
                </p>
                <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                  Over time, it grew into one of West End&apos;s go-to spots for
                  breakfast and comfort food. What sets it apart isn&apos;t just
                  the cinnamon buns (though they&apos;ve become a favorite),
                  it&apos;s the portions, the flavor, and the laid-back
                  atmosphere.
                </p>
                <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                  There&apos;s a bit of Texas influence in the kitchen — big
                  plates, bold flavors, and no cutting corners.
                </p>
                <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                  It&apos;s the kind of place where you show up once… and end up
                  coming back all week.
                </p>
              </div>

              <div className="space-y-4">
                {/* TODO: Replace Unsplash images with real photos from Shantel & Tim */}
                <ImagePlaceholder
                  label="The Restaurant"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80"
                  className="rounded-2xl shadow-lg"
                  aspectRatio="aspect-[4/3]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <ImagePlaceholder
                    label="In the Kitchen"
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop&q=80"
                    className="rounded-xl shadow-md"
                    aspectRatio="aspect-square"
                  />
                  <ImagePlaceholder
                    label="Shantel & Tim"
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=600&fit=crop&q=80"
                    className="rounded-xl shadow-md"
                    aspectRatio="aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Values */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-sand/40">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Made Fresh Daily",
                  text: "Every biscuit, every bun, every sauce — made from scratch each morning. No shortcuts, no pre-made anything.",
                },
                {
                  title: "Texas-Sized Portions",
                  text: "We don't do small plates. When you sit down at Sandy Buns, you're going to leave full. That's a promise.",
                },
                {
                  title: "Laid-Back Atmosphere",
                  text: "No rush, no fuss. Just good food, good coffee, and the kind of morning you came to the island for.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-heading text-xl text-dark-brown mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-charcoal/70 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
