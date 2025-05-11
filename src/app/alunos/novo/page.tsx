"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createAluno } from "@/service/ServiceAlunos";

export default function NovoAluno() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    data_nascimento: "",
    nota_primeiro_semestre: 0,
    nota_segundo_semestre: 0,
    turma_id: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "nome" || name === "data_nascimento" ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAluno(formData);
      router.push("/alunos");
    } catch (error) {
      console.error("Erro ao criar aluno:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Adicionar Novo Aluno</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Data de Nascimento</label>
          <input
            type="date"
            name="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Nota 1º Semestre</label>
          <input
            type="number"
            step="0.1"
            name="nota_primeiro_semestre"
            value={formData.nota_primeiro_semestre}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Nota 2º Semestre</label>
          <input
            type="number"
            step="0.1"
            name="nota_segundo_semestre"
            value={formData.nota_segundo_semestre}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Turma ID</label>
          <input
            type="number"
            name="turma_id"
            value={formData.turma_id}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
