function finalizarCompra(valor, cupom, CalcularFreteCB) {
    
    const cupomValido = /2026/.test(cupom);

    let preco = cupomValido ? valor * 0.9 : valor;

    return CalcularFreteCB(preco);
}

const cliente1 = finalizarCompra(100, "PROMO2026", v => v + 20);
const cliente2 = finalizarCompra(100, "PROMO2025", v => v + 20);

console.log("Valor final para cliente 1: " + cliente1);
console.log("Valor final para cliente 2: " + cliente2);