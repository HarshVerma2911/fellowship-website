const AdoreFellowship = () => {
  return (
    <>

      {/* Main Section */}
      <section className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              About ADORE Fellowship Program
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              ADORE Fellowship Program is a one-year youth development and
              volunteering initiative designed to nurture socially responsible,
              skilled, and confident young leaders.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Through this fellowship, participants — referred to as
              <span className="font-semibold"> ADORE Fellows</span> — will gain
              hands-on experience in social initiatives and get the opportunity
              to:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                Participate in social impact projects
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                Develop soft skills through real-world experiences
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                Engage with communities and causes that matter
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                Become a part of a nationwide network of changemakers
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-10">
              The fellowship blends learning, leadership, and service — helping
              you grow both personally and professionally while making a real
              difference.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Vision */}
              <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start min-h-[220px]">
                <img
                  src="/icons/vision.png"
                  alt="Vision icon"
                  className="w-12 h-12 flex-shrink-0"
                />

                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Vision
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To create a generation of empathetic, skilled, and socially
                    responsible youth who contribute to building a more
                    inclusive and compassionate society.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start min-h-[220px]">
                <img
                  src="/icons/mission.png"
                  alt="Mission icon"
                  className="w-12 h-12 flex-shrink-0"
                />

                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Mission
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To engage, educate, and empower young individuals through
                    structured volunteering, experiential learning, and
                    leadership opportunities that promote community development
                    and personal transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-xl p-4">
              <img
                src="/images/adore-fellowship.jpg"
                alt="ADORE Fellowship Program"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdoreFellowship;
