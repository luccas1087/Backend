const aluno = {
    idade: 16,
    nome: "Lucas",
    cdd: "Cascavel",
    colegio: "Ceeep",
    curso: "D.S"
};

console.log(`nome: ${aluno.nome}, Idade: ${aluno.idade}, cidade: ${aluno.cdd}, colegio: ${aluno.colegio}, curso: ${aluno.curso}`);

aluno.idade = 17;

console.log(`idade: ${aluno.idade}`);
