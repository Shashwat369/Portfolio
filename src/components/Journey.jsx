import { motion } from "framer-motion";

const journeyData = [
  {
    title: "B.Tech – Electrical & Electronics Engineering",
    subtitle: "Galgotias College of Engineering & Technology | 2019 - 2023",
    description:
      "Graduated with a strong technical foundation, developing analytical problem-solving skills and engineering principles that successfully transitioned into a career in software development.",
  },
  {
    title: "Frontend Engineer",
    subtitle: {
      role: "MERN Stack Specialist",
      company: "Whizlancer Infotech pvt. ltd.",
      duration: "Nov 2023 – Present",
    },
    description:
      "Currently spearheading the development of complex frontend architectures. Successfully engineered high-impact systems like DocsCare (Healthcare) and Hubly (CRM), focusing on performance optimization, state management, and secure API integrations.",
  },
  {
    title: "Full Stack Skill Development",
    subtitle: "Professional Growth",
    description:
      "While working on real-world projects, dedicated intensive months to mastering the MERN ecosystem, JavaScript (ES6+), and modern web architecture to elevate my technical expertise.",
  },
  {
    title: "MERN Stack Certification",
    subtitle: "Cuvette Full-Stack Development Program | Completed 2026",
    description:
      "Advanced and validated expertise by completing a professional training program focused on production-ready applications, advanced React patterns, and scalable backend architecture.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-20 text-center"
        >
          🚀 My Journey
        </motion.h2>

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-blue-500/30 transform -translate-x-1/2 hidden md:block"></div>

        {/* Timeline */}
        <div className="space-y-24 relative">
          {journeyData.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Dot - Hidden on small screens to avoid overlap */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 z-10 hidden md:block"></div>

              {/* Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 text-left" : "md:ml-auto md:pl-12 text-left"
                }`}
              >
                <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                    {item.title}
                  </h3>
                  <div className="mb-4">
                    {typeof item.subtitle === "object" ? (
                      <>
                        <span className="block text-sm font-bold text-blue-300 uppercase tracking-wider">
                          {item.subtitle.role}
                        </span>
                        <span className="block text-sm text-gray-400 font-medium">
                          {item.subtitle.company}
                        </span>
                        <span className="block text-xs text-gray-500 italic mt-1">
                          {item.subtitle.duration}
                        </span>
                      </>
                    ) : (
                      <span className="block text-gray-400 font-medium">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;