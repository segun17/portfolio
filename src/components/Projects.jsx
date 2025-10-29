import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Projects({ dark }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portifolio-server-3oco.onrender.com/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-2xl text-black-200 dark:text-gray-300">
            Some of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((p) => (
              <div
                key={p.title}
                className={`flex flex-col justify-between p-5 rounded-lg ${
                  dark
                    ? 'bg-white/5'
                    : 'bg-gray-200 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                <div
                  className={`flex items-center justify-center mb-4 rounded h-36 overflow-hidden ${
                    dark ? 'bg-white/5' : 'bg-white/10'
                  }`}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-black-300 dark:text-gray-300">
                      Preview
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <p className="mt-1 text-base text-black-300 dark:text-gray-300">
                    {p.desc}
                  </p>
                  {p.skills && p.skills.length > 0 && (
                    <div className="mt-2">
                      <h5 className="text-sm font-semibold text-black-400 dark:text-gray-400">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {p.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded ${
                              dark ? 'bg-white/10' : 'bg-gray-300'
                            } text-black-300 dark:text-gray-300`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={p.demo}
                    className={`px-3 py-2 text-sm rounded ${
                      dark ? 'bg-white/5' : 'bg-white/10'
                    }`}
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm border rounded border-white/10"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No projects available</p>
          )}
        </div>
      </div>
    </section>
  );
}