const listaDeNumeros = [1, 2, 4, 3, 3, 2, 3];

function contarNumero(lista) {
  const contagem = {};

  for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    contagem[numero] = (contagem[numero] || 0) + 1;
  }

  return contagem;
}

const resultadoFinal = contarNumero(listaDeNumeros);

console.log(resultadoFinal);
