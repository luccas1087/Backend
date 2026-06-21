const alunos = [
  { nome: 'Lucas', nota: 8.5 },
  { nome: 'Diego', nota: 6.2 },
  { nome: 'Duarda', nota: 7.0 },
  { nome: 'Luquinhas', nota: 4.8 },
  { nome: 'Olivia', nota: 9.1 },
];

const boletim = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'
  };
});
console.log(boletim);

const aprovados = boletim.filter(aluno => aluno.situacao === 'Aprovado');
console.log(`Aprovados: ${aprovados.length}`);

const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
const media = somaNotas / alunos.length;
console.log(`Média da turma: ${media.toFixed(2)}`);