const numeros = [1, 2, 3, 4, 5, 6];

function numerosImpares(lista) {
  const impares = [];

  for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if (numero % 2 !== 0) {
      impares.push(numero);
    }
  }
  return impares;
}
const resultado = numerosImpares(numeros);
console.log("Os ímpares são:", resultado);
