import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-8 md:px-12 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-blue-400 mb-2">👋 Hi, I'm</h2>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Shashwat Rai</h1>

          <p className="text-xl text-gray-300 mb-4 h-10">
            <span className="text-blue-400">
              <Typewriter
                words={[
                  "Frontend Developer | React.js",
                  "MERN Stack Developer",
                  "Building Responsive & Scalable Apps",
                  "Available for Freelance & Full-Time Roles",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Availability Badge */}
          <div className="mb-6">
            <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-400">
              🟢 Available for Work
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-300 hover:scale-105 shadow-md"
            >
              View Projects
            </a>

            <a
              href="/Shashwat-Rai-Frontend.pdf"
              download
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl text-gray-400">
            <a
              href="https://github.com/Shashwat369"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shashwat-rai-a90b951a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatrai369@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-400 transition duration-300 hover:scale-110"
>
  <MdEmail />
</a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/919696516959?text=Hi%20Shashwat,%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
