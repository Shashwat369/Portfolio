import { motion } from "framer-motion";
import docscare from "../assets/docscare.png";
import hubly from "../assets/hubly.png";

const projects = [
  {
    title: "DocsCare – Healthcare Management App",
    image: docscare,
    description:
      "Full-stack healthcare management system with JWT authentication, role-based dashboards, and REST API integration.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Axios"],
    live: "https://docs-care-9gw9.vercel.app/",
    github: "https://github.com/Shashwat369/DocsCare",
  },
  {
    title: "Hubly – CRM System",
    image: hubly,
    description:
      "Full-stack CRM with ticket management, filtering, analytics dashboard using Recharts and authentication.",
    tech: ["React", "Express", "MongoDB", "JWT", "Recharts"],
    live: "https://fancy-hummingbird-5ad3e1.netlify.app/",
    github: "https://github.com/Shashwat369/Hubly",
  },
];

const ProjectCards = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false , amount : 0.5 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          🚀 Featured Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false , amount : 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 group"
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
