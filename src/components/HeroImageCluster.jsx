const HeroImageCluster = () => {
  return (
    <div className="relative h-[460px] w-full flex items-center justify-center">

      {/* ───────── BACKGROUND DOODLES (1–4) ───────── */}
      <div className="absolute top-8 left-20 w-20 h-12" id="doodle-1" />
      <div className="absolute top-24 right-28 w-12 h-12" id="doodle-2" />
      <div className="absolute bottom-32 left-36 w-16 h-10" id="doodle-3" />
      <div className="absolute bottom-20 right-40 w-10 h-10" id="doodle-4" />

      {/* ───────── LEFT CARD ───────── */}
      <div className="absolute left-0 top-36 w-40 h-40 bg-purple-200 rounded-3xl rotate-[-6deg]">

        {/* Kid */}
        <img
          src="/images/kid-1.png"
          alt="Kid"
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-32"
        />

        {/* Card doodles (5–6) */}
        <div className="absolute -top-6 -right-4 w-10 h-10" id="doodle-5" />
        <div className="absolute -bottom-6 left-6 w-14 h-8" id="doodle-6" />
      </div>

      {/* ───────── CENTER CARD (MAIN) ───────── */}
      <div className="relative z-20 w-56 h-56 bg-yellow-200 rounded-3xl shadow-xl">

        {/* Kid */}
        <img
          src="/images/kid-2.png"
          alt="Kid"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-44"
        />

        {/* Accent doodles (7–8) */}
        <div className="absolute -top-8 -right-8 w-12 h-12" id="doodle-7" />
        <div className="absolute -bottom-6 left-10 w-20 h-10" id="doodle-8" />
      </div>

      {/* ───────── RIGHT CARD ───────── */}
      <div className="absolute right-0 top-40 w-40 h-40 bg-blue-200 rounded-3xl rotate-[6deg]">

        {/* Kid */}
        <img
          src="/images/kid-3.png"
          alt="Kid"
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-32"
        />

        {/* Card doodles (9–10) */}
        <div className="absolute -top-6 left-4 w-10 h-10" id="doodle-9" />
        <div className="absolute -bottom-6 right-6 w-12 h-8" id="doodle-10" />
      </div>

      {/* ───────── EXTRA MICRO DOODLES (11–12) ───────── */}
      <div className="absolute top-44 left-52 w-6 h-6" id="doodle-11" />
      <div className="absolute top-28 right-52 w-6 h-6" id="doodle-12" />

    </div>
  );
};

export default HeroImageCluster;
