const readline = require('readline-sync'); 

const num = readline.questionInt('Digite um numero: '); 

let result = num % 2 === 0 ? "par" : "impar"; 

console.log(`Seu numero é ${result}`);
