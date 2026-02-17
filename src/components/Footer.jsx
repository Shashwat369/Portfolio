import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 relative">

      {/* Top Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">
            Shashwat Rai
          </h3>
          <p className="text-sm leading-relaxed">
            Frontend Developer focused on building modern, scalable,
            and user-centric web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <div className="flex gap-5 text-xl">
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
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/919696516959"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 text-center py-6 text-sm">
        © {new Date().getFullYear()} Shashwat Rai. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
