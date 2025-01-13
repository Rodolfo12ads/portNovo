import { PrismaClient } from '@prisma/client'; // Importa o Prisma Client
import express from 'express'; // Importa o Express
import cors from "cors";

import path from 'path';
import { fileURLToPath } from 'url';


// Inicializa o Express e o Prisma Client
const app = express();
const prisma = new PrismaClient();
app.use(cors());

// Middleware para permitir o uso de JSON no Express
app.use(express.json());

// Rota para criar usuários no banco de dados
app.post("/usuarios", async (req, res) => {
  try {
    const { nome,  git, linkedin, gmail} = req.body;

    // Insere o usuário no banco de dados
    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        git,
        linkedin,
        gmail
      },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Rota para listar todos os usuários do banco de dados
app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await prisma.user.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Rota fallback para React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// Para rodar, use o comando:
// nodemon server.js --watch (certifique-se de que type: "module" está no package.json)
