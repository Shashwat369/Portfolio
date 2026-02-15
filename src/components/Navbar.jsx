import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-white">
        
        {/* Logo */}
<h1 className="text-2xl cursor-pointer font-bold tracking-widest text-white">
  S<span className="text-blue-400">R</span>
</h1>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md text-white px-6 py-6 space-y-6 text-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


