const readline = required('redline-sync')

let num1 = parcefloat(readline.question("Digite o primeiro numero!"))
let num2 = parcefloat(readline.question("Digite o segundo numero!"))

condole.log(`A soma dos numeros é ${num1 + num2}`)
condole.log(`A subtração dos numeros é ${num1 - num2}`)
condole.log(`A multiplicação dos numeros é ${num1 * num2}`)

if(num2 === 0){
    console.log("Não é possível dividir por zero!")
}else{
    console.log(`A divisão dos numeros é ${num1 / num2}`)
}   