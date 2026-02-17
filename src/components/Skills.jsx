import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiExpress,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-purple-400" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL / PostgreSQL", icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-800 text-white px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl font-bold mb-20 text-center"
        >
          🛠 Technical Skills
        </motion.h2>

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-blue-500/30 md:-translate-x-1/2"></div>

        <div className="space-y-20 relative">

          {skillsData.map((section, index) => (
            <div key={index} className="relative">

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-800 md:-translate-x-1/2"></div>

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
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition duration-300">

                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
                    {section.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition"
                      >
                        <span className="text-xl">
                          {skill.icon}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;


