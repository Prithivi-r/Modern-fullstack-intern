import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-indigo-400">
        MyPortfolio
      </Link>
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-indigo-400 transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
