const gains = [
  {
    text: "Enhanced leadership and communication skills",
    bg: "bg-orange-50",
  },
  {
    text: "Hands-on experience in social project management",
    bg: "bg-indigo-50",
  },
  {
    text: "A deeper sense of empathy and community responsibility",
    bg: "bg-blue-50",
  },
  {
    text: "National-level recognition and certification",
    bg: "bg-purple-50",
  },
  {
    text: "A strong network of peers and mentors",
    bg: "bg-green-50",
  },
];

const Benefits = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What You&apos;ll Gain
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The ADORE Fellowship offers valuable personal and professional
            development opportunities that prepare you to lead with purpose and
            confidence.
          </p>
        </div>

        {/* OLYMPICS STYLE LAYOUT */}
        <div className="flex flex-col items-center gap-8">
          {/* TOP ROW – 3 CARDS */}
          <div className="grid gap-8 sm:grid-cols-3 w-full max-w-5xl">
            {gains.slice(0, 3).map((item, index) => (
              <Card key={index} text={item.text} bg={item.bg} />
            ))}
          </div>

          {/* BOTTOM ROW – 2 CARDS (CENTERED) */}
          <div className="grid gap-8 sm:grid-cols-2 w-full max-w-3xl">
            {gains.slice(3).map((item, index) => (
              <Card key={index} text={item.text} bg={item.bg} />
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <div className="max-w-4xl mx-auto text-center mt-14">
          <p className="text-gray-700 leading-relaxed">
            Every fellow grows through real-world challenges, collaboration, and
            reflection — shaping a confident and socially aware individual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

/* ---------------- Card Component ---------------- */

const Card = ({ text, bg }) => {
  return (
    <div
      className={`${bg} rounded-2xl p-6
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                  hover:-translate-y-2`}
    >
      <div className="flex items-start gap-3">
        <span className="text-orange-500 font-bold text-lg">✓</span>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};
