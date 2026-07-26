"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCode,
  FaDatabase,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
      skills: [
        "SIEM",
        "Splunk",
        "Wazuh",
        "Microsoft Sentinel",
        "Incident Response",
        "MITRE ATT&CK",
        "Metasploit",
      ],
    },

    {
      title: "Networking",
      icon: <FaNetworkWired className="text-3xl text-blue-400" />,
      skills: [
        "TCP/IP",
        "DNS",
        "HTTP/HTTPS",
        "VPN",
        "Nmap",
        "Wireshark",
      ],
    },

    {
      title: "Programming",
      icon: <FaCode className="text-3xl text-blue-400" />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "HTML",
        "CSS",
      ],
    },

    {
      title: "Databases",
      icon: <FaDatabase className="text-3xl text-blue-400" />,
      skills: [
        "SQL",
        "SQLite",
        "MongoDB",
      ],
    },

    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-3xl text-blue-400" />,
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "Node.js",
        "React",
        "Next.js",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
            >

              <div className="flex items-center gap-4 mb-6">

                {category.icon}

                <h3 className="text-2xl font-semibold text-blue-400">
                  {category.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm hover:bg-blue-500 hover:text-white transition duration-300 cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}