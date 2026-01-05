const Contact = () => {
  return (
    <section className="bg-orange-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Kids Fellowship
          </h2>

          <p className="text-gray-700 max-w-xl mb-6">
            We’d love to welcome your child into our joyful fellowship.
            Share a few details and our team will get in touch with you
            shortly.
          </p>

          <p className="text-gray-600 text-sm max-w-xl">
            We respect your privacy and will only use your information to
            contact you regarding the fellowship.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <form className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parent’s Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child’s Age
              </label>
              <select
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option>4 – 6 years</option>
                <option>7 – 9 years</option>
                <option>10 – 12 years</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition"
            >
              Join the Fellowship
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
