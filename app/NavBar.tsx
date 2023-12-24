import Link from "next/link";

import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "داشبورد", href: "/" },
    { label: "مسائل", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 space-x-reverse border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 space-x-reverse">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
