import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
            F
          </div>
          Fellowship
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <li className="text-gray-700 hover:text-orange-500 transition cursor-pointer">
            Home
          </li>
          <li className="text-gray-700 hover:text-purple-500 transition cursor-pointer">
            About
          </li>
          <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
            Programs
          </li>
          <li className="text-gray-700 hover:text-green-500 transition cursor-pointer">
            Events
          </li>
          <li className="text-gray-700 hover:text-pink-500 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden lg:block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
          Join Us
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-6 py-6 gap-5 text-gray-700 font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Events</li>
            <li>Contact</li>

            <button className="mt-4 bg-orange-500 text-white py-3 rounded-full font-semibold">
              Join Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
