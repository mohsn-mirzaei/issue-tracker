"use client";

import Link from "next/link";
import classNames from "classnames";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "داشبورد", href: "/" },
    { label: "مسائل", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-6 space-x-reverse border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 space-x-reverse">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">خروج</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">ورود</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
