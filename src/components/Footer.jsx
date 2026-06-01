const Footer = () => {
  return (
    <footer className="bg-[#111827] border-t border-gray-800 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Yash.dev
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Full Stack Developer • Building scalable web experiences
          </p>
        </div>

        {/* Center */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 Yash Agarwal. All rights reserved.
        </p>

        {/* Right */}
      {/* Right */}
<div className="flex gap-6 text-sm text-gray-300">

  <a
    href="https://github.com/Yashmusk"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 transition"
  >
    GitHub
  </a>

  <a
    href="https://leetcode.com/u/Yashcoder24/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 transition"
  >
    LeetCode
  </a>

  <a
    href="agarwalyash541@gmail.com"
    className="hover:text-cyan-400 transition"
  >
    Email
  </a>

</div>
      </div>
    </footer>
  );
};

export default Footer;