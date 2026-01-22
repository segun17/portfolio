import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-[60vh] md:min-h-[72vh] bg-gradient-to-br from-violet-700 via-gray-800 to-gray-900">
      <div className="flex flex-col-reverse items-center max-w-6xl gap-8 px-6 py-16 mx-auto md:py-24 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-300">Segun Oladokun</span>
          </h1>
          <p className="max-w-xl mt-4 text-2xl font-semibold text-white/90">
            Full-stack developer creating modern web applications with React, Node.js, and modern tools.
          </p>
          <div className="flex gap-4 mt-6">
            <a  href="/Segun_Oladokun_CV(1).pdf" download="Segun_Oladokun_CV(1).pdf" className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold text-white rounded-md bg-white/10 hover:bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download mr-2 h-5 w-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Download CV
            </a>
           
            <ScrollLink to="projects"  smooth={true} duration={500}  className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold text-white border rounded-md border-white/10 hover:bg-white/5"  > 
              View Projects
            </ScrollLink>

          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <div >
            <img src="/segun.png" alt="Segun Oladokun" className="flex items-center justify-center w-48 h-48 shadow-2xl rounded-2xl bg-white/5 text-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  );
}