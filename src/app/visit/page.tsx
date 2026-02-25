import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import MapEmbed from "@/components/MapEmbed";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Visit — Location, Hours & Contact",
  description:
    "Find Sandy Buns Bakery & Cafe in West End, Roatán. Open 8am-3pm Monday-Saturday. Near Half Moon Bay. Get directions, hours, and contact info.",
  openGraph: {
    title: "Visit — Sandy Buns Bakery & Cafe",
    description:
      "Find us in West End, Roatán. Open 8am-3pm Monday-Saturday. Near Half Moon Bay.",
  },
};

export default function VisitPage() {
  return (
    <div className="pt-24 pb-32 md:pb-20">
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-4">
            Find Us in West End
          </h1>
          <p className="font-body text-charcoal/70 text-lg max-w-xl mx-auto">
            Just a short walk from Half Moon Bay, Sandy Buns is easy to find and
            worth the stop. Come early — things tend to sell out.
          </p>
        </div>
      </section>

      {/* Details + Map */}
      <FadeInSection>
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-container px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Info */}
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h2 className="font-heading text-xl text-dark-brown mb-2">
                    Address
                  </h2>
                  <p className="font-body text-charcoal/80">
                    {siteConfig.address.full}
                  </p>
                  <p className="font-body text-charcoal/60 text-sm">
                    In the heart of West End
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h2 className="font-heading text-xl text-dark-brown mb-2">
                    Hours
                  </h2>
                  <div className="font-body text-charcoal/80 space-y-1">
                    <p>
                      {siteConfig.hours.days}: {siteConfig.hours.time}
                    </p>
                    <p className="text-burnt-orange font-semibold">
                      Closed {siteConfig.hours.closed}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <h2 className="font-heading text-xl text-dark-brown mb-2">
                    Phone
                  </h2>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-body text-burnt-orange hover:text-dark-brown transition-colors text-lg"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-burnt-orange text-white rounded-full px-8 py-3 font-body font-semibold hover:opacity-90 transition text-center"
                  >
                    Get Directions
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-dark-brown text-dark-brown rounded-full px-8 py-3 font-body font-semibold hover:bg-dark-brown hover:text-white transition text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.559-.682-6.42-1.857l-.448-.295-2.956.991.991-2.956-.295-.448A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <MapEmbed />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
