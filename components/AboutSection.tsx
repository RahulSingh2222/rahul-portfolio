"use client";

import AnimationWrapper from "./AnimationWrapper";

export default function AboutSection() {
  return (
    <AnimationWrapper>
      <section
        id="about"
        className="scroll-mt-24 py-24 px-8"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Card */}
            <div className="bg-[#0f172a] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500 transition duration-300">

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-8">
                I'm Rahul Singh, a Cybersecurity graduate passionate about
                SOC Operations, Incident Response, Threat Detection,
                Network Security, SIEM Monitoring, and Digital Forensics.
                I enjoy solving cybersecurity challenges and continuously
                improving my skills through hands-on labs, projects, and
                platforms like TryHackMe.
              </p>

            </div>

            {/* Right Card */}
            <div className="bg-[#0f172a] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500 transition duration-300">

              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Quick Information
              </h3>

              <div className="space-y-4 text-gray-300">

                <p><strong>Name:</strong> Rahul Singh</p>

                <p><strong>Degree:</strong> B.Tech in Computer Science</p>

                <p><strong>Specialization:</strong> Cybersecurity</p>

                <p><strong>Location:</strong> Uttarakhand, India</p>

                <p><strong>Experience:</strong> Technical Support Executive (L2)</p>

                <p><strong>Current Goal:</strong> SOC Analyst / Cybersecurity Analyst</p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </AnimationWrapper>
  );
}