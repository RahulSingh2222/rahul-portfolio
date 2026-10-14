
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    id: "cyclosec",
    title: "Cybersecurity Intern",
    company: "CycloSec India Pvt. Ltd.",
    location: "Noida, India",
    date: "Oct 2026 – Present",
    type: "Internship",
    current: true,
    description:
      "CycloSec is building an autonomous security operations platform that unifies SIEM, SOAR, EDR, NDR, and cloud security.",
    responsibilities: [
      "Learning offensive and defensive security concepts within a unified security operations platform.",
      "Studying security event workflows, including log parsing, enrichment, detection, alert verification, and threat intelligence.",
      "Practicing network scanning and traffic analysis using Nmap, Wireshark, and virtual machine labs.",
      "Reviewing SSH brute-force log data to understand repeated failed logins and MITRE ATT&CK T1110 (Brute Force).",
    ],
    technologies: [
      "SIEM",
      "SOAR",
      "EDR",
      "NDR",
      "Log Analysis",
      "Nmap",
      "Wireshark",
      "MITRE ATT&CK",
      "Threat Intelligence",
    ],
  },
  {
    id: "tryhackme",
    title: "Cybersecurity Practitioner",
    company: "Self-Directed Security Labs · TryHackMe",
    location: "Remote",
    date: "2025 – Present",
    type: "Hands-on Learning",
    current: false,
    description:
      "Independent cybersecurity practice through guided learning paths, hands-on labs, and simulated security scenarios. 23+ completed rooms.",
    responsibilities: [
      "Completed the SOC Level 1 learning path, covering SIEM-based alert triage, Splunk log analysis, SOC monitoring dashboards, phishing investigation, and network traffic analysis in simulated scenarios.",
      "Practiced penetration-testing concepts, including privilege escalation, web exploitation, and network enumeration in authorized lab environments.",
      "Explored blue-team concepts including threat hunting, IDS/IPS, and incident response.",
      "Applied MITRE ATT&CK and OWASP concepts while learning about attack techniques and defensive security practices.",
    ],
    technologies: [
      "TryHackMe",
      "SOC Level 1",
      "Splunk",
      "SIEM",
      "Log Analysis",
      "Network Enumeration",
      "Threat Hunting",
      "Incident Response",
      "MITRE ATT&CK",
      "OWASP",
    ],
    link: "https://tryhackme.com/p/rs9012854",
  },
  {
    id: "ienergizer",
    title: "Technical Support Executive (L2)",
    company: "iEnergizer",
    location: "Client: Tata Tele Business · Noida",
    date: "Jul 2025 – Oct 2025",
    type: "Full-Time",
    current: false,
    description: "",
    responsibilities: [
      "Monitored network alarms and service alerts using Network Management Systems (NMS).",
      "Investigated VPN connectivity, authentication, and network-related issues.",
      "Created, tracked, and resolved customer support tickets using CRM tools.",
      "Escalated high-priority incidents while maintaining SLA compliance.",
      "Worked with logs, troubleshooting, and incident management processes relevant to SOC operations.",
    ],
    technologies: [
      "Network Monitoring",
      "VPN",
      "CRM",
      "Incident Management",
      "Troubleshooting",
      "Windows",
      "Networking",
      "SLA",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience &{" "}
          <span className="text-blue-400">Cybersecurity Practice</span>
        </h2>

        <div className="relative space-y-10">
          {/* Timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500/30 rounded-full hidden md:block" />

          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative md:ml-16 bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 md:p-8 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
            >
              {/* Timeline icon */}
              <div className="hidden md:flex absolute -left-[3.4rem] top-8 w-10 h-10 rounded-full bg-blue-500 items-center justify-center shadow-lg">
                <FaBriefcase className="text-white" />
              </div>

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {experience.title}
                  </h3>

                  <p className="text-lg text-white mt-2">
                    {experience.company}
                  </p>

                  <p className="text-gray-400 mt-1">
                    {experience.location}
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-3">
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    {experience.date}
                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-sm ${
                      experience.current
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-300"
                    }`}
                  >
                    {experience.current
                      ? `${experience.type} · Current`
                      : experience.type}
                  </span>
                </div>
              </div>

              {/* Overview */}
              {experience.description && (
                <p className="mt-6 text-gray-300 leading-7">
                  {experience.description}
                </p>
              )}

              {/* Responsibilities and learning */}
              <div className="mt-8 space-y-5">
                {experience.responsibilities.map((item) => (
                  <div key={item} className="flex gap-4">
                    <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />

                    <p className="text-gray-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technologies & Skills
                </h4>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm break-words hover:bg-blue-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* TryHackMe profile link */}
              {experience.link && (
                <div className="mt-8">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition duration-300"
                  >
                    View TryHackMe Profile
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
