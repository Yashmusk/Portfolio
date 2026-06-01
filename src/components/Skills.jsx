import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "BullMQ",
  "SQL",
  "REST APIs",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "DSA",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 mb-3 text-lg">
            My Skills
          </p>

          <h2 className="text-4xl font-bold">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;