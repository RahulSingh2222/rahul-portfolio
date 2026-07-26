export default function Footer() {
  return (
    <footer className="border-t border-blue-500/20 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-blue-400">
            Rahul Singh
          </h2>

          <p className="text-gray-400 text-sm">
            Cybersecurity Analyst | SOC Enthusiast
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          © 2026 Rahul Singh. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}