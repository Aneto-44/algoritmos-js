const listaDeNumeros = [10, 20, 30];

function calcularMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }

  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  const media = soma / lista.length;

  return media;
}

const resultado = calcularMedia(listaDeNumeros);
console.log("A média é:", resultado);
