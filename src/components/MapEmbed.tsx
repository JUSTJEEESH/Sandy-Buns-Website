export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://maps.google.com/maps?q=Sandy+Buns+Bakery+%26+Cafe+West+End+Roatan&t=&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sandy Buns Bakery & Cafe location — Main Road, West End, Roatán"
        className="w-full md:h-[500px] h-[350px]"
      />
    </div>
  );
}
