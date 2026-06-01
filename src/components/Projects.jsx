import { motion } from "framer-motion";

const projects = [
  {
    title: "Notification System",

    description:
      "Full-stack job and interview tracking platform with authentication, interview pipeline management, notes, and a reminder-ready notification system. Built to help users organize applications, track interviews, and manage follow-ups efficiently.",

    tech:
      "React.js • Node.js • Express.js • MongoDB • REST APIs • Redis • BullMQ",

    github:
      "https://github.com/Yashmusk/Notification-System",
  },

  {
    title: "Collabify",

    description:
      "A real-time collaboration platform where people from different professions can connect, collaborate, communicate, share ideas, and work together in one space. Built to encourage teamwork and knowledge sharing across domains.",

    tech:
      "React.js • Node.js • Express.js • MongoDB • Real-time Communication",

    github:
      "https://github.com/Yashmusk/Collabify",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-lg mb-3">
            Projects
          </p>

          <h2 className="text-4xl font-bold">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-4">
            Some products and platforms I’ve built recently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 text-sm mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;