const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const produtos = [
    { id: 1, nome: "HD 1000gb",                      preco: 350.00  },
    { id: 2, nome: "SSD sata 256gb",                  preco: 200.00  },
    { id: 3, nome: "SSD Nvme M.2 1Tb",                preco: 999.99  },
    { id: 4, nome: "Pc empresarial 512gb 16gb DDR4",  preco: 2600.00 },
    { id: 5, nome: "Teclado Tri-Mode Ajazz Ak580 pro",preco: 499.99  },
    { id: 6, nome: "Mouse M900 Mini Pro",             preco: 249.99  },
];

app.get('/sobre', (req, res) => {
    res.json({
        nome: "Lucas Cantelli",
        disciplina: "Back-End",
        ano: "2c Ensino Médio",
    });
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/caros', (req, res) => {
    const caros = produtos.filter(produto => produto.preco > 500);
    res.json(caros);
});

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        message: "Servidor está no ar e funcionado",
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});