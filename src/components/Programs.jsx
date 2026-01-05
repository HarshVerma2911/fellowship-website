const Programs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Programs
          </h2>
        </div>

        {/* Programs Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Program 1 */}
          <div className="group flex items-center gap-6 bg-[#FFF6EE] rounded-2xl p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">

            {/* Icon */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/icons/palette.png"
                alt="Program 4 to 6"
                className="w-16 h-16"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Ages 4–6 years
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Fun activities, stories, and creative play to develop motor
                skills, imagination, and self-expression.
              </p>

              <button className="mt-3 text-orange-500 text-sm font-semibold cursor-pointer">
                Choose a program →
              </button>
            </div>
          </div>

          {/* Program 2 */}
          <div className="group flex items-center gap-6 bg-[#F4F1FF] rounded-2xl p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">

            {/* Icon */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/icons/pencils.png"
                alt="Program 7 to 9"
                className="w-16 h-16"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Ages 7–9 years
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Interactive learning, group activities, and value-based
                discussions that build confidence and friendships.
              </p>

              <button className="mt-3 text-orange-500 text-sm font-semibold cursor-pointer">
                Choose a program →
              </button>
            </div>
          </div>

          {/* Program 3 */}
          <div className="group flex items-center gap-6 bg-[#EFF6FF] rounded-2xl p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">

            {/* Icon */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/icons/book.png"
                alt="Program 10 to 12"
                className="w-16 h-16"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Ages 10–12 years
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Leadership activities, teamwork, and community projects that
                encourage responsibility and deeper understanding.
              </p>

              <button className="mt-3 text-orange-500 text-sm font-semibold cursor-pointer">
                Choose a program →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;
