import React from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiRender,
  SiSwagger,
  SiMui,
  SiChakraui,
  SiGithub,
  SiGit,
  SiVercel,
  SiPwa,
  SiCloudinary,
} from 'react-icons/si';


export default function Skills({ dark }) { 
    const frontend = [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    ];

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#539E43]" /> },
    { name: "Express", icon: <SiExpress className="text-black" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
    { name: "API Docs", icon: <SiSwagger className="text-[#85EA2D]" /> }, 
  ];
  const reactlibs = [
    { name: "Material UI", icon: <SiMui className="text-[#007FFF]" /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-[#319795]" /> },
  ];
  const tools = [
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "PWA", icon: <SiPwa className="text-[#5A0FC8]" /> }, 
    { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5]" /> },
  ];
  const iconClass = "text-2xl";

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="mt-2 text-2xl text-black-400 dark:text-gray-400">
            Frontend → Backend → React Libraries → Dev Tools
          </p>
        </div>
        <div className="space-y-8 ">
          {[
            { title: "Frontend Development", data: frontend },
            { title: "Backend Development", data: backend },
            { title: "React UI Libraries", data: reactlibs },
            { title: "Development Tools & Others", data: tools },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="flex items-center gap-2 mb-4 text-2xl font-semibold">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {section.data.map((item) => (
                  <div
                    key={item.name}
                    className={`flex flex-col items-center gap-1 p-2 rounded-md ${
                      dark
                        ? "bg-white/5"
                        : "bg-gray-200 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <div className={iconClass}>{item.icon}</div>
                    <div className="text-base font-semibold text-black-200 dark:text-gray-300">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
