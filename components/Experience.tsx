export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                Technical Support Executive (L2)
              </h3>

              <p className="text-gray-300 mt-2">
                iEnergizer • Noida
              </p>
            </div>

            <span className="mt-4 md:mt-0 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
              Jul 2025 – Oct 2025
            </span>

          </div>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc pl-6">

            <li>
              Monitored network alarms and system alerts using Network Management Systems (NMS).
            </li>

            <li>
              Investigated VPN connectivity, authentication, and network-related issues.
            </li>

            <li>
              Created, tracked, and resolved support tickets using CRM tools.
            </li>

            <li>
              Escalated critical incidents to higher support teams while maintaining SLA compliance.
            </li>

            <li>
              Worked with logs, troubleshooting, and incident management processes relevant to SOC environments.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}