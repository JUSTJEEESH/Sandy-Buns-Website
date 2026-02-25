export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://maps.google.com/maps?q=16.304966887397985,-86.59355588219465&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sandy Buns Bakery & Cafe location in West End, Roatán"
        className="w-full"
      />
    </div>
  );
}
