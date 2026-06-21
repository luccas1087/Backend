function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar = (x, y) => x+y;
const subtrair = (x, y) => x-y;
const multiplicar = (x, y) => x*y;

console.log(calcular(6, 7, somar));
console.log(calcular(6, 7, subtrair));
console.log(calcular(6, 7, multiplicar));