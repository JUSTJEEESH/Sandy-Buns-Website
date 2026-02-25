import Image from "next/image";

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  className?: string;
  aspectRatio?: string;
}

/* TODO: Replace Unsplash images with real photos from Shantel & Tim */
export default function ImagePlaceholder({
  label,
  src,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={`${label} — Sandy Buns Bakery & Cafe, West End Roatán`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-sand flex items-center justify-center p-4">
          <span className="font-heading text-ink/40 text-lg md:text-xl text-center leading-snug">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
