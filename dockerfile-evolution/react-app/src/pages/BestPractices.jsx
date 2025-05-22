import { motion } from "framer-motion";

const practices = [
  {
    title: "Use Multistage Builds",
    tip: "Split your Dockerfile into builder and production stages to reduce final image size and security exposure.",
  },
  {
    title: "Run as a Non-root User",
    tip: "Avoid running processes as root inside the container. Add a dedicated user using `useradd` or similar.",
  },
  {
    title: "Optimize Layers",
    tip: "Group related commands and clean up (`apt-get clean`, `rm -rf /var/lib/apt/lists/*`) to reduce image size.",
  },
  {
    title: ".dockerignore File",
    tip: "Exclude `node_modules`, `.git`, `.env`, etc. to prevent bloating your image and leaking secrets.",
  },
  {
    title: "Use Healthchecks",
    tip: "Add container healthchecks to ensure services are running before accepting traffic.",
  },
  {
    title: "Pin Image Versions",
    tip: "Avoid `latest` in production — pin base images to specific versions to prevent unexpected breakage.",
  },
];

export default function BestPractices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Docker Production Best Practices
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {practices.map((p, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-cyan-300 font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.tip}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
