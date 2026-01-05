const About = () => {
  return (
    <section className="relative bg-indigo-500 py-20 overflow-hidden">
      {/* Background pattern placeholder (VERY subtle, can enhance later) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/patterns/education-pattern.svg')",
          backgroundSize: "360px 360px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-[10px] border-white shadow-xl">
            <img
              src="/images/about-kids.jpg"
              alt="Kids learning together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        

        {/* RIGHT IMAGE */}
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Why Our Fellowship is the <br className="hidden sm:block" />
            Right Place for Your Child
          </h2>

          <p className="text-white/80 max-w-xl mb-8">
            We create a joyful, safe, and nurturing environment where children
            grow in faith, friendships, creativity, and confidence through
            meaningful activities and shared experiences.
          </p>

          {/* Feature list */}
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Caring & Trained Mentors"
              color="bg-pink-500"
            />
            <FeatureItem
              icon="🏫"
              title="Safe & Child-Friendly Environment"
              color="bg-sky-400"
            />
            <FeatureItem
              icon="🌍"
              title="Values-Based Learning"
              color="bg-yellow-400"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

/* ----------------------------- */
/* Feature item subcomponent     */
/* ----------------------------- */

const FeatureItem = ({ icon, title, color }) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-full px-5 py-4 shadow-md hover:scale-[1.02] transition">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg ${color}`}
      >
        {icon}
      </div>
      <span className="text-gray-800 font-medium">{title}</span>
    </div>
  );
};
