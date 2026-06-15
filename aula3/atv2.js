let produtos = [
  { id: 1, nome: "A Sociedade do Anel", preco: 59.90 },
  { id: 2, nome: "As Duas Torres", preco: 59.90 },
  { id: 3, nome: "O Retorno do Rei", preco: 59.90 },
  { id: 4, nome: "O Silmarillion", preco: 69.90 }
];
console.log("--- Lista de Livros ---");
for (let i = 0; i < produtos.length; i++) {
  console.log(`ID: ${produtos[i].id} | Livro: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco.toFixed(2)}`);
}
produtos.push({ id: 5, nome: "Contos Inacabados", preco: 79.90 });

console.log(`\nNovo tamanho do array: ${produtos.length} produtos.`);
