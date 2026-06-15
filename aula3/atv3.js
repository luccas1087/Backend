const produtos = [
    { id: 1, nome: "ram SODIMM ddr4 4gb ram", preco: 120.50 },
    { id: 2, nome: "ram SODIMM ddr4 16gb ram", preco: 300.00 },
    { id: 3, nome: "monitor curvo 32 polegadas", preco: 8900.90 },
    { id: 4, nome: "pc gamer completo", preco: 15000.50 }
];

const produtoEncontrado = produtos.find(p => p.id === 3);
console.log(`Produto encontrado: ${produtoEncontrado.nome}`);

const produtosCaros = produtos.filter(p => p.preco > 50);
console.log(produtosCaros);