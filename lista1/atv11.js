const readline = require('readline-sync');

function votar(idade) {
  return idade >= 16;
}

const idade = Number(readline.question('qual a sua idade?'));

if (votar(idade)) {
  console.log('pode votar'); 
} else {
  console.log('nao pode votar');  
}
