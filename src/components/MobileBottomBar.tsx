"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-brown/95 backdrop-blur-sm border-t border-sand/20 px-4 py-3 flex gap-3">
      <Link
        href="/menu"
        className="flex-1 bg-burnt-orange text-white text-center font-body font-semibold py-3 rounded-full text-sm hover:opacity-90 transition"
      >
        View Menu
      </Link>
      <a
        href={siteConfig.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 border-2 border-cream text-cream text-center font-body font-semibold py-3 rounded-full text-sm hover:bg-cream hover:text-dark-brown transition"
      >
        Directions
      </a>
    </div>
  );
}
