const ACTIVITIES_LINK = "https://adoreglobal.org/activities"; // 👈 replace later

const Events = () => {
  const event = {
    title: "Workshops, Activities & Fellowship",
    images: [
      "/images/event-1.jpg",
      "/images/event-2.jpg",
      "/images/event-3.jpg",
    ],
    backTitle: "What We Offer",
    activities: [
      "Creative workshops",
      "Community engagement",
      "Leadership & teamwork",
      "Fun group activities",
    ],
    bg: "bg-sky-100",
  };

  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events & Activities
          </h2>
        </div>

        {/* Full Width Card */}
        <div className="w-full">
          <a
            href={ACTIVITIES_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="perspective block"
          >
            <div
              className="relative h-[360px] w-full rounded-3xl
              transition-transform duration-500 transform-style
              hover:rotate-y-180 cursor-pointer"
            >

              {/* FRONT — UNCHANGED IMAGE LAYOUT */}
              <div
                className={`absolute inset-0 ${event.bg} rounded-3xl shadow-md backface-hidden`}
              >
                <div className="relative h-full">

                  {/* Images (same placement as before) */}
                  <div className="grid grid-cols-3 gap-1 h-52 rounded-t-3xl overflow-hidden">
                    {event.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Event ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </div>

                  {/* Bottom content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Hover to explore → Click to view details
                    </p>
                  </div>
                </div>
              </div>

              {/* BACK — CENTERED CONTENT ONLY */}
              <div
                className={`absolute inset-0 ${event.bg} rounded-3xl shadow-md backface-hidden
                rotate-y-180 flex flex-col items-center justify-center text-center p-8`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {event.backTitle}
                </h3>

                <ul className="space-y-2 text-sm text-gray-700">
                  {event.activities.map((activity, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {activity}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 text-sm font-semibold text-orange-500">
                  Click to explore activities →
                </span>
              </div>

            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Events;
