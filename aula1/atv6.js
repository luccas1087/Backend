const secreto = 42;
let tentativas = 0;

while (true) {
    let palpite = Number(prompt("Tente adivinhar o número secreto (entre 1 e 100):"));
    tentativas++;
    
    if (palpite === secreto) {
        console.log(`Parabéns! Você acertou o número ${secreto} em ${tentativas} tentativa(s)!`);
        break;
    } else if (palpite < secreto) {
        console.log("O número secreto é MAIOR que o digitado. Tente novamente!");
    } else {
        console.log("O número secreto é MENOR que o digitado. Tente novamente!");
    }
}