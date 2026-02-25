"use client";

import ImagePlaceholder from "./ImagePlaceholder";

/* TODO: Replace Unsplash images with real photos from Shantel & Tim */
const galleryItems = [
  {
    label: "Cinnamon Buns",
    aspect: "aspect-[4/3]",
    src: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&h=600&fit=crop&q=80",
  },
  {
    label: "Brisket Benedict",
    aspect: "aspect-[3/4]",
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=800&fit=crop&q=80",
  },
  {
    label: "The Patio",
    aspect: "aspect-[4/3]",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80",
  },
  {
    label: "Morning Coffee",
    aspect: "aspect-[3/4]",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop&q=80",
  },
  {
    label: "Texas Benedict",
    aspect: "aspect-[4/3]",
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop&q=80",
  },
  {
    label: "Breakfast Burrito",
    aspect: "aspect-[3/4]",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=800&fit=crop&q=80",
  },
  {
    label: "The Team",
    aspect: "aspect-[4/3]",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop&q=80",
  },
  {
    label: "West End Vibes",
    aspect: "aspect-[4/3]",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
  },
];

export default function GalleryGrid() {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {galleryItems.map((item, index) => (
        <div
          key={item.label}
          className="break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
        >
          <ImagePlaceholder
            label={item.label}
            src={item.src}
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
  );
}
