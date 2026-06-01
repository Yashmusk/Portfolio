import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 bg-[#0B0F19] overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yash Agarwal
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 max-w-xl mb-8">
            Full Stack Developer with experience building scalable APIs,
            backend systems, and responsive web applications using
            React.js, Node.js, Express.js, MongoDB, Redis, BullMQ and SQL.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-700 px-6 py-3 rounded-xl hover:border-cyan-400 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">

            <pre className="text-sm leading-8 text-gray-300 overflow-x-auto">
{`const developer = {
  name: "Yash Agarwal",
  role: "Full Stack Developer",
  backend: ["Node.js", "Express"],
  frontend: ["React.js"],
  database: ["MongoDB", "SQL"],
  tools: ["Redis", "BullMQ"],
  openToWork: true
};`}
            </pre>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;