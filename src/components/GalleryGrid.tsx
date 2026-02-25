"use client";

import ImagePlaceholder from "./ImagePlaceholder";

/* TODO: Replace with real photos from Shantel & Tim */
const galleryItems = [
  { label: "Cinnamon Buns", aspect: "aspect-[4/3]", rotate: "rotate-1" },
  { label: "Brisket Benedict", aspect: "aspect-[3/4]", rotate: "-rotate-1" },
  { label: "The Patio", aspect: "aspect-[4/3]", rotate: "rotate-2" },
  { label: "Morning Coffee", aspect: "aspect-[3/4]", rotate: "-rotate-1" },
  { label: "Texas Benedict", aspect: "aspect-[4/3]", rotate: "rotate-1" },
  { label: "Breakfast Burrito", aspect: "aspect-[3/4]", rotate: "-rotate-2" },
  { label: "The Team", aspect: "aspect-[4/3]", rotate: "rotate-1" },
  { label: "West End Vibes", aspect: "aspect-[4/3]", rotate: "-rotate-1" },
];

export default function GalleryGrid() {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {galleryItems.map((item, index) => (
        <div
          key={item.label}
          className={`break-inside-avoid ${item.rotate} hover:scale-105 transition-transform duration-300`}
        >
          <ImagePlaceholder
            label={item.label}
            aspectRatio={item.aspect}
            className={`${
              index % 3 === 0
                ? "rounded-2xl"
                : index % 3 === 1
                ? "rounded-3xl"
                : "rounded-lg"
            } shadow-md`}
          />
        </div>
      ))}
    </div>
  );
}
