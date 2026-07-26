export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          Rahul Singh
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-gray-300 font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-blue-400 transition duration-300"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}