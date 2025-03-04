import { fetchData } from "./api";

export interface AlunoProps {
  id: number;
  nome: string;
  idade: number;
  data_nascimento: string;
  nota_primeiro_semestre: number;
  nota_segundo_semestre: number;
  media_final: number;
  turma_id: number;
}

export const getAlunos = async () => {
  return await fetchData("alunos");
};
