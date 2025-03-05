"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {!menuAberto && (
        <div className="md:hidden flex justify-end w-full bg-gray-900 text-white md:p-0 p-1 shadow-lg">
          <button
            className="md:hidden md:fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
            onClick={() => setMenuAberto(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg
          ${menuAberto ? "block" : "hidden"} md:block`}
      >
        <button
          className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-lg md:hidden"
          onClick={() => setMenuAberto(false)}
        >
          <X size={24} />
        </button>

        <h1 className="text-xl font-bold mb-6">School System</h1>

        <nav className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-blue-400 transition">
            🏠 Home
          </Link>
          <Link href="/alunos" className="hover:text-blue-400 transition">
            🎓 Alunos
          </Link>
          <Link href="/professores" className="hover:text-blue-400 transition">
            👨‍🏫 Professores
          </Link>
          <Link href="/turmas" className="hover:text-blue-400 transition">
            📚 Turmas
          </Link>
        </nav>
      </aside>
    </>
  );
}
