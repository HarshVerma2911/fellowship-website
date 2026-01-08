import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSemiFqIUO1AWyw2fbCr0uepgPAD559po_ZOj-Vs9Z5zYSI2HQ/viewform";

const ABOUT_ADORE_LINK = "https://adoreglobal.org/about";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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

          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-purple-500">
              About Us ▾
            </button>

            <AnimatePresence>
              {dropdown && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-10 bg-white shadow-xl rounded-xl py-3 w-52"
                >
                  <li>
                    <a
                      href={ABOUT_ADORE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      About ADORE
                    </a>
                  </li>

                  <li>
                    <NavLink
                      to="/adore-fellowship"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 ${
                          isActive ? "text-purple-500 font-semibold" : ""
                        }`
                      }
                    >
                      ADORE Fellowship
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Scroll links only work on Home */}
          {location.pathname === "/" && (
            <>
              <li>
                <a href="#programs" className="hover:text-blue-500">
                  Programs
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-green-500">
                  Events
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

              <a
                href={ABOUT_ADORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                About Adore
              </a>

              <NavLink
                to="/adore-fellowship"
                onClick={() => setMenuOpen(false)}
              >
                ADORE Fellowship
              </NavLink>

              {location.pathname === "/" && (
                <>
                  <a href="#programs" onClick={() => setMenuOpen(false)}>
                    Programs
                  </a>
                  <a href="#events" onClick={() => setMenuOpen(false)}>
                    Events
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
