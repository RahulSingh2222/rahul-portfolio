"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaEye,
    FaDownload,
    FaBriefcase,
    FaArrowRight,
} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-28 pb-16">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="text-center lg:text-left order-2 lg:order-1">

                    <p className="text-blue-400 uppercase tracking-[4px] md:tracking-[5px] mb-4 text-sm md:text-base">
                        Welcome to my Portfolio
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                        Rahul <span className="text-blue-400">Singh</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl text-blue-400 font-semibold mb-6 min-h-[60px]">

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
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />

                    </h2>

                    <p className="text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
                        Cybersecurity graduate with hands-on experience in SOC operations,
                        SIEM monitoring, incident response, and network security.
                        Skilled in Splunk, Wazuh, Microsoft Sentinel, Python,
                        and threat detection. Passionate about protecting systems,
                        investigating security events, and continuously learning
                        through real-world projects and TryHackMe labs.
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">

                        {/* View Resume */}

                        <a
                            href="/resume/Rahul_Singh_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition font-medium shadow-lg hover:shadow-blue-500/40"
                        >
                            <FaEye />
                            View Resume
                        </a>

                        {/* Download Resume */}

                        <a
                            href="/resume/Rahul_Singh_Resume.pdf"
                            download
                            className="flex items-center justify-center gap-2 border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-xl transition font-medium"
                        >
                            <FaDownload />
                            Download Resume
                        </a>

                        {/* Hire Me */}

                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl transition font-medium"
                        >
                            <FaBriefcase />
                            Hire Me
                        </a>

                        {/* View Projects */}

                        <a
                            href="#projects"
                            className="flex items-center justify-center gap-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-xl transition font-medium"
                        >
                            <FaArrowRight />
                            View Projects
                        </a>

                    </div>

                    {/* Social Icons */}

                    <div className="flex justify-center lg:justify-start gap-6 mt-10 text-3xl">

                        <a
                            href="https://github.com/RahulSingh2222"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition hover:scale-110"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rahulsingh2002/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://tryhackme.com/p/rs9012854"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition hover:scale-110"
                        >
                            <SiTryhackme />
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center order-1 lg:order-2">

                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]">

                        <Image
                            src="/images/profile.jpg"
                            alt="Rahul Singh"
                            fill
                            sizes="(max-width: 768px) 200px, 400px"
                            className="object-cover"
                            priority
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}