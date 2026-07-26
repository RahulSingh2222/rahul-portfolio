import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-10">

          <div className="space-y-6">

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaEnvelope className="text-2xl" />
              <span>rs9012854@gmail.com</span>
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaPhoneAlt className="text-2xl" />
              +91 7533912134
            </a>

            <a
              href="https://github.com/RahulSingh2222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaGithub className="text-2xl" />
              <span>github.com/RahulSingh2222</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rahulsingh2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" />
              <span>linkedin.com/in/rahulsingh2002</span>
            </a>

            <a
              href="https://tryhackme.com/p/rs9012854"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <SiTryhackme className="text-2xl" />
              <span>tryhackme.com/p/rs9012854</span>
            </a>

            <p className="text-gray-300">
              📍 Uttarakhand, India
            </p>

          </div>

          <div className="mt-10">
            <a
              href="/resume/Rahul_Singh_Resume.pdf"
              download
              className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition"
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}