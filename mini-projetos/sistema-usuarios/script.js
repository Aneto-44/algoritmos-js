let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  { nome: "Ana", idade: 19 },
  { nome: "Carlos", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Marina", idade: 30 },
];

const lista = document.getElementById("lista");

function mostrarUsuarios(listaUsuarios) {
  lista.innerHTML = "";

  for (let i = 0; i < listaUsuarios.length; i++) {
    const li = document.createElement("li");

    li.innerHTML = `
  <span>${listaUsuarios[i].nome} - ${listaUsuarios[i].idade} anos</span>
  <div class="acoes">
    <button onclick="removerUsuario(${i})">Remover</button>
    <button onclick="editarUsuario(${i})">Editar</button>
  </div>
  `;
  }
}

function removerUsuario(index) {
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios(usuarios);
}

function filtrar() {
  const valor = document.getElementById("busca").value.toLowerCase();

  const filtrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(valor),
  );

  mostrarUsuarios(filtrados);
}

function ordenar() {
  const ordenados = [...usuarios].sort((a, b) => a.idade - b.idade);
  mostrarUsuarios(ordenados);
}

function mostrarMaisVelho() {
  const maisVelho = usuarios.reduce((maior, atual) => {
    return atual.idade > maior.idade ? atual : maior;
  });

  mostrarUsuarios([maisVelho]);
}

function mostrarMaisNovo() {
  const maisNovo = usuarios.reduce((menor, atual) => {
    return atual.idade < menor.idade ? atual : menor;
  });

  mostrarUsuarios([maisNovo]);
}

function adicionarUsuario() {
  const nome = document.getElementById("nome").value;
  const idade = Number(document.getElementById("idade").value);

  if (!nome || !idade) {
    alert("Preencha corretamente");
    return;
  }

  if (indexEditando !== null) {
    usuarios[indexEditando] = { nome, idade };
    indexEditando = null;
  } else {
    usuarios.push({ nome, idade });
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mostrarUsuarios(usuarios);

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}

let indexEditando = null;

function editarUsuario(index) {
  const usuario = usuarios[index];

  document.getElementById("nome").value = usuario.nome;
  document.getElementById("idade").value = usuario.idade;

  indexEditando = index;
}

// mostra todos ao carregar
mostrarUsuarios(usuarios);
