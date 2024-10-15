
export default function FloatingButton() {
  return (
    <div
      className="fixed flex items-center justify-center gap-3 bottom-8 right-4"
      style={{ zIndex: "1000" }}
    >
      <a
        // href="https://wa.me/9840884460?text=Hi%20team,%20I'd%20like%20your%20assistance"
        href="https://wa.me/1234567890?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp"
        className="rounded-full shadow-lg hover:animate-pulse animate-bounce"
      >
        <img
          loading="lazy"
          src="/whatsapp_logo.png"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="w-10 h-10 md:h-12 md:w-12"
        />
      </a>
    </div>
  );
}
