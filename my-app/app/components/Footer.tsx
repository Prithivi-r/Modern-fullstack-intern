const socials = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="flex gap-4">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
