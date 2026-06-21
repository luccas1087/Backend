const produtos = [
  { id: 1, nome: 'Mouse', preco: 50 },
  { id: 2, nome: 'Teclado', preco: 120 },
  { id: 3, nome: 'Monitor', preco: 800 },
  { id: 4, nome: 'Fone de ouvido', preco: 90 },
  { id: 5, nome: 'Webcam', preco: 150 },
];

const produto3 = produtos.find(produto => produto.id === 3);
console.log(produto3);

const caros = produtos.filter(produto => produto.preco > 100);
console.log(caros);

const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

produtos.forEach(produto => {
  console.log(`${produto.nome} - R$ ${produto.preco}`);
});