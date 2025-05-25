import { motion } from "framer-motion";

export default function DockerBasics() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Docker Basics
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "What is Docker?",
            content:
              "Docker is a containerization platform. It lets you package applications and their dependencies into isolated containers that can run anywhere.",
          },
          {
            title: "Why Containers?",
            content:
              "Containers are lightweight, portable, and consistent across environments — making Dev → Test → Prod workflows reliable.",
          },
          {
            title: "Images vs. Containers",
            content:
              "Images are templates; containers are running instances. You build images and run containers from them.",
          },
          {
            title: "Dockerfile 101",
            content:
              "The Dockerfile is a set of instructions to build an image. Example: FROM node:18 → COPY → RUN → CMD.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{card.title}</h3>
            <p className="text-gray-300">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
