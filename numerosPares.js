const numeros = [1, 2, 3, 4, 5, 6];

function numerosPares(lista) {
  const pares = [];

  for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}
const resultado = numerosPares(numeros);
console.log("Os pares são:", resultado);
