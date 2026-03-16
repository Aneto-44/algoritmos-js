function menorNumero(lista) {
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  return menor;
}

console.log(menorNumero([5, 10, 2, 8]));
