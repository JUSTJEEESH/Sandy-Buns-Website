export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7632.76!2d-86.5936!3d16.298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE3JzUyLjgiTiA4NsKwMzUnMzcuMCJX!5e0!3m2!1sen!2s!4v1"
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
