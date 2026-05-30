import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 gap-6">
      <h1 className="text-5xl font-bold text-white">
        Hi, I&apos;m <span className="text-indigo-400">Alex</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-xl">
        A full-stack developer who loves building clean, fast, and accessible web experiences.
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
