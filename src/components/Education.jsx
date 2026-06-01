import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
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
            Education
          </p>

          <h2 className="text-4xl font-bold">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1F2937] rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 transition duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

            <div>
              <h3 className="text-2xl font-bold">
                Master of Computer Applications (MCA)
              </h3>

              <p className="text-cyan-400 mt-2">
                Computer Applications
              </p>

              <p className="text-gray-400 mt-4 leading-7">
                Currently pursuing MCA with focus on software development,
                full-stack web technologies, data structures & algorithms,
                database management systems, operating systems,
                and scalable application development.
              </p>
            </div>

            <div className="text-gray-400 whitespace-nowrap">
              July 2024 – June 2026
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;