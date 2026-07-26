"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const featuredCertifications = [
  {
    title: "Splunk Core Certified User",
    issuer: "Splunk",
    date: "2026",
    image: "/images/certifications/splunk.png",
    link: "#",
    skills: ["SIEM", "SPL", "Log Analysis", "Monitoring"],
  },
  {
    title: "TryHackMe – Cybersecurity Training",
    issuer: "TryHackMe",
    date: "Apr 2026",
    image: "/images/certifications/tryhackme.png",
    link: "https://tryhackme.com/p/rs9012854",
    skills: ["Network Security", "SOC", "Linux", "Threat Detection"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jul 2025",
    image: "/images/certifications/cisco.png",
    link: "https://www.credly.com/earner/earned/badge/1bf79ff4-3c66-48c7-ba67-7afc072e39ae",
    skills: ["Networking", "Security", "CIA Triad"],
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "Dec 2024",
    image: "/images/certifications/ec-council.png",
    link: "https://www.coursera.org/account/accomplishments/verify/ZW2O6KXWDXVV",
    skills: ["Ethical Hacking", "Reconnaissance", "Vulnerability Assessment"],
  },
  {
    title: "Cyber Incident Response",
    issuer: "Coursera",
    date: "Apr 2024",
    image: "/images/certifications/coursera.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZCM6CVHDMKHE",
    skills: ["Incident Response", "Malware", "Digital Forensics"],
  },
];

const additionalCertifications = [
  {
    title: "Unity and C# Basics",
    issuer: "Coursera",
    image: "/images/certifications/coursera.png",
  },
  {
    title: "Game Design & Development: 3D Shooter",
    issuer: "Coursera",
    image: "/images/certifications/coursera.png",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    image: "/images/certifications/coursera.png",
  },
  {
    title: "Static Routing Configuration Using Packet Tracer",
    issuer: "Coursera",
    image: "/images/certifications/coursera.png",
  },
  {
    title: "Database Management System",
    issuer: "Udemy",
    image: "/images/certifications/udemy.png",
  },
  {
    title: "Basics of C++ with DSA",
    issuer: "Coding Ninjas",
    image: "/images/certifications/codingninjas.png",
  },
];

export default function Certifications() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="certifications"
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
          My <span className="text-blue-400">Certifications</span>
        </motion.h2>

        <h3 className="text-2xl font-semibold text-blue-400 mb-8">
          Featured Cybersecurity Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredCertifications.map((cert, index) => (

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
              className="bg-[#0f172a] rounded-2xl border border-blue-500/20 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 p-6"
            >

              <div className="flex items-center gap-4 mb-6">

                <Image
                  src={cert.image}
                  alt={cert.issuer}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />

                <div>
                  <h4 className="font-bold text-lg">
                    {cert.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {cert.issuer}
                  </p>

                  <p className="text-blue-400 text-sm">
                    {cert.date}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-2 mb-6">

                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>

            </motion.div>

          ))}

        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            {showMore ? (
              <>
                Show Less
                <FaChevronUp />
              </>
            ) : (
              <>
                Show More Certifications
                <FaChevronDown />
              </>
            )}
          </button>
        </motion.div>

        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >

            <h3 className="text-2xl font-semibold text-blue-400 mb-8">
              Additional Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {additionalCertifications.map((cert, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
                >

                  <div className="flex items-center gap-4">

                    <Image
                      src={cert.image}
                      alt={cert.issuer}
                      width={55}
                      height={55}
                      className="rounded-lg"
                    />

                    <div>

                      <h4 className="font-semibold text-lg">
                        {cert.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {cert.issuer}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            I continuously expand my cybersecurity knowledge through hands-on
            labs, industry certifications, and practical projects. My learning
            focuses on SOC operations, SIEM platforms, incident response,
            ethical hacking, networking, and defensive security.
          </p>

        </motion.div>

      </div>
    </section>
  );
}