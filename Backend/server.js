import { PrismaClient } from '@prisma/client'; // Importa o Prisma Client
import express from 'express'; // Importa o Express
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // Middleware para JSON

// Rota para criar usuários
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, git, linkedin, gmail } = req.body;

    const novoUsuario = await prisma.user.create({
      data: { nome, git, linkedin, gmail },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.user.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Configuração para produção
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
  });
}

// Porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
