import Link from "next/link";

export default function Header() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg">
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
  );
}
