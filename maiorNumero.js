const numeros = [4, 9, 2, 15, 6];

function maiorNumero(lista) {
  if (lista.length === 0) {
    return null;
  }

  let maior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    const numero = lista[i];

    if (numero > maior) {
      maior = numero;
    }
  }

  return maior;
}

const resultado = maiorNumero(numeros);
console.log("O maior número é:", resultado);
