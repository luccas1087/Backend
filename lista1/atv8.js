const readlineSync = require('readline-sync');

const tam = Number(readlineSync.question('Digite o tamanho do tabuleiro: '));

let tabuleiro = '';

for (let linha = 0; linha < tam; linha++) {
  for (let coluna = 0; coluna < tam; coluna++) {
    
    if ((linha + coluna) % 2 === 0) {
      tabuleiro += '#'; 
    } else {
      tabuleiro += '@'; 
    }

  }
  tabuleiro += '\n';
}

console.log(tabuleiro);