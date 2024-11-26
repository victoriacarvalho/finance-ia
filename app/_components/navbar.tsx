"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        <div className="hidden sm:flex gap-10">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Transações
          </Link>
        </div>
      </div>

      {/* BOTÃO HAMBURGER PARA TELAS PEQUENAS */}
      <button
        className="sm:hidden p-2 text-muted-foreground"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* MENU LATERAL EM TELAS PEQUENAS */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-16 right-8 bg-white p-4 rounded-md shadow-md`}
      >
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary block py-2"
              : "text-muted-foreground block py-2"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary block py-2"
              : "text-muted-foreground block py-2"
          }
        >
          Transações
        </Link>
      </div>

      {/* DIREITA */}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
