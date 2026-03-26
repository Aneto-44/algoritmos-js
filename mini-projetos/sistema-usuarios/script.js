let usuarios = [];

const lista = document.getElementById("lista");

let editandoId = null;

async function carregarUsuarios() {
  const resposta = await fetch("http://localhost:3000/usuarios");
  const dados = await resposta.json();

  usuarios = dados;
  mostrarUsuarios();
}

function mostrarUsuarios(listaUsuarios = usuarios) {
  lista.innerHTML = "";

  for (let i = 0; i < listaUsuarios.length; i++) {
    const usuario = listaUsuarios[i];

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${usuario.nome} - ${usuario.idade} anos`;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = async function () {
      const confirmar = confirm("Tem certeza que deseja remover este usuário?");

      if (!confirmar) return;

      await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
        method: "DELETE",
      });

      carregarUsuarios();
    };

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = function () {
      editarUsuario(usuario.id);
    };

    const divAcoes = document.createElement("div");
    divAcoes.className = "acoes";

    divAcoes.appendChild(botaoEditar);
    divAcoes.appendChild(botaoRemover);

    li.appendChild(span);
    li.appendChild(divAcoes);

    lista.appendChild(li);
  }
}

function editarUsuario(id) {
  const usuario = usuarios.find((u) => u.id === id);

  document.getElementById("nome").value = usuario.nome;
  document.getElementById("idade").value = usuario.idade;

  editandoId = id;
}

async function adicionarUsuario() {
  const nome = document.getElementById("nome").value;
  const idade = Number(document.getElementById("idade").value);

  if (!nome || !idade) {
    alert("Preencha corretamente");
    return;
  }

  if (editandoId !== null) {
    await fetch(`http://localhost:3000/usuarios/${editandoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, idade }),
    });

    editandoId = null;
  } else {
    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, idade }),
    });
  }

  carregarUsuarios();

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}

function filtrar() {
  const valor = document.getElementById("busca").value.toLowerCase();

  const filtrados = usuarios.filter((u) =>
    u.nome.toLowerCase().includes(valor),
  );

  mostrarUsuarios(filtrados);
}

function ordenar() {
  const ordenados = [...usuarios].sort((a, b) => a.idade - b.idade);
  mostrarUsuarios(ordenados);
}

function mostrarMaisVelho() {
  if (usuarios.length === 0) return;

  const maisVelho = usuarios.reduce((maior, atual) =>
    atual.idade > maior.idade ? atual : maior,
  );

  mostrarUsuarios([maisVelho]);
}

function mostrarMaisNovo() {
  if (usuarios.length === 0) return;

  const maisNovo = usuarios.reduce((menor, atual) =>
    atual.idade < menor.idade ? atual : menor,
  );

  mostrarUsuarios([maisNovo]);
}

function lerUsuarios() {
  const dados = fs.readFileSync("usuarios.json");
  return JSON.parse(dados);
}

function salvarUsuarios(dados) {
  fs.writeFileSync("usuarios.json", JSON.stringify(dados, null, 2));
}

carregarUsuarios();
