const Objectives = () => {
  return (
    <section className="relative bg-blue-900 py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/patterns/education-pattern.svg')",
          backgroundSize: "360px 360px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Objectives of the <br className="hidden sm:block" />
            Fellowship
          </h2>

          <p className="text-white/80 max-w-xl mb-8">
            The ADORE Fellowship is designed with clear objectives that guide
            young individuals toward personal growth, leadership development,
            and meaningful community impact.
          </p>

          {/* Objective list (pill style like About.jsx) */}
          <div className="space-y-4">
            <ObjectiveItem
              title="Empower Youth"
              description="Build confidence, communication, and leadership skills through active participation."
              color="bg-orange-500"
            />

            <ObjectiveItem
              title="Promote Community Engagement"
              description="Encourage meaningful contributions toward education, environment, equality, and sustainability."
              color="bg-pink-500"
            />

            <ObjectiveItem
              title="Develop Soft Skills"
              description="Strengthen problem-solving, teamwork, time management, and empathy through experiential learning."
              color="bg-yellow-400"
            />

            <ObjectiveItem
              title="Networking"
              description="Connect fellows with like-minded youth and mentors to build a strong network of change agents."
              color="bg-sky-400"
            />

            <ObjectiveItem
              title="Encourage Volunteerism"
              description="Inspire youth to adopt volunteering as a lifelong practice."
              color="bg-green-500"
            />

            <ObjectiveItem
              title="Foster Personal Growth"
              description="Help participants discover their potential and create positive social change."
              color="bg-purple-500"
            />
          </div>
        </div>

        {/* RIGHT VISUAL (matches About.jsx structure) */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-[10px] border-white shadow-xl">
            <img
              src="/images/objectives.jpg"
              alt="Fellowship objectives"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Objectives;

/* ----------------------------- */
/* Objective item subcomponent   */
/* ----------------------------- */

const ObjectiveItem = ({ title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl px-6 py-4 shadow-md hover:scale-[1.02] transition">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${color}`}
        >
          ✓
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold">{title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
