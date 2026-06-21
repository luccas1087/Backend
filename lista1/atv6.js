const readline = require('readline-sync');

const numero = readline.question(`Digite um número: `);

for (let i = numero; i >= 1; i--){
    console.log(i);
}
console.log(`Fim`);