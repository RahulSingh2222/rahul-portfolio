import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const technologies = [
    "Network Monitoring",
    "VPN",
    "CRM",
    "Incident Management",
    "Troubleshooting",
    "Windows",
    "Networking",
    "SLA",
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-blue-500/30 rounded-full hidden md:block"></div>

          {/* Experience Card */}
          <div className="relative md:ml-16 bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">

            {/* Timeline Dot */}
            <div className="hidden md:flex absolute -left-[3.4rem] top-8 w-10 h-10 rounded-full bg-blue-500 items-center justify-center shadow-lg">
              <FaBriefcase className="text-white" />
            </div>

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Technical Support Executive (L2)
                </h3>

                <p className="text-lg text-white mt-2">
                  iEnergizer
                </p>

                <p className="text-gray-400">
                  Client: Tata Tele Business • Noida
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">

                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  Jul 2025 – Oct 2025
                </span>

                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                  Full-Time
                </span>

              </div>

            </div>

            {/* Responsibilities */}

            <div className="mt-8 space-y-5">

              {[
                "Monitored network alarms and service alerts using Network Management Systems (NMS).",
                "Investigated VPN connectivity, authentication, and network-related issues.",
                "Created, tracked, and resolved customer support tickets using CRM tools.",
                "Escalated high-priority incidents while maintaining SLA compliance.",
                "Worked with logs, troubleshooting, and incident management processes aligned with SOC operations.",
              ].map((item, index) => (

                <div key={index} className="flex gap-4">

                  <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />

                  <p className="text-gray-300 leading-7">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            {/* Technologies */}

            <div className="mt-10">

              <h4 className="text-lg font-semibold text-white mb-4">
                Technologies & Skills
              </h4>

              <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}