const input = require("readline-sync");

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }

    return a / b;
}

let num1 = input.questionFloat("Digite o primeiro numero: ");
let num2 = input.questionFloat("Digite o segundo numero: ");

console.log("Resultado da soma: " + soma(num1, num2));
console.log("Resultado da subtracao: " + subtracao(num1, num2));
console.log("Resultado da multiplicacao: " + multiplicacao(num1, num2));
console.log("Resultado da divisao: " + divisao(num1, num2));