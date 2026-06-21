const readline = require('readline-sync');

let c = readline.questionFloat("Digite a temperatura a ser converida: ");

let f = c * 1.8 + 32;

console.log(`A temperaura em fahrenheit é ${f}`);