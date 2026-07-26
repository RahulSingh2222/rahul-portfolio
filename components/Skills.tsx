export default function Skills() {
  const skillCategories = [
    {
      title: "🛡️ Cybersecurity",
      skills: [
        "SIEM",
        "Splunk",
        "Wazuh",
        "Microsoft Sentinel",
        "Incident Response",
        "MITRE ATT&CK",
        "Nmap",
        "Wireshark",
        "Metasploit",
      ],
    },
    {
      title: "💻 Programming",
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
      title: "🗄️ Databases",
      skills: [
        "SQL",
        "SQLite",
        "MongoDB",
      ],
    },
    {
      title: "⚙️ Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "Vercel",
        "Node.js",
        "React",
        "Next.js",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}