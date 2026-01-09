import { useState, useEffect } from "react";

const slides = [
  {
    bg: "/hero/hero-3.jpg",
    title: "Growing together.",
    highlight: "Empowering Youth",
    description:
      "Interactive activities designed to empower and nurture young minds.",
    accent: "text-orange-400",
    text: "text-white",
  },
  {
    bg: "/hero/hero-2.jpg",
    title: "Learning and",
    highlight: "inspiring change",
    description: "Group activities that inspire change among children.",
    accent: "text-yellow-300",
    text: "text-white",
  },
  {
    bg: "/hero/hero-1.jpg",
    title: "Building values for",
    highlight: "future leaders",
    description:
      "Helping children grow emotionally, socially, and spiritually.",
    accent: "text-green-300",
    text: "text-white",
  },
];

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSemiFqIUO1AWyw2fbCr0uepgPAD559po_ZOj-Vs9Z5zYSI2HQ/viewform";

const BROCHURE_LINK = "/brochure/fellowship-brochure.pdf";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[78vh] md:h-[82vh] lg:h-[85vh] overflow-hidden">
      {/* Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1
            className={`text-4xl md:text-6xl font-extrabold ${slides[current].text}`}
          >
            {slides[current].title}{" "}
            <span className={`${slides[current].accent} relative`}>
              {slides[current].highlight}
              <span className="absolute left-0 -bottom-2 h-1 w-full bg-current rounded-full animate-pulse" />
            </span>
          </h1>

          <p className="text-white/90 text-lg">
            {slides[current].description}
          </p>

          {/* ✅ BOTH BUTTONS ALWAYS VISIBLE */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition hover:-translate-y-0.5 hover:shadow-lg text-center"
            >
              Become a Fellow
            </a>

            <a
              href={BROCHURE_LINK}
              download="Fellowship-Brochure.pdf"
              className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transition hover:-translate-y-0.5 hover:shadow-lg text-center"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-orange-400 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
