function contLetra(tex, letra) {
  let ctt = 0;

  for (let i = 0; i < tex.length; i++) {
    if (tex[i] === letra) {
      ctt++;
    }
  }

  return ctt;
}
function contarLetra(texto, letra) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }

  return contador;
}

console.log(contLetra('alicate abacate', 'a')); // esperado: 3
console.log(contLetra('mississippi', 's')); // esperado: 4