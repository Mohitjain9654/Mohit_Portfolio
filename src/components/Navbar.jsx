import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center text-white">
      {/* Left Brand */}
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold text-white hover:text-teal-400 transition duration-300"
      >
        Mohit Jain
      </Link>

      {/* Right Navigation Links */}
      <div className="relative flex gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium">
        {navLinks.map((link) => (
          <div
            key={link.path}
            className="relative group"
            onMouseEnter={() => setHovered(link.path)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              to={link.path}
              className={`transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-teal-400"
                  : "hover:text-teal-300"
              }`}
            >
              {link.label}
            </Link>

            {/* Underline effect on active or hover */}
            {(hovered === link.path || location.pathname === link.path) && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-teal-400"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
