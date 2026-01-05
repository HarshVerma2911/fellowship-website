import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of a 7-year-old",
      message:
        "My child looks forward to fellowship every week. The activities are joyful, meaningful, and handled with so much care.",
      image: "/images/parent-1.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Parent of a 10-year-old",
      message:
        "The mentors genuinely care about each child. I’ve seen a big improvement in confidence and social skills.",
      image: "/images/parent-2.jpg",
    },
    {
      name: "Anita Verma",
      role: "Parent of a 5-year-old",
      message:
        "A safe, warm, and joyful place for kids. As a parent, I feel reassured and happy with the environment.",
      image: "/images/parent-3.jpg",
    },
    {
      name: "Suresh Iyer",
      role: "Parent of an 8-year-old",
      message:
        "The fellowship balances fun and learning beautifully. My child has built strong friendships here.",
      image: "/images/parent-4.jpg",
    },
    {
      name: "Neha Kapoor",
      role: "Parent of a 6-year-old",
      message:
        "I love how the mentors encourage participation while keeping everything playful and engaging.",
      image: "/images/parent-5.jpg",
    },
    {
      name: "Amit Joshi",
      role: "Parent of a 12-year-old",
      message:
        "Great community, great values. My child feels confident and motivated after every session.",
      image: "/images/parent-6.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on a parent to read their experience with our fellowship.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* LEFT: 3×2 Parent Selector */}
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full p-1 transition-all duration-200
  ${
    activeIndex === index
      ? "ring-4 ring-orange-400 scale-105 bg-white"
      : "opacity-60 hover:opacity-100"
  }`}
                aria-label={`View testimonial from ${t.name}`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-25 h-25 rounded-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* RIGHT: Testimonial Content */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={active.image}
                alt={active.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{active.name}</h4>
                <p className="text-sm text-gray-600">{active.role}</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              “{active.message}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
