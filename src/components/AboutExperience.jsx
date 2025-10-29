import React from 'react';

export default function AboutExperience() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="max-w-2xl mx-auto mt-2 text-2xl font-semibold text-black-400 dark:text-gray-400">
            Full-stack developer with expertise in modern web technologies. I build complete applications from responsive front-ends to scalable backends.
          </p>
        </div>
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 shadow-md rounded-xl bg-white/5 dark:bg-white/10">
            <h3 className="mb-3 text-2xl font-semibold">My Full-Stack Journey</h3>
            <p className="text-xl  text-black-200 dark:text-gray-300">
              I'm a dedicated full-stack developer with expertise in JavaScript, HTML, CSS, and Tailwind CSS. I enjoy transforming designs into interactive, responsive web applications that provide exceptional user experiences across all devices.
            </p>
            <p className="mt-3 text-xl text-black-200 dark:text-gray-300">
              I focus on writing clean, maintainable code and staying up-to-date with the latest full-stack technologies and best practices.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/in/segun-oladokun-2460a8359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium rounded bg-black/5 dark:bg-white/10">LinkedIn</a>
              <a href="https://github.com/segun17" 
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium rounded bg-black/5 dark:bg-white/10">GitHub</a>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl bg-white/5 dark:bg-white/10">
            <h3 className="mb-3 text-xl font-semibold">Work Experience</h3>
            <div className="p-4 text-black rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500">
              <h4 className="font-semibold">Junior Full-Stack Developer</h4>
              <p className="text-base">Babtech Computers | September 2024 — Till date</p>
              <ul className="mt-3 text-base list-disc list-inside">
                <li>Completed training program in full-stack web development</li>
                <li>Contributed to building web applications and features</li>
                <li>Followed best practices & code optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}