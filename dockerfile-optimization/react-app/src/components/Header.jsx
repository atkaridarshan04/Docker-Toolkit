import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Docker Basics", path: "/docker-basics" },
  { name: "Best Practices", path: "/best-practices" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 text-xl font-bold">
          <RocketLaunchIcon className="w-6 h-6" />
          Docker Pro
        </Link>
        <nav className="flex space-x-4">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm px-3 py-2 rounded-md transition ${
                location.pathname === path
                  ? "bg-cyan-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
