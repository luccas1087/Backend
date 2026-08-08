const express = require('express');
const app = express();
app.use(express.json());

let produtos = [
    {id: 1, nome: "Expresso", preco: 7.00},
    {id: 2, nome: "Cappuccino", preco: 9.00},
    {id: 3, nome: "Mocha", preco: 10.00},
    {id: 4, nome: "Latte", preco: 8.00},
    {id: 5, nome: "Macchiato", preco: 9.50},
]

let proximoid =6
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(a => a.id === id);
    if (!produto) {
        return res.status(404).json({ erro: "Produto nao encontrado" });
    }
    res.json(produto);
});

