import { PrismaClient } from '@prisma/client'; // Importa o Prisma Client
import express from 'express'; // Importa o Express
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Inicializa o Express e o Prisma Client
const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Permite requisições de outros domínios
app.use(express.json()); // Middleware para suportar JSON no corpo das requisições

// Rota para criar usuários no banco de dados
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, git, linkedin, gmail } = req.body;

    if (!nome || !git || !linkedin || !gmail) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const novoUsuario = await prisma.user.create({
      data: { nome, git, linkedin, gmail },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Rota para listar todos os usuários do banco de dados
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.user.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

// Variáveis para caminho do arquivo e diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir os arquivos estáticos do frontend
const frontendPath = path.resolve(__dirname, '../Frontend/dist');
app.use(express.static(frontendPath));

// Rota fallback para React Router (rota padrão do frontend)
app.get('*', (req, res) => {
  const indexPath = path.join(frontendPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`Erro ao servir o arquivo index.html: ${err.message}`);
      res.status(500).send('Erro interno ao carregar o frontend.');
    }
  });
});

// Inicializa o servidor na porta 3000
const PORT = process.env.PORT || 3000; // Suporte para variáveis de ambiente
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);

  // Testa a conexão com o banco de dados ao iniciar o servidor
  try {
    await prisma.$connect();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
});
