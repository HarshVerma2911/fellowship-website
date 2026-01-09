const AboutFellowship = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50/40 via-white to-indigo-50/30 py-20 relative">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center perspective">
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden
                         shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]
                         transform transition-transform duration-500
                         hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <img
                src="/images/fellowship-about.jpg"
                alt="ADORE Fellowship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ambient glow */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-orange-200/40 rounded-full blur-3xl" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              About ADORE Fellowship Program
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5 max-w-xl">
              ADORE Fellowship Program is a one-year youth development and
              volunteering initiative designed to nurture socially responsible,
              skilled, and confident young leaders.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5 max-w-xl">
              Through this fellowship, participants — referred to as{" "}
              <span className="font-semibold">ADORE Fellows</span> — will gain
              hands-on experience in social initiatives and get the opportunity
              to:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              {[
                "Participate in social impact projects",
                "Develop soft skills through real-world experiences",
                "Engage with communities and causes that matter",
                "Become a part of a nationwide network of changemakers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed max-w-xl">
              The fellowship blends learning, leadership, and service — helping
              you grow both personally and professionally while making a real
              difference.
            </p>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 perspective">

          {/* VISION */}
          <div
            className="bg-orange-50/80 rounded-3xl p-9
                       shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
                       transform transition-all duration-500
                       hover:-translate-y-3 hover:scale-[1.02]
                       hover:bg-orange-100/80"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/vision.png" alt="Vision Icon" className="w-7 h-7" />
              <h3 className="text-xl font-bold text-gray-900">Vision</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              To create a generation of empathetic, skilled, and socially
              responsible youth who contribute to building a more inclusive
              and compassionate society.
            </p>
          </div>

          {/* MISSION */}
          <div
            className="bg-indigo-50/80 rounded-3xl p-9
                       shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
                       transform transition-all duration-500
                       hover:-translate-y-3 hover:scale-[1.02]
                       hover:bg-indigo-100/80"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/mission.png" alt="Mission Icon" className="w-7 h-7" />
              <h3 className="text-xl font-bold text-gray-900">Mission</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              To engage, educate, and empower young individuals through
              structured volunteering, experiential learning, and leadership
              opportunities that promote community development and personal
              transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFellowship;
