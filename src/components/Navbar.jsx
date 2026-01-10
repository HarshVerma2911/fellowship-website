import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSemiFqIUO1AWyw2fbCr0uepgPAD559po_ZOj-Vs9Z5zYSI2HQ/viewform";

const SECTIONS = [
  { id: "home", label: "Home", color: "text-orange-500" },
  { id: "objectives", label: "Objectives", color: "text-indigo-500" },
  { id: "apply", label: "Who Can Apply", color: "text-blue-500" },
  { id: "events", label: "Activities", color: "text-green-500" },
  { id: "benefits", label: "Benefits", color: "text-purple-500" },
  { id: "contact", label: "Contact", color: "text-pink-500" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  /* ------------------------------
     Scroll Spy (ALL SECTIONS)
  ------------------------------ */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: id === "home" ? 0.6 : 0.35,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  /* ------------------------------
     Smooth Scroll
  ------------------------------ */
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const getLinkClass = (id, color) =>
    `cursor-pointer transition ${
      activeSection === id
        ? color
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => scrollTo("home")} className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="ADORE Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm xl:text-base">
          {location.pathname === "/" &&
            SECTIONS.map(({ id, label, color }) => (
              <li
                key={id}
                className={getLinkClass(id, color)}
                onClick={() => scrollTo(id)}
              >
                {label}
              </li>
            ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block bg-orange-500 text-white px-5 xl:px-6 py-2 rounded-full hover:bg-orange-600 text-sm xl:text-base"
        >
          Become a Fellow
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl leading-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-6 text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <ul className="flex flex-col gap-6 text-lg">
              {SECTIONS.map(({ id, label, color }) => (
                <li
                  key={id}
                  className={`cursor-pointer ${
                    activeSection === id ? color : ""
                  }`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </li>
              ))}

              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-orange-500 text-white py-3 rounded-full text-center"
              >
                Become a Fellow
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
