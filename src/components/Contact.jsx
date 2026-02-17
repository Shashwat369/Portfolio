import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        },
      );
  };

  return (
    <section id="contact" className="relative py-28 bg-slate-900 text-white px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-16"
        >
          🚀 Let’s Build Something Amazing Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm currently open to freelance and full-time opportunities. If
              you have a project, idea, or opportunity — let's talk.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4 hover:text-blue-400 transition">
                <FaEnvelope />
                <a href="mailto:shashwatrai369@gmail.com">
                  shashwatrai369@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 hover:text-green-400 transition">
                <FaWhatsapp />
                <a
                  href="https://wa.me/919696516959"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
