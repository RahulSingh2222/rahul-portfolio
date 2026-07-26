"use client";

import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCertificate,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: "7+",
      title: "Projects",
    },
    {
      icon: <FaCertificate />,
      number: "10+",
      title: "Certifications",
    },
    {
      icon: <FaShieldAlt />,
      number: "SOC",
      title: "Experience",
    },
    {
      icon: <FaLaptopCode />,
      number: "TryHackMe",
      title: "Labs",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 min-h-[180px] flex flex-col justify-center items-center text-center hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
            >
              <div className="text-4xl text-blue-400 mb-4">
                {item.icon}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 break-words">
                {item.number}
              </h2>

              <p className="text-gray-300 mt-3 text-sm md:text-base font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}