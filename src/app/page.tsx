import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/lib/siteConfig";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-driftwood">
        <div className="absolute inset-0 bg-gradient-to-b from-driftwood/90 via-driftwood/70 to-driftwood/90" />

        <div className="relative z-10 mx-auto max-w-container px-6 text-center py-32">
          <Image
            src="/images/sandy-buns-logo.jpg"
            alt="Sandy Buns Bakery & Cafe logo — best breakfast in West End, Roatán, Honduras"
            width={140}
            height={140}
            className="mx-auto rounded-full shadow-2xl mb-8 border-4 border-cream/30"
            priority
          />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 text-balance">
            Famous Cinnamon Buns &<br className="hidden md:block" /> Big
            Breakfasts in West End
          </h1>
          <p className="font-body text-cream/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fresh baked every morning. Hearty, Texas-style comfort food just
            steps from the beach in Roatán, Honduras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="bg-ocean text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-ocean-dark transition text-lg"
            >
              View Menu
            </Link>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream text-cream rounded-full px-8 py-3 font-body font-semibold hover:bg-cream hover:text-driftwood transition text-lg"
            >
              Get Directions
            </a>
          </div>
          <p className="font-body text-cream/60 text-sm mt-6">
            Open 8am – 3pm · Closed Sundays · Breakfast Served All Day
          </p>
        </div>
      </section>

      {/* Social Proof Section — Real Reviews */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6">
            <h2 className="font-heading text-3xl md:text-4xl text-driftwood mb-4 text-center">
              What people are saying
            </h2>
            <p className="font-body text-text-body/60 text-center mb-12 text-sm">
              Real reviews from real visitors
            </p>
            {/* ★ Star Divider */}
            <div className="flex items-center justify-center gap-2 mb-12 text-sunset">
              <span className="block w-12 h-px bg-sunset/30" />
              <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              <span className="block w-12 h-px bg-sunset/30" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The Texas Benedict is hands down the best breakfast I've ever had on the island. We came back three times in one week.",
                  author: "Madison's Footsteps",
                  source: "Travel Blog",
                },
                {
                  quote:
                    "If you're in West End and don't eat at Sandy Buns, you're doing it wrong. The cinnamon buns are legendary.",
                  author: "Sally Sees",
                  source: "Google Review",
                },
                {
                  quote:
                    "Everything is made from scratch and you can taste the difference. The portions are HUGE. Don't skip the brisket biscuit!",
                  author: "Lauren B.",
                  source: "TripAdvisor",
                },
              ].map((review) => (
                <div
                  key={review.author}
                  className="bg-cream rounded-2xl p-6 border border-sand shadow-sm"
                >
                  <div className="text-sunset mb-3 text-sm">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p className="font-body text-text-body text-base leading-relaxed mb-4 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="font-body text-driftwood font-semibold text-sm">
                    — {review.author}
                  </p>
                  <p className="font-body text-text-body/50 text-xs">
                    {review.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Section */}
      <FadeInSection>
        <section className="py-20 md:py-28 bg-sand/40">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-driftwood mb-6">
                  More than just a bakery
                </h2>
                <p className="font-body text-text-body text-lg leading-relaxed mb-4">
                  Yeah, we&apos;re known for the cinnamon buns. But that&apos;s
                  just the beginning. The Mother Clucker is our #1 seller, the
                  brisket nachos are loaded, and the burgers are handmade on
                  fresh-baked buns.
                </p>
                <p className="font-body text-text-body text-lg leading-relaxed mb-6">
                  Breakfast or lunch — everything here is made fresh and meant
                  to satisfy.
                </p>
                <Link
                  href="/menu"
                  className="inline-block font-body text-ocean font-semibold hover:text-ocean-dark transition-colors"
                >
                  See the full menu &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ImagePlaceholder
                  label="The Mother Clucker — #1 Seller"
                  className="rounded-2xl shadow-md"
                />
                <ImagePlaceholder
                  label="Loaded Brisket Nachos"
                  className="rounded-xl shadow-md mt-6"
                  aspectRatio="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Handmade Burgers & Fries"
                  className="rounded-lg shadow-md"
                  aspectRatio="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Famous Cinnamon Buns"
                  className="rounded-2xl shadow-md -mt-6"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Vibe Section — Two Column */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6">
            {/* ★ Star Divider */}
            <div className="flex items-center justify-center gap-2 mb-12 text-sunset">
              <span className="block w-16 h-px bg-sunset/30" />
              <span>&#9733;</span>
              <span className="block w-16 h-px bg-sunset/30" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-driftwood mb-6">
                  Slow mornings done right
                </h2>
                <p className="font-body text-text-body text-lg leading-relaxed mb-4">
                  Good coffee. Big plates. No rush. Grab a table, catch up with
                  friends, or just ease into the day.
                </p>
                <p className="font-body text-text-body text-lg leading-relaxed">
                  Whether you&apos;re here for a quick bite or a long breakfast,
                  Sandy Buns is the kind of place you&apos;ll want to come back
                  to. Dog-friendly patio, free WiFi, and the best vibes in West
                  End.
                </p>
              </div>
              <div>
                <ImagePlaceholder
                  label="Laid-back mornings at Sandy Buns"
                  className="rounded-2xl shadow-lg"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Quick Info Strip */}
      <FadeInSection>
        <section className="py-16 bg-driftwood">
          <div className="mx-auto max-w-container px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: "West End, Roatán",
                  subtext: "Main Road",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "8am – 3pm Daily",
                  subtext: "Breakfast served all day",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ),
                  text: "Closed Sundays",
                  subtext: "We rest too",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  text: "Dog Friendly",
                  subtext: "Bring your pup",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                    </svg>
                  ),
                  text: "Free WiFi",
                  subtext: "Stay connected",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-cream gap-2"
                >
                  <div className="text-ocean">{item.icon}</div>
                  <p className="font-body font-semibold text-sm">{item.text}</p>
                  <p className="font-body text-cream/50 text-xs">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection>
        <section className="py-20 md:py-28 bg-ocean-light/30">
          <div className="mx-auto max-w-container px-6">
            <h2 className="font-heading text-3xl md:text-4xl text-driftwood mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-text-body/60 text-center mb-12 max-w-xl mx-auto">
              Everything you need to know before you visit Sandy Buns in West End, Roatán.
            </p>
            <FAQAccordion />
            <FAQJsonLd />
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-driftwood mb-4">
              Come hungry
            </h2>
            <p className="font-body text-text-body mb-8 max-w-lg mx-auto">
              We&apos;re on Main Road in West End, Roatán. Open Monday–Saturday, 8am–3pm.{" "}
              <Link href="/visit" className="text-ocean hover:text-ocean-dark transition-colors underline">
                See directions & hours
              </Link>
            </p>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ocean text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-ocean-dark transition text-lg"
            >
              Get Directions
            </a>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
