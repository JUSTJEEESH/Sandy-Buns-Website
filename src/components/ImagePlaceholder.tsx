import Image from "next/image";

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  label,
  src,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-light via-seafoam/40 to-sunset-light flex items-center justify-center p-4">
        <span className="font-heading text-driftwood/50 text-lg md:text-xl text-center leading-snug">
          {label}
        </span>
      </div>
    </div>
  );
}
