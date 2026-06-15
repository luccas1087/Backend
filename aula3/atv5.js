const readline = require('readline-sync');

const produtos = [];

for (let i = 0; i < 3; i++) {
    const nome = readline.question(`Digite o nome do produto ${i + 1}: `);
    
    const preco = Number(readline.question(`Digite o preço do produto ${i + 1}: `));

    produtos.push({ nome: nome, preco: preco });
}

const produtosCaros = produtos.filter(p => p.preco > 20);

console.log("Produtos com preço acima de R$ 20,00:");
console.log(produtosCaros);