const input   = require("readline-sync")

const soma = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida."
    }
    return a / b
}
let a = input.questionFloat("Digite o primeiro numero: ")
let b = input.questionFloat("Digite o segundo numero: ")

console.log("Resultado da soma: " + soma(10, 5))
console.log("Resultado da subtração: " + sub(10, 5))
console.log("Resultado da multiplicação: " + mult(10, 5))
console.log("Resultado da divisão: " + div(10, 5))