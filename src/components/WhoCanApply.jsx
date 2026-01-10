const WhoCanApply = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/apply-now.png"
              alt="Apply Now"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle accent */}
          <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-orange-100 rounded-full blur-3xl" />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Who Can Apply
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
            The ADORE Fellowship is open to individuals who are passionate about
            creating a positive impact and developing essential leadership skills.
          </p>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>
                <strong>Students (18–30 years):</strong> Passionate about social
                causes and personal growth.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>
                <strong>Youth leaders and volunteers:</strong> Seeking hands-on
                experience in real projects.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>
                Individuals eager to build communication, leadership, and
                teamwork skills.
              </span>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Program Duration:</strong> 1 Year (12 Months)
          </p>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            No prior volunteering experience is required — just the willingness
            to learn, lead, and contribute.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoCanApply;
