import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-br from-gray-900 to-gray-950">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Master Docker in Production
      </motion.h1>
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Learn the real-world practices of building, optimizing, and deploying Dockerized apps.
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/docker-basics"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition"
        >
          Get Started
        </Link>
        <Link
          to="/best-practices"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition"
        >
          Best Practices
        </Link>
      </motion.div>
    </section>
  );
}
