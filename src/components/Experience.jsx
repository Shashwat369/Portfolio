import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-800 text-white px-6"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-bold mb-20 text-center"
        >
          💼 Professional Experience
        </motion.h2>

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-blue-500/30 md:-translate-x-1/2"></div>

        {/* Timeline Item */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative mb-20 md:w-1/2 md:pr-12"
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-full md:-ml-3 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-800"></div>

          {/* Card */}
          <div className="ml-12 md:ml-0 bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition duration-300">
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Meetn – Video Conferencing Platform
            </h3>

            <p className="text-blue-400 text-sm mb-3">
              Frontend Developer | Whizlancer Infotech Pvt Ltd
              <br className="md:hidden" />
              <span className="text-gray-400 ml-1">
                (Nov 2024 – Dec 2025)
              </span>
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Developed a real-time video conferencing frontend using React,
              WebRTC, and Socket.io. Implemented authentication, meeting flows,
              real-time chat, and responsive UI with optimized performance.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "WebRTC", "Socket.io", "JWT"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;


