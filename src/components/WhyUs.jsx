const WhyUs = () => {
  const items = [
    {
      title: "Our Team",
      icon: "👩‍🏫",
      color: "bg-yellow-400",
    },
    {
      title: "Kids Enrollment",
      icon: "📚",
      color: "bg-pink-500",
    },
    {
      title: "Alumni Club",
      icon: "🧑‍🤝‍🧑",
      color: "bg-sky-400",
    },
    {
      title: "Best Amenities",
      icon: "🏛️",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="relative bg-sky-100 py-28 overflow-hidden">
      {/* Top outward curve */}
      <div className="absolute -top-24 left-0 w-full h-40 bg-sky-100 rounded-b-[110%]" />

      {/* Bottom outward curve */}
      <div className="absolute -bottom-24 left-0 w-full h-40 bg-sky-100 rounded-t-[110%]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-3 hover:scale-105"
          >
            {/* Icon Circle */}
            <div
              className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center text-3xl text-white 
              shadow-lg transition-all duration-300 
              group-hover:shadow-2xl group-hover:scale-110`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:translate-y-1">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
