import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');

  try {
    const response = await axios.post('https://portifolio-server-3oco.onrender.com/api/send-email', formData);
    setStatus(response.data.message);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus(''), 4000);
  } catch (error) {
    setStatus('Failed to send message. Please try again.');
    setTimeout(() => setStatus(''), 4000);
  }
};

  

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-2 text-2xl text-black-400 dark:text-gray-400">
            I'm always interested in new opportunities. Send a message and let's talk.
          </p>
        </div>
        <div
          className={`max-w-md p-6 mx-auto rounded-xl ${
            dark ? 'bg-white/5' : 'bg-gray-200 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md border border-[#555] text-sm h-36 resize-none placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white rounded-md bg-gradient-to-r from-violet-600 to-cyan-400"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes('Failed') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-6 text-2xl">
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
    </section>
  );
}