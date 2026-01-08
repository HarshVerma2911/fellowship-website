const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSemiFqIUO1AWyw2fbCr0uepgPAD559po_ZOj-Vs9Z5zYSI2HQ/viewform"; // 👈 replace with your link

const Contact = () => {
  return (
    <section className="bg-orange-50 py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Fellowship
          </h2>

          <p className="text-gray-700 max-w-xl mb-6">
            We’d love to welcome you into our fellowship. Take the
            next step and apply now to be part of a meaningful learning journey.
          </p>

          <p className="text-gray-600 text-sm max-w-xl">
            Applications are reviewed carefully, and selected participants will
            be contacted with further details.
          </p>
        </div>

        {/* RIGHT ACTION CARD */}
        <div className="bg-white rounded-3xl p-10 shadow-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Apply?
          </h3>

          <p className="text-gray-600 mb-8">
            Click the button below to fill out the application form and begin
            your fellowship journey.
          </p>

          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
