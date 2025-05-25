import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        className="bg-gray-800 p-8 rounded-xl shadow-xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <label className="block mb-2 text-sm text-gray-300">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-300">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-300">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
