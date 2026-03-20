import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 sm:px-8 md:px-12 py-20 md:py-0 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 text-center md:text-left">

        {/* Image Section (First on Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end order-1 md:order-2 mb-12 md:mb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-xl sm:text-2xl text-blue-400 mb-2">
            👋 Hi, I'm
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Shashwat Rai
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-6 min-h-[40px]">
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
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-300 hover:scale-105 shadow-md"
            >
              View Projects
            </a>

            <a
              href="/Shashwat_Rai_Full_Stack_MERN_Developer.pdf"
              download
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-400">
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
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shashwatrai369@gmail.com"
              className="hover:text-red-400 transition duration-300 hover:scale-110"
            >
              <MdEmail />
            </a>

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

      </div>
    </section>
  );
};

export default Hero;


