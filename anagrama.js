function anagrama(palavra1, palavra2) {
  if (palavra1.length !== palavra2.length) {
    return false;
  }

  const contadorLetras = {};

  for (let i = 0; i < palavra1.length; i++) {
    const letra = palavra1[i];
    contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
  }

  for (let i = 0; i < palavra2.length; i++) {
    const letra = palavra2[i];

    if (!contadorLetras[letra]) {
      return false;
    }

    contadorLetras[letra]--;
  }

  return true;
}

console.log(anagrama("amor", "roma"));
console.log(anagrama("amor", "carro"));
console.log(anagrama("listen", "silent"));
