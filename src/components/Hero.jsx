import { useState, useEffect } from "react";

const slides = [
  {
    bg: "/hero/hero-3.jpg",
    title: "Growing together in",
    highlight: "faith & fun",
    description:
      "Interactive activities designed to help children express, connect, and grow with confidence.",
    accent: "text-orange-400",
    text: "text-white",
    button: "See Activities",
  },
  {
    bg: "/hero/hero-2.jpg",
    title: "Learning through",
    highlight: "play & teamwork",
    description:
      "Sports, games, and group activities that build confidence and friendships.",
    accent: "text-yellow-300",
    text: "text-white",
    button: "Explore Programs",
  },
  {
    bg: "/hero/hero-1.jpg",
    title: "Building values for",
    highlight: "a brighter future",
    description:
      "Helping children grow emotionally, socially, and spiritually.",
    accent: "text-green-300",
    text: "text-white",
    button: "Join Fellowship",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
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

          <p className="text-white/90 text-lg">{slides[current].description}</p>

          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition hover:-translate-y-0.5 hover:shadow-lg">
            {slides[current].button}
          </button>
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
