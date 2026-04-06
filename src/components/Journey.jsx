import { motion } from "framer-motion";

const journeyData = [
  {
    title: "B.Tech – Electrical & Electronics Engineering",
    subtitle: "Galgotias College of Engineering & Technology | 2023",
    description:
      "Completed Bachelor's degree in Electrical & Electronics Engineering, developing strong analytical and problem-solving foundations.",
  },
  {
    title: "Transition to Web Development",
    subtitle: "Self-driven Career Shift",
    description:
      "Developed strong interest in software development and started learning JavaScript, React, and backend technologies.",
  },
  {
    title: "Full Stack Skill Development",
    subtitle: "MERN Stack Focus",
    description:
      "Built multiple full-stack applications using React, Node.js, Express, and MongoDB. Focused on authentication, APIs, and scalable UI design.",
  },
  {
    title: "Freelance Full Stack Developer",
    subtitle: {
      role: "MERN Stack Developer",
      company: "Independent Clients",
      duration: "Nov 2023 – Present",
    },
    description:
      "Developed end-to-end web applications for local businesses to automate daily workflows, including gym and retail shop automation. Designed REST APIs, implemented secure JWT authentication, and integrated MongoDB to digitize 50+ daily operational records.",
  },
  {
    title: "MERN Stack Certification",
    subtitle: "Cuvette Full-Stack Development Program",
    description:
      "Completed an intensive full-stack development training program focused on React, Node.js, Express, MongoDB, authentication, and production-ready project building.",
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
        <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-blue-500/30 transform -translate-x-1/2"></div>

        {/* Timeline */}
        <div className="space-y-24 relative">
          {journeyData.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

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
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                    {item.title}
                  </h3>
                  <p className="mb-4">
                    {typeof item.subtitle === "object" ? (
                      <>
                        <span className="block text-sm font-semibold text-blue-400">
                          {item.subtitle.role}
                        </span>

                        <span className="block text-sm text-gray-400">
                          {item.subtitle.company}
                        </span>

                        <span className="block text-xs text-gray-500">
                          {item.subtitle.duration}
                        </span>
                      </>
                    ) : (
                      <span className="block text-gray-400">
                        {item.subtitle}
                      </span>
                    )}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
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