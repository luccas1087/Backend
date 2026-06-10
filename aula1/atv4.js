const readline = require('readline-sync')

let numero = Number(prompt("Digite um número para a tabuada "))

console.log("tabuada do " + numero + ":")
console.log("")

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
}