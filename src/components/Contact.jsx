import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0B0F19]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 mb-3 text-lg">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Together
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            I’m open to full-time opportunities, freelance work,
            collaborations, and exciting product ideas.

            If you’re hiring or looking to build something,
            feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-300">

            <p>
              📧 <a
                href="mailto:agarwalyash541@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                agarwalyash541@gmail.com
              </a>
            </p>

            <p>
              📱 9330405473
            </p>

            <p>
              💻 <a
                href="https://github.com/Yashmusk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                github.com/Yashmusk
              </a>
            </p>

            <p>
              📍 Kolkata, India
            </p>

          </div>
        </motion.div>

        {/* Right */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#111827] p-8 rounded-3xl border border-gray-800"
        >
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1F2937] p-4 rounded-xl outline-none"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1F2937] p-4 rounded-xl outline-none"
            />
          </div>

          <div className="mb-5">
            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#1F2937] p-4 rounded-xl outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-4 rounded-xl"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;