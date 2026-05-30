const projects = [
  {
    title: "E-Commerce App",
    description: "A full-stack shopping platform with cart, auth, and payments.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: "https://github.com",
  },
  {
    title: "Task Manager",
    description: "A drag-and-drop task board with real-time updates.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — built with Next.js App Router.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ title, description, tech, link }) => (
          <div key={title} className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:ring-2 hover:ring-indigo-500 transition">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm flex-1">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="bg-gray-700 text-indigo-300 text-xs px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
