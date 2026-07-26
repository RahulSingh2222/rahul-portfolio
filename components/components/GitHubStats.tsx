export default function GitHubStats() {
  return (
    <section
      id="github"
      className="scroll-mt-24 py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          GitHub <span className="text-blue-400">Statistics</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=RahulSingh2222&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-xl w-full"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RahulSingh2222&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="rounded-xl w-full"
          />

        </div>

      </div>
    </section>
  );
}