export default function Stats() {
  const stats = [
    {
      number: "7+",
      title: "Projects",
    },
    {
      number: "8+",
      title: "Certifications",
    },
    {
      number: "L2",
      title: "Technical Support",
    },
    {
      number: "TryHackMe",
      title: "Hands-on Labs",
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-400">
                {item.number}
              </h2>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}