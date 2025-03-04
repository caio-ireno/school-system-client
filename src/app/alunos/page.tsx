import { AlunoProps, getAlunos } from "@/service/ServiceAlunos";

export default async function Alunos() {
  const alunos = (await getAlunos()) as AlunoProps[];

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <a href={`/alunos/${aluno.id}`}>{aluno.nome}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
