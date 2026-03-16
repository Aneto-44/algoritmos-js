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

console.log(listarNomes(usuarios));
console.log(filtrarMaiores(usuarios));
console.log(filtrarMenores(usuarios));
