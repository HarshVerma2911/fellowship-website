const PROGRAM_LINKS = {
  empower: "https://adoreglobal.org/webinar",      // 🔗 replace later
  softSkills: "https://adoreglobal.org/e-session",   // 🔗 replace later
  networking: "https://adoreglobal.org/sunshine",   // 🔗 replace later
  volunteerism: "https://adoreglobal.org/youngleader", // 🔗 replace later
};

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Programs
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Card 1 */}
          <a
            href={PROGRAM_LINKS.empower}
            className="group block bg-[#FFF6EE] rounded-3xl p-10
            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src="/icons/empowerment.png" className="w-20 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Empower Youth
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Build confidence, leadership, and self-belief by empowering young
              minds to take initiative and create impact.
            </p>
            <span className="font-semibold text-orange-600 group-hover:underline">
              Click here to see the program →
            </span>
          </a>

          {/* Card 2 */}
          <a
            href={PROGRAM_LINKS.softSkills}
            className="group block bg-[#F4F1FF] rounded-3xl p-10
            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src="/icons/soft-skills.png" className="w-20 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Develop Soft Skills
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enhance communication, teamwork, emotional intelligence, and
              problem-solving through hands-on experiences.
            </p>
            <span className="font-semibold text-purple-600 group-hover:underline">
              Click here to see the program →
            </span>
          </a>

          {/* Card 3 */}
          <a
            href={PROGRAM_LINKS.networking}
            className="group block bg-[#EFF6FF] rounded-3xl p-10
            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src="/icons/networking.png" className="w-20 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Networking
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Connect with mentors, peers, and leaders to build meaningful
              relationships and long-term collaboration.
            </p>
            <span className="font-semibold text-blue-600 group-hover:underline">
              Click here to see the program →
            </span>
          </a>

          {/* Card 4 */}
          <a
            href={PROGRAM_LINKS.volunteerism}
            className="group block bg-[#ECFEF3] rounded-3xl p-10
            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src="/icons/volunteerism.png" className="w-20 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Encourage Volunteerism
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Inspire a culture of service and social responsibility through
              impactful volunteering opportunities.
            </p>
            <span className="font-semibold text-green-600 group-hover:underline">
              Click here to see the program →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
