const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 FUNÇÕES
function lerUsuarios() {
  const dados = fs.readFileSync("usuarios.json");
  return JSON.parse(dados);
}

function salvarUsuarios(dados) {
  fs.writeFileSync("usuarios.json", JSON.stringify(dados, null, 2));
}

// 🔽 ROTAS

// GET
app.get("/usuarios", (req, res) => {
  const usuarios = lerUsuarios();
  res.json(usuarios);
});

// POST
app.post("/usuarios", (req, res) => {
  const usuarios = lerUsuarios();
  const { nome, idade } = req.body;

  const novoUsuario = {
    id: Date.now(),
    nome,
    idade,
  };

  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);

  res.json(novoUsuario);
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
  let usuarios = lerUsuarios();

  const id = Number(req.params.id);

  usuarios = usuarios.filter((u) => u.id !== id);

  salvarUsuarios(usuarios);

  res.json({ mensagem: "Usuário removido" });
});

// PUT
app.put("/usuarios/:id", (req, res) => {
  let usuarios = lerUsuarios();

  const id = Number(req.params.id);
  const { nome, idade } = req.body;

  usuarios = usuarios.map((u) => (u.id === id ? { ...u, nome, idade } : u));

  salvarUsuarios(usuarios);

  res.json({ mensagem: "Usuário atualizado" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
