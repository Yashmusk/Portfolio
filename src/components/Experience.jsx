import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#111827]"
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
            Experience
          </p>

          <h2 className="text-4xl font-bold">
            Internship & Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1F2937] rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 transition duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

            <div>
              <h3 className="text-2xl font-bold">
                Software Development Engineer Intern
              </h3>

              <p className="text-cyan-400 mt-2">
                SmartVerge Technologies
              </p>
            </div>

           <p className="text-gray-400 mt-4 md:mt-0 whitespace-nowrap">
  Dec 2025 – Present
</p>
          </div>

          <ul className="space-y-4 text-gray-400 leading-7">

            <li>
              • Built scalable REST APIs from scratch for core application features.
            </li>

            <li>
              • Worked across frontend and backend as a full-stack developer using React.js, Node.js, Express.js and databases.
            </li>

            <li>
              • Fixed production bugs, optimized existing codebases, and improved application performance.
            </li>

            <li>
              • Resolved Jira tickets by debugging issues, implementing fixes, and delivering tested solutions.
            </li>

            <li>
              • Followed best development practices including reusable code, clean architecture, code reviews, and maintainability.
            </li>

            <li>
              • Collaborated with team members to develop new features, troubleshoot issues, and ship product updates.
            </li>

          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;