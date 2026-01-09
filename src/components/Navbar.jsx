import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSemiFqIUO1AWyw2fbCr0uepgPAD559po_ZOj-Vs9Z5zYSI2HQ/viewform";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="https://www.adoreglobal.org/#" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="ADORE Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm xl:text-base">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Scroll links only work on Home */}
          {location.pathname === "/" && (
            <>
              <li>
                <a href="#events" className="hover:text-green-500">
                  Activities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
            </>
          )}
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
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              {location.pathname === "/" && (
                <>
                  <a href="#events" onClick={() => setMenuOpen(false)}>
                    Activities
                  </a>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </a>
                </>
              )}

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
