// components/AlunosList.tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "./Card";
import { AlunoProps } from "@/service/ServiceAlunos";

interface AlunosListProps {
  alunos: AlunoProps[];
}

export default function AlunosList({ alunos }: AlunosListProps) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    if (!confirm("Deseja realmente excluir este aluno?")) return;
    const res = await fetch(`/api/alunos/${id}`, { method: "DELETE" });
    if (res.ok) {
      // No App Router, router.refresh() recarrega dados do Server Component
      router.refresh();
    } else {
      alert("Erro ao excluir aluno");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Lista de Alunos</h1>
        <Link href="/alunos/novo">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Adicionar Novo Aluno
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {alunos.map((aluno) => (
          <Card
            key={aluno.id}
            title={aluno.nome}
            content={
              <>
                <p>Idade: {aluno.idade}</p>
                <p>Turma ID: {aluno.turma_id}</p>
                <p>1º Semestre: {aluno.nota_primeiro_semestre}</p>
                <p>2º Semestre: {aluno.nota_segundo_semestre}</p>
                <p>Média: {aluno.media_final}</p>
              </>
            }
            actions={
              <div className="flex justify-center space-x-2">
                <Link href={`/alunos/editar/${aluno.id}`}>
                  <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(aluno.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
