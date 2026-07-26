export default function Certifications() {
  const certificates = [
    {
      title: "TryHackMe",
      issuer: "TryHackMe",
      year: "2026",
    },
    {
      title: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      year: "2024",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025",
    },
    {
      title: "Cyber Incident Response",
      issuer: "Coursera",
      year: "2024",
    },
    {
      title: "Unity & C# Basics",
      issuer: "Meta",
      year: "2024",
    },
  ];

  return (
    <section id="certifications" className="scroll-mt-24 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-blue-400">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-bold text-blue-400">
                {cert.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {cert.issuer}
              </p>

              <p className="mt-2 text-gray-400">
                {cert.year}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}