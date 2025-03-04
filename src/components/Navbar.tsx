import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-4">
      <Link href="/">
        <button className="hover:underline">Home</button>
      </Link>
      <Link href="/alunos">
        <button className="hover:underline">Alunos</button>
      </Link>
      <Link href="/professores">
        <button className="hover:underline">Professores</button>
      </Link>
      <Link href="/turmas">
        <button className="hover:underline">Turmas</button>
      </Link>
    </nav>
  );
}
