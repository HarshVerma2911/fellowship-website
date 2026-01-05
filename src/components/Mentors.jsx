const Mentors = () => {
  const mentors = [
    {
      name: "John Parker (PhD)",
      role: "Instructor / Mentor",
      image: "/images/mentor-1.jpg",
      phone: "0987654321",
    },
    {
      name: "Lida Joans",
      role: "Instructor / Mentor",
      image: "/images/mentor-2.jpg",
      phone: "0987654321",
    },
    {
      name: "Michel Joarden",
      role: "Instructor / Mentor",
      image: "/images/mentor-3.jpg",
      phone: "0987654321",
    },
    {
      name: "Lilly Thomas",
      role: "Instructor / Mentor",
      image: "/images/mentor-4.jpg",
      phone: "0987654321",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Our Qualified Mentors
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full" />
        </div>

        {/* Mentors Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-60 h-44 object-cover rounded-2xl mb-6 shadow-lg"
              />

              <p className="text-black/80 text-sm mb-1">
                {mentor.role}
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">
                {mentor.name}
              </h3>

              <button className="bg-gray-700 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-900 transition">
                📞 {mentor.phone}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mentors;
