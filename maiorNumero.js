function maiorNumero(lista) {
  let maior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }

  return maior;
}

console.log(maiorNumero([5, 10, 2, 8]));
