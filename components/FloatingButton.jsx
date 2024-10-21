
export default function FloatingButton() {
  return (
    <div
      className="fixed flex items-center justify-center gap-3 bottom-8 right-4"
      style={{ zIndex: "1000" }}
    >
      <a
        href="https://wa.me/9551028280?text=Hey%20Jayesh,%20We%20need%20to%20connect%20now%20!"
        target="_blank"
        rel="noopener noreferrer"
        title="whatsapp"
        className="rounded-full shadow-xl hover:scale-125"
      >
        <img
          loading="lazy"
          src="/whatsapp_logo.png"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="w-16 h-16 md:h-18 md:w-18"
        />
      </a>
    </div>
  );
}
