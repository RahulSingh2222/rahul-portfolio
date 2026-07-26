"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
            Rahul <span className="text-blue-400">Singh</span>
          </h1>

          <h2 className="text-2xl text-blue-400 font-semibold h-10 mb-6">

            <TypeAnimation
              sequence={[
                "Cybersecurity Analyst",
                2000,
                "SOC Analyst",
                2000,
                "Blue Team Enthusiast",
                2000,
                "SIEM Monitoring",
                2000,
                "Incident Response",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </h2>

          <p className="text-gray-400 leading-8 max-w-xl">
            Cybersecurity graduate with hands-on experience in SOC operations,
            SIEM monitoring, incident response, log analysis, and network
            security. Skilled in Splunk, Wazuh, Microsoft Sentinel, Python,
            SQL, and web development. Passionate about protecting systems,
            investigating security events, and continuously improving through
            real-world projects and TryHackMe labs.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume/Rahul_Singh_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="/resume/Rahul_Singh_Resume.pdf"
              target="_blank"
              className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 transition duration-300"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-xl transition duration-300"
            >
              View Projects
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/RahulSingh2222"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rahulsingh2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://tryhackme.com/p/rs9012854"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 hover:scale-125 transition duration-300"
            >
              <SiTryhackme />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-blue-400">7+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">15+</h3>
              <p className="text-gray-400">Certifications</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">1+</h3>
              <p className="text-gray-400">Year Experience</p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>

            {/* Image */}

            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.6)] hover:scale-105 transition duration-500">

              <Image
                src="/images/profile.jpg"
                alt="Rahul Singh"
                fill
                className="object-cover"
                sizes="320px"
                priority
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}