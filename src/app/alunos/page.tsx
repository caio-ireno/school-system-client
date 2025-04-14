import Card from "@/components/Card";
import { AlunoProps, getAlunos } from "@/service/ServiceAlunos";

export default async function Alunos() {
  const alunos = (await getAlunos()) as AlunoProps[];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Lista de Alunos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {alunos.map((aluno) => (
          <Card
            key={aluno.id}
            title={aluno.nome}
            content={
              <>
                <p>Idade: {aluno.idade}</p>
                <p>Turma ID: {aluno.turma_id}</p>
                <p>Nota do 1º Semestre: {aluno.nota_primeiro_semestre}</p>
                <p>Nota do 2º Semestre: {aluno.nota_segundo_semestre}</p>
                <p>Média Final: {aluno.media_final}</p>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
