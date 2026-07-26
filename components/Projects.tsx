"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SOC Log Analyzer",
    image: "/images/projects/soc.png",
    description:
      "Python-based SOC log analyzer that parses security logs, detects suspicious activities, and assists in identifying potential security incidents.",
    tech: ["Python", "Cybersecurity", "Log Analysis", "SOC"],
    github: "https://github.com/RahulSingh2222/soc-log-analyzer",
    demo: "",
  },

  {
    title: "FortifyPassword",
    image: "/images/projects/fortify.png",
    description:
      "Password strength checker and secure password generator built using Python to encourage strong password practices.",
    tech: ["Python", "Regex", "Security"],
    github: "https://github.com/RahulSingh2222/FortifyPassword",
    demo: "",
  },

  {
    title: "Steganography Tool",
    image: "/images/projects/steganography.png",
    description:
      "Hide and extract secret messages inside images using Python and image processing techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    github: "https://github.com/RahulSingh2222/SteganographyTool",
    demo: "",
  },

  {
    title: "News Aggregator",
    image: "/images/projects/news.png",
    description:
      "Modern React.js news aggregator that fetches real-time headlines from multiple news sources with search, category filters, and a responsive UI.",
    tech: ["React.js", "REST API", "JavaScript", "CSS"],
    github: "https://github.com/RahulSingh2222/New-Alligorter",
    demo: "",
  },

  {
    title: "Portfolio Website",
    image: "/images/projects/portfolio.png",
    description:
      "Personal cybersecurity portfolio developed using Next.js, TypeScript and Tailwind CSS with modern UI and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/RahulSingh2222/rahul-portfolio",
    demo: "https://rahul-portfolio-olive-zeta.vercel.app",
  },

  {
    title: "Library Management System",
    image: "/images/projects/library.png",
    description:
      "Desktop application for managing books, students and issue records using SQLite.",
    tech: ["Python", "SQLite", "Database"],
    github:
      "https://github.com/RahulSingh2222/library-management-system-project-in-python-using-sqlite",
    demo: "",
  },

  {
    title: "Car Rental Website",
    image: "/images/projects/car-rental.png",
    description:
      "Responsive frontend website for browsing and booking rental cars.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/RahulSingh2222/Car-Rental-Frontend-Website-",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-[#0f172a] rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >

              {project.title === "Portfolio Website" && (
                <div className="absolute z-20 bg-blue-500 text-white text-xs px-3 py-1 rounded-br-xl">
                  Featured
                </div>
              )}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-300"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}