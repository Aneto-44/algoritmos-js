const numeros = [1, 2, 3, 4];

function somaArray(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  return soma;
}

const resultado = somaArray(numeros);
console.log("Soma:", resultado);
