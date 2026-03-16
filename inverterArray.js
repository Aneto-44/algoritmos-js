const numeros = [1, 2, 3, 4];

function inverterArray(lista) {
  const invertido = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    invertido.push(lista[i]);
  }
  return invertido;
}

const resultado = inverterArray(numeros);
console.log("Nova ordem:", resultado);
