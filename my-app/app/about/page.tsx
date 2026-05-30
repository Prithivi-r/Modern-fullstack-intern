export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-400 text-lg leading-relaxed mb-4">
        I&apos;m a passionate full-stack developer with 3+ years of experience building web applications
        using React, Next.js, Node.js, and TypeScript.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        I enjoy solving complex problems, writing clean code, and continuously learning new technologies.
      </p>
      <div>
        <h3 className="text-xl font-semibold text-indigo-400 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS"].map((skill) => (
            <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
