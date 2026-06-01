import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#111827]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Building digital experiences with code.
          </h2>

          <p className="text-gray-400 leading-8">
            I’m a Full Stack Developer passionate about building responsive,
            scalable, and user-friendly web applications.

            I work with React.js, JavaScript, Node.js, Express.js, and MongoDB
            to create complete end-to-end products.

            I enjoy solving Data Structures & Algorithms problems, building
            real-world projects, and constantly learning better ways to write
            clean and efficient code.

            I’m currently looking for opportunities where I can contribute,
            grow, and build impactful software.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[#1F2937] p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Built
            </p>
          </div>

          <div className="bg-[#1F2937] p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              500+
            </h3>
            <p className="text-gray-400 mt-2">
              DSA Problems Solved
            </p>
          </div>

          <div className="bg-[#1F2937] p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              MERN
            </h3>
            <p className="text-gray-400 mt-2">
              Full Stack Development
            </p>
          </div>

          <div className="bg-[#1F2937] p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              Open
            </h3>
            <p className="text-gray-400 mt-2">
              For Freelance Work
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;