import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { FaSun, FaMoon, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header({ dark, toggleDark }) {
  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-400">
            Segun Oladokun
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold cursor-pointer hover:text-violet-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold cursor-pointer hover:text-violet-300"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold cursor-pointer hover:text-violet-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold cursor-pointer hover:text-violet-300"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold cursor-pointer hover:text-violet-300"
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="p-2 transition rounded-md hover:bg-white/5"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <div className="flex gap-3 text-lg">
            <a
              href="mailto:segunoladokun47@gmail.com"
              aria-label="Email"
              className="hover:text-violet-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/segun-oladokun-2460a8359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="LinkedIn"
              className="hover:text-violet-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/segun17"
              aria-label="GitHub"
              className="hover:text-violet-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}