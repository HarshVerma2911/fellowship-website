const Events = () => {
  const events = [
    {
      date: "November 19, 2024",
      title: "Joyful Storytelling & Games Day",
      frontImage: "/images/event-1.jpg",
      backTitle: "What Kids Will Do",
      activities: [
        "Storytelling circle",
        "Fun group games",
        "Music & singing",
        "Friendship activities",
      ],
      bg: "bg-blue-100",
    },
    {
      date: "December 5, 2024",
      title: "Creative Arts & Craft Workshop",
      frontImage: "/images/event-2.jpg",
      backTitle: "Activities Included",
      activities: [
        "Drawing & coloring",
        "Craft making",
        "Creative expression",
        "Art sharing time",
      ],
      bg: "bg-yellow-100",
    },
    {
      date: "January 12, 2025",
      title: "Music, Movement & Fellowship",
      frontImage: "/images/event-3.jpg",
      backTitle: "What We’ll Explore",
      activities: [
        "Action songs",
        "Movement games",
        "Rhythm activities",
        "Group fellowship",
      ],
      bg: "bg-pink-100",
    },
  ];

  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events & Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hover on an event to see what exciting activities are planned for
            the children.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="perspective">
              <div
                className="relative h-[340px] rounded-3xl transition-transform duration-500 transform-style
                hover:rotate-y-180"
              >

                {/* FRONT */}
                <div
                  className={`absolute inset-0 ${event.bg} rounded-3xl shadow-md backface-hidden`}
                >
                  <div className="relative h-full">
                    <img
                      src={event.frontImage}
                      alt={event.title}
                      className="w-full h-52 object-cover rounded-t-3xl"
                    />

                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {event.date}
                    </span>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Hover to see activities →
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className={`absolute inset-0 ${event.bg} rounded-3xl shadow-md backface-hidden
                  rotate-y-180 flex flex-col justify-center p-6`}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {event.backTitle}
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-700">
                    {event.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 self-start text-sm font-semibold text-orange-500 hover:underline">
                    Join Event →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
