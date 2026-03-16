const numeros = [4, 9, 2, 15, 2];

function menorNumero(lista) {
  if (lista.length === 0) {
    return null;
  }

  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    const numero = lista[i];

    if (numero < menor) {
      menor = numero;
    }
  }

  return menor;
}

const resultado = menorNumero(numeros);
console.log("O menor número é:", resultado);
