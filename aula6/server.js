const express = require('express');
const app = express();
app.use(express.json());

let livros = [
    { id: 1, nome: "Box Senhor dos Anéis",            preco: 149.99 },
    { id: 2, nome: "A hora da estrela",               preco: 19.99  },
    { id: 3, nome: "O exorcista",                     preco: 55.00  },
    { id: 4, nome: "Assassinato no Expresso Oriente", preco: 29.99  },
];

let proximoId = 5;

// GET /livros -> lista todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    res.json(livro);
});

// POST /livros -> cria um novo livro
app.post('/livros', (req, res) => {
    const novoLivro = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    };

    livros.push(novoLivro);
    proximoId++;

    res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    livro.nome = req.body.nome;
    livro.preco = req.body.preco;

    res.json(livro);
});
app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    livros = livros.filter(l => l.id !== id);

    res.json({ mensagem: "Livro removido com sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});