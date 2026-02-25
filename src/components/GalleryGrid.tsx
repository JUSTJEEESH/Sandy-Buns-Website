"use client";

import ImagePlaceholder from "./ImagePlaceholder";

const galleryItems = [
  { label: "Famous Cinnamon Buns", aspect: "aspect-[4/3]" },
  { label: "Brisket Benedict", aspect: "aspect-[3/4]" },
  { label: "The Sandy Buns Patio", aspect: "aspect-[4/3]" },
  { label: "Morning Coffee on the Island", aspect: "aspect-[3/4]" },
  { label: "Texas Benedict — Aggie Approved", aspect: "aspect-[4/3]" },
  { label: "Texas Size Breakfast Burrito", aspect: "aspect-[3/4]" },
  { label: "The Sandy Buns Team", aspect: "aspect-[4/3]" },
  { label: "West End Vibes", aspect: "aspect-[4/3]" },
];

export default function GalleryGrid() {
  return (
    <>
      <p className="text-center font-body text-text-body/60 text-sm mb-8 italic">
        Real photos coming soon — we&apos;re too busy cooking to take pictures.
      </p>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.label}
            className="break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
          >
            <ImagePlaceholder
              label={item.label}
              aspectRatio={item.aspect}
              className={`${
                index % 3 === 0
                  ? "rounded-2xl"
                  : index % 3 === 1
                  ? "rounded-xl"
                  : "rounded-lg"
              } shadow-md`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
