interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

/* TODO: Replace with real photos from Shantel & Tim */
export default function ImagePlaceholder({
  label,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #C46A2E 0%, #3B2F2F 50%, #C46A2E 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="font-heading text-cream/80 text-lg md:text-xl text-center leading-snug">
          {label}
        </span>
      </div>
    </div>
  );
}
