import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Delicious food at Sandy Buns Bakery & Cafe in West End Roatán"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-brown/60" />

        <div className="relative z-10 mx-auto max-w-container px-6 text-center py-32">
          <Image
            src="/images/sandy-buns-logo.jpg"
            alt="Sandy Buns Bakery & Cafe logo - best breakfast in West End Roatán"
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
            steps from the beach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="bg-burnt-orange text-white rounded-full px-8 py-3 font-body font-semibold hover:opacity-90 transition text-lg"
            >
              View Menu
            </Link>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream text-cream rounded-full px-8 py-3 font-body font-semibold hover:bg-cream hover:text-dark-brown transition text-lg"
            >
              Get Directions
            </a>
          </div>
          <p className="font-body text-cream/60 text-sm mt-6">
            Open 8am – 3pm · Closed Sundays
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-6">
              One of West End&apos;s favorite breakfast spots
            </h2>
            <p className="font-body text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
              People come for the cinnamon buns… and come back for everything
              else.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Section */}
      <FadeInSection>
        <section className="py-20 md:py-28 bg-sand/40">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-6">
                  More than just a bakery
                </h2>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed">
                  Yeah, we&apos;re known for the cinnamon buns. But that&apos;s
                  just the beginning. From brisket benedicts to big breakfast
                  plates and burgers that actually fill you up, everything here
                  is made fresh and meant to satisfy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* TODO: Replace Unsplash images with real photos from Shantel & Tim */}
                <ImagePlaceholder
                  label="Cinnamon Buns"
                  src="https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=450&fit=crop&q=80"
                  className="rounded-2xl shadow-md"
                />
                <ImagePlaceholder
                  label="Brisket Benedict"
                  src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=450&h=600&fit=crop&q=80"
                  className="rounded-xl shadow-md mt-6"
                  aspectRatio="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Big Breakfast"
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=450&h=600&fit=crop&q=80"
                  className="rounded-lg shadow-md"
                  aspectRatio="aspect-[3/4]"
                />
                <ImagePlaceholder
                  label="Fresh Burgers"
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=450&fit=crop&q=80"
                  className="rounded-2xl shadow-md -mt-6"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Vibe Section */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6 text-center max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl text-dark-brown mb-6">
              Slow mornings done right
            </h2>
            <p className="font-body text-charcoal/70 text-lg leading-relaxed">
              Good coffee. Big plates. No rush. Grab a table, catch up with
              friends, or just ease into the day. Whether you&apos;re here for a
              quick bite or a long breakfast, Sandy Buns is the kind of place
              you&apos;ll want to come back to.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Quick Info Strip */}
      <FadeInSection>
        <section className="py-16 bg-dark-brown">
          <div className="mx-auto max-w-container px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  text: "West End, Roatán",
                  subtext: "Near Half Moon Bay",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  text: "8am – 3pm Daily",
                  subtext: "Breakfast served all day",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ),
                  text: "Closed Sundays",
                  subtext: "We rest too",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ),
                  text: "Dog Friendly",
                  subtext: "Bring your pup",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"
                      />
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
                  <div className="text-burnt-orange">{item.icon}</div>
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

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-container px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-dark-brown mb-8">
              Come hungry
            </h2>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-burnt-orange text-white rounded-full px-10 py-4 font-body font-semibold hover:opacity-90 transition text-lg"
            >
              Get Directions
            </a>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
