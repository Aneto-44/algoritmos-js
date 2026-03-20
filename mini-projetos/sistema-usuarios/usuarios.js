const usuarios = [
  { nome: "Ana", idade: 19 },
  { nome: "Carlos", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Marina", idade: 30 },
];

function listarNomes(lista) {
  return lista.map((usuario) => usuario.nome);
}

function filtrarMaiores(lista) {
  return lista.filter((usuario) => usuario.idade >= 18);
}

function filtrarMenores(lista) {
  return lista.filter((usuario) => usuario.idade < 18);
}

function usuariosPorIdadeMinima(lista, idadeMinima) {
  return lista.filter((usuario) => usuario.idade >= idadeMinima);
}

function contarUsuarios(lista) {
  return lista.length;
}

function ordenarPorIdade(lista) {
  return [...lista].sort((a, b) => a.idade - b.idade);
}

function nomesOrdenadosPorIdade(lista) {
  return ordenarPorIdade(lista).map((usuario) => usuario.nome);
}

function usuarioMaisVelho(lista) {
  let maisVelho = lista[0];

  for (let i = 1; i < lista.length; i++) {
    const usuario = lista[i];

    if (usuario.idade > maisVelho.idade) {
      maisVelho = usuario;
    }
  }
  return maisVelho;
}

function mediaIdade(lista) {
  if (lista.length === 0) return 0;

  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    const usuario = lista[i];
    soma += usuario.idade;
  }

  return soma / lista.length;
}

function buscarUsuario(lista, nomeBusca) {
  for (let i = 0; i < lista.length; i++) {
    const usuario = lista[i];

    if (usuario.nome === nomeBusca) {
      return usuario;
    }
  }

  return undefined;
}

function usuarioMaisNovo(lista) {
  if (lista.length === 0) return null;

  return lista.reduce((menor, proximo) => {
    return proximo.idade < menor.idade ? proximo : menor;
  }, lista[0]);
}

console.log(buscarUsuario(usuarios, "Carlos"));
console.log(listarNomes(usuarios));
console.log(filtrarMaiores(usuarios));
console.log(filtrarMenores(usuarios));
console.log("Média de idade:", mediaIdade(usuarios));
console.log("Total de usuarios:", contarUsuarios(usuarios));
console.log(usuarioMaisVelho(usuarios));
console.log(usuariosPorIdadeMinima(usuarios, 21));
console.log(ordenarPorIdade(usuarios));
const maisNovo = usuarioMaisNovo(usuarios);
console.log("Usuário mais novo:", maisNovo);
