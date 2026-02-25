import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Us — Meet Tim & Shantel Dolan | Our Story",
  description:
    "Meet Tim and Shantel Dolan, the Texas couple behind Sandy Buns Bakery & Cafe. From Texas A&M tailgates to a Caribbean kitchen in West End, Roatán — this is our story.",
  openGraph: {
    title: "About Sandy Buns — Meet Tim & Shantel Dolan",
    description:
      "From Texas tailgates to a Caribbean kitchen — how Tim and Shantel Dolan built West End's favorite breakfast spot.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-driftwood mb-4">
            Good food, no shortcuts
          </h1>
          <p className="font-body text-text-body/70 text-lg max-w-xl mx-auto">
            How a Texas couple traded tailgates for the Caribbean — and brought
            the whole kitchen with them.
          </p>
        </div>
      </section>

      {/* Story */}
      <FadeInSection>
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-6">
                <p className="font-body text-text-body text-lg leading-relaxed">
                  Tim and Shantel Dolan didn&apos;t plan to open a restaurant on
                  a tiny Caribbean island. They planned to visit for a week. But
                  one week turned into two, two turned into a month, and
                  somewhere along the way, West End started feeling like home.
                </p>
                <p className="font-body text-text-body text-lg leading-relaxed">
                  They came from Texas — the kind where breakfast means three
                  meats, eggs your way, biscuits from scratch, and enough food
                  on the plate that you don&apos;t need lunch. When they
                  couldn&apos;t find that on the island, they decided to make it
                  themselves.
                </p>
                <p className="font-body text-text-body text-lg leading-relaxed">
                  Sandy Buns started small — just a few tables, a handful of
                  recipes, and a stubbornness about doing things from scratch.
                  The cinnamon buns came first. Then the biscuits. Then the
                  Texas Benedict. Word spread fast. Now, it&apos;s the kind of
                  place where you show up once and end up coming back all week.
                </p>
                {/* 12th man easter egg */}
                <p className="font-body text-text-body text-lg leading-relaxed">
                  The Dolans like to say there&apos;s always room for one more —
                  a 12th man at the table, so to speak. That Texas hospitality
                  didn&apos;t stay in College Station. It followed them to the
                  Caribbean.
                </p>
              </div>

              <div className="space-y-4">
                <ImagePlaceholder
                  label="Tim & Shantel Dolan — Sandy Buns Owners"
                  className="rounded-2xl shadow-lg"
                  aspectRatio="aspect-[4/3]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <ImagePlaceholder
                    label="In the Kitchen"
                    className="rounded-xl shadow-md"
                    aspectRatio="aspect-square"
                  />
                  <ImagePlaceholder
                    label="The Sandy Buns Patio"
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
            {/* ★ Star Divider */}
            <div className="flex items-center justify-center gap-2 mb-12 text-sunset">
              <span className="block w-16 h-px bg-sunset/30" />
              <span>&#9733;</span>
              <span className="block w-16 h-px bg-sunset/30" />
            </div>
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
                  <h3 className="font-heading text-xl text-driftwood mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-body/80 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Internal Link CTA */}
      <FadeInSection>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-container px-6 text-center">
            <p className="font-body text-text-body text-lg mb-4">
              Ready to taste what all the fuss is about?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-block bg-ocean text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-ocean-dark transition"
              >
                See the Menu
              </Link>
              <Link
                href="/visit"
                className="inline-block border-2 border-driftwood text-driftwood rounded-full px-8 py-3 font-body font-semibold hover:bg-driftwood hover:text-white transition"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
